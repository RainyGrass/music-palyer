var Uo=Object.defineProperty;var Hi=e=>{throw TypeError(e)};var Fo=(e,t,r)=>t in e?Uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var rr=(e,t,r)=>Fo(e,typeof t!="symbol"?t+"":t,r),Os=(e,t,r)=>t.has(e)||Hi("Cannot "+r);var v=(e,t,r)=>(Os(e,t,"read from private field"),r?r.call(e):t.get(e)),X=(e,t,r)=>t.has(e)?Hi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ie=(e,t,r,n)=>(Os(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),ke=(e,t,r)=>(Os(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Vo=!1;var xi=Array.isArray,qo=Array.prototype.indexOf,Xn=Array.prototype.includes,ms=Array.from,$l=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,kl=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Do=Array.prototype,wi=Object.getPrototypeOf,Di=Object.isExtensible;function pa(e){return typeof e=="function"}const Fr=()=>{};function Wo(e){return e()}function cs(e){for(var t=0;t<e.length;t++)e[t]()}function Sl(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ko(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const pt=2,Zn=4,Ra=8,$i=1<<24,mr=16,ir=32,Sn=64,Zs=128,Xt=512,Ge=1024,lt=2048,lr=4096,bt=8192,Ot=16384,Tn=32768,Bs=1<<25,En=65536,ei=1<<17,Go=1<<18,na=1<<19,El=1<<20,_r=1<<25,Nn=65536,ti=1<<21,Sa=1<<22,Br=1<<23,br=Symbol("$state"),Nl=Symbol("legacy props"),Yo=Symbol(""),Cr=new class extends Error{constructor(){super(...arguments);rr(this,"name","StaleReactionError");rr(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var yl;const ki=!!((yl=globalThis.document)!=null&&yl.contentType)&&globalThis.document.contentType.includes("xml");function Ml(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Jo(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Xo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Bo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ec(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function tc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function rc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function nc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ac(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function sc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ic=1,lc=2,zl=4,oc=8,cc=16,uc=1,fc=2,Pl=4,dc=8,vc=16,pc=1,hc=2,Be=Symbol(),Tl="http://www.w3.org/1999/xhtml",_c="http://www.w3.org/2000/svg",gc="@attach";function mc(){console.warn("https://svelte.dev/e/derived_inert")}function bc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function yc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Al(e){return e===this.v}function Cl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Il(e){return!Cl(e,this.v)}let aa=!1,xc=!1;function wc(){aa=!0}let Se=null;function Bn(e){Se=e}function kr(e,t=!1,r){Se={p:Se,i:!1,c:null,e:null,s:e,x:null,r:Z,l:aa&&!t?{s:null,u:null,$:[]}:null}}function Sr(e){var t=Se,r=t.e;if(r!==null){t.e=null;for(var n of r)to(n)}return t.i=!0,Se=t.p,{}}function Oa(){return!aa||Se!==null&&Se.l===null}let vn=[];function Ll(){var e=vn;vn=[],cs(e)}function Vr(e){if(vn.length===0&&!ba){var t=vn;queueMicrotask(()=>{t===vn&&Ll()})}vn.push(e)}function $c(){for(;vn.length>0;)Ll()}function Rl(e){var t=Z;if(t===null)return ce.f|=Br,e;if((t.f&Tn)===0&&(t.f&Zn)===0)throw e;Xr(e,t)}function Xr(e,t){for(;t!==null;){if((t.f&Zs)!==0){if((t.f&Tn)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const kc=-7169;function Le(e,t){e.f=e.f&kc|t}function Si(e){(e.f&Xt)!==0||e.deps===null?Le(e,Ge):Le(e,lr)}function Ol(e){if(e!==null)for(const t of e)(t.f&pt)===0||(t.f&Nn)===0||(t.f^=Nn,Ol(t.deps))}function jl(e,t,r){(e.f&lt)!==0?t.add(e):(e.f&lr)!==0&&r.add(e),Ol(e.deps),Le(e,Ge)}function Ei(e,t,r){if(e==null)return t(void 0),r&&r(void 0),Fr;const n=U(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const Fn=[];function Sc(e,t){return{subscribe:Oe(e,t).subscribe}}function Oe(e,t=Fr){let r=null;const n=new Set;function a(l){if(Cl(e,l)&&(e=l,r)){const u=!Fn.length;for(const c of n)c[1](),Fn.push(c,e);if(u){for(let c=0;c<Fn.length;c+=2)Fn[c][0](Fn[c+1]);Fn.length=0}}}function i(l){a(l(e))}function s(l,u=Fr){const c=[l,u];return n.add(c),n.size===1&&(r=t(a,i)||Fr),l(e),()=>{n.delete(c),n.size===0&&r&&(r(),r=null)}}return{set:a,update:i,subscribe:s}}function Ec(e,t,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=t.length<2;return Sc(r,(s,l)=>{let u=!1;const c=[];let d=0,g=Fr;const _=()=>{if(d)return;g();const p=t(n?c[0]:c,s,l);i?s(p):g=typeof p=="function"?p:Fr},x=a.map((p,k)=>Ei(p,m=>{c[k]=m,d&=~(1<<k),u&&_()},()=>{d|=1<<k}));return u=!0,_(),function(){cs(x),g(),u=!1}})}function Nc(e){let t;return Ei(e,r=>t=r)(),t}let Ja=!1,ri=Symbol();function ge(e,t,r){const n=r[t]??(r[t]={store:null,source:de(void 0),unsubscribe:Fr});if(n.store!==e&&!(ri in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=Fr;else{var a=!0;n.unsubscribe=Ei(e,i=>{a?n.source.v=i:w(n.source,i)}),a=!1}return e&&ri in r?Nc(e):f(n.source)}function rn(){const e={};function t(){ys(()=>{for(var r in e)e[r].unsubscribe();$l(e,ri,{enumerable:!1,value:!0})})}return[e,t]}function Mc(e){var t=Ja;try{return Ja=!1,[e(),Ja]}finally{Ja=t}}const un=new Set;let D=null,it=null,ni=null,ba=!1,js=!1,Vn=null,es=null;var Wi=0;let zc=1;var Kn,Gn,_n,Lr,vr,Pa,It,Ta,Qr,Rr,pr,Yn,Qn,gn,Ye,ts,Ul,rs,ai,ns,Pc;const hs=class hs{constructor(){X(this,Ye);rr(this,"id",zc++);rr(this,"current",new Map);rr(this,"previous",new Map);X(this,Kn,new Set);X(this,Gn,new Set);X(this,_n,new Set);X(this,Lr,new Map);X(this,vr,new Map);X(this,Pa,null);X(this,It,[]);X(this,Ta,[]);X(this,Qr,new Set);X(this,Rr,new Set);X(this,pr,new Map);X(this,Yn,new Set);rr(this,"is_fork",!1);X(this,Qn,!1);X(this,gn,new Set)}skip_effect(t){v(this,pr).has(t)||v(this,pr).set(t,{d:[],m:[]}),v(this,Yn).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=v(this,pr).get(t);if(n){v(this,pr).delete(t);for(var a of n.d)Le(a,lt),r(a);for(a of n.m)Le(a,lr),r(a)}v(this,Yn).add(t)}capture(t,r,n=!1){t.v!==Be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Br)===0&&(this.current.set(t,[r,n]),it==null||it.set(t,r)),this.is_fork||(t.v=r)}activate(){D=this}deactivate(){D=null,it=null}flush(){try{js=!0,D=this,ke(this,Ye,rs).call(this)}finally{Wi=0,ni=null,Vn=null,es=null,js=!1,D=null,it=null,xn.clear()}}discard(){for(const t of v(this,Gn))t(this);v(this,Gn).clear(),v(this,_n).clear(),un.delete(this)}register_created_effect(t){v(this,Ta).push(t)}increment(t,r){let n=v(this,Lr).get(r)??0;if(v(this,Lr).set(r,n+1),t){let a=v(this,vr).get(r)??0;v(this,vr).set(r,a+1)}}decrement(t,r,n){let a=v(this,Lr).get(r)??0;if(a===1?v(this,Lr).delete(r):v(this,Lr).set(r,a-1),t){let i=v(this,vr).get(r)??0;i===1?v(this,vr).delete(r):v(this,vr).set(r,i-1)}v(this,Qn)||n||(ie(this,Qn,!0),Vr(()=>{ie(this,Qn,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)v(this,Qr).add(n);for(const n of r)v(this,Rr).add(n);t.clear(),r.clear()}oncommit(t){v(this,Kn).add(t)}ondiscard(t){v(this,Gn).add(t)}on_fork_commit(t){v(this,_n).add(t)}run_fork_commit_callbacks(){for(const t of v(this,_n))t(this);v(this,_n).clear()}settled(){return(v(this,Pa)??ie(this,Pa,Sl())).promise}static ensure(){if(D===null){const t=D=new hs;js||(un.add(D),ba||Vr(()=>{D===t&&t.flush()}))}return D}apply(){{it=null;return}}schedule(t){var a;if(ni=t,(a=t.b)!=null&&a.is_pending&&(t.f&(Zn|Ra|$i))!==0&&(t.f&Tn)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Vn!==null&&r===Z&&(ce===null||(ce.f&pt)===0))return;if((n&(Sn|ir))!==0){if((n&Ge)===0)return;r.f^=Ge}}v(this,It).push(r)}};Kn=new WeakMap,Gn=new WeakMap,_n=new WeakMap,Lr=new WeakMap,vr=new WeakMap,Pa=new WeakMap,It=new WeakMap,Ta=new WeakMap,Qr=new WeakMap,Rr=new WeakMap,pr=new WeakMap,Yn=new WeakMap,Qn=new WeakMap,gn=new WeakMap,Ye=new WeakSet,ts=function(){return this.is_fork||v(this,vr).size>0},Ul=function(){for(const n of v(this,gn))for(const a of v(n,vr).keys()){for(var t=!1,r=a;r.parent!==null;){if(v(this,pr).has(r)){t=!0;break}r=r.parent}if(!t)return!0}return!1},rs=function(){var l,u;if(Wi++>1e3&&(un.delete(this),Ac()),!ke(this,Ye,ts).call(this)){for(const c of v(this,Qr))v(this,Rr).delete(c),Le(c,lt),this.schedule(c);for(const c of v(this,Rr))Le(c,lr),this.schedule(c)}const t=v(this,It);ie(this,It,[]),this.apply();var r=Vn=[],n=[],a=es=[];for(const c of t)try{ke(this,Ye,ai).call(this,c,r,n)}catch(d){throw ql(c),d}if(D=null,a.length>0){var i=hs.ensure();for(const c of a)i.schedule(c)}if(Vn=null,es=null,ke(this,Ye,ts).call(this)||ke(this,Ye,Ul).call(this)){ke(this,Ye,ns).call(this,n),ke(this,Ye,ns).call(this,r);for(const[c,d]of v(this,pr))Vl(c,d)}else{v(this,Lr).size===0&&un.delete(this),v(this,Qr).clear(),v(this,Rr).clear();for(const c of v(this,Kn))c(this);v(this,Kn).clear(),Ki(n),Ki(r),(l=v(this,Pa))==null||l.resolve()}var s=D;if(v(this,It).length>0){const c=s??(s=this);v(c,It).push(...v(this,It).filter(d=>!v(c,It).includes(d)))}s!==null&&(un.add(s),ke(u=s,Ye,rs).call(u))},ai=function(t,r,n){t.f^=Ge;for(var a=t.first;a!==null;){var i=a.f,s=(i&(ir|Sn))!==0,l=s&&(i&Ge)!==0,u=l||(i&bt)!==0||v(this,pr).has(a);if(!u&&a.fn!==null){s?a.f^=Ge:(i&Zn)!==0?r.push(a):sa(a)&&((i&mr)!==0&&v(this,Rr).add(a),zn(a));var c=a.first;if(c!==null){a=c;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}},ns=function(t){for(var r=0;r<t.length;r+=1)jl(t[r],v(this,Qr),v(this,Rr))},Pc=function(){var d,g,_;for(const x of un){var t=x.id<this.id,r=[];for(const[p,[k,m]]of this.current){if(x.current.has(p)){var n=x.current.get(p)[0];if(t&&k!==n)x.current.set(p,[k,m]);else continue}r.push(p)}var a=[...x.current.keys()].filter(p=>!this.current.has(p));if(a.length===0)t&&x.discard();else if(r.length>0){if(t)for(const p of v(this,Yn))x.unskip_effect(p,k=>{var m;(k.f&(mr|Sa))!==0?x.schedule(k):ke(m=x,Ye,ns).call(m,[k])});x.activate();var i=new Set,s=new Map;for(var l of r)Fl(l,a,i,s);s=new Map;var u=[...x.current.keys()].filter(p=>this.current.has(p)?this.current.get(p)[0]!==p:!0);for(const p of v(this,Ta))(p.f&(Ot|bt|ei))===0&&Ni(p,u,s)&&((p.f&(Sa|mr))!==0?(Le(p,lt),x.schedule(p)):v(x,Qr).add(p));if(v(x,It).length>0){x.apply();for(var c of v(x,It))ke(d=x,Ye,ai).call(d,c,[],[]);ie(x,It,[])}x.deactivate()}}for(const x of un)v(x,gn).has(this)&&(v(x,gn).delete(this),v(x,gn).size===0&&!ke(g=x,Ye,ts).call(g)&&(x.activate(),ke(_=x,Ye,rs).call(_)))};let Mn=hs;function Tc(e){var t=ba;ba=!0;try{for(var r;;){if($c(),D===null)return r;D.flush()}}finally{ba=t}}function Ac(){try{ec()}catch(e){Xr(e,ni)}}let nr=null;function Ki(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Ot|bt))===0&&sa(n)&&(nr=new Set,zn(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ao(n),(nr==null?void 0:nr.size)>0)){xn.clear();for(const a of nr){if((a.f&(Ot|bt))!==0)continue;const i=[a];let s=a.parent;for(;s!==null;)nr.has(s)&&(nr.delete(s),i.push(s)),s=s.parent;for(let l=i.length-1;l>=0;l--){const u=i[l];(u.f&(Ot|bt))===0&&zn(u)}}nr.clear()}}nr=null}}function Fl(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&pt)!==0?Fl(a,t,r,n):(i&(Sa|mr))!==0&&(i&lt)===0&&Ni(a,t,n)&&(Le(a,lt),Mi(a))}}function Ni(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(Xn.call(t,a))return!0;if((a.f&pt)!==0&&Ni(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function Mi(e){D.schedule(e)}function Vl(e,t){if(!((e.f&ir)!==0&&(e.f&Ge)!==0)){(e.f&lt)!==0?t.d.push(e):(e.f&lr)!==0&&t.m.push(e),Le(e,Ge);for(var r=e.first;r!==null;)Vl(r,t),r=r.next}}function ql(e){Le(e,Ge);for(var t=e.first;t!==null;)ql(t),t=t.next}function Cc(e){let t=0,r=tn(0),n;return()=>{Pi()&&(f(r),Va(()=>(t===0&&(n=U(()=>e(()=>ya(r)))),t+=1,()=>{Vr(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ya(r))})})))}}var Ic=En|na;function Lc(e,t,r,n){new Rc(e,t,r,n)}var Kt,yi,Gt,mn,wt,Yt,gt,Lt,Or,bn,Jr,Jn,Aa,Ca,jr,_s,Re,Oc,jc,Uc,si,as,ss,ii,li;class Rc{constructor(t,r,n,a){X(this,Re);rr(this,"parent");rr(this,"is_pending",!1);rr(this,"transform_error");X(this,Kt);X(this,yi,null);X(this,Gt);X(this,mn);X(this,wt);X(this,Yt,null);X(this,gt,null);X(this,Lt,null);X(this,Or,null);X(this,bn,0);X(this,Jr,0);X(this,Jn,!1);X(this,Aa,new Set);X(this,Ca,new Set);X(this,jr,null);X(this,_s,Cc(()=>(ie(this,jr,tn(v(this,bn))),()=>{ie(this,jr,null)})));var i;ie(this,Kt,t),ie(this,Gt,r),ie(this,mn,s=>{var l=Z;l.b=this,l.f|=Zs,n(s)}),this.parent=Z.b,this.transform_error=a??((i=this.parent)==null?void 0:i.transform_error)??(s=>s),ie(this,wt,xs(()=>{ke(this,Re,si).call(this)},Ic))}defer_effect(t){jl(t,v(this,Aa),v(this,Ca))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!v(this,Gt).pending}update_pending_count(t,r){ke(this,Re,ii).call(this,t,r),ie(this,bn,v(this,bn)+t),!(!v(this,jr)||v(this,Jn))&&(ie(this,Jn,!0),Vr(()=>{ie(this,Jn,!1),v(this,jr)&&ea(v(this,jr),v(this,bn))}))}get_effect_pending(){return v(this,_s).call(this),f(v(this,jr))}error(t){if(!v(this,Gt).onerror&&!v(this,Gt).failed)throw t;D!=null&&D.is_fork?(v(this,Yt)&&D.skip_effect(v(this,Yt)),v(this,gt)&&D.skip_effect(v(this,gt)),v(this,Lt)&&D.skip_effect(v(this,Lt)),D.on_fork_commit(()=>{ke(this,Re,li).call(this,t)})):ke(this,Re,li).call(this,t)}}Kt=new WeakMap,yi=new WeakMap,Gt=new WeakMap,mn=new WeakMap,wt=new WeakMap,Yt=new WeakMap,gt=new WeakMap,Lt=new WeakMap,Or=new WeakMap,bn=new WeakMap,Jr=new WeakMap,Jn=new WeakMap,Aa=new WeakMap,Ca=new WeakMap,jr=new WeakMap,_s=new WeakMap,Re=new WeakSet,Oc=function(){try{ie(this,Yt,kt(()=>v(this,mn).call(this,v(this,Kt))))}catch(t){this.error(t)}},jc=function(t){const r=v(this,Gt).failed;r&&ie(this,Lt,kt(()=>{r(v(this,Kt),()=>t,()=>()=>{})}))},Uc=function(){const t=v(this,Gt).pending;t&&(this.is_pending=!0,ie(this,gt,kt(()=>t(v(this,Kt)))),Vr(()=>{var r=ie(this,Or,document.createDocumentFragment()),n=yr();r.append(n),ie(this,Yt,ke(this,Re,ss).call(this,()=>kt(()=>v(this,mn).call(this,n)))),v(this,Jr)===0&&(v(this,Kt).before(r),ie(this,Or,null),wn(v(this,gt),()=>{ie(this,gt,null)}),ke(this,Re,as).call(this,D))}))},si=function(){try{if(this.is_pending=this.has_pending_snippet(),ie(this,Jr,0),ie(this,bn,0),ie(this,Yt,kt(()=>{v(this,mn).call(this,v(this,Kt))})),v(this,Jr)>0){var t=ie(this,Or,document.createDocumentFragment());Li(v(this,Yt),t);const r=v(this,Gt).pending;ie(this,gt,kt(()=>r(v(this,Kt))))}else ke(this,Re,as).call(this,D)}catch(r){this.error(r)}},as=function(t){this.is_pending=!1,t.transfer_effects(v(this,Aa),v(this,Ca))},ss=function(t){var r=Z,n=ce,a=Se;Et(v(this,wt)),Bt(v(this,wt)),Bn(v(this,wt).ctx);try{return Mn.ensure(),t()}catch(i){return Rl(i),null}finally{Et(r),Bt(n),Bn(a)}},ii=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&ke(n=this.parent,Re,ii).call(n,t,r);return}ie(this,Jr,v(this,Jr)+t),v(this,Jr)===0&&(ke(this,Re,as).call(this,r),v(this,gt)&&wn(v(this,gt),()=>{ie(this,gt,null)}),v(this,Or)&&(v(this,Kt).before(v(this,Or)),ie(this,Or,null)))},li=function(t){v(this,Yt)&&(ot(v(this,Yt)),ie(this,Yt,null)),v(this,gt)&&(ot(v(this,gt)),ie(this,gt,null)),v(this,Lt)&&(ot(v(this,Lt)),ie(this,Lt,null));var r=v(this,Gt).onerror;let n=v(this,Gt).failed;var a=!1,i=!1;const s=()=>{if(a){yc();return}a=!0,i&&sc(),v(this,Lt)!==null&&wn(v(this,Lt),()=>{ie(this,Lt,null)}),ke(this,Re,ss).call(this,()=>{ke(this,Re,si).call(this)})},l=u=>{try{i=!0,r==null||r(u,s),i=!1}catch(c){Xr(c,v(this,wt)&&v(this,wt).parent)}n&&ie(this,Lt,ke(this,Re,ss).call(this,()=>{try{return kt(()=>{var c=Z;c.b=this,c.f|=Zs,n(v(this,Kt),()=>u,()=>s)})}catch(c){return Xr(c,v(this,wt).parent),null}}))};Vr(()=>{var u;try{u=this.transform_error(t)}catch(c){Xr(c,v(this,wt)&&v(this,wt).parent);return}u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(l,c=>Xr(c,v(this,wt)&&v(this,wt).parent)):l(u)})};function Hl(e,t,r,n){const a=Oa()?ja:Ua;var i=e.filter(_=>!_.settled);if(r.length===0&&i.length===0){n(t.map(a));return}var s=Z,l=Fc(),u=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(_=>_.promise)):null;function c(_){l();try{n(_)}catch(x){(s.f&Ot)===0&&Xr(x,s)}us()}if(r.length===0){u.then(()=>c(t.map(a)));return}var d=Dl();function g(){Promise.all(r.map(_=>Vc(_))).then(_=>c([...t.map(a),..._])).catch(_=>Xr(_,s)).finally(()=>d())}u?u.then(()=>{l(),g(),us()}):g()}function Fc(){var e=Z,t=ce,r=Se,n=D;return function(i=!0){Et(e),Bt(t),Bn(r),i&&(e.f&Ot)===0&&(n==null||n.activate(),n==null||n.apply())}}function us(e=!0){Et(null),Bt(null),Bn(null),e&&(D==null||D.deactivate())}function Dl(){var e=Z,t=e.b,r=D,n=t.is_rendered();return t.update_pending_count(1,r),r.increment(n,e),(a=!1)=>{t.update_pending_count(-1,r),r.decrement(n,e,a)}}function ja(e){var t=pt|lt;return Z!==null&&(Z.f|=na),{ctx:Se,deps:null,effects:null,equals:Al,f:t,fn:e,reactions:null,rv:0,v:Be,wv:0,parent:Z,ac:null}}function Vc(e,t,r){let n=Z;n===null&&Qo();var a=void 0,i=tn(Be),s=!ce,l=new Map;return tu(()=>{var x;var u=Z,c=Sl();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject).finally(us)}catch(p){c.reject(p),us()}var d=D;if(s){if((u.f&Tn)!==0)var g=Dl();if(n.b.is_rendered())(x=l.get(d))==null||x.reject(Cr),l.delete(d);else{for(const p of l.values())p.reject(Cr);l.clear()}l.set(d,c)}const _=(p,k=void 0)=>{if(g){var m=k===Cr;g(m)}if(!(k===Cr||(u.f&Ot)!==0)){if(d.activate(),k)i.f|=Br,ea(i,k);else{(i.f&Br)!==0&&(i.f^=Br),ea(i,p);for(const[b,C]of l){if(l.delete(b),b===d)break;C.reject(Cr)}}d.deactivate()}};c.promise.then(_,p=>_(null,p||"unknown"))}),ys(()=>{for(const u of l.values())u.reject(Cr)}),new Promise(u=>{function c(d){function g(){d===a?u(i):c(a)}d.then(g,g)}c(a)})}function qc(e){const t=ja(e);return lo(t),t}function Ua(e){const t=ja(e);return t.equals=Il,t}function Hc(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ot(t[r])}}function zi(e){var t,r=Z,n=e.parent;if(!qr&&n!==null&&(n.f&(Ot|bt))!==0)return mc(),e.v;Et(n);try{e.f&=~Nn,Hc(e),t=fo(e)}finally{Et(r)}return t}function Wl(e){var t=zi(e);if(!e.equals(t)&&(e.wv=co(),(!(D!=null&&D.is_fork)||e.deps===null)&&(D!==null?D.capture(e,t,!0):e.v=t,e.deps===null))){Le(e,Ge);return}qr||(it!==null?(Pi()||D!=null&&D.is_fork)&&it.set(e,t):Si(e))}function Dc(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Cr),n.teardown=Fr,n.ac=null,Ea(n,0),Ci(n))}function Kl(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&zn(t)}let oi=new Set;const xn=new Map;let Gl=!1;function tn(e,t){var r={f:0,v:e,reactions:null,equals:Al,rv:0,wv:0};return r}function Wr(e,t){const r=tn(e);return lo(r),r}function de(e,t=!1,r=!0){var a;const n=tn(e);return t||(n.equals=Il),aa&&r&&Se!==null&&Se.l!==null&&((a=Se.l).s??(a.s=[])).push(n),n}function w(e,t,r=!1){ce!==null&&(!sr||(ce.f&ei)!==0)&&Oa()&&(ce.f&(pt|mr|Sa|ei))!==0&&(Zt===null||!Xn.call(Zt,e))&&ac();let n=r?qn(t):t;return ea(e,n,es)}function ea(e,t,r=null){if(!e.equals(t)){xn.set(e,qr?t:e.v);var n=Mn.ensure();if(n.capture(e,t),(e.f&pt)!==0){const a=e;(e.f&lt)!==0&&zi(a),it===null&&Si(a)}e.wv=co(),Yl(e,lt,r),Oa()&&Z!==null&&(Z.f&Ge)!==0&&(Z.f&(ir|Sn))===0&&(Wt===null?au([e]):Wt.push(e)),!n.is_fork&&oi.size>0&&!Gl&&Wc()}return t}function Wc(){Gl=!1;for(const e of oi)(e.f&Ge)!==0&&Le(e,lr),sa(e)&&zn(e);oi.clear()}function ci(e,t=1){var r=f(e),n=t===1?r++:r--;return w(e,r),n}function ya(e){w(e,e.v+1)}function Yl(e,t,r){var n=e.reactions;if(n!==null)for(var a=Oa(),i=n.length,s=0;s<i;s++){var l=n[s],u=l.f;if(!(!a&&l===Z)){var c=(u&lt)===0;if(c&&Le(l,t),(u&pt)!==0){var d=l;it==null||it.delete(d),(u&Nn)===0&&(u&Xt&&(l.f|=Nn),Yl(d,lr,r))}else if(c){var g=l;(u&mr)!==0&&nr!==null&&nr.add(g),r!==null?r.push(g):Mi(g)}}}}function qn(e){if(typeof e!="object"||e===null||br in e)return e;const t=wi(e);if(t!==Ho&&t!==Do)return e;var r=new Map,n=xi(e),a=Wr(0),i=$n,s=l=>{if($n===i)return l();var u=ce,c=$n;Bt(null),Xi(i);var d=l();return Bt(u),Xi(c),d};return n&&r.set("length",Wr(e.length)),new Proxy(e,{defineProperty(l,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&rc();var d=r.get(u);return d===void 0?s(()=>{var g=Wr(c.value);return r.set(u,g),g}):w(d,c.value,!0),!0},deleteProperty(l,u){var c=r.get(u);if(c===void 0){if(u in l){const d=s(()=>Wr(Be));r.set(u,d),ya(a)}}else w(c,Be),ya(a);return!0},get(l,u,c){var x;if(u===br)return e;var d=r.get(u),g=u in l;if(d===void 0&&(!g||(x=Zr(l,u))!=null&&x.writable)&&(d=s(()=>{var p=qn(g?l[u]:Be),k=Wr(p);return k}),r.set(u,d)),d!==void 0){var _=f(d);return _===Be?void 0:_}return Reflect.get(l,u,c)},getOwnPropertyDescriptor(l,u){var c=Reflect.getOwnPropertyDescriptor(l,u);if(c&&"value"in c){var d=r.get(u);d&&(c.value=f(d))}else if(c===void 0){var g=r.get(u),_=g==null?void 0:g.v;if(g!==void 0&&_!==Be)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return c},has(l,u){var _;if(u===br)return!0;var c=r.get(u),d=c!==void 0&&c.v!==Be||Reflect.has(l,u);if(c!==void 0||Z!==null&&(!d||(_=Zr(l,u))!=null&&_.writable)){c===void 0&&(c=s(()=>{var x=d?qn(l[u]):Be,p=Wr(x);return p}),r.set(u,c));var g=f(c);if(g===Be)return!1}return d},set(l,u,c,d){var T;var g=r.get(u),_=u in l;if(n&&u==="length")for(var x=c;x<g.v;x+=1){var p=r.get(x+"");p!==void 0?w(p,Be):x in l&&(p=s(()=>Wr(Be)),r.set(x+"",p))}if(g===void 0)(!_||(T=Zr(l,u))!=null&&T.writable)&&(g=s(()=>Wr(void 0)),w(g,qn(c)),r.set(u,g));else{_=g.v!==Be;var k=s(()=>qn(c));w(g,k)}var m=Reflect.getOwnPropertyDescriptor(l,u);if(m!=null&&m.set&&m.set.call(d,c),!_){if(n&&typeof u=="string"){var b=r.get("length"),C=Number(u);Number.isInteger(C)&&C>=b.v&&w(b,C+1)}ya(a)}return!0},ownKeys(l){f(a);var u=Reflect.ownKeys(l).filter(g=>{var _=r.get(g);return _===void 0||_.v!==Be});for(var[c,d]of r)d.v!==Be&&!(c in l)&&u.push(c);return u},setPrototypeOf(){nc()}})}function Gi(e){try{if(e!==null&&typeof e=="object"&&br in e)return e[br]}catch{}return e}function Kc(e,t){return Object.is(Gi(e),Gi(t))}var Yi,Ql,Jl,Xl;function Gc(){if(Yi===void 0){Yi=window,Ql=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Jl=Zr(t,"firstChild").get,Xl=Zr(t,"nextSibling").get,Di(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Di(r)&&(r.__t=void 0)}}function yr(e=""){return document.createTextNode(e)}function ta(e){return Jl.call(e)}function Fa(e){return Xl.call(e)}function o(e,t){return ta(e)}function Q(e,t=!1){{var r=ta(e);return r instanceof Comment&&r.data===""?Fa(r):r}}function h(e,t=1,r=!1){let n=e;for(;t--;)n=Fa(n);return n}function Yc(e){e.textContent=""}function Zl(){return!1}function Bl(e,t,r){return document.createElementNS(t??Tl,e,void 0)}function Qc(e,t){if(t){const r=document.body;e.autofocus=!0,Vr(()=>{document.activeElement===r&&e.focus()})}}let Qi=!1;function Jc(){Qi||(Qi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function bs(e){var t=ce,r=Z;Bt(null),Et(null);try{return e()}finally{Bt(t),Et(r)}}function Xc(e,t,r,n=r){e.addEventListener(t,()=>bs(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Jc()}function eo(e){Z===null&&(ce===null&&Bo(),Zo()),qr&&Xo()}function Zc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function or(e,t){var r=Z;r!==null&&(r.f&bt)!==0&&(e|=bt);var n={ctx:Se,deps:null,nodes:null,f:e|lt|Xt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};D==null||D.register_created_effect(n);var a=n;if((e&Zn)!==0)Vn!==null?Vn.push(n):Mn.ensure().schedule(n);else if(t!==null){try{zn(n)}catch(s){throw ot(n),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&na)===0&&(a=a.first,(e&mr)!==0&&(e&En)!==0&&a!==null&&(a.f|=En))}if(a!==null&&(a.parent=r,r!==null&&Zc(a,r),ce!==null&&(ce.f&pt)!==0&&(e&Sn)===0)){var i=ce;(i.effects??(i.effects=[])).push(a)}return n}function Pi(){return ce!==null&&!sr}function ys(e){const t=or(Ra,null);return Le(t,Ge),t.teardown=e,t}function ui(e){eo();var t=Z.f,r=!ce&&(t&ir)!==0&&(t&Tn)===0;if(r){var n=Se;(n.e??(n.e=[])).push(e)}else return to(e)}function to(e){return or(Zn|El,e)}function Bc(e){return eo(),or(Ra|El,e)}function eu(e){Mn.ensure();const t=or(Sn|na,e);return(r={})=>new Promise(n=>{r.outro?wn(t,()=>{ot(t),n(void 0)}):(ot(t),n(void 0))})}function Ti(e){return or(Zn,e)}function fs(e,t){var r=Se,n={effect:null,ran:!1,deps:e};r.l.$.push(n),n.effect=Va(()=>{if(e(),!n.ran){n.ran=!0;var a=Z;try{Et(a.parent),U(t)}finally{Et(a)}}})}function Ai(){var e=Se;Va(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&Ge)!==0&&r.deps!==null&&Le(r,lr),sa(r)&&zn(r),t.ran=!1}})}function tu(e){return or(Sa|na,e)}function Va(e,t=0){return or(Ra|t,e)}function q(e,t=[],r=[],n=[]){Hl(n,t,r,a=>{or(Ra,()=>e(...a.map(f)))})}function xs(e,t=0){var r=or(mr|t,e);return r}function ro(e,t=0){var r=or($i|t,e);return r}function kt(e){return or(ir|na,e)}function no(e){var t=e.teardown;if(t!==null){const r=qr,n=ce;Ji(!0),Bt(null);try{t.call(null)}finally{Ji(r),Bt(n)}}}function Ci(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&bs(()=>{a.abort(Cr)});var n=r.next;(r.f&Sn)!==0?r.parent=null:ot(r,t),r=n}}function ru(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&ir)===0&&ot(t),t=r}}function ot(e,t=!0){var r=!1;(t||(e.f&Go)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(nu(e.nodes.start,e.nodes.end),r=!0),Le(e,Bs),Ci(e,t&&!r),Ea(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)i.stop();no(e),e.f^=Bs,e.f|=Ot;var a=e.parent;a!==null&&a.first!==null&&ao(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function nu(e,t){for(;e!==null;){var r=e===t?null:Fa(e);e.remove(),e=r}}function ao(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function wn(e,t,r=!0){var n=[];so(e,n,!0);var a=()=>{r&&ot(e),t&&t()},i=n.length;if(i>0){var s=()=>--i||a();for(var l of n)l.out(s)}else a()}function so(e,t,r){if((e.f&bt)===0){e.f^=bt;var n=e.nodes&&e.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,s=(a.f&En)!==0||(a.f&ir)!==0&&(e.f&mr)!==0;so(a,t,s?r:!1),a=i}}}function Ii(e){io(e,!0)}function io(e,t){if((e.f&bt)!==0){e.f^=bt,(e.f&Ge)===0&&(Le(e,lt),Mn.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&En)!==0||(r.f&ir)!==0;io(r,a?t:!1),r=n}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function Li(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:Fa(r);t.append(r),r=a}}let is=!1,qr=!1;function Ji(e){qr=e}let ce=null,sr=!1;function Bt(e){ce=e}let Z=null;function Et(e){Z=e}let Zt=null;function lo(e){ce!==null&&(Zt===null?Zt=[e]:Zt.push(e))}let $t=null,Ct=0,Wt=null;function au(e){Wt=e}let oo=1,pn=0,$n=pn;function Xi(e){$n=e}function co(){return++oo}function sa(e){var t=e.f;if((t&lt)!==0)return!0;if(t&pt&&(e.f&=~Nn),(t&lr)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var i=r[a];if(sa(i)&&Wl(i),i.wv>e.wv)return!0}(t&Xt)!==0&&it===null&&Le(e,Ge)}return!1}function uo(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Zt!==null&&Xn.call(Zt,e)))for(var a=0;a<n.length;a++){var i=n[a];(i.f&pt)!==0?uo(i,t,!1):t===i&&(r?Le(i,lt):(i.f&Ge)!==0&&Le(i,lr),Mi(i))}}function fo(e){var k;var t=$t,r=Ct,n=Wt,a=ce,i=Zt,s=Se,l=sr,u=$n,c=e.f;$t=null,Ct=0,Wt=null,ce=(c&(ir|Sn))===0?e:null,Zt=null,Bn(e.ctx),sr=!1,$n=++pn,e.ac!==null&&(bs(()=>{e.ac.abort(Cr)}),e.ac=null);try{e.f|=ti;var d=e.fn,g=d();e.f|=Tn;var _=e.deps,x=D==null?void 0:D.is_fork;if($t!==null){var p;if(x||Ea(e,Ct),_!==null&&Ct>0)for(_.length=Ct+$t.length,p=0;p<$t.length;p++)_[Ct+p]=$t[p];else e.deps=_=$t;if(Pi()&&(e.f&Xt)!==0)for(p=Ct;p<_.length;p++)((k=_[p]).reactions??(k.reactions=[])).push(e)}else!x&&_!==null&&Ct<_.length&&(Ea(e,Ct),_.length=Ct);if(Oa()&&Wt!==null&&!sr&&_!==null&&(e.f&(pt|lr|lt))===0)for(p=0;p<Wt.length;p++)uo(Wt[p],e);if(a!==null&&a!==e){if(pn++,a.deps!==null)for(let m=0;m<r;m+=1)a.deps[m].rv=pn;if(t!==null)for(const m of t)m.rv=pn;Wt!==null&&(n===null?n=Wt:n.push(...Wt))}return(e.f&Br)!==0&&(e.f^=Br),g}catch(m){return Rl(m)}finally{e.f^=ti,$t=t,Ct=r,Wt=n,ce=a,Zt=i,Bn(s),sr=l,$n=u}}function su(e,t){let r=t.reactions;if(r!==null){var n=qo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&pt)!==0&&($t===null||!Xn.call($t,t))){var i=t;(i.f&Xt)!==0&&(i.f^=Xt,i.f&=~Nn),i.v!==Be&&Si(i),Dc(i),Ea(i,0)}}function Ea(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)su(e,r[n])}function zn(e){var t=e.f;if((t&Ot)===0){Le(e,Ge);var r=Z,n=is;Z=e,is=!0;try{(t&(mr|$i))!==0?ru(e):Ci(e),no(e);var a=fo(e);e.teardown=typeof a=="function"?a:null,e.wv=oo;var i;Vo&&xc&&(e.f&lt)!==0&&e.deps}finally{is=n,Z=r}}}async function fi(){await Promise.resolve(),Tc()}function f(e){var t=e.f,r=(t&pt)!==0;if(ce!==null&&!sr){var n=Z!==null&&(Z.f&Ot)!==0;if(!n&&(Zt===null||!Xn.call(Zt,e))){var a=ce.deps;if((ce.f&ti)!==0)e.rv<pn&&(e.rv=pn,$t===null&&a!==null&&a[Ct]===e?Ct++:$t===null?$t=[e]:$t.push(e));else{(ce.deps??(ce.deps=[])).push(e);var i=e.reactions;i===null?e.reactions=[ce]:Xn.call(i,ce)||i.push(ce)}}}if(qr&&xn.has(e))return xn.get(e);if(r){var s=e;if(qr){var l=s.v;return((s.f&Ge)===0&&s.reactions!==null||po(s))&&(l=zi(s)),xn.set(s,l),l}var u=(s.f&Xt)===0&&!sr&&ce!==null&&(is||(ce.f&Xt)!==0),c=(s.f&Tn)===0;sa(s)&&(u&&(s.f|=Xt),Wl(s)),u&&!c&&(Kl(s),vo(s))}if(it!=null&&it.has(e))return it.get(e);if((e.f&Br)!==0)throw e.v;return e.v}function vo(e){if(e.f|=Xt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&pt)!==0&&(t.f&Xt)===0&&(Kl(t),vo(t))}function po(e){if(e.v===Be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(xn.has(t)||(t.f&pt)!==0&&po(t))return!0;return!1}function U(e){var t=sr;try{return sr=!0,e()}finally{sr=t}}function fn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(br in e)di(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&br in r&&di(r)}}}function di(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{di(e[n],t)}catch{}const r=wi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=kl(r);for(let a in n){const i=n[a].get;if(i)try{i.call(e)}catch{}}}}}function iu(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const lu=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ou(e){return lu.includes(e)}const cu={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function uu(e){return e=e.toLowerCase(),cu[e]??e}const fu=["touchstart","touchmove"];function du(e){return fu.includes(e)}const hn=Symbol("events"),ho=new Set,vi=new Set;function vu(e,t,r,n={}){function a(i){if(n.capture||pi.call(t,i),!i.cancelBubble)return bs(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Vr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function R(e,t,r){(t[hn]??(t[hn]={}))[e]=r}function nn(e){for(var t=0;t<e.length;t++)ho.add(e[t]);for(var r of vi)r(e)}let Zi=null;function pi(e){var m,b;var t=this,r=t.ownerDocument,n=e.type,a=((m=e.composedPath)==null?void 0:m.call(e))||[],i=a[0]||e.target;Zi=e;var s=0,l=Zi===e&&e[hn];if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e[hn]=t;return}var c=a.indexOf(t);if(c===-1)return;u<=c&&(s=u)}if(i=a[s]||e.target,i!==t){$l(e,"currentTarget",{configurable:!0,get(){return i||r}});var d=ce,g=Z;Bt(null),Et(null);try{for(var _,x=[];i!==null;){var p=i.assignedSlot||i.parentNode||i.host||null;try{var k=(b=i[hn])==null?void 0:b[n];k!=null&&(!i.disabled||e.target===i)&&k.call(i,e)}catch(C){_?x.push(C):_=C}if(e.cancelBubble||p===t||p===null)break;i=p}if(_){for(let C of x)queueMicrotask(()=>{throw C});throw _}}finally{e[hn]=t,delete e.currentTarget,Bt(d),Et(g)}}}var xl;const Us=((xl=globalThis==null?void 0:globalThis.window)==null?void 0:xl.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function pu(e){return(Us==null?void 0:Us.createHTML(e))??e}function _o(e){var t=Bl("template");return t.innerHTML=pu(e.replaceAll("<!>","<!---->")),t.content}function ra(e,t){var r=Z;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function E(e,t){var r=(t&pc)!==0,n=(t&hc)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=_o(i?e:"<!>"+e),r||(a=ta(a)));var s=n||Ql?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=ta(s),u=s.lastChild;ra(l,u)}else ra(s,s);return s}}function hu(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var s=_o(a),l=ta(s);i=ta(l)}var u=i.cloneNode(!0);return ra(u,u),u}}function _u(e,t){return hu(e,t,"svg")}function xa(e=""){{var t=yr(e+"");return ra(t,t),t}}function re(){var e=document.createDocumentFragment(),t=document.createComment(""),r=yr();return e.append(t,r),ra(t,r),e}function y(e,t){e!==null&&e.before(t)}function L(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function gu(e,t){return mu(e,t)}const Xa=new Map;function mu(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:s=!0,transformError:l}){Gc();var u=void 0,c=eu(()=>{var d=r??t.appendChild(yr());Lc(d,{pending:()=>{}},x=>{kr({});var p=Se;i&&(p.c=i),a&&(n.$$events=a),u=e(x,n)||{},Sr()},l);var g=new Set,_=x=>{for(var p=0;p<x.length;p++){var k=x[p];if(!g.has(k)){g.add(k);var m=du(k);for(const T of[t,document]){var b=Xa.get(T);b===void 0&&(b=new Map,Xa.set(T,b));var C=b.get(k);C===void 0?(T.addEventListener(k,pi,{passive:m}),b.set(k,1)):b.set(k,C+1)}}}};return _(ms(ho)),vi.add(_),()=>{var m;for(var x of g)for(const b of[t,document]){var p=Xa.get(b),k=p.get(x);--k==0?(b.removeEventListener(x,pi),p.delete(x),p.size===0&&Xa.delete(b)):p.set(x,k)}vi.delete(_),d!==r&&((m=d.parentNode)==null||m.removeChild(d))}});return bu.set(u,c),u}let bu=new WeakMap;var ar,hr,Rt,yn,Ia,La,gs;class go{constructor(t,r=!0){rr(this,"anchor");X(this,ar,new Map);X(this,hr,new Map);X(this,Rt,new Map);X(this,yn,new Set);X(this,Ia,!0);X(this,La,t=>{if(v(this,ar).has(t)){var r=v(this,ar).get(t),n=v(this,hr).get(r);if(n)Ii(n),v(this,yn).delete(r);else{var a=v(this,Rt).get(r);a&&(v(this,hr).set(r,a.effect),v(this,Rt).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[i,s]of v(this,ar)){if(v(this,ar).delete(i),i===t)break;const l=v(this,Rt).get(s);l&&(ot(l.effect),v(this,Rt).delete(s))}for(const[i,s]of v(this,hr)){if(i===r||v(this,yn).has(i))continue;const l=()=>{if(Array.from(v(this,ar).values()).includes(i)){var c=document.createDocumentFragment();Li(s,c),c.append(yr()),v(this,Rt).set(i,{effect:s,fragment:c})}else ot(s);v(this,yn).delete(i),v(this,hr).delete(i)};v(this,Ia)||!n?(v(this,yn).add(i),wn(s,l,!1)):l()}}});X(this,gs,t=>{v(this,ar).delete(t);const r=Array.from(v(this,ar).values());for(const[n,a]of v(this,Rt))r.includes(n)||(ot(a.effect),v(this,Rt).delete(n))});this.anchor=t,ie(this,Ia,r)}ensure(t,r){var n=D,a=Zl();if(r&&!v(this,hr).has(t)&&!v(this,Rt).has(t))if(a){var i=document.createDocumentFragment(),s=yr();i.append(s),v(this,Rt).set(t,{effect:kt(()=>r(s)),fragment:i})}else v(this,hr).set(t,kt(()=>r(this.anchor)));if(v(this,ar).set(n,t),a){for(const[l,u]of v(this,hr))l===t?n.unskip_effect(u):n.skip_effect(u);for(const[l,u]of v(this,Rt))l===t?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(v(this,La)),n.ondiscard(v(this,gs))}else v(this,La).call(this,n)}}ar=new WeakMap,hr=new WeakMap,Rt=new WeakMap,yn=new WeakMap,Ia=new WeakMap,La=new WeakMap,gs=new WeakMap;function O(e,t,r=!1){var n=new go(e),a=r?En:0;function i(s,l){n.ensure(s,l)}xs(()=>{var s=!1;t((l,u=0)=>{s=!0,i(u,l)}),s||i(-1,null)},a)}function mo(e,t){return t}function yu(e,t,r){for(var n=[],a=t.length,i,s=t.length,l=0;l<a;l++){let g=t[l];wn(g,()=>{if(i){if(i.pending.delete(g),i.done.add(g),i.pending.size===0){var _=e.outrogroups;hi(e,ms(i.done)),_.delete(i),_.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&r!==null;if(u){var c=r,d=c.parentNode;Yc(d),d.append(c),e.items.clear()}hi(e,t,!u)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function hi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const l of s)n.add(e.items.get(l).e)}for(var a=0;a<t.length;a++){var i=t[a];if(n!=null&&n.has(i)){i.f|=_r;const s=document.createDocumentFragment();Li(i,s)}else ot(t[a],r)}}var Bi;function gr(e,t,r,n,a,i=null){var s=e,l=new Map,u=(t&zl)!==0;if(u){var c=e;s=c.appendChild(yr())}var d=null,g=Ua(()=>{var T=r();return xi(T)?T:T==null?[]:ms(T)}),_,x=new Map,p=!0;function k(T){(C.effect.f&Ot)===0&&(C.pending.delete(T),C.fallback=d,xu(C,_,s,t,n),d!==null&&(_.length===0?(d.f&_r)===0?Ii(d):(d.f^=_r,ma(d,null,s)):wn(d,()=>{d=null})))}function m(T){C.pending.delete(T)}var b=xs(()=>{_=f(g);for(var T=_.length,N=new Set,z=D,H=Zl(),F=0;F<T;F+=1){var P=_[F],J=n(P,F),ue=p?null:l.get(J);ue?(ue.v&&ea(ue.v,P),ue.i&&ea(ue.i,F),H&&z.unskip_effect(ue.e)):(ue=wu(l,p?s:Bi??(Bi=yr()),P,J,F,a,t,r),p||(ue.e.f|=_r),l.set(J,ue)),N.add(J)}if(T===0&&i&&!d&&(p?d=kt(()=>i(s)):(d=kt(()=>i(Bi??(Bi=yr()))),d.f|=_r)),T>N.size&&Jo(),!p)if(x.set(z,N),H){for(const[ze,Ee]of l)N.has(ze)||z.skip_effect(Ee.e);z.oncommit(k),z.ondiscard(m)}else k(z);f(g)}),C={effect:b,items:l,pending:x,outrogroups:null,fallback:d};p=!1}function ha(e){for(;e!==null&&(e.f&ir)===0;)e=e.next;return e}function xu(e,t,r,n,a){var ue,ze,Ee,je,ye,Ne,ht,ct,jt;var i=(n&oc)!==0,s=t.length,l=e.items,u=ha(e.effect.first),c,d=null,g,_=[],x=[],p,k,m,b;if(i)for(b=0;b<s;b+=1)p=t[b],k=a(p,b),m=l.get(k).e,(m.f&_r)===0&&((ze=(ue=m.nodes)==null?void 0:ue.a)==null||ze.measure(),(g??(g=new Set)).add(m));for(b=0;b<s;b+=1){if(p=t[b],k=a(p,b),m=l.get(k).e,e.outrogroups!==null)for(const Ue of e.outrogroups)Ue.pending.delete(m),Ue.done.delete(m);if((m.f&bt)!==0&&(Ii(m),i&&((je=(Ee=m.nodes)==null?void 0:Ee.a)==null||je.unfix(),(g??(g=new Set)).delete(m))),(m.f&_r)!==0)if(m.f^=_r,m===u)ma(m,null,r);else{var C=d?d.next:u;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Kr(e,d,m),Kr(e,m,C),ma(m,C,r),d=m,_=[],x=[],u=ha(d.next);continue}if(m!==u){if(c!==void 0&&c.has(m)){if(_.length<x.length){var T=x[0],N;d=T.prev;var z=_[0],H=_[_.length-1];for(N=0;N<_.length;N+=1)ma(_[N],T,r);for(N=0;N<x.length;N+=1)c.delete(x[N]);Kr(e,z.prev,H.next),Kr(e,d,z),Kr(e,H,T),u=T,d=H,b-=1,_=[],x=[]}else c.delete(m),ma(m,u,r),Kr(e,m.prev,m.next),Kr(e,m,d===null?e.effect.first:d.next),Kr(e,d,m),d=m;continue}for(_=[],x=[];u!==null&&u!==m;)(c??(c=new Set)).add(u),x.push(u),u=ha(u.next);if(u===null)continue}(m.f&_r)===0&&_.push(m),d=m,u=ha(m.next)}if(e.outrogroups!==null){for(const Ue of e.outrogroups)Ue.pending.size===0&&(hi(e,ms(Ue.done)),(ye=e.outrogroups)==null||ye.delete(Ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||c!==void 0){var F=[];if(c!==void 0)for(m of c)(m.f&bt)===0&&F.push(m);for(;u!==null;)(u.f&bt)===0&&u!==e.fallback&&F.push(u),u=ha(u.next);var P=F.length;if(P>0){var J=(n&zl)!==0&&s===0?r:null;if(i){for(b=0;b<P;b+=1)(ht=(Ne=F[b].nodes)==null?void 0:Ne.a)==null||ht.measure();for(b=0;b<P;b+=1)(jt=(ct=F[b].nodes)==null?void 0:ct.a)==null||jt.fix()}yu(e,F,J)}}i&&Vr(()=>{var Ue,Nt;if(g!==void 0)for(m of g)(Nt=(Ue=m.nodes)==null?void 0:Ue.a)==null||Nt.apply()})}function wu(e,t,r,n,a,i,s,l){var u=(s&ic)!==0?(s&cc)===0?de(r,!1,!1):tn(r):null,c=(s&lc)!==0?tn(a):null;return{v:u,i:c,e:kt(()=>(i(t,u??r,c??a,l),()=>{e.delete(n)}))}}function ma(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,i=t&&(t.f&_r)===0?t.nodes.start:r;n!==null;){var s=Fa(n);if(i.before(n),n===a)return;n=s}}function Kr(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ne(e,t,r,n,a){var l;var i=(l=t.$$slots)==null?void 0:l[r],s=!1;i===!0&&(i=t.children,s=!0),i===void 0||i(e,s?()=>n:n)}function $u(e,t,r,n,a,i){var s=null,l=e,u=new go(l,!1);xs(()=>{const c=t()||null;var d=_c;if(c===null){u.ensure(null,null);return}return u.ensure(c,g=>{if(c){if(s=Bl(c,d),ra(s,s),n){var _=s.appendChild(yr());n(s,_)}Z.nodes.end=s,g.before(s)}}),()=>{}},En),ys(()=>{})}function ku(e,t){var r=void 0,n;ro(()=>{r!==(r=t())&&(n&&(ot(n),n=null),r&&(n=kt(()=>{Ti(()=>r(e))})))})}function bo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=bo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Su(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=bo(e))&&(n&&(n+=" "),n+=t);return n}function Eu(e){return typeof e=="object"?Su(e):e??""}const el=[...` 	
\r\f \v\uFEFF`];function Nu(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,s=0;(s=n.indexOf(a,s))>=0;){var l=s+i;(s===0||el.includes(n[s-1]))&&(l===n.length||el.includes(n[l]))?n=(s===0?"":n.substring(0,s))+n.substring(l+1):s=l}}return n===""?null:n}function tl(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Fs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mu(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Fs)),a&&u.push(...Object.keys(a).map(Fs));var c=0,d=-1;const k=e.length;for(var g=0;g<k;g++){var _=e[g];if(l?_==="/"&&e[g-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&e[g+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?s++:_===")"&&s--,!l&&i===!1&&s===0){if(_===":"&&d===-1)d=g;else if(_===";"||g===k-1){if(d!==-1){var x=Fs(e.substring(c,d).trim());if(!u.includes(x)){_!==";"&&g++;var p=e.substring(c,g).trim();r+=" "+p+";"}}c=g+1,d=-1}}}}return n&&(r+=tl(n)),a&&(r+=tl(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function xr(e,t,r,n,a,i){var s=e.__className;if(s!==r||s===void 0){var l=Nu(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var u in i){var c=!!i[u];(a==null||c!==!!a[u])&&e.classList.toggle(u,c)}return i}function Vs(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function zu(e,t,r,n){var a=e.__style;if(a!==t){var i=Mu(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Vs(e,r==null?void 0:r[0],n[0]),Vs(e,r==null?void 0:r[1],n[1],"important")):Vs(e,r,n));return n}function ds(e,t,r=!1){if(e.multiple){if(t==null)return;if(!xi(t))return bc();for(var n of e.options)n.selected=t.includes(rl(n));return}for(n of e.options){var a=rl(n);if(Kc(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function yo(e){var t=new MutationObserver(()=>{ds(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ys(()=>{t.disconnect()})}function rl(e){return"__value"in e?e.__value:e.value}const _a=Symbol("class"),ga=Symbol("style"),xo=Symbol("is custom element"),wo=Symbol("is html"),Pu=ki?"option":"OPTION",Tu=ki?"select":"SELECT",Au=ki?"progress":"PROGRESS";function Za(e,t){var r=Ri(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Au)||(e.value=t??"")}function Cu(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ke(e,t,r,n){var a=Ri(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&$o(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Iu(e,t,r,n,a=!1,i=!1){var s=Ri(e),l=s[xo],u=!s[wo],c=t||{},d=e.nodeName===Pu;for(var g in t)g in r||(r[g]=null);r.class?r.class=Eu(r.class):r[_a]&&(r.class=null),r[ga]&&(r.style??(r.style=null));var _=$o(e);for(const N in r){let z=r[N];if(d&&N==="value"&&z==null){e.value=e.__value="",c[N]=z;continue}if(N==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";xr(e,x,z,n,t==null?void 0:t[_a],r[_a]),c[N]=z,c[_a]=r[_a];continue}if(N==="style"){zu(e,z,t==null?void 0:t[ga],r[ga]),c[N]=z,c[ga]=r[ga];continue}var p=c[N];if(!(z===p&&!(z===void 0&&e.hasAttribute(N)))){c[N]=z;var k=N[0]+N[1];if(k!=="$$")if(k==="on"){const H={},F="$$"+N;let P=N.slice(2);var m=ou(P);if(iu(P)&&(P=P.slice(0,-7),H.capture=!0),!m&&p){if(z!=null)continue;e.removeEventListener(P,c[F],H),c[F]=null}if(m)R(P,e,z),nn([P]);else if(z!=null){let J=function(ue){c[N].call(this,ue)};var T=J;c[F]=vu(P,e,J,H)}}else if(N==="style")Ke(e,N,z);else if(N==="autofocus")Qc(e,!!z);else if(!l&&(N==="__value"||N==="value"&&z!=null))e.value=e.__value=z;else if(N==="selected"&&d)Cu(e,z);else{var b=N;u||(b=uu(b));var C=b==="defaultValue"||b==="defaultChecked";if(z==null&&!l&&!C)if(s[N]=null,b==="value"||b==="checked"){let H=e;const F=t===void 0;if(b==="value"){let P=H.defaultValue;H.removeAttribute(b),H.defaultValue=P,H.value=H.__value=F?P:null}else{let P=H.defaultChecked;H.removeAttribute(b),H.defaultChecked=P,H.checked=F?P:!1}}else e.removeAttribute(N);else C||_.includes(b)&&(l||typeof z!="string")?(e[b]=z,b in s&&(s[b]=Be)):typeof z!="function"&&Ke(e,b,z)}}}return c}function nl(e,t,r=[],n=[],a=[],i,s=!1,l=!1){Hl(a,r,n,u=>{var c=void 0,d={},g=e.nodeName===Tu,_=!1;if(ro(()=>{var p=t(...u.map(f)),k=Iu(e,c,p,i,s,l);_&&g&&"value"in p&&ds(e,p.value);for(let b of Object.getOwnPropertySymbols(d))p[b]||ot(d[b]);for(let b of Object.getOwnPropertySymbols(p)){var m=p[b];b.description===gc&&(!c||m!==c[b])&&(d[b]&&ot(d[b]),d[b]=kt(()=>ku(e,()=>m))),k[b]=m}c=k}),g){var x=e;Ti(()=>{ds(x,c.value,!0),yo(x)})}_=!0})}function Ri(e){return e.__attributes??(e.__attributes={[xo]:e.nodeName.includes("-"),[wo]:e.namespaceURI===Tl})}var al=new Map;function $o(e){var t=e.getAttribute("is")||e.nodeName,r=al.get(t);if(r)return r;al.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=kl(a);for(var s in n)n[s].set&&r.push(s);a=wi(a)}return r}function Gr(e,t,r=t){var n=new WeakSet;Xc(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=qs(e)?Hs(i):i,r(i),D!==null&&n.add(D),await fi(),i!==(i=t())){var s=e.selectionStart,l=e.selectionEnd,u=e.value.length;if(e.value=i??"",l!==null){var c=e.value.length;s===l&&l===u&&c>u?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=s,e.selectionEnd=Math.min(l,c))}}}),U(t)==null&&e.value&&(r(qs(e)?Hs(e.value):e.value),D!==null&&n.add(D)),Va(()=>{var a=t();if(e===document.activeElement){var i=D;if(n.has(i))return}qs(e)&&a===Hs(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function qs(e){var t=e.type;return t==="number"||t==="range"}function Hs(e){return e===""?null:+e}function sl(e,t){return e===t||(e==null?void 0:e[br])===t}function Lu(e={},t,r,n){var a=Se.r,i=Z;return Ti(()=>{var s,l;return Va(()=>{s=l,l=[],U(()=>{e!==r(...l)&&(t(e,...l),s&&sl(r(...s),e)&&t(null,...s))})}),()=>{let u=i;for(;u!==a&&u.parent!==null&&u.parent.f&Bs;)u=u.parent;const c=()=>{l&&sl(r(...l),e)&&t(null,...l)},d=u.teardown;u.teardown=()=>{c(),d==null||d()}}}),e}function Dr(e=!1){const t=Se,r=t.l.u;if(!r)return;let n=()=>fn(t.s);if(e){let a=0,i={};const s=ja(()=>{let l=!1;const u=t.s;for(const c in u)u[c]!==i[c]&&(i[c]=u[c],l=!0);return l&&a++,a});n=()=>f(s)}r.b.length&&Bc(()=>{il(t,n),cs(r.b)}),ui(()=>{const a=U(()=>r.m.map(Wo));return()=>{for(const i of a)typeof i=="function"&&i()}}),r.a.length&&ui(()=>{il(t,n),cs(r.a)})}function il(e,t){if(e.l.s)for(const r of e.l.s)f(r);t()}const Ru={get(e,t){if(!e.exclude.includes(t))return f(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=Z;try{Et(e.parent_effect),e.special[t]=dn({get[t](){return e.props[t]}},t,Pl)}finally{Et(n)}}return e.special[t](r),ci(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ci(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function te(e,t){return new Proxy({props:e,exclude:t,special:{},version:tn(0),parent_effect:Z},Ru)}const Ou={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(pa(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];pa(a)&&(a=a());const i=Zr(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(pa(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Zr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===br||t===Nl)return!1;for(let r of e.props)if(pa(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(pa(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},Ou)}function dn(e,t,r,n){var T;var a=!aa||(r&fc)!==0,i=(r&dc)!==0,s=(r&vc)!==0,l=n,u=!0,c=()=>(u&&(u=!1,l=s?U(n):n),l);let d;if(i){var g=br in e||Nl in e;d=((T=Zr(e,t))==null?void 0:T.set)??(g&&t in e?N=>e[t]=N:void 0)}var _,x=!1;i?[_,x]=Mc(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=c(),d&&(a&&tc(),d(_)));var p;if(a?p=()=>{var N=e[t];return N===void 0?c():(u=!0,N)}:p=()=>{var N=e[t];return N!==void 0&&(l=void 0),N===void 0?l:N},a&&(r&Pl)===0)return p;if(d){var k=e.$$legacy;return(function(N,z){return arguments.length>0?((!a||!z||k||x)&&d(z?p():N),N):p()})}var m=!1,b=((r&uc)!==0?ja:Ua)(()=>(m=!1,p()));i&&f(b);var C=Z;return(function(N,z){if(arguments.length>0){const H=z?f(b):a&&i?qn(N):N;return w(b,H),m=!0,l!==void 0&&(l=H),N}return qr&&m||(C.f&Ot)!==0?b.v:f(b)})}function ws(e){Se===null&&Ml(),aa&&Se.l!==null?Uu(Se).m.push(e):ui(()=>{const t=U(e);if(typeof t=="function")return t})}function ju(e){Se===null&&Ml(),ws(()=>()=>U(e))}function Uu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Fu="5";var wl;typeof window<"u"&&((wl=window.__svelte??(window.__svelte={})).v??(wl.v=new Set)).add(Fu);wc();const Oi=Oe("/");function mt(e){Oi.set(e)}const ko="music-player-theme";function _i(e){return e==="light"||e==="music-light"?"light":"dark"}function ll(){if(typeof localStorage>"u")return"dark";const e=localStorage.getItem(ko);return _i(e)}function ol(e){typeof document>"u"||(document.documentElement.dataset.theme=e,document.body&&(document.body.dataset.theme=e))}function cl(e){typeof localStorage>"u"||localStorage.setItem(ko,e)}function Vu(){const e=ll(),{subscribe:t,set:r,update:n}=Oe(e);function a(i){const s=_i(i);ol(s),cl(s),r(s)}return{subscribe:t,init(){a(ll())},setTheme(i){a(i)},toggleTheme(){n(i=>{const s=_i(i)==="dark"?"light":"dark";return ol(s),cl(s),s})}}}const vs=Vu();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Hu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ul=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Du=_u("<svg><!><!></svg>");function oe(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]),n=te(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kr(t,!1);let a=dn(t,"name",8,void 0),i=dn(t,"color",8,"currentColor"),s=dn(t,"size",8,24),l=dn(t,"strokeWidth",8,2),u=dn(t,"absoluteStrokeWidth",8,!1),c=dn(t,"iconNode",24,()=>[]);Dr();var d=Du();nl(d,(x,p,k)=>({...qu,...x,...n,width:s(),height:s(),stroke:i(),"stroke-width":p,class:k}),[()=>Hu(n)?void 0:{"aria-hidden":"true"},()=>(fn(u()),fn(l()),fn(s()),U(()=>u()?Number(l())*24/Number(s()):l())),()=>(fn(ul),fn(a()),fn(r),U(()=>ul("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var g=o(d);gr(g,1,c,mo,(x,p)=>{var k=qc(()=>Ko(f(p),2));let m=()=>f(k)[0],b=()=>f(k)[1];var C=re(),T=Q(C);$u(T,m,!0,(N,z)=>{nl(N,()=>({...b()}))}),y(x,C)});var _=h(g);ne(_,t,"default",{}),y(e,d),Sr()}function So(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];oe(e,le({name:"audio-lines"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function kn(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];oe(e,le({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Wu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];oe(e,le({name:"database"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Ds(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];oe(e,le({name:"disc-3"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Ku(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"}]];oe(e,le({name:"file-headphone"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Gu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];oe(e,le({name:"fingerprint-pattern"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Hn(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];oe(e,le({name:"folder-open"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Yu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];oe(e,le({name:"heart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Qu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];oe(e,le({name:"house"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Ju(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];oe(e,le({name:"image"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Ws(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];oe(e,le({name:"key-round"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Xu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];oe(e,le({name:"link"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Dn(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];oe(e,le({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Zu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];oe(e,le({name:"log-out"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function fl(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];oe(e,le({name:"mail"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function wa(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]];oe(e,le({name:"music-2"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function ls(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];oe(e,le({name:"music"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Bu(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];oe(e,le({name:"pause"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Ir(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];oe(e,le({name:"play"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function ef(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];oe(e,le({name:"qr-code"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function tf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];oe(e,le({name:"quote"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Eo(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];oe(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function rf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];oe(e,le({name:"repeat-1"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function nf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];oe(e,le({name:"repeat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function af(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];oe(e,le({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function dl(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];oe(e,le({name:"scroll-text"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function $a(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,le({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function sf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];oe(e,le({name:"settings"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function vl(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];oe(e,le({name:"shield-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function lf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];oe(e,le({name:"shuffle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function of(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"}],["path",{d:"M3 20V4"}]];oe(e,le({name:"skip-back"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function cf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21 4v16"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"}]];oe(e,le({name:"skip-forward"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function pl(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];oe(e,le({name:"smartphone"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function Na(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];oe(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function uf(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];oe(e,le({name:"volume-2"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}function ji(e,t){const r=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var s=re(),l=Q(s);ne(l,t,"default",{}),y(a,s)},$$slots:{default:!0}}))}const Ma=Oe(localStorage.getItem("ncm-api-url")||"http://localhost:3000"),St=Oe(null),Qt=Oe(localStorage.getItem("ncm-cookie")||"");let $s=!1;Ma.subscribe(e=>{e&&localStorage.setItem("ncm-api-url",e)});Qt.subscribe(e=>{e?(localStorage.setItem("ncm-cookie",e),$s=!1):localStorage.removeItem("ncm-cookie")});function Pn(e){let t;return e.subscribe(n=>{t=n})(),t}async function et(e,t={},r={}){const n=Pn(Ma),a=new URL(e,n),i=Pn(Qt);Object.entries(t).forEach(([c,d])=>{d!=null&&d!==""&&a.searchParams.set(c,d)}),a.searchParams.set("timestamp",Date.now().toString()),r.withCookie!==!1&&i&&a.searchParams.set("cookie",i),console.log("[NCM Request]",a.toString());const l=new AbortController,u=setTimeout(()=>l.abort(),1e4);try{const c=await fetch(a.toString(),{method:"GET",headers:{Accept:"application/json"},signal:l.signal});if(clearTimeout(u),console.log("[NCM Response]",c.status,c.statusText),!c.ok)throw new Error(`HTTP ${c.status}: ${c.statusText}`);const d=await c.json();return console.log("[NCM Data]",d),!$s&&(d!=null&&d.cookie)&&typeof d.cookie=="string"&&d.cookie.trim()&&Qt.set(d.cookie),d}catch(c){throw clearTimeout(u),console.error("[NCM Error]",c),c}}async function Ur(){var t,r;if(!Pn(Qt)||$s)return St.set(null),!1;try{const n=await et("/login/status");console.log("[Debug] /login/status response:",n);const a=(t=n==null?void 0:n.data)==null?void 0:t.profile,i=(r=n==null?void 0:n.data)==null?void 0:r.account;return i!=null&&i.id||a!=null&&a.userId?(St.set({userId:(i==null?void 0:i.id)||(a==null?void 0:a.userId),nickname:(a==null?void 0:a.nickname)||"网易云用户",avatarUrl:(a==null?void 0:a.avatarUrl)||"",signature:(a==null?void 0:a.signature)||""}),!0):(St.set(null),!1)}catch(n){return console.error("登录状态检查失败",n),St.set(null),!1}}async function No(){$s=!0;try{await et("/logout")}catch(e){console.warn("退出登录接口调用失败",e)}St.set(null),Qt.set(""),localStorage.removeItem("ncm-cookie")}const Wn=Oe([]),ka=Oe([]),Yr=Oe([]),wr=Oe(!1),$r=Oe(""),Ks=new Map,Gs=new Map,Ys=new Map;function ks(e){if(!e)return null;const t=e.al||e.album||{},r=e.ar||e.artists||[];return{id:e.id,title:e.name||"未知歌曲",artist:r.length>0?r.map(n=>n.name).join(" / "):"未知歌手",album:t.name||"",cover:t.picUrl||"",duration:e.dt||e.duration||0,url:"",lyrics:null,source:"netease",filename:"网易云音乐"}}async function Ui(e=[]){const t=e.filter(Boolean);if(!t.length)return new Map;const r=new Map,n=[];for(const s of t)Ys.has(s)?r.set(s,Ys.get(s)):n.push(s);if(!n.length)return r;const a=n.join(",");let i;try{i=await et("/song/url/v1",{id:a,level:"standard"})}catch(s){console.warn("/song/url/v1 获取失败，尝试 /song/url",s),i=await et("/song/url",{id:a})}for(const s of(i==null?void 0:i.data)||[])if(s!=null&&s.id){const l=s.url||"";Ys.set(s.id,l),r.set(s.id,l)}return r}async function Mo(e){if(!(e!=null&&e.id))return e;let t={...e};try{if(!t.url){const r=await Ui([t.id]);t={...t,url:r.get(t.id)||""}}if(t.lyrics===null||t.lyrics===void 0){const r=await Ao(t.id);t={...t,lyrics:r}}return t}catch(r){return console.warn("准备网易云歌曲失败",r),t}}async function ff(e=[]){const t=e.map(n=>n.id).filter(Boolean),r=await Ui(t);return e.map(n=>({...n,url:r.get(n.id)||n.url||""}))}async function zo(e=50){$r.set("");let t=Pn(St);if(!(t!=null&&t.userId)){if(!await Ur())return Wn.set([]),[];t=Pn(St)}try{wr.set(!0);const r=await et("/likelist",{uid:t.userId}),n=(r==null?void 0:r.ids)||[];if(!n.length)return Wn.set([]),[];const a=n.slice(0,e),i=await et("/song/detail",{ids:a.join(",")}),s=((i==null?void 0:i.songs)||[]).map(ks).filter(Boolean);return Wn.set(s),s}catch(r){return console.error("获取喜欢的歌曲失败",r),$r.set("获取喜欢的歌曲失败："+(r.message||"未知错误")),Wn.set([]),[]}finally{wr.set(!1)}}async function Po(e=30){$r.set("");let t=Pn(St);if(!(t!=null&&t.userId)){if(!await Ur())return ka.set([]),[];t=Pn(St)}try{wr.set(!0);const r=await et("/user/playlist",{uid:t.userId,limit:e}),n=(r==null?void 0:r.playlist)||[];return ka.set(n),n}catch(r){return console.error("获取用户歌单失败",r),$r.set("获取用户歌单失败："+(r.message||"未知错误")),ka.set([]),[]}finally{wr.set(!1)}}async function gi(e,t=30,r=0,n=!1){var s;$r.set("");const a=e==null?void 0:e.trim();if(!a)return n||Yr.set([]),[];const i=`search:${a}:${t}:${r}`;if(Ks.has(i)){const l=Ks.get(i);return n?Yr.update(u=>{const c=new Set(u.map(g=>g.id)),d=[...u];for(const g of l)c.has(g.id)||d.push(g);return d}):Yr.set(l),l}try{wr.set(!0);let l;try{l=await et("/cloudsearch",{keywords:a,type:1,limit:t,offset:r})}catch(c){console.warn("/cloudsearch 搜索失败，尝试 /search",c),l=await et("/search",{keywords:a,type:1,limit:t,offset:r})}const u=(((s=l==null?void 0:l.result)==null?void 0:s.songs)||[]).map(ks).filter(Boolean);return Ks.set(i,u),n?Yr.update(c=>{const d=new Set(c.map(_=>_.id)),g=[...c];for(const _ of u)d.has(_.id)||g.push(_);return g}):Yr.set(u),u}catch(l){return console.error("搜索歌曲失败",l),$r.set("搜索歌曲失败："+(l.message||"未知错误")),n||Yr.set([]),[]}finally{wr.set(!1)}}async function mi(e,t=50,r=0){var a,i;if(!e)return[];const n=`playlist:${e}:${t}:${r}`;if(Gs.has(n))return Gs.get(n);try{wr.set(!0),$r.set("");let s;try{s=await et("/playlist/track/all",{id:e,limit:t,offset:r})}catch(c){console.warn("/playlist/track/all 获取失败，尝试 /playlist/detail",c),s=await et("/playlist/detail",{id:e})}let l=(s==null?void 0:s.songs)||((a=s==null?void 0:s.playlist)==null?void 0:a.tracks)||[];(i=s==null?void 0:s.playlist)!=null&&i.tracks&&Array.isArray(s.playlist.tracks)&&(l=s.playlist.tracks.slice(r,r+t));const u=l.map(ks).filter(Boolean);return Gs.set(n,u),u}catch(s){return console.error("获取歌单歌曲失败",s),$r.set("获取歌单歌曲失败："+(s.message||"未知错误")),[]}finally{wr.set(!1)}}function bi(e){if(!e||typeof e!="string")return[];const t=e.split(`
`),r=[],n=/\[(\d{1,2}):(\d{1,2})(?:\.(\d{1,3}))?\]/g;for(const a of t){const i=[];let s;for(;(s=n.exec(a))!==null;){const u=parseInt(s[1],10),c=parseInt(s[2],10),d=s[3]||"0",g=parseInt(d.padEnd(3,"0"),10);i.push(u*60+c+g/1e3)}const l=a.replace(n,"").trim();if(i.length>0&&l)for(const u of i)r.push({time:u,text:l})}return r.sort((a,i)=>a.time-i.time)}function To(e=[],t=[]){return e.length?t.length?e.map(r=>{const n=t.find(a=>Math.abs(a.time-r.time)<.3);return n!=null&&n.text&&n.text!==r.text?{...r,text:`${r.text}
${n.text}`}:r}):e:t}async function Ao(e){var t,r;if(!e)return[];try{const n=await et("/lyric",{id:e}),a=((t=n==null?void 0:n.lrc)==null?void 0:t.lyric)||"",i=((r=n==null?void 0:n.tlyric)==null?void 0:r.lyric)||"",s=bi(a),l=bi(i);return To(s,l)}catch(n){return console.warn("获取网易云歌词失败",n),[]}}const df=Object.freeze(Object.defineProperty({__proto__:null,apiBaseUrl:Ma,checkLoginStatus:Ur,fetchLikedSongs:zo,fetchNcmLyrics:Ao,fetchNcmSongUrls:Ui,fetchPlaylistSongs:mi,fetchUserPlaylists:Po,likedSongs:Wn,logoutNcm:No,mergeTranslatedLyrics:To,ncmError:$r,ncmFetch:et,ncmLoading:wr,ncmSearchResults:Yr,neteaseCookie:Qt,neteaseUser:St,normalizeNcmSong:ks,parseLrc:bi,prepareNcmSongForPlay:Mo,prepareNcmSongsForPlay:ff,searchNcmSongs:gi,userPlaylists:ka},Symbol.toStringTag,{value:"Module"}));var vf=E("<li><button><!> <span> </span></button></li>"),pf=E('<img alt="头像"/>'),hf=E('<div class="bg-primary text-primary-content flex items-center justify-center w-full h-full"><!></div>'),_f=E('<button class="btn btn-ghost btn-circle avatar glass-hover" title="用户信息"><div class="w-9 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-1 overflow-hidden"><!></div></button>'),gf=E('<button class="btn btn-sm gap-2 rounded-full icon-btn-glass"><!> <span>登录</span></button>'),mf=E('<div class="navbar glass-panel sticky top-0 z-40 px-4 border-b border-base-content/10"><div class="navbar-start"><button class="btn btn-ghost text-xl font-bold gap-2 rounded-full glass-hover"><!> <span>Music Player</span></button></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 gap-2"></ul></div> <div class="navbar-end gap-2"><button class="btn btn-sm rounded-full icon-btn-glass theme-toggle-pill"><span class="text-base leading-none"> </span> <span class="hidden sm:inline"> </span></button> <!></div></div>');function bf(e,t){kr(t,!1);const r=()=>ge(vs,"$theme",i),n=()=>ge(Oi,"$currentRoute",i),a=()=>ge(St,"$neteaseUser",i),[i,s]=rn(),l=de(),u=[{path:"/",label:"主页",icon:Qu},{path:"/collection",label:"本地音乐",icon:Hn},{path:"/visualizer",label:"音频可视化",icon:So},{path:"/data-manage",label:"数据管理",icon:Wu}];fs(()=>r(),()=>{w(l,r()==="dark")}),Ai(),Dr();var c=mf(),d=o(c),g=o(d),_=o(g);wa(_,{size:24,class:"text-primary icon-primary-glow"});var x=h(d,2),p=o(x);gr(p,5,()=>u,P=>P.path,(P,J)=>{const ue=Ua(()=>(f(J),U(()=>f(J).icon)));var ze=vf(),Ee=o(ze),je=o(Ee);f(ue)(je,{size:17});var ye=h(je,2),Ne=o(ye);q(()=>{xr(Ee,1,`btn btn-sm gap-2 rounded-full border border-base-content/10
            ${n(),f(J),U(()=>n()===f(J).path?"btn-primary shadow-lg shadow-primary/20":"btn-ghost icon-btn-glass")??""}`),L(Ne,(f(J),U(()=>f(J).label)))}),R("click",Ee,()=>mt(f(J).path)),y(P,ze)});var k=h(x,2),m=o(k),b=o(m),C=o(b),T=h(b,2),N=o(T),z=h(m,2);{var H=P=>{var J=_f(),ue=o(J),ze=o(ue);{var Ee=ye=>{var Ne=pf();q(()=>Ke(Ne,"src",(a(),U(()=>a().avatarUrl)))),y(ye,Ne)},je=ye=>{var Ne=hf(),ht=o(Ne);Na(ht,{size:18}),y(ye,Ne)};O(ze,ye=>{a(),U(()=>a().avatarUrl)?ye(Ee):ye(je,-1)})}R("click",J,()=>mt("/user")),y(P,J)},F=P=>{var J=gf(),ue=o(J);kn(ue,{size:17}),R("click",J,()=>mt("/login")),y(P,J)};O(z,P=>{a()?P(H):P(F,-1)})}q(()=>{Ke(m,"title",f(l)?"切换到明亮主题":"切换到暗色主题"),L(C,f(l)?"☀":"☾"),L(N,f(l)?"明亮":"暗色")}),R("click",g,()=>mt("/")),R("click",m,()=>vs.toggleTheme()),y(e,c),Sr(),s()}nn(["click"]);const yf="modulepreload",xf=function(e){return"/"+e},hl={},wf=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=s(r.map(c=>{if(c=xf(c),c in hl)return;hl[c]=!0;const d=c.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":yf,d||(_.as="script"),_.crossOrigin="",_.href=c,u&&_.setAttribute("nonce",u),document.head.appendChild(_),d)return new Promise((x,p)=>{_.addEventListener("load",x),_.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return a.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},vt=Oe([]),qa=Oe(-1),Jt=Oe(!1),ps=Oe(!1),en=Oe(""),An=Oe(.8),Ss=Oe(1),Es=Oe(0),Fi=Oe(0),Hr=Oe("all"),za=Oe(0),Vi=Ec([vt,qa],([e,t])=>t>=0&&t<e.length?e[t]:null);let We=null,Ba=0;function He(e){let t;return e.subscribe(r=>t=r)(),t}function Ha(){return We||(We=new Audio,We.volume=He(An),We.playbackRate=He(Ss),We.addEventListener("timeupdate",()=>{Es.set(We.currentTime||0)}),We.addEventListener("loadedmetadata",()=>{Fi.set(We.duration||0)}),We.addEventListener("play",()=>{Jt.set(!0)}),We.addEventListener("pause",()=>{Jt.set(!1)}),We.addEventListener("ended",()=>{He(Hr)==="loop"?(We.currentTime=0,We.play().catch(t=>{console.error("单曲循环播放失败",t),en.set(t.message||"播放失败"),Jt.set(!1)})):os()}),We.addEventListener("error",()=>{console.error("音频加载失败",We==null?void 0:We.error),en.set("音频加载失败，可能是播放地址失效或资源不可访问"),Jt.set(!1),ps.set(!1)})),We}function $f(e,t){vt.update(r=>{if(e<0||e>=r.length)return r;const n=[...r];return n[e]={...n[e],...t},n})}function Co(e){return(e==null?void 0:e.source)==="netease"&&(e==null?void 0:e.id)&&!(e!=null&&e.url)}async function Io(e,t){if(!e||!Co(e))return e;try{const{prepareNcmSongForPlay:r}=await wf(async()=>{const{prepareNcmSongForPlay:a}=await Promise.resolve().then(()=>df);return{prepareNcmSongForPlay:a}},void 0),n=await r(e);return n!=null&&n.url&&$f(t,n),n}catch(r){throw console.error("自动获取网易云播放地址失败",r),new Error("自动获取网易云播放地址失败："+(r.message||"未知错误"))}}async function kf(e){const t=He(vt);if(e<0||e>=t.length)return;const r=t[e];if(Co(r))try{const n=await Io(r,e);n!=null&&n.url&&console.log("[Prefetch] 已预加载歌曲播放地址:",n.title)}catch(n){console.warn("[Prefetch] 预加载歌曲播放地址失败:",r==null?void 0:r.title,n)}}function Sf(e){const t=He(vt);if(!t.length)return;const r=[],n=e+1<t.length?e+1:0,a=e-1>=0?e-1:t.length-1;n!==e&&r.push(n),a!==e&&r.push(a);for(const i of r)kf(i)}async function Da(e){const t=++Ba,r=He(vt);if(e<0||e>=r.length)return;let n=r[e];qa.set(e),en.set(""),ps.set(!0);try{if(n=await Io(n,e),t!==Ba)return;if(!(n!=null&&n.url))throw new Error("该歌曲暂无可用播放地址，可能是 VIP、版权或地区限制");const a=Ha();Es.set(0),Fi.set(0),a.src=n.url,a.volume=He(An),a.playbackRate=He(Ss),await a.play(),Jt.set(!0),en.set(""),Sf(e)}catch(a){if(t!==Ba)return;console.error("播放失败",a),Jt.set(!1),en.set(a.message||"播放失败")}finally{t===Ba&&ps.set(!1)}}async function Qs(){const e=Ha();if(!e.src){const t=He(qa),r=He(vt);t>=0&&t<r.length&&await Da(t);return}try{en.set(""),e.paused?(await e.play(),Jt.set(!0)):(e.pause(),Jt.set(!1))}catch(t){console.error("播放/暂停失败",t),en.set(t.message||"播放失败"),Jt.set(!1)}}async function os(){const e=He(vt),t=He(qa),r=He(Hr);if(e.length===0)return;let n;if(r==="random")if(e.length===1)n=0;else do n=Math.floor(Math.random()*e.length);while(n===t);else n=(t+1)%e.length;await Da(n)}async function Js(){const e=He(vt),t=He(qa),r=He(Hr);if(e.length===0)return;let n;if(r==="random")if(e.length===1)n=0;else do n=Math.floor(Math.random()*e.length);while(n===t);else n=(t-1+e.length)%e.length;await Da(n)}function Ef(e){const t=Ha();t.volume=e,An.set(e)}function Nf(e){const t=Ha();t.playbackRate=e,Ss.set(e)}function _l(e){const t=Ha();t.src&&(t.currentTime=e,Es.set(e))}function Xs(){const e=He(Hr),t=["all","loop","random"],r=(t.indexOf(e)+1)%t.length;Hr.set(t[r])}function Ns(){try{const e={playlist:He(vt),volume:He(An),playMode:He(Hr),lyricOffset:He(za)};localStorage.setItem("music-player-state",JSON.stringify(e))}catch(e){console.error("保存状态失败",e)}}vt.subscribe(()=>Ns());An.subscribe(()=>Ns());Hr.subscribe(()=>Ns());za.subscribe(()=>Ns());function Mf(){try{const e=localStorage.getItem("music-player-state");if(!e)return;const t=JSON.parse(e);t.playlist&&t.playlist.length>0&&vt.set(t.playlist),t.volume!==void 0&&(An.set(t.volume),We&&(We.volume=t.volume)),t.playMode&&Hr.set(t.playMode),t.lyricOffset!==void 0&&za.set(t.lyricOffset)}catch(e){console.error("恢复状态失败",e)}}var zf=E('<img alt="封面" class="w-full h-full object-cover"/>'),Pf=E('<span class="text-error"> </span>'),Tf=E('<span class="text-primary">正在获取播放地址...</span>'),Af=E('<span class="loading loading-spinner loading-xs"></span>'),Cf=E("<option> </option>"),If=E('<img alt="封面" class="w-full h-full object-cover"/>'),Lf=E('<p class="text-sm text-base-content/40 mt-1 truncate max-w-sm mx-auto"> </p>'),Rf=E('<div class="mt-6 w-full max-w-sm"><div class="flex items-center justify-between mb-2"><span class="text-xs text-base-content/50">歌词延迟</span> <span class="text-xs text-primary"> </span></div> <div class="flex items-center gap-3"><span class="text-xs text-base-content/50">-</span> <input type="range" min="-5" max="5" step="0.1" class="range range-primary range-xs flex-1"/> <span class="text-xs text-base-content/50">+</span></div> <p class="text-xs text-base-content/40 text-center mt-2">点击歌词行可跳转播放位置</p></div>'),Of=E('<p title="点击跳转到此句"> </p>'),jf=E('<div class="space-y-5 md:space-y-6 pb-32"></div>'),Uf=E('<p class="text-lg">暂无歌词</p> <p class="text-sm mt-2">可能是纯音乐、接口未返回，或歌词暂不可用</p>',1),Ff=E('<p class="text-lg">暂无歌词</p> <p class="text-sm mt-2">本地歌曲需要同名 .lrc 文件</p>',1),Vf=E('<div class="h-full flex flex-col items-center justify-center text-center text-base-content/40"><!> <!></div>'),qf=E('<div class="fixed inset-0 z-[100] lyric-modal-backdrop flex items-center justify-center p-4"><div class="relative glass-panel soft-gradient-bg rounded-3xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col md:flex-row"><button class="btn btn-ghost btn-circle btn-sm absolute top-4 right-4 z-20 icon-btn-glass" title="关闭"><!></button> <div class="md:w-[38%] w-full md:h-full h-auto p-6 md:p-8 flex flex-col items-center justify-center border-r border-base-content/10"><div class="w-44 h-44 md:w-72 md:h-72 rounded-3xl overflow-hidden glass-card shadow-2xl flex items-center justify-center mb-6"><!></div> <div class="text-center max-w-full"><h2 class="text-2xl md:text-3xl font-bold truncate max-w-sm mx-auto"> </h2> <p class="text-base md:text-lg text-base-content/60 mt-2 truncate max-w-sm mx-auto"> </p> <!></div> <div class="mt-6 w-full max-w-sm"><div class="flex justify-between text-xs text-base-content/50 mb-1"><span> </span> <span> </span></div> <input type="range" min="0" step="0.1" class="range range-primary range-xs w-full"/></div> <!></div> <div class="md:w-[62%] flex-1 min-h-0 flex flex-col bg-base-100/30"><div class="px-6 md:px-10 pt-8 pb-4 border-b border-base-content/10 flex-shrink-0"><h3 class="text-xl md:text-2xl font-bold">歌词</h3> <p class="text-sm text-base-content/50 mt-1"> </p></div> <div class="flex-1 min-h-0 overflow-y-auto px-6 md:px-12 py-8 scroll-smooth"><!></div></div></div></div>'),Hf=E('<div class="fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-base-content/10"><div class="w-full px-4 pt-2"><input type="range" min="0" step="0.1" class="range range-primary range-xs w-full"/> <div class="flex justify-between text-xs text-base-content/60 mt-0.5"><span> </span> <span> </span></div></div> <div class="flex items-center justify-between px-4 pb-3 pt-1"><div class="flex items-center gap-3 w-1/4 min-w-0"><div class="w-12 h-12 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 glass-card flex items-center justify-center hover:scale-105 transition-transform" title="点击查看歌词"><!></div> <div class="min-w-0"><p class="text-sm font-semibold truncate"> </p> <p class="text-xs text-base-content/60 truncate"><!></p></div></div> <div class="flex items-center gap-2"><button class="btn btn-ghost btn-sm btn-circle icon-btn-glass" title="上一首"><!></button> <button class="btn btn-ghost btn-xs btn-circle icon-btn-glass"><!></button> <button class="btn btn-primary btn-sm btn-circle shadow-lg shadow-primary/30"><!></button> <button class="btn btn-ghost btn-sm btn-circle icon-btn-glass" title="下一首"><!></button></div> <div class="flex items-center gap-3 w-1/4 justify-end"><select class="select select-bordered select-xs w-20"></select> <div class="flex items-center gap-1"><!> <input type="range" min="0" max="1" step="0.01" class="range range-xs w-20"/></div></div></div></div> <!>',1);function Df(e,t){kr(t,!1);const r=()=>ge(Vi,"$currentSong",_),n=()=>ge(Es,"$currentTime",_),a=()=>ge(za,"$lyricOffset",_),i=()=>ge(Fi,"$duration",_),s=()=>ge(en,"$playbackError",_),l=()=>ge(ps,"$isTrackLoading",_),u=()=>ge(Hr,"$playMode",_),c=()=>ge(Jt,"$isPlaying",_),d=()=>ge(Ss,"$playbackRate",_),g=()=>ge(An,"$volume",_),[_,x]=rn(),p=de(),k=[.5,.75,1,1.25,1.5,2];let m=de(!1),b=de(),C=-1;const T={all:"列表循环",loop:"单曲循环",random:"随机播放"};async function N(S=!1){if(!f(m)||!f(b)||f(p)<0||!S&&f(p)===C)return;C=f(p),await fi();const Y=f(b).querySelector(`[data-lyric-index="${f(p)}"]`);Y&&Y.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}async function z(){w(m,!0),C=-1,await fi(),N(!0)}function H(S){if(isNaN(S)||S<0)return"00:00";const Y=Math.floor(S/60),me=Math.floor(S%60);return`${String(Y).padStart(2,"0")}:${String(me).padStart(2,"0")}`}function F(S){_l(parseFloat(S.target.value))}function P(S){Ef(parseFloat(S.target.value))}function J(S){Nf(parseFloat(S.target.value))}function ue(S){za.set(parseFloat(S.target.value))}function ze(S){_l(Math.max(0,S-a())),N(!0)}fs(()=>(r(),n(),a()),()=>{w(p,(()=>{var me;if(!((me=r())!=null&&me.lyrics)||r().lyrics.length===0)return-1;const S=n()+a();let Y=0;for(let qe=0;qe<r().lyrics.length&&r().lyrics[qe].time<=S;qe++)Y=qe;return Y})())}),fs(()=>(f(m),f(b),f(p)),()=>{f(m)&&f(b)&&f(p)>=0&&N()}),Ai(),Dr();var Ee=Hf(),je=Q(Ee),ye=o(je),Ne=o(ye),ht=h(Ne,2),ct=o(ht),jt=o(ct),Ue=h(ct,2),Nt=o(Ue),Fe=h(ye,2),Ve=o(Fe),V=o(Ve),ve=o(V);{var xe=S=>{var Y=zf();q(()=>Ke(Y,"src",(r(),U(()=>r().cover)))),y(S,Y)},De=S=>{ls(S,{size:26,class:"text-primary/80"})};O(ve,S=>{r(),U(()=>{var Y;return(Y=r())==null?void 0:Y.cover})?S(xe):S(De,-1)})}var tt=h(V,2),Mt=o(tt),cr=o(Mt),yt=h(Mt,2),Er=o(yt);{var zt=S=>{var Y=Pf(),me=o(Y);q(()=>L(me,s())),y(S,Y)},Nr=S=>{var Y=Tf();y(S,Y)},Ut=S=>{var Y=xa();q(()=>L(Y,(r(),U(()=>{var me;return((me=r())==null?void 0:me.artist)||"未知艺术家"})))),y(S,Y)};O(Er,S=>{s()?S(zt):l()?S(Nr,1):S(Ut,-1)})}var ur=h(Ve,2),Ft=o(ur),an=o(Ft);of(an,{size:18});var I=h(Ft,2),B=o(I);{var $=S=>{nf(S,{size:15})},A=S=>{rf(S,{size:15})},K=S=>{lf(S,{size:15})};O(B,S=>{u()==="all"?S($):u()==="loop"?S(A,1):S(K,-1)})}var M=h(I,2),he=o(M);{var W=S=>{var Y=Af();y(S,Y)},we=S=>{Bu(S,{size:18,fill:"currentColor"})},pe=S=>{Ir(S,{size:18,fill:"currentColor"})};O(he,S=>{l()?S(W):c()?S(we,1):S(pe,-1)})}var Pe=h(M,2),ae=o(Pe);cf(ae,{size:18});var Qe=h(ur,2),Ce=o(Qe);gr(Ce,5,()=>k,mo,(S,Y)=>{var me=Cf(),qe=o(me),Vt={};q(()=>{L(qe,`${f(Y)??""}x`),Vt!==(Vt=f(Y))&&(me.value=(me.__value=f(Y))??"")}),y(S,me)});var ut;yo(Ce);var fe=h(Ce,2),Pt=o(fe);uf(Pt,{size:17,class:"text-base-content/70"});var fr=h(Pt,2),sn=h(je,2);{var Mr=S=>{var Y=qf(),me=o(Y),qe=o(me),Vt=o(qe);ji(Vt,{size:18});var qt=h(qe,2),zr=o(qt),Pr=o(zr);{var Cn=G=>{var se=If();q(()=>Ke(se,"src",(r(),U(()=>r().cover)))),y(G,se)},ia=G=>{ls(G,{size:88,class:"text-primary/70 icon-primary-glow"})};O(Pr,G=>{r(),U(()=>{var se;return(se=r())==null?void 0:se.cover})?G(Cn):G(ia,-1)})}var In=h(zr,2),Ln=o(In),Rn=o(Ln),On=h(Ln,2),_e=o(On),Ie=h(On,2);{var la=G=>{var se=Lf(),be=o(se);q(()=>L(be,(r(),U(()=>r().album)))),y(G,se)};O(Ie,G=>{r(),U(()=>{var se;return(se=r())==null?void 0:se.album})&&G(la)})}var Wa=h(In,2),oa=o(Wa),ca=o(oa),zs=o(ca),Ps=h(ca,2),Ts=o(Ps),ua=h(oa,2),As=h(Wa,2);{var Cs=G=>{var se=Rf(),be=o(se),rt=h(o(be),2),ft=o(rt),nt=h(be,2),Xe=h(o(nt),2);q(Te=>{L(ft,`${a()>0?"+":""}${Te??""}s`),Za(Xe,a())},[()=>(a(),U(()=>a().toFixed(1)))]),R("input",Xe,ue),y(G,se)};O(As,G=>{r(),U(()=>{var se;return((se=r())==null?void 0:se.lyrics)&&r().lyrics.length>0})&&G(Cs)})}var Is=h(qt,2),Ka=o(Is),Ls=h(o(Ka),2),j=o(Ls),ee=h(Ka,2),Me=o(ee);{var at=G=>{var se=jf();gr(se,7,()=>(r(),U(()=>r().lyrics)),be=>be.time,(be,rt,ft)=>{var nt=Of(),Xe=o(nt);q(()=>{Ke(nt,"data-lyric-index",f(ft)),xr(nt,1,`text-center whitespace-pre-line cursor-pointer rounded-2xl px-4 py-2 transition-all duration-300 leading-relaxed hover:bg-base-200/50
                  ${f(ft)===f(p)?"text-primary font-bold text-2xl md:text-3xl scale-105 bg-primary/10 shadow-sm":f(ft)===f(p)-1||f(ft)===f(p)+1?"text-base-content/70 text-lg md:text-xl":"text-base-content/35 text-base md:text-lg"}`),L(Xe,(f(rt),U(()=>f(rt).text)))}),R("click",nt,()=>ze(f(rt).time)),y(be,nt)}),y(G,se)},Je=G=>{var se=Vf(),be=o(se);ls(be,{size:64,class:"mb-4 text-primary/40"});var rt=h(be,2);{var ft=Xe=>{var Te=Uf();y(Xe,Te)},nt=Xe=>{var Te=Ff();y(Xe,Te)};O(rt,Xe=>{r(),U(()=>{var Te;return((Te=r())==null?void 0:Te.source)==="netease"})?Xe(ft):Xe(nt,-1)})}y(G,se)};O(Me,G=>{r(),U(()=>{var se;return((se=r())==null?void 0:se.lyrics)&&r().lyrics.length>0})?G(at):G(Je,-1)})}Lu(ee,G=>w(b,G),()=>f(b)),q((G,se)=>{L(Rn,(r(),U(()=>{var be;return((be=r())==null?void 0:be.title)||"未选择歌曲"}))),L(_e,(r(),U(()=>{var be;return((be=r())==null?void 0:be.artist)||"未知艺术家"}))),L(zs,G),L(Ts,se),Ke(ua,"max",i()||0),Za(ua,n()),L(j,(r(),U(()=>{var be;return((be=r())==null?void 0:be.title)||"未选择歌曲"})))},[()=>(n(),U(()=>H(n()))),()=>(i(),U(()=>H(i())))]),R("click",Y,()=>w(m,!1)),R("click",me,G=>G.stopPropagation()),R("click",qe,()=>w(m,!1)),R("input",ua,F),y(S,Y)};O(sn,S=>{f(m)&&S(Mr)})}q((S,Y)=>{Ke(Ne,"max",i()||0),Za(Ne,n()),L(jt,S),L(Nt,Y),L(cr,(r(),U(()=>{var me;return((me=r())==null?void 0:me.title)||"未选择歌曲"}))),Ft.disabled=l(),Ke(I,"title",(u(),U(()=>T[u()]))),M.disabled=l(),Ke(M,"title",c()?"暂停":"播放"),Pe.disabled=l(),ut!==(ut=d())&&(Ce.value=(Ce.__value=d())??"",ds(Ce,d())),Za(fr,g())},[()=>(n(),U(()=>H(n()))),()=>(i(),U(()=>H(i())))]),R("input",Ne,F),R("click",V,z),R("click",Ft,function(...S){Js==null||Js.apply(this,S)}),R("click",I,function(...S){Xs==null||Xs.apply(this,S)}),R("click",M,function(...S){Qs==null||Qs.apply(this,S)}),R("click",Pe,function(...S){os==null||os.apply(this,S)}),R("change",Ce,J),R("input",fr,P),y(e,Ee),Sr(),x()}nn(["input","click","change"]);var Wf=E('<img alt="头像"/>'),Kf=E('<div class="bg-primary text-primary-content flex items-center justify-center w-full h-full"><!></div>'),Gf=E('<p class="text-base-content/50 text-sm mt-1 max-w-xl"> </p>'),Yf=E('<span class="loading loading-spinner loading-sm"></span>'),Qf=E('<div class="alert alert-info mb-4 glass-card"><!> <span> </span></div>'),Jf=E('<div class="alert alert-error mb-4 glass-card"><span> </span></div>'),Xf=E('<img alt="封面" loading="lazy" class="w-full h-full object-cover"/>'),Zf=E('<tr><td><!></td><td><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl glass-card overflow-hidden flex items-center justify-center"><!></div> <span class="font-medium"> </span></div></td><td class="text-base-content/70"> </td><td class="text-base-content/50"> </td><td class="text-base-content/50"> </td><td><button class="btn btn-ghost btn-xs gap-1 rounded-full glass-hover"><!> 播放</button></td></tr>'),Bf=E('<span class="loading loading-spinner loading-sm"></span>'),ed=E('<div class="p-4 flex justify-center"><button class="btn btn-outline btn-sm rounded-full gap-2 glass-hover"><!> 加载更多搜索结果</button></div>'),td=E('<section class="mb-8"><div class="flex items-center justify-between mb-3"><h2 class="text-2xl font-bold flex items-center gap-2"><!> 搜索结果</h2> <span class="badge badge-neutral"> </span></div> <div class="overflow-x-auto glass-card rounded-box"><table class="table table-zebra"><thead><tr><th class="w-12">#</th><th>歌曲</th><th>歌手</th><th>专辑</th><th class="w-24">时长</th><th class="w-24">操作</th></tr></thead><tbody></tbody></table> <!></div></section>'),rd=E('<img alt="封面" loading="lazy" class="w-full h-full object-cover"/>'),nd=E('<tr><td><!></td><td><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl glass-card overflow-hidden flex items-center justify-center"><!></div> <div class="min-w-0"><p class="font-medium truncate"> </p> <p class="text-xs text-base-content/50 truncate"> </p></div></div></td><td class="text-base-content/70"> </td><td><button class="btn btn-ghost btn-xs gap-1 rounded-full glass-hover"><!> 播放</button></td></tr>'),ad=E('<div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th class="w-12">#</th><th>歌曲</th><th>歌手</th><th class="w-20">操作</th></tr></thead><tbody></tbody></table></div>'),sd=E('<div class="p-10 text-center text-base-content/50"><p class="text-lg">暂无喜欢的歌曲</p> <button class="btn btn-ghost btn-sm mt-3 rounded-full glass-hover">重新加载</button></div>'),id=E('<img alt="歌单封面" loading="lazy" class="w-full h-full object-cover"/>'),ld=E('<button class="card glass-card glass-hover text-left"><div class="card-body p-4"><div class="flex gap-3"><div class="w-16 h-16 rounded-2xl glass-card overflow-hidden flex items-center justify-center flex-shrink-0"><!></div> <div class="min-w-0"><h3 class="font-bold truncate"> </h3> <p class="text-xs text-base-content/50 mt-1"> </p> <p class="text-xs text-base-content/40 mt-1"> </p></div></div></div></button>'),od=E('<div class="col-span-full p-10 text-center text-base-content/50 glass-card rounded-box"><p class="text-lg">暂无歌单数据</p> <button class="btn btn-ghost btn-sm mt-3 rounded-full glass-hover">重新加载</button></div>'),cd=E('<img alt="歌单封面" loading="lazy" class="w-full h-full object-cover"/>'),ud=E('<tr><td><!></td><td class="font-medium"> </td><td class="text-base-content/70"> </td><td class="text-base-content/50"> </td><td><button class="btn btn-ghost btn-xs gap-1 rounded-full glass-hover"><!> 播放</button></td></tr>'),fd=E('<span class="loading loading-spinner loading-sm"></span>'),dd=E('<div class="p-4 flex justify-center"><button class="btn btn-outline btn-sm rounded-full glass-hover"><!> 加载更多歌单歌曲</button></div>'),vd=E('<table class="table table-zebra"><thead><tr><th class="w-12">#</th><th>歌曲</th><th>歌手</th><th>专辑</th><th class="w-20">操作</th></tr></thead><tbody></tbody></table> <!>',1),pd=E('<div class="p-10 text-center text-base-content/50">正在加载或歌单为空</div>'),hd=E('<div class="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"><div class="glass-panel rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"><div class="p-5 border-b border-base-content/10 flex justify-between items-center gap-4"><div class="flex items-center gap-3 min-w-0"><div class="w-14 h-14 rounded-2xl overflow-hidden glass-card flex-shrink-0 flex items-center justify-center"><!></div> <div class="min-w-0"><h2 class="text-xl font-bold truncate"> </h2> <p class="text-sm text-base-content/50"> </p></div></div> <button class="btn btn-ghost btn-circle btn-sm icon-btn-glass"><!></button></div> <div class="overflow-y-auto flex-1"><!></div></div></div>'),_d=E('<div class="mb-6"><div class="card glass-card glass-hover shadow"><div class="card-body"><div class="flex items-center justify-between gap-4 flex-wrap"><div class="flex items-center gap-4"><div class="avatar"><div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden"><!></div></div> <div><h1 class="text-3xl font-bold"> </h1> <p class="text-base-content/60 mt-1"> </p> <!></div></div> <div class="flex gap-2"><button class="btn btn-outline btn-sm gap-2 rounded-full glass-hover"><!> 刷新</button> <button class="btn btn-primary btn-sm gap-2 rounded-full"><!> 用户信息</button></div></div></div></div></div> <div class="card glass-card glass-hover mb-6"><div class="card-body"><h2 class="card-title gap-2"><!> 搜索网易云歌曲</h2> <div class="flex gap-2 flex-wrap"><input class="input input-bordered flex-1 min-w-64 bg-base-100/60" placeholder="输入歌曲名、歌手或专辑名..."/> <button class="btn btn-primary gap-2 rounded-full"><!> 搜索</button></div></div></div> <!> <!> <!> <div class="grid grid-cols-1 xl:grid-cols-2 gap-6"><section><div class="flex items-center justify-between mb-3"><h2 class="text-2xl font-bold flex items-center gap-2"><!> 我喜欢的音乐</h2> <span class="badge badge-neutral"> </span></div> <div class="card glass-card"><div class="card-body p-0"><!></div></div></section> <section><div class="flex items-center justify-between mb-3"><h2 class="text-2xl font-bold flex items-center gap-2"><!> 我的歌单</h2> <span class="badge badge-neutral"> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!></div></section></div> <!>',1),gd=E('<div class="hero min-h-[calc(100vh-64px-120px)]"><div class="hero-content text-center"><div class="max-w-md glass-card rounded-3xl p-8"><h1 class="text-5xl font-bold flex items-center justify-center gap-3"><!> Music Player</h1> <p class="py-6 text-base-content/70">一款基于 Tauri 2 + Svelte 5 构建的本地音乐播放器。 <br/> 登录网易云音乐后，可以查看喜欢的歌曲、收藏歌单，并搜索在线音乐。</p> <div class="flex gap-3 justify-center flex-wrap"><button class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"><!> 登录网易云</button> <button class="btn btn-secondary gap-2 rounded-full"><!> 本地音乐</button> <button class="btn btn-accent gap-2 rounded-full"><!> 音频可视化</button></div></div></div></div>'),md=E('<div class="p-6 pb-32 max-w-7xl mx-auto soft-gradient-bg min-h-full"><!></div>');function bd(e,t){kr(t,!1);const r=()=>ge(Qt,"$neteaseCookie",g),n=()=>ge(wr,"$ncmLoading",g),a=()=>ge(St,"$neteaseUser",g),i=()=>ge($r,"$ncmError",g),s=()=>ge(Yr,"$ncmSearchResults",g),l=()=>ge(Vi,"$currentSong",g),u=()=>ge(Jt,"$isPlaying",g),c=()=>ge(Wn,"$likedSongs",g),d=()=>ge(ka,"$userPlaylists",g),[g,_]=rn();let x=de(""),p=de(""),k=de(null),m=de([]),b=de("");const C=30,T=50;let N=0,z=de(!1),H=null,F=0,P=0,J=de(!1);ws(async()=>{r()&&await Ur()&&await ue()});async function ue(){w(b,""),w(p,"正在加载网易云数据...");try{await Promise.all([zo(50),Po(30)])}catch(V){w(b,V.message||"加载失败")}finally{w(p,"")}}async function ze(){const V=f(x).trim();if(!V){w(b,"请输入搜索关键词");return}const ve=++F;w(b,""),w(k,null),w(m,[]),N=0,w(z,!1);const xe=await gi(V,C,0,!1);ve===F&&w(z,xe.length>=C)}function Ee(){clearTimeout(H),H=setTimeout(()=>{f(x).trim()&&ze()},500)}async function je(){const V=f(x).trim();if(!V||!f(z)||n())return;N+=C,(await gi(V,C,N,!0)).length<C&&w(z,!1)}async function ye(V,ve){if(V!=null&&V.id){w(b,""),w(p,"正在获取播放地址...");try{const xe=ve.findIndex(Mt=>Mt.id===V.id);if(xe===-1)throw new Error("没有找到要播放的歌曲");const De=[...ve],tt=await Mo(De[xe]);if(De[xe]=tt,!tt.url)throw new Error("该歌曲暂无可用播放地址，可能是 VIP、版权或地区限制");vt.set(De),Da(xe)}catch(xe){console.error("播放网易云歌曲失败",xe),w(b,xe.message||"播放失败")}finally{w(p,"")}}}async function Ne(V){if(V!=null&&V.id){w(k,V),w(m,[]),w(b,""),P=0,w(J,!1),w(p,"正在加载歌单歌曲...");try{const ve=await mi(V.id,T,0);w(m,ve),w(J,ve.length>=T)}catch(ve){w(b,ve.message||"加载歌单失败")}finally{w(p,"")}}}async function ht(){var V;if(!(!((V=f(k))!=null&&V.id)||!f(J)||n())){P+=T;try{w(p,"正在加载更多歌单歌曲...");const ve=await mi(f(k).id,T,P),xe=new Set(f(m).map(tt=>tt.id)),De=[...f(m)];for(const tt of ve)xe.has(tt.id)||De.push(tt);w(m,De),ve.length<T&&w(J,!1)}catch(ve){w(b,ve.message||"加载更多失败")}finally{w(p,"")}}}function ct(V){return!V&&V!==0?"0":V>=1e4?`${(V/1e4).toFixed(1)}万`:String(V)}function jt(V){if(!V)return"--:--";const ve=Math.floor(V/1e3),xe=Math.floor(ve/60),De=ve%60;return`${String(xe).padStart(2,"0")}:${String(De).padStart(2,"0")}`}Dr();var Ue=md(),Nt=o(Ue);{var Fe=V=>{var ve=_d(),xe=Q(ve),De=o(xe),tt=o(De),Mt=o(tt),cr=o(Mt),yt=o(cr),Er=o(yt),zt=o(Er);{var Nr=j=>{var ee=Wf();q(()=>Ke(ee,"src",a().avatarUrl)),y(j,ee)},Ut=j=>{var ee=Kf(),Me=o(ee);Na(Me,{size:34}),y(j,ee)};O(zt,j=>{a().avatarUrl?j(Nr):j(Ut,-1)})}var ur=h(yt,2),Ft=o(ur),an=o(Ft),I=h(Ft,2),B=o(I),$=h(I,2);{var A=j=>{var ee=Gf(),Me=o(ee);q(()=>L(Me,a().signature)),y(j,ee)};O($,j=>{a().signature&&j(A)})}var K=h(cr,2),M=o(K),he=o(M);Eo(he,{size:16});var W=h(M,2),we=o(W);Na(we,{size:16});var pe=h(xe,2),Pe=o(pe),ae=o(Pe),Qe=o(ae);$a(Qe,{size:22,class:"text-primary"});var Ce=h(ae,2),ut=o(Ce),fe=h(ut,2),Pt=o(fe);{var fr=j=>{var ee=Yf();y(j,ee)},sn=j=>{$a(j,{size:17})};O(Pt,j=>{n()?j(fr):j(sn,-1)})}var Mr=h(pe,2);{var S=j=>{var ee=Qf(),Me=o(ee);Dn(Me,{size:18,class:"animate-spin"});var at=h(Me,2),Je=o(at);q(()=>L(Je,f(p))),y(j,ee)};O(Mr,j=>{f(p)&&j(S)})}var Y=h(Mr,2);{var me=j=>{var ee=Jf(),Me=o(ee),at=o(Me);q(()=>L(at,f(b)||i())),y(j,ee)};O(Y,j=>{(f(b)||i())&&j(me)})}var qe=h(Y,2);{var Vt=j=>{var ee=td(),Me=o(ee),at=o(Me),Je=o(at);$a(Je,{size:24,class:"text-primary"});var G=h(at,2),se=o(G),be=h(Me,2),rt=o(be),ft=h(o(rt));gr(ft,7,s,Te=>Te.id,(Te,Ze,Tt)=>{var Ht=Zf(),dr=o(Ht),er=o(dr);{var Tr=st=>{Ir(st,{size:15,class:"text-primary",fill:"currentColor"})},_t=st=>{var xt=xa();q(()=>L(xt,f(Tt)+1)),y(st,xt)};O(er,st=>{var xt;((xt=l())==null?void 0:xt.id)===f(Ze).id&&u()?st(Tr):st(_t,-1)})}var Ae=h(dr),tr=o(Ae),ln=o(tr),jn=o(ln);{var fa=st=>{var xt=Xf();q(()=>Ke(xt,"src",f(Ze).cover)),y(st,xt)},da=st=>{wa(st,{size:20,class:"text-primary/60"})};O(jn,st=>{f(Ze).cover?st(fa):st(da,-1)})}var Dt=h(ln,2),At=o(Dt),$e=h(Ae),dt=o($e),on=h($e),cn=o(on),Un=h(on),Rs=o(Un),Ga=h(Un),Ya=o(Ga),Qa=o(Ya);Ir(Qa,{size:13,fill:"currentColor"}),q(st=>{var xt;xr(Ht,1,`hover ${((xt=l())==null?void 0:xt.id)===f(Ze).id?"bg-primary/10":""}`),L(At,f(Ze).title),L(dt,f(Ze).artist),L(cn,f(Ze).album||"-"),L(Rs,st)},[()=>jt(f(Ze).duration)]),R("click",Ya,()=>ye(f(Ze),s())),y(Te,Ht)});var nt=h(rt,2);{var Xe=Te=>{var Ze=ed(),Tt=o(Ze),Ht=o(Tt);{var dr=er=>{var Tr=Bf();y(er,Tr)};O(Ht,er=>{n()&&er(dr)})}q(()=>Tt.disabled=n()),R("click",Tt,je),y(Te,Ze)};O(nt,Te=>{f(z)&&Te(Xe)})}q(()=>L(se,`${s().length??""} 首`)),y(j,ee)};O(qe,j=>{s().length>0&&j(Vt)})}var qt=h(qe,2),zr=o(qt),Pr=o(zr),Cn=o(Pr),ia=o(Cn);Yu(ia,{size:24,class:"text-error",fill:"currentColor"});var In=h(Cn,2),Ln=o(In),Rn=h(Pr,2),On=o(Rn),_e=o(On);{var Ie=j=>{var ee=ad(),Me=o(ee),at=h(o(Me));gr(at,7,c,Je=>Je.id,(Je,G,se)=>{var be=nd(),rt=o(be),ft=o(rt);{var nt=$e=>{Ir($e,{size:15,class:"text-primary",fill:"currentColor"})},Xe=$e=>{var dt=xa();q(()=>L(dt,f(se)+1)),y($e,dt)};O(ft,$e=>{var dt;((dt=l())==null?void 0:dt.id)===f(G).id&&u()?$e(nt):$e(Xe,-1)})}var Te=h(rt),Ze=o(Te),Tt=o(Ze),Ht=o(Tt);{var dr=$e=>{var dt=rd();q(()=>Ke(dt,"src",f(G).cover)),y($e,dt)},er=$e=>{wa($e,{size:20,class:"text-primary/60"})};O(Ht,$e=>{f(G).cover?$e(dr):$e(er,-1)})}var Tr=h(Tt,2),_t=o(Tr),Ae=o(_t),tr=h(_t,2),ln=o(tr),jn=h(Te),fa=o(jn),da=h(jn),Dt=o(da),At=o(Dt);Ir(At,{size:13,fill:"currentColor"}),q(()=>{var $e;xr(be,1,`hover ${(($e=l())==null?void 0:$e.id)===f(G).id?"bg-primary/10":""}`),L(Ae,f(G).title),L(ln,f(G).album||"未知专辑"),L(fa,f(G).artist)}),R("click",Dt,()=>ye(f(G),c())),y(Je,be)}),y(j,ee)},la=j=>{var ee=sd(),Me=h(o(ee),2);R("click",Me,ue),y(j,ee)};O(_e,j=>{c().length>0?j(Ie):j(la,-1)})}var Wa=h(zr,2),oa=o(Wa),ca=o(oa),zs=o(ca);Ds(zs,{size:24,class:"text-secondary"});var Ps=h(ca,2),Ts=o(Ps),ua=h(oa,2),As=o(ua);{var Cs=j=>{var ee=re(),Me=Q(ee);gr(Me,1,d,at=>at.id,(at,Je)=>{var G=ld(),se=o(G),be=o(se),rt=o(be),ft=o(rt);{var nt=_t=>{var Ae=id();q(()=>Ke(Ae,"src",f(Je).coverImgUrl)),y(_t,Ae)},Xe=_t=>{Ds(_t,{size:28,class:"text-secondary/70"})};O(ft,_t=>{f(Je).coverImgUrl?_t(nt):_t(Xe,-1)})}var Te=h(rt,2),Ze=o(Te),Tt=o(Ze),Ht=h(Ze,2),dr=o(Ht),er=h(Ht,2),Tr=o(er);q(_t=>{L(Tt,f(Je).name),L(dr,`${(f(Je).trackCount||0)??""} 首歌曲`),L(Tr,`播放 ${_t??""}`)},[()=>ct(f(Je).playCount||0)]),R("click",G,()=>Ne(f(Je))),y(at,G)}),y(j,ee)},Is=j=>{var ee=od(),Me=h(o(ee),2);R("click",Me,ue),y(j,ee)};O(As,j=>{d().length>0?j(Cs):j(Is,-1)})}var Ka=h(qt,2);{var Ls=j=>{var ee=hd(),Me=o(ee),at=o(Me),Je=o(at),G=o(Je),se=o(G);{var be=Ae=>{var tr=cd();q(()=>Ke(tr,"src",f(k).coverImgUrl)),y(Ae,tr)},rt=Ae=>{Ds(Ae,{size:26})};O(se,Ae=>{f(k).coverImgUrl?Ae(be):Ae(rt,-1)})}var ft=h(G,2),nt=o(ft),Xe=o(nt),Te=h(nt,2),Ze=o(Te),Tt=h(Je,2),Ht=o(Tt);ji(Ht,{size:18});var dr=h(at,2),er=o(dr);{var Tr=Ae=>{var tr=vd(),ln=Q(tr),jn=h(o(ln));gr(jn,7,()=>f(m),Dt=>Dt.id,(Dt,At,$e)=>{var dt=ud(),on=o(dt),cn=o(on);{var Un=Ar=>{Ir(Ar,{size:15,class:"text-primary",fill:"currentColor"})},Rs=Ar=>{var va=xa();q(()=>L(va,f($e)+1)),y(Ar,va)};O(cn,Ar=>{var va;((va=l())==null?void 0:va.id)===f(At).id&&u()?Ar(Un):Ar(Rs,-1)})}var Ga=h(on),Ya=o(Ga),Qa=h(Ga),st=o(Qa),xt=h(Qa),Ro=o(xt),Oo=h(xt),qi=o(Oo),jo=o(qi);Ir(jo,{size:13,fill:"currentColor"}),q(()=>{var Ar;xr(dt,1,`hover ${((Ar=l())==null?void 0:Ar.id)===f(At).id?"bg-primary/10":""}`),L(Ya,f(At).title),L(st,f(At).artist),L(Ro,f(At).album||"-")}),R("click",qi,()=>ye(f(At),f(m))),y(Dt,dt)});var fa=h(ln,2);{var da=Dt=>{var At=dd(),$e=o(At),dt=o($e);{var on=cn=>{var Un=fd();y(cn,Un)};O(dt,cn=>{n()&&cn(on)})}q(()=>$e.disabled=n()),R("click",$e,ht),y(Dt,At)};O(fa,Dt=>{f(J)&&Dt(da)})}y(Ae,tr)},_t=Ae=>{var tr=pd();y(Ae,tr)};O(er,Ae=>{f(m).length>0?Ae(Tr):Ae(_t,-1)})}q(()=>{L(Xe,f(k).name),L(Ze,`${f(m).length??""} 首歌曲`)}),R("click",ee,()=>w(k,null)),R("click",Me,Ae=>Ae.stopPropagation()),R("click",Tt,()=>w(k,null)),y(j,ee)};O(Ka,j=>{f(k)&&j(Ls)})}q(()=>{L(an,`欢迎回来，${a().nickname??""}`),L(B,`UID：${a().userId??""}`),fe.disabled=n(),L(Ln,`${c().length??""} 首`),L(Ts,`${d().length??""} 个`)}),R("click",M,ue),R("click",W,()=>mt("/user")),R("input",ut,Ee),R("keydown",ut,j=>{j.key==="Enter"&&ze()}),Gr(ut,()=>f(x),j=>w(x,j)),R("click",fe,ze),y(V,ve)},Ve=V=>{var ve=gd(),xe=o(ve),De=o(xe),tt=o(De),Mt=o(tt);wa(Mt,{size:48,class:"text-primary icon-primary-glow"});var cr=h(tt,4),yt=o(cr),Er=o(yt);kn(Er,{size:18});var zt=h(yt,2),Nr=o(zt);Hn(Nr,{size:18});var Ut=h(zt,2),ur=o(Ut);So(ur,{size:18}),R("click",yt,()=>mt("/login")),R("click",zt,()=>mt("/collection")),R("click",Ut,()=>mt("/visualizer")),y(V,ve)};O(Nt,V=>{a()?V(Fe):V(Ve,-1)})}y(e,Ue),Sr(),_()}nn(["click","input","keydown"]);async function Ms(e,t={},r){return window.__TAURI_INTERNALS__.invoke(e,t,r)}function gl(e,t="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,t)}function yd(e){if(e!==void 0){if(typeof e=="string")return e;if("ok"in e&&"cancel"in e)return{OkCancelCustom:[e.ok,e.cancel]};if("yes"in e&&"no"in e&&"cancel"in e)return{YesNoCancelCustom:[e.yes,e.no,e.cancel]};if("ok"in e)return{OkCustom:e.ok}}}async function xd(e={}){return typeof e=="object"&&Object.freeze(e),await Ms("plugin:dialog|open",{options:e})}async function wd(e,t){return await Ms("plugin:dialog|message",{message:e,title:t==null?void 0:t.title,kind:t==null?void 0:t.kind,buttons:yd(t==null?void 0:t.buttons)})}async function Lo(e,t){const r=typeof t=="string"?{title:t}:t,n=(r==null?void 0:r.okLabel)||(r==null?void 0:r.cancelLabel),a=(r==null?void 0:r.okLabel)??"Ok";return await wd(e,{title:r==null?void 0:r.title,kind:r==null?void 0:r.kind,buttons:n?{ok:a,cancel:r.cancelLabel??"Cancel"}:"OkCancel"})===a}var ml;(function(e){e[e.Audio=1]="Audio",e[e.Cache=2]="Cache",e[e.Config=3]="Config",e[e.Data=4]="Data",e[e.LocalData=5]="LocalData",e[e.Document=6]="Document",e[e.Download=7]="Download",e[e.Picture=8]="Picture",e[e.Public=9]="Public",e[e.Video=10]="Video",e[e.Resource=11]="Resource",e[e.Temp=12]="Temp",e[e.AppConfig=13]="AppConfig",e[e.AppData=14]="AppData",e[e.AppLocalData=15]="AppLocalData",e[e.AppCache=16]="AppCache",e[e.AppLog=17]="AppLog",e[e.Desktop=18]="Desktop",e[e.Executable=19]="Executable",e[e.Font=20]="Font",e[e.Home=21]="Home",e[e.Runtime=22]="Runtime",e[e.Template=23]="Template"})(ml||(ml={}));var bl;(function(e){e[e.Start=0]="Start",e[e.Current=1]="Current",e[e.End=2]="End"})(bl||(bl={}));async function $d(e,t){if(e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");return await Ms("plugin:fs|read_dir",{path:e instanceof URL?e.toString():e,options:t})}async function kd(e,t){if(e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");const r=await Ms("plugin:fs|read_text_file",{path:e instanceof URL?e.toString():e,options:t}),n=r instanceof ArrayBuffer?r:Uint8Array.from(r);return new TextDecoder("utf-8").decode(n)}var Sd=E("<!> 扫描中...",1),Ed=E("<!> 选择文件夹",1),Nd=E('<div class="alert glass-card mb-4 flex justify-between items-center flex-wrap gap-2"><div class="flex items-center gap-2 min-w-0"><!> <span class="truncate"> </span></div> <span class="badge badge-primary"> </span></div>'),Md=E('<div class="mb-4"><label class="input input-bordered w-full max-w-md bg-base-100/60 flex items-center gap-2"><!> <input type="text" placeholder="搜索歌曲、艺术家、文件名..." class="grow"/></label></div>'),zd=E('<div class="glass-card rounded-3xl flex flex-col items-center justify-center py-20 text-base-content/50"><div class="w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-5"><!></div> <p class="text-lg font-semibold">还没有扫描本地音乐</p> <p class="text-sm mt-2">点击右上角按钮选择音乐文件夹</p> <p class="text-sm mt-1 text-base-content/40">文件名格式建议：「艺术家 - 歌曲名.mp3」</p> <p class="text-xs mt-4 text-base-content/30">自动匹配同名封面和歌词</p></div>'),Pd=E('<div class="glass-card rounded-3xl text-center py-10 text-base-content/50"><!> <p class="text-lg">没有找到匹配的歌曲</p> <button class="btn btn-ghost btn-sm rounded-full glass-hover mt-3">清除搜索</button></div>'),Td=E('<img alt="封面" loading="lazy" class="w-full h-full object-cover"/>'),Ad=E('<p class="text-xs text-accent/70 flex items-center gap-1 mt-0.5"><!> 已匹配歌词</p>'),Cd=E('<span class="badge badge-primary badge-sm">播放中</span>'),Id=E('<span class="badge badge-ghost badge-sm">本地</span>'),Ld=E('<tr><td><!></td><td><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl glass-card overflow-hidden flex items-center justify-center"><!></div> <div class="min-w-0"><p class="font-medium truncate"> </p> <!></div></div></td><td class="text-base-content/70"> </td><td class="text-xs text-base-content/50 max-w-xs truncate"> </td><td><!></td><td><button class="btn btn-ghost btn-xs gap-1 rounded-full glass-hover"><!> 播放</button></td></tr>'),Rd=E('<div class="overflow-x-auto glass-card rounded-box"><table class="table table-zebra w-full"><thead><tr><th class="w-12">#</th><th>歌曲名</th><th>艺术家</th><th>文件名</th><th class="w-24">状态</th><th class="w-20">操作</th></tr></thead><tbody></tbody></table></div>'),Od=E('<div class="p-6 pb-32 min-h-full soft-gradient-bg"><div class="max-w-7xl mx-auto"><div class="flex items-center justify-between mb-6 flex-wrap gap-3"><div><h1 class="text-3xl font-bold flex items-center gap-2"><!> 本地音乐</h1> <p class="text-sm text-base-content/50 mt-2">扫描本地文件夹，自动匹配同名封面和 LRC 歌词</p></div> <button class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"><!></button></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div class="glass-card rounded-3xl p-4 flex items-center gap-3"><div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center"><!></div> <div><p class="font-semibold">音频格式</p> <p class="text-xs text-base-content/50"> </p></div></div> <div class="glass-card rounded-3xl p-4 flex items-center gap-3"><div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center"><!></div> <div><p class="font-semibold">自动封面</p> <p class="text-xs text-base-content/50">同名图片或 cover/folder</p></div></div> <div class="glass-card rounded-3xl p-4 flex items-center gap-3"><div class="w-11 h-11 rounded-2xl glass-card flex items-center justify-center"><!></div> <div><p class="font-semibold">歌词匹配</p> <p class="text-xs text-base-content/50">同名 .lrc 文件</p></div></div></div> <!> <!> <!> <!> <!></div></div>');function jd(e,t){kr(t,!1);const r=()=>ge(Vi,"$currentSong",a),n=()=>ge(Jt,"$isPlaying",a),[a,i]=rn(),s=de(),l=[".mp3",".wav",".flac",".ogg",".m4a",".aac",".wma"],u=[".jpg",".jpeg",".png",".webp",".bmp",".gif"],c=[".lrc"],d=["cover","folder","front","album","art"];let g=de([]),_=de(""),x=de(!1),p=de("");function k(I){return I.replace(/\\/g,"/").replace(/\/+$/,"")}function m(I){if(!I)return null;const B=I.split(`
`),$=[],A=/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;for(const K of B){const M=[];let he;for(;(he=A.exec(K))!==null;){const W=parseInt(he[1],10),we=parseInt(he[2],10),pe=he[3]||"00",Pe=parseInt(pe.padEnd(3,"0"),10);M.push(W*60+we+Pe/1e3)}if(M.length>0){const W=K.replace(A,"").trim();if(W)for(const we of M)$.push({time:we,text:W})}}return $.sort((K,M)=>K.time-M.time)}async function b(I){const B=await $d(I);let $=[],A=[],K=new Map,M=[];for(const W of B){const pe=k(I)+"/"+W.name,Pe=W.name.toLowerCase();if(W.isDirectory){const ae=await b(pe);M=M.concat(ae)}else if(W.isFile){if(l.some(ae=>Pe.endsWith(ae))){const ae=W.name.replace(/\.[^/.]+$/,""),Qe=ae.split(" - ");$.push({title:Qe.length>1?Qe[1].trim():ae,artist:Qe.length>1?Qe[0].trim():"未知艺术家",filename:W.name,url:gl(pe),cover:null,lyrics:null,source:"local",_rawName:ae.toLowerCase()})}else if(u.some(ae=>Pe.endsWith(ae)))A.push({path:gl(pe),rawName:W.name.replace(/\.[^/.]+$/,"").toLowerCase()});else if(c.some(ae=>Pe.endsWith(ae)))try{const ae=W.name.replace(/\.[^/.]+$/,"").toLowerCase(),Qe=await kd(pe),Ce=m(Qe);Ce&&Ce.length>0&&K.set(ae,Ce)}catch(ae){console.warn("读取歌词失败:",W.name,ae)}}}let he=null;for(const W of A)if(d.includes(W.rawName)){he=W.path;break}for(const W of $){const we=A.find(Pe=>Pe.rawName===W._rawName);W.cover=we?we.path:he;const pe=K.get(W._rawName);pe&&(W.lyrics=pe),delete W._rawName}return[...$,...M]}async function C(){try{const I=await xd({directory:!0,multiple:!1,title:"选择音乐文件夹"});if(!I)return;w(_,I),w(x,!0),w(g,[]);const B=await b(I);w(g,B),w(x,!1),localStorage.setItem("lastFolder",I),localStorage.setItem("savedPlaylist",JSON.stringify(f(g)))}catch(I){console.error("扫描文件夹失败:",I),w(x,!1)}}function T(){const I=localStorage.getItem("lastFolder"),B=localStorage.getItem("savedPlaylist");if(B)try{w(g,JSON.parse(B)),w(_,I||"已恢复的列表")}catch($){console.error("恢复失败",$)}}Mf(),T();function N(I){const B=f(g).findIndex($=>$.url===I.url);B!==-1&&(vt.set(f(g)),Da(B))}fs(()=>(f(p),f(g)),()=>{w(s,f(p).trim()?f(g).filter(I=>I.title.toLowerCase().includes(f(p).toLowerCase())||I.artist.toLowerCase().includes(f(p).toLowerCase())||I.filename.toLowerCase().includes(f(p).toLowerCase())):f(g))}),Ai(),Dr();var z=Od(),H=o(z),F=o(H),P=o(F),J=o(P),ue=o(J);Hn(ue,{size:30,class:"text-primary icon-primary-glow"});var ze=h(P,2),Ee=o(ze);{var je=I=>{var B=Sd(),$=Q(B);Dn($,{size:18,class:"animate-spin"}),y(I,B)},ye=I=>{var B=Ed(),$=Q(B);Hn($,{size:18}),y(I,B)};O(Ee,I=>{f(x)?I(je):I(ye,-1)})}var Ne=h(F,2),ht=o(Ne),ct=o(ht),jt=o(ct);Ku(jt,{size:22,class:"text-primary"});var Ue=h(ct,2),Nt=h(o(Ue),2),Fe=o(Nt),Ve=h(ht,2),V=o(Ve),ve=o(V);Ju(ve,{size:22,class:"text-secondary"});var xe=h(Ve,2),De=o(xe),tt=o(De);dl(tt,{size:22,class:"text-accent"});var Mt=h(Ne,2);{var cr=I=>{var B=Nd(),$=o(B),A=o($);Hn(A,{size:18,class:"text-primary flex-shrink-0"});var K=h(A,2),M=o(K),he=h($,2),W=o(he);q(()=>{L(M,f(_)),L(W,`${f(g),U(()=>f(g).length)??""} 首歌曲`)}),y(I,B)};O(Mt,I=>{f(_)&&I(cr)})}var yt=h(Mt,2);{var Er=I=>{var B=Md(),$=o(B),A=o($);$a(A,{size:18,class:"text-base-content/50"});var K=h(A,2);Gr(K,()=>f(p),M=>w(p,M)),y(I,B)};O(yt,I=>{f(g),U(()=>f(g).length>0)&&I(Er)})}var zt=h(yt,2);{var Nr=I=>{var B=zd(),$=o(B),A=o($);Hn(A,{size:42,class:"text-primary/70"}),y(I,B)};O(zt,I=>{f(g),f(x),U(()=>f(g).length===0&&!f(x))&&I(Nr)})}var Ut=h(zt,2);{var ur=I=>{var B=Pd(),$=o(B);$a($,{size:44,class:"mx-auto mb-3 text-base-content/30"});var A=h($,4);R("click",A,()=>w(p,"")),y(I,B)};O(Ut,I=>{f(s),f(g),U(()=>f(s).length===0&&f(g).length>0)&&I(ur)})}var Ft=h(Ut,2);{var an=I=>{var B=Rd(),$=o(B),A=h(o($));gr(A,7,()=>f(s),K=>K.url,(K,M,he)=>{var W=Ld(),we=o(W),pe=o(we);{var Pe=_e=>{Ir(_e,{size:15,class:"text-primary",fill:"currentColor"})},ae=_e=>{var Ie=xa();q(()=>L(Ie,f(he)+1)),y(_e,Ie)};O(pe,_e=>{r(),f(M),n(),U(()=>{var Ie;return((Ie=r())==null?void 0:Ie.url)===f(M).url&&n()})?_e(Pe):_e(ae,-1)})}var Qe=h(we),Ce=o(Qe),ut=o(Ce),fe=o(ut);{var Pt=_e=>{var Ie=Td();q(()=>Ke(Ie,"src",(f(M),U(()=>f(M).cover)))),y(_e,Ie)},fr=_e=>{ls(_e,{size:20,class:"text-primary/60"})};O(fe,_e=>{f(M),U(()=>f(M).cover)?_e(Pt):_e(fr,-1)})}var sn=h(ut,2),Mr=o(sn),S=o(Mr),Y=h(Mr,2);{var me=_e=>{var Ie=Ad(),la=o(Ie);dl(la,{size:12}),y(_e,Ie)};O(Y,_e=>{f(M),U(()=>f(M).lyrics)&&_e(me)})}var qe=h(Qe),Vt=o(qe),qt=h(qe),zr=o(qt),Pr=h(qt),Cn=o(Pr);{var ia=_e=>{var Ie=Cd();y(_e,Ie)},In=_e=>{var Ie=Id();y(_e,Ie)};O(Cn,_e=>{r(),f(M),n(),U(()=>{var Ie;return((Ie=r())==null?void 0:Ie.url)===f(M).url&&n()})?_e(ia):_e(In,-1)})}var Ln=h(Pr),Rn=o(Ln),On=o(Rn);Ir(On,{size:13,fill:"currentColor"}),q(()=>{xr(W,1,`hover cursor-pointer ${r(),f(M),U(()=>{var _e;return((_e=r())==null?void 0:_e.url)===f(M).url?"bg-primary/10":""})??""}`),L(S,(f(M),U(()=>f(M).title))),L(Vt,(f(M),U(()=>f(M).artist))),L(zr,(f(M),U(()=>f(M).filename)))}),R("dblclick",W,()=>N(f(M))),R("click",Rn,()=>N(f(M))),y(K,W)}),y(I,B)};O(Ft,I=>{f(s),U(()=>f(s).length>0)&&I(an)})}q(I=>{ze.disabled=f(x),L(Fe,I)},[()=>U(()=>l.join(", "))]),R("click",ze,C),y(e,z),Sr(),i()}nn(["click","dblclick"]);var Ud=E('<div class="flex items-center justify-center min-h-[calc(100vh-64px-120px)]"><div class="text-center"><div class="text-6xl mb-4">🎵</div> <h2 class="text-2xl font-bold mb-2">音频可视化</h2> <p class="text-base-content/60">功能开发中，敬请期待...</p> <div class="mt-4"><span class="loading loading-bars loading-lg text-primary"></span></div></div></div>');function Fd(e){var t=Ud();y(e,t)}var Vd=E('<div class="p-6 pb-32"><h1 class="text-2xl font-bold mb-6">📁 数据管理</h1> <div class="grid gap-4 max-w-2xl"><div class="card bg-base-200"><div class="card-body"><h2 class="card-title">📋 播放列表</h2> <p class="text-base-content/70">当前播放列表中有 <span class="badge badge-primary"> </span> 首歌曲</p> <div class="card-actions justify-end mt-2 gap-2"><button class="btn btn-outline btn-sm">📤 导出 JSON</button> <button class="btn btn-outline btn-sm">📥 导入 JSON</button> <button class="btn btn-error btn-sm">🗑️ 清空列表</button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title">ℹ️ 关于</h2> <div class="text-sm text-base-content/70 space-y-1"><p>🔧 框架：Tauri 2 + Svelte 5</p> <p>🎨 UI：TailwindCSS + DaisyUI</p> <p>📦 包管理器：Bun</p> <p>🏗️ 构建工具：Vite</p> <p>💾 持久化：localStorage（自动保存）</p></div></div></div></div></div>');function qd(e,t){kr(t,!1);const r=()=>ge(vt,"$playlist",n),[n,a]=rn();async function i(){await Lo("确定要清空播放列表吗？此操作不可恢复。",{title:"⚠️ 确认清空",type:"warning"})&&(vt.set([]),localStorage.removeItem("savedPlaylist"),localStorage.removeItem("lastFolder"))}function s(){const T=JSON.stringify(r(),null,2),N=new Blob([T],{type:"application/json"}),z=URL.createObjectURL(N),H=document.createElement("a");H.href=z,H.download="playlist.json",H.click(),URL.revokeObjectURL(z)}function l(){const T=document.createElement("input");T.type="file",T.accept=".json",T.onchange=async N=>{const z=N.target.files[0];if(z)try{const H=await z.text(),F=JSON.parse(H);Array.isArray(F)?(vt.set(F),localStorage.setItem("savedPlaylist",JSON.stringify(F)),alert(`成功导入 ${F.length} 首歌曲`)):alert("文件格式不正确")}catch(H){alert("导入失败："+H.message)}},T.click()}Dr();var u=Vd(),c=h(o(u),2),d=o(c),g=o(d),_=h(o(g),2),x=h(o(_)),p=o(x),k=h(_,2),m=o(k),b=h(m,2),C=h(b,2);q(()=>{L(p,r().length),C.disabled=r().length===0}),R("click",m,s),R("click",b,l),R("click",C,i),y(e,u),Sr(),a()}nn(["click"]);var Hd=E('<div class="flex gap-2"><label class="input input-bordered input-sm flex-1 bg-base-100/60 flex items-center gap-2"><!> <input type="text" placeholder="http://localhost:3000" class="grow"/></label> <button class="btn btn-primary btn-sm gap-1 rounded-full"><!> 保存</button> <button class="btn btn-ghost btn-sm btn-circle icon-btn-glass" title="取消"><!></button></div>'),Dd=E('<div class="flex justify-between items-center gap-3"><div class="min-w-0"><div class="flex items-center gap-2 text-sm text-base-content/70"><!> <span class="truncate"> </span></div> <p class="text-xs text-base-content/40 mt-1">请确保已部署 NeteaseCloudMusicApi 并开启 CORS</p></div> <button class="btn btn-ghost btn-xs rounded-full glass-hover">修改</button></div>'),Wd=E("<button><!> </button>"),Kd=E('<div class="alert alert-error mb-4 glass-card"><span class="bg-amber-100"> </span></div>'),Gd=E('<div class="bg-white p-3 rounded-2xl"><img alt="二维码" class="w-48 h-48"/></div>'),Yd=E('<div class="card glass-card"><div class="card-body items-center text-center"><div class="w-56 h-56 rounded-3xl glass-card flex items-center justify-center overflow-hidden"><!></div> <p class="text-base-content/80 mt-4 min-h-6"> </p> <p class="text-xs text-base-content/40">使用网易云音乐 APP 扫码确认登录</p> <button class="btn btn-outline btn-sm gap-2 rounded-full mt-2 glass-hover"><!> 刷新二维码</button></div></div>'),Qd=E('<label class="input input-bordered bg-base-100/60 flex items-center gap-2"><!> <input type="password" placeholder="密码" class="grow"/></label>'),Jd=E('<div class="flex gap-2"><label class="input input-bordered bg-base-100/60 flex-1 flex items-center gap-2"><!> <input type="text" placeholder="验证码" class="grow"/></label> <button class="btn btn-outline rounded-full"> </button></div>'),Xd=E('<div class="card glass-card"><div class="card-body gap-4"><label class="input input-bordered bg-base-100/60 flex items-center gap-2"><!> <input type="tel" placeholder="手机号" class="grow"/></label> <div class="grid grid-cols-2 gap-2"><button><!> 密码登录</button> <button><!> 验证码登录</button></div> <!> <button class="btn btn-primary w-full rounded-full gap-2 shadow-lg shadow-primary/25"><!> 登录</button></div></div>'),Zd=E('<div class="card glass-card"><div class="card-body gap-4"><label class="input input-bordered bg-base-100/60 flex items-center gap-2"><!> <input type="email" placeholder="网易邮箱，例如 xxx@163.com" class="grow"/></label> <label class="input input-bordered bg-base-100/60 flex items-center gap-2"><!> <input type="password" placeholder="密码" class="grow"/></label> <button class="btn btn-primary w-full rounded-full gap-2 shadow-lg shadow-primary/25"><!> 登录</button></div></div>'),Bd=E('<div class="p-6 pb-32 min-h-full soft-gradient-bg"><div class="max-w-xl mx-auto"><div class="text-center mb-8"><div class="inline-flex items-center justify-center w-16 h-16 rounded-3xl glass-card mb-4"><!></div> <h1 class="text-3xl font-bold flex items-center justify-center gap-2">网易云音乐登录</h1> <p class="text-sm text-base-content/50 mt-2">登录后可同步喜欢的歌曲、收藏歌单和在线搜索</p></div> <div class="card glass-card glass-hover mb-6"><div class="card-body p-4"><!></div></div> <div class="glass-card rounded-3xl p-2 mb-6"><div class="grid grid-cols-3 gap-2"></div></div> <!> <!> <!> <!></div></div>');function ev(e,t){kr(t,!1);const r=()=>ge(Qt,"$neteaseCookie",a),n=()=>ge(Ma,"$apiBaseUrl",a),[a,i]=rn();let s=de("qr"),l=de(!1),u=de(""),c="",d=de(""),g=de(""),_=!1,x=null,p=de(!1),k=de(""),m=de(""),b=de(""),C=de("password"),T=de(0),N=null,z=de(""),H=de(""),F=de(!1),P=de("");const J=[{key:"qr",label:"二维码",icon:ef},{key:"phone",label:"手机号",icon:pl},{key:"email",label:"邮箱",icon:fl}];r()&&Ur().then($=>{$&&mt("/")}),ws(()=>{f(s)==="qr"&&Ee()}),ju(()=>{ye(),N&&clearInterval(N)});function ue(){w(u,n()),w(l,!0)}function ze(){f(u).trim()&&Ma.set(f(u).trim()),w(l,!1)}async function Ee(){var $,A;if(f(p)){console.log("[QR] Already starting, skip");return}w(p,!0),w(P,""),w(g,"正在获取二维码..."),w(d,""),ye();try{console.log("[QR] Step 1: Getting key...");const K=await et("/login/qr/key");if(console.log("[QR] Key response:",K),c=(($=K==null?void 0:K.data)==null?void 0:$.unikey)||(K==null?void 0:K.unikey),!c)throw new Error("获取二维码 Key 失败，响应中无 unikey");console.log("[QR] Step 2: Creating QR with key:",c);const M=await et("/login/qr/create",{key:c,qrimg:"true"});if(console.log("[QR] Create response:",M),w(d,((A=M==null?void 0:M.data)==null?void 0:A.qrimg)||(M==null?void 0:M.qrimg)),!f(d))throw new Error("获取二维码图片失败");w(g,"请使用网易云音乐 APP 扫码登录"),_=!0,je()}catch(K){w(g,""),w(P,"获取二维码失败："+(K.message||"未知错误")),console.error("[QR] Failed:",K)}finally{w(p,!1)}}async function je(){if(!(!_||!c))try{const $=await et("/login/qr/check",{key:c}),A=$==null?void 0:$.code;if(A===801)w(g,"等待扫码...");else if(A===802)w(g,`扫码成功，等待确认... ${$.nickname?"("+$.nickname+")":""}`);else if(A===803){w(g,"登录成功！"),_=!1,$.cookie&&Qt.set($.cookie),$.nickname&&St.set({userId:$.userId||0,nickname:$.nickname,avatarUrl:$.avatarUrl||"",signature:""}),await Ur(),mt("/");return}else if(A===800){w(g,"二维码已过期，正在刷新..."),_=!1,w(d,""),setTimeout(()=>Ee(),1e3);return}_&&(x=setTimeout(je,5e3))}catch{w(g,"检查状态失败，正在重试..."),_&&(x=setTimeout(je,3e3))}}function ye(){_=!1,x&&(clearTimeout(x),x=null)}function Ne(){ye(),Ee()}function ht($){w(s,$),w(P,""),$==="qr"?Ee():ye()}async function ct(){if(!f(k).trim()){w(P,"请输入手机号");return}w(P,"");try{w(F,!0);const $=await et("/captcha/sent",{phone:f(k).trim()});($==null?void 0:$.code)===200?(w(T,60),N=setInterval(()=>{ci(T,-1),f(T)<=0&&clearInterval(N)},1e3)):w(P,($==null?void 0:$.message)||"发送验证码失败")}catch($){w(P,"发送验证码失败："+($.message||"网络错误"))}finally{w(F,!1)}}async function jt(){if(w(P,""),!f(k).trim()){w(P,"请输入手机号");return}if(f(C)==="password"&&!f(m)){w(P,"请输入密码");return}if(f(C)==="captcha"&&!f(b)){w(P,"请输入验证码");return}try{w(F,!0);const $={phone:f(k).trim()};f(C)==="password"?$.password=f(m):$.captcha=f(b);const A=await et("/login/cellphone",$);(A==null?void 0:A.code)===200?(A.cookie&&Qt.set(A.cookie),await Ur(),mt("/")):w(P,(A==null?void 0:A.message)||"登录失败")}catch($){w(P,"登录失败："+($.message||"网络错误"))}finally{w(F,!1)}}async function Ue(){if(w(P,""),!f(z).trim()||!f(H)){w(P,"请输入邮箱和密码");return}try{w(F,!0);const $=await et("/login",{email:f(z).trim(),password:f(H)});($==null?void 0:$.code)===200?($.cookie&&Qt.set($.cookie),await Ur(),mt("/")):w(P,($==null?void 0:$.message)||"登录失败")}catch($){w(P,"登录失败："+($.message||"网络错误"))}finally{w(F,!1)}}Dr();var Nt=Bd(),Fe=o(Nt),Ve=o(Fe),V=o(Ve),ve=o(V);kn(ve,{size:34,class:"text-primary icon-primary-glow"});var xe=h(Ve,2),De=o(xe),tt=o(De);{var Mt=$=>{var A=Hd(),K=o(A),M=o(K);Xu(M,{size:15,class:"text-base-content/50"});var he=h(M,2),W=h(K,2),we=o(W);af(we,{size:15});var pe=h(W,2),Pe=o(pe);ji(Pe,{size:16}),Gr(he,()=>f(u),ae=>w(u,ae)),R("click",W,ze),R("click",pe,()=>w(l,!1)),y($,A)},cr=$=>{var A=Dd(),K=o(A),M=o(K),he=o(M);sf(he,{size:16,class:"text-primary"});var W=h(he,2),we=o(W),pe=h(K,2);q(()=>L(we,`API 地址：${n()??""}`)),R("click",pe,ue),y($,A)};O(tt,$=>{f(l)?$(Mt):$(cr,-1)})}var yt=h(xe,2),Er=o(yt);gr(Er,5,()=>J,$=>$.key,($,A)=>{const K=Ua(()=>f(A).icon);var M=Wd(),he=o(M);f(K)(he,{size:16});var W=h(he);q(()=>{xr(M,1,`btn btn-sm rounded-2xl gap-2
            ${f(s)===f(A).key?"btn-primary shadow-lg shadow-primary/20":"btn-ghost glass-hover"}`),L(W,` ${f(A).label??""}`)}),R("click",M,()=>ht(f(A).key)),y($,M)});var zt=h(yt,2);{var Nr=$=>{var A=Kd(),K=o(A),M=o(K);q(()=>L(M,f(P))),y($,A)};O(zt,$=>{f(P)&&$(Nr)})}var Ut=h(zt,2);{var ur=$=>{var A=Yd(),K=o(A),M=o(K),he=o(M);{var W=fe=>{var Pt=Gd(),fr=o(Pt);q(()=>Ke(fr,"src",f(d))),y(fe,Pt)},we=fe=>{Dn(fe,{size:42,class:"text-primary animate-spin"})};O(he,fe=>{f(d)?fe(W):fe(we,-1)})}var pe=h(M,2),Pe=o(pe),ae=h(pe,4),Qe=o(ae);{var Ce=fe=>{Dn(fe,{size:15,class:"animate-spin"})},ut=fe=>{Eo(fe,{size:15})};O(Qe,fe=>{f(p)?fe(Ce):fe(ut,-1)})}q(()=>{L(Pe,f(g)||"正在加载二维码..."),ae.disabled=f(p)}),R("click",ae,Ne),y($,A)};O(Ut,$=>{f(s)==="qr"&&$(ur)})}var Ft=h(Ut,2);{var an=$=>{var A=Xd(),K=o(A),M=o(K),he=o(M);pl(he,{size:18,class:"text-base-content/50"});var W=h(he,2),we=h(M,2),pe=o(we),Pe=o(pe);Ws(Pe,{size:15});var ae=h(pe,2),Qe=o(ae);vl(Qe,{size:15});var Ce=h(we,2);{var ut=S=>{var Y=Qd(),me=o(Y);Ws(me,{size:18,class:"text-base-content/50"});var qe=h(me,2);Gr(qe,()=>f(m),Vt=>w(m,Vt)),y(S,Y)},fe=S=>{var Y=Jd(),me=o(Y),qe=o(me);vl(qe,{size:18,class:"text-base-content/50"});var Vt=h(qe,2),qt=h(me,2),zr=o(qt);q(()=>{qt.disabled=f(T)>0||f(F),L(zr,f(T)>0?`${f(T)}s`:"获取验证码")}),Gr(Vt,()=>f(b),Pr=>w(b,Pr)),R("click",qt,ct),y(S,Y)};O(Ce,S=>{f(C)==="password"?S(ut):S(fe,-1)})}var Pt=h(Ce,2),fr=o(Pt);{var sn=S=>{Dn(S,{size:17,class:"animate-spin"})},Mr=S=>{kn(S,{size:17})};O(fr,S=>{f(F)?S(sn):S(Mr,-1)})}q(()=>{xr(pe,1,`btn btn-sm rounded-2xl gap-2
              ${f(C)==="password"?"btn-primary":"btn-ghost glass-hover"}`),xr(ae,1,`btn btn-sm rounded-2xl gap-2
              ${f(C)==="captcha"?"btn-primary":"btn-ghost glass-hover"}`),Pt.disabled=f(F)}),Gr(W,()=>f(k),S=>w(k,S)),R("click",pe,()=>w(C,"password")),R("click",ae,()=>w(C,"captcha")),R("click",Pt,jt),y($,A)};O(Ft,$=>{f(s)==="phone"&&$(an)})}var I=h(Ft,2);{var B=$=>{var A=Zd(),K=o(A),M=o(K),he=o(M);fl(he,{size:18,class:"text-base-content/50"});var W=h(he,2),we=h(M,2),pe=o(we);Ws(pe,{size:18,class:"text-base-content/50"});var Pe=h(pe,2),ae=h(we,2),Qe=o(ae);{var Ce=fe=>{Dn(fe,{size:17,class:"animate-spin"})},ut=fe=>{kn(fe,{size:17})};O(Qe,fe=>{f(F)?fe(Ce):fe(ut,-1)})}q(()=>ae.disabled=f(F)),Gr(W,()=>f(z),fe=>w(z,fe)),Gr(Pe,()=>f(H),fe=>w(H,fe)),R("click",ae,Ue),y($,A)};O(I,$=>{f(s)==="email"&&$(B)})}y(e,Nt),Sr(),i()}nn(["click"]);var tv=E('<img alt="头像"/>'),rv=E('<div class="bg-primary text-primary-content flex items-center justify-center w-full h-full"><!></div>'),nv=E('<div class="mt-4 max-w-md glass-card rounded-2xl p-4"><div class="flex justify-center mb-2"><!></div> <p class="text-base-content/70 text-sm"> </p></div>'),av=E('<p class="text-base-content/40 text-sm mt-4">这个用户暂时没有填写个性签名</p>'),sv=E('<div class="card glass-card glass-hover overflow-hidden"><div class="h-32 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/20"></div> <div class="card-body items-center text-center -mt-16"><div class="avatar mb-4"><div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden glass-card"><!></div></div> <h2 class="text-2xl font-bold"> </h2> <div class="flex items-center gap-2 text-base-content/60 text-sm mt-2"><!> <span> </span></div> <!> <div class="card-actions mt-6 flex justify-center gap-3"><button class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"><!> 返回主页</button> <button class="btn btn-error btn-outline gap-2 rounded-full glass-hover"><!> 退出登录</button></div></div></div>'),iv=E('<div class="glass-card rounded-3xl p-10 text-center"><div class="inline-flex items-center justify-center w-16 h-16 rounded-3xl glass-card mb-4"><!></div> <p class="text-lg mb-2">未登录网易云音乐</p> <p class="text-sm text-base-content/50 mb-6">登录后可以查看喜欢的歌曲、收藏歌单，并搜索在线音乐</p> <button class="btn btn-primary gap-2 rounded-full shadow-lg shadow-primary/25"><!> 前往登录</button></div>'),lv=E('<div class="p-6 pb-32 min-h-full soft-gradient-bg"><div class="max-w-2xl mx-auto"><div class="mb-6"><h1 class="text-3xl font-bold flex items-center gap-2"><!> 用户信息</h1> <p class="text-sm text-base-content/50 mt-2">查看当前网易云音乐登录状态</p></div> <!></div></div>');function ov(e,t){kr(t,!1);const r=()=>ge(Qt,"$neteaseCookie",a),n=()=>ge(St,"$neteaseUser",a),[a,i]=rn();r()&&Ur();async function s(){await Lo("确定退出网易云音乐登录吗？",{title:"退出登录",type:"warning"})&&(await No(),mt("/login"))}Dr();var l=lv(),u=o(l),c=o(u),d=o(c),g=o(d);Na(g,{size:30,class:"text-primary icon-primary-glow"});var _=h(c,2);{var x=k=>{var m=sv(),b=h(o(m),2),C=o(b),T=o(C),N=o(T);{var z=Fe=>{var Ve=tv();q(()=>Ke(Ve,"src",n().avatarUrl)),y(Fe,Ve)},H=Fe=>{var Ve=rv(),V=o(Ve);Na(V,{size:42}),y(Fe,Ve)};O(N,Fe=>{n().avatarUrl?Fe(z):Fe(H,-1)})}var F=h(C,2),P=o(F),J=h(F,2),ue=o(J);Gu(ue,{size:15});var ze=h(ue,2),Ee=o(ze),je=h(J,2);{var ye=Fe=>{var Ve=nv(),V=o(Ve),ve=o(V);tf(ve,{size:18,class:"text-primary/70"});var xe=h(V,2),De=o(xe);q(()=>L(De,n().signature)),y(Fe,Ve)},Ne=Fe=>{var Ve=av();y(Fe,Ve)};O(je,Fe=>{n().signature?Fe(ye):Fe(Ne,-1)})}var ht=h(je,2),ct=o(ht),jt=o(ct);wa(jt,{size:17});var Ue=h(ct,2),Nt=o(Ue);Zu(Nt,{size:17}),q(()=>{L(P,n().nickname),L(Ee,`UID：${n().userId??""}`)}),R("click",ct,()=>mt("/")),R("click",Ue,s),y(k,m)},p=k=>{var m=iv(),b=o(m),C=o(b);kn(C,{size:34,class:"text-primary icon-primary-glow"});var T=h(b,6),N=o(T);kn(N,{size:17}),R("click",T,()=>mt("/login")),y(k,m)};O(_,k=>{n()?k(x):k(p,-1)})}y(e,l),Sr(),i()}nn(["click"]);var cv=E('<div class="min-h-screen flex flex-col app-shell"><!> <main class="flex-1 overflow-y-auto pb-28 app-main"><!></main> <!></div>');function uv(e,t){kr(t,!1);const r=()=>ge(vs,"$theme",a),n=()=>ge(Oi,"$currentRoute",a),[a,i]=rn();ws(()=>{vs.init()}),Dr();var s=cv(),l=o(s);bf(l,{});var u=h(l,2),c=o(u);{var d=b=>{bd(b,{})},g=b=>{jd(b,{})},_=b=>{Fd(b)},x=b=>{qd(b,{})},p=b=>{ev(b,{})},k=b=>{ov(b,{})};O(c,b=>{n()==="/"?b(d):n()==="/collection"?b(g,1):n()==="/visualizer"?b(_,2):n()==="/data-manage"?b(x,3):n()==="/login"?b(p,4):n()==="/user"&&b(k,5)})}var m=h(u,2);Df(m,{}),q(()=>Ke(s,"data-theme",r())),y(e,s),Sr(),i()}gu(uv,{target:document.getElementById("app")});
