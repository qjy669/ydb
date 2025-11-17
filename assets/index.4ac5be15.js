const od=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};od();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},is=[],xn=()=>{},ad=()=>!1,Zr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ll=n=>n.startsWith("onUpdate:"),Rt=Object.assign,cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ld=Object.prototype.hasOwnProperty,nt=(n,e)=>ld.call(n,e),ze=Array.isArray,ss=n=>Jr(n)==="[object Map]",Mu=n=>Jr(n)==="[object Set]",He=n=>typeof n=="function",Mt=n=>typeof n=="string",li=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Su=n=>(pt(n)||He(n))&&He(n.then)&&He(n.catch),Eu=Object.prototype.toString,Jr=n=>Eu.call(n),cd=n=>Jr(n).slice(8,-1),yu=n=>Jr(n)==="[object Object]",ul=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ps=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ud=/-(\w)/g,cn=Qr(n=>n.replace(ud,(e,t)=>t?t.toUpperCase():"")),fd=/\B([A-Z])/g,Ii=Qr(n=>n.replace(fd,"-$1").toLowerCase()),eo=Qr(n=>n.charAt(0).toUpperCase()+n.slice(1)),po=Qr(n=>n?`on${eo(n)}`:""),ii=(n,e)=>!Object.is(n,e),Cr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},bu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},oa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let kl;const qs=()=>kl||(kl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function to(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Mt(i)?md(i):to(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Mt(n)||pt(n))return n}const dd=/;(?![^(]*\))/g,hd=/:([^]+)/,pd=/\/\*[^]*?\*\//g;function md(n){const e={};return n.replace(pd,"").split(dd).forEach(t=>{if(t){const i=t.split(hd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function At(n){let e="";if(Mt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=At(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_d=al(gd);function Tu(n){return!!n||n===""}const Au=n=>!!(n&&n.__v_isRef===!0),je=n=>Mt(n)?n:n==null?"":ze(n)||pt(n)&&(n.toString===Eu||!He(n.toString))?Au(n)?je(n.value):JSON.stringify(n,wu,2):String(n),wu=(n,e)=>Au(e)?wu(n,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[mo(i,r)+" =>"]=s,t),{})}:Mu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>mo(t))}:li(e)?mo(e):pt(e)&&!ze(e)&&!yu(e)?String(e):e,mo=(n,e="")=>{var t;return li(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class vd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){Qt=this}off(){Qt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xd(){return Qt}let ut;const go=new WeakSet;class Ru{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gl(this),Du(this);const e=ut,t=Mn;ut=this,Mn=!0;try{return this.fn()}finally{Lu(this),ut=e,Mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hl(e);this.deps=this.depsTail=void 0,Gl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){aa(this)&&this.run()}get dirty(){return aa(this)}}let Cu=0,Ds,Ls;function Pu(n,e=!1){if(n.flags|=8,e){n.next=Ls,Ls=n;return}n.next=Ds,Ds=n}function fl(){Cu++}function dl(){if(--Cu>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ds;){let e=Ds;for(Ds=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Du(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lu(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),hl(i),Md(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function aa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Uu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Uu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!aa(n)){n.flags&=-3;return}const t=ut,i=Mn;ut=n,Mn=!0;try{Du(n);const s=n.fn(n._value);(e.version===0||ii(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ut=t,Mn=i,Lu(n),n.flags&=-3}}function hl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)hl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Md(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mn=!0;const Iu=[];function ci(){Iu.push(Mn),Mn=!1}function ui(){const n=Iu.pop();Mn=n===void 0?!0:n}function Gl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let Os=0;class Sd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!Mn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Sd(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Nu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,Os++,this.notify(e)}notify(e){fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dl()}}}function Nu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Nu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const la=new WeakMap,Ri=Symbol(""),ca=Symbol(""),Bs=Symbol("");function Ut(n,e,t){if(Mn&&ut){let i=la.get(n);i||la.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new pl),s.map=i,s.key=t),s.track()}}function Vn(n,e,t,i,s,r){const o=la.get(n);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(fl(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&ul(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Bs||!li(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Bs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ri)),ss(n)&&a(o.get(ca)));break;case"delete":l||(a(o.get(Ri)),ss(n)&&a(o.get(ca)));break;case"set":ss(n)&&a(o.get(Ri));break}}dl()}function Oi(n){const e=tt(n);return e===n?e:(Ut(e,"iterate",Bs),ln(n)?e:e.map(It))}function no(n){return Ut(n=tt(n),"iterate",Bs),n}const Ed={__proto__:null,[Symbol.iterator](){return _o(this,Symbol.iterator,It)},concat(...n){return Oi(this).concat(...n.map(e=>ze(e)?Oi(e):e))},entries(){return _o(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(It),arguments)},find(n,e){return Un(this,"find",n,e,It,arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,It,arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return vo(this,"includes",n)},indexOf(...n){return vo(this,"indexOf",n)},join(n){return Oi(this).join(n)},lastIndexOf(...n){return vo(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...e){return Wl(this,"reduce",n,e)},reduceRight(n,...e){return Wl(this,"reduceRight",n,e)},shift(){return Ss(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Oi(this).toReversed()},toSorted(n){return Oi(this).toSorted(n)},toSpliced(...n){return Oi(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return _o(this,"values",It)}};function _o(n,e,t){const i=no(n),s=i[e]();return i!==n&&!ln(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const yd=Array.prototype;function Un(n,e,t,i,s,r){const o=no(n),a=o!==n&&!ln(n),l=o[e];if(l!==yd[e]){const f=l.apply(n,r);return a?It(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,It(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Wl(n,e,t,i){const s=no(n);let r=t;return s!==n&&(ln(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,It(a),l,n)}),s[e](r,...i)}function vo(n,e,t){const i=tt(n);Ut(i,"iterate",Bs);const s=i[e](...t);return(s===-1||s===!1)&&_l(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Ss(n,e,t=[]){ci(),fl();const i=tt(n)[e].apply(n,t);return dl(),ui(),i}const bd=al("__proto__,__v_isRef,__isVue"),Fu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function Td(n){li(n)||(n=String(n));const e=tt(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class Ou{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Nd:Vu:r?Hu:zu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=Ed[t]))return l;if(t==="hasOwnProperty")return Td}const a=Reflect.get(e,t,Ft(e)?e:i);return(li(t)?Fu.has(t):bd(t))||(s||Ut(e,"get",t),r)?a:Ft(a)?o&&ul(t)?a:a.value:pt(a)?s?ku(a):rs(a):a}}class Bu extends Ou{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Pi(r);if(!ln(i)&&!Pi(i)&&(r=tt(r),i=tt(i)),!ze(e)&&Ft(r)&&!Ft(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&ul(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Ft(e)?e:s);return e===tt(s)&&(o?ii(i,r)&&Vn(e,"set",t,i):Vn(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Vn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!li(t)||!Fu.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",ze(e)?"length":Ri),Reflect.ownKeys(e)}}class Ad extends Ou{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const wd=new Bu,Rd=new Ad,Cd=new Bu(!0);const ua=n=>n,nr=n=>Reflect.getPrototypeOf(n);function Pd(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=ss(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ua:e?fa:It;return!e&&Ut(r,"iterate",l?ca:Ri),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ir(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dd(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(ii(s,a)&&Ut(o,"get",s),Ut(o,"get",a));const{has:l}=nr(o),c=e?ua:n?fa:It;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ut(tt(s),"iterate",Ri),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(ii(s,a)&&Ut(o,"has",s),Ut(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?ua:n?fa:It;return!n&&Ut(l,"iterate",Ri),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Rt(t,n?{add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear")}:{add(s){!e&&!ln(s)&&!Pi(s)&&(s=tt(s));const r=tt(this);return nr(r).has.call(r,s)||(r.add(s),Vn(r,"add",s,s)),this},set(s,r){!e&&!ln(r)&&!Pi(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=nr(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ii(r,u)&&Vn(o,"set",s,r):Vn(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=nr(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Vn(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Pd(s,n,e)}),t}function ml(n,e){const t=Dd(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const Ld={get:ml(!1,!1)},Ud={get:ml(!1,!0)},Id={get:ml(!0,!1)};const zu=new WeakMap,Hu=new WeakMap,Vu=new WeakMap,Nd=new WeakMap;function Fd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Od(n){return n.__v_skip||!Object.isExtensible(n)?0:Fd(cd(n))}function rs(n){return Pi(n)?n:gl(n,!1,wd,Ld,zu)}function Bd(n){return gl(n,!1,Cd,Ud,Hu)}function ku(n){return gl(n,!0,Rd,Id,Vu)}function gl(n,e,t,i,s){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Od(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function os(n){return Pi(n)?os(n.__v_raw):!!(n&&n.__v_isReactive)}function Pi(n){return!!(n&&n.__v_isReadonly)}function ln(n){return!!(n&&n.__v_isShallow)}function _l(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function zd(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&bu(n,"__v_skip",!0),n}const It=n=>pt(n)?rs(n):n,fa=n=>pt(n)?ku(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function xt(n){return Hd(n,!1)}function Hd(n,e){return Ft(n)?n:new Vd(n,e)}class Vd{constructor(e,t){this.dep=new pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ln(e)||Pi(e);e=i?e:tt(e),ii(e,t)&&(this._rawValue=e,this._value=i?e:It(e),this.dep.trigger())}}function gn(n){return Ft(n)?n.value:n}const kd={get:(n,e,t)=>e==="__v_raw"?n:gn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ft(s)&&!Ft(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Gu(n){return os(n)?n:new Proxy(n,kd)}class Gd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Pu(this,!0),!0}get value(){const e=this.dep.track();return Uu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wd(n,e,t=!1){let i,s;return He(n)?i=n:(i=n.get,s=n.set),new Gd(i,s,t)}const sr={},Vr=new WeakMap;let Si;function Xd(n,e=!1,t=Si){if(t){let i=Vr.get(t);i||Vr.set(t,i=[]),i.push(n)}}function qd(n,e,t=ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:ln(y)||s===!1||s===0?kn(y,1):kn(y);let u,f,h,m,x=!1,S=!1;if(Ft(n)?(f=()=>n.value,x=ln(n)):os(n)?(f=()=>c(n),x=!0):ze(n)?(S=!0,x=n.some(y=>os(y)||ln(y)),f=()=>n.map(y=>{if(Ft(y))return y.value;if(os(y))return c(y);if(He(y))return l?l(y,2):y()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ci();try{h()}finally{ui()}}const y=Si;Si=u;try{return l?l(n,3,[m]):n(m)}finally{Si=y}}:f=xn,e&&s){const y=f,I=s===!0?1/0:s;f=()=>kn(y(),I)}const g=xd(),d=()=>{u.stop(),g&&g.active&&cl(g.effects,u)};if(r&&e){const y=e;e=(...I)=>{y(...I),d()}}let R=S?new Array(n.length).fill(sr):sr;const w=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const I=u.run();if(s||x||(S?I.some((U,P)=>ii(U,R[P])):ii(I,R))){h&&h();const U=Si;Si=u;try{const P=[I,R===sr?void 0:S&&R[0]===sr?[]:R,m];l?l(e,3,P):e(...P),R=I}finally{Si=U}}}else u.run()};return a&&a(w),u=new Ru(f),u.scheduler=o?()=>o(w,!1):w,m=y=>Xd(y,!1,u),h=u.onStop=()=>{const y=Vr.get(u);if(y){if(l)l(y,4);else for(const I of y)I();Vr.delete(u)}},e?i?w(!0):R=u.run():o?o(w.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function kn(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ft(n))kn(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)kn(n[i],e,t);else if(Mu(n)||ss(n))n.forEach(i=>{kn(i,e,t)});else if(yu(n)){for(const i in n)kn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&kn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(n,e,t,i){try{return i?n(...i):n()}catch(s){io(s,e,t)}}function Cn(n,e,t,i){if(He(n)){const s=Ys(n,e,t,i);return s&&Su(s)&&s.catch(r=>{io(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],e,t,i));return s}}function io(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){ci(),Ys(r,null,10,[n,l,c]),ui();return}}Yd(n,t,s,i,o)}function Yd(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Vt=[];let yn=-1;const as=[];let ei=null,Qi=0;const Wu=Promise.resolve();let kr=null;function da(n){const e=kr||Wu;return n?e.then(this?n.bind(this):n):e}function $d(n){let e=yn+1,t=Vt.length;for(;e<t;){const i=e+t>>>1,s=Vt[i],r=zs(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function vl(n){if(!(n.flags&1)){const e=zs(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=zs(t)?Vt.push(n):Vt.splice($d(e),0,n),n.flags|=1,Xu()}}function Xu(){kr||(kr=Wu.then(Yu))}function Kd(n){ze(n)?as.push(...n):ei&&n.id===-1?ei.splice(Qi+1,0,n):n.flags&1||(as.push(n),n.flags|=1),Xu()}function Xl(n,e,t=yn+1){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qu(n){if(as.length){const e=[...new Set(as)].sort((t,i)=>zs(t)-zs(i));if(as.length=0,ei){ei.push(...e);return}for(ei=e,Qi=0;Qi<ei.length;Qi++){const t=ei[Qi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ei=null,Qi=0}}const zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yu(n){const e=xn;try{for(yn=0;yn<Vt.length;yn++){const t=Vt[yn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ys(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;yn<Vt.length;yn++){const t=Vt[yn];t&&(t.flags&=-2)}yn=-1,Vt.length=0,qu(),kr=null,(Vt.length||as.length)&&Yu()}}let en=null,$u=null;function Gr(n){const e=en;return en=n,$u=n&&n.type.__scopeId||null,e}function jd(n,e=en,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ec(-1);const r=Gr(e);let o;try{o=n(...s)}finally{Gr(r),i._d&&ec(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gt(n,e){if(en===null)return n;const t=ao(en),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ct]=e[s];r&&(He(r)&&(r={mounted:r,updated:r}),r.deep&&kn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function hi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ci(),Cn(l,t,8,[n.el,a,n,e]),ui())}}const Zd=Symbol("_vte"),Jd=n=>n.__isTeleport;function xl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,xl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ku(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wr(n,e,t,i,s=!1){if(ze(n)){n.forEach((x,S)=>Wr(x,e&&(ze(e)?e[S]:e),t,i,s));return}if(Us(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ao(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,h=tt(f),m=f===ct?()=>!1:x=>nt(h,x);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,m(c)&&(f[c]=null)):Ft(c)&&(c.value=null)),He(l))Ys(l,a,12,[o,u]);else{const x=Mt(l),S=Ft(l);if(x||S){const g=()=>{if(n.f){const d=x?m(l)?f[l]:u[l]:l.value;s?ze(d)&&cl(d,r):ze(d)?d.includes(r)||d.push(r):x?(u[l]=[r],m(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else x?(u[l]=o,m(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Jt(g,t)):g()}}}qs().requestIdleCallback;qs().cancelIdleCallback;const Us=n=>!!n.type.__asyncLoader,ju=n=>n.type.__isKeepAlive;function Qd(n,e){Zu(n,"a",e)}function eh(n,e){Zu(n,"da",e)}function Zu(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(so(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ju(s.parent.vnode)&&th(i,e,t,s),s=s.parent}}function th(n,e,t,i){const s=so(e,n,i,!0);Ml(()=>{cl(i[e],s)},t)}function so(n,e,t=Nt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ci();const a=$s(t),l=Cn(e,t,n,o);return a(),ui(),l});return i?s.unshift(r):s.push(r),r}}const Yn=n=>(e,t=Nt)=>{(!Vs||n==="sp")&&so(n,(...i)=>e(...i),t)},nh=Yn("bm"),ih=Yn("m"),sh=Yn("bu"),rh=Yn("u"),oh=Yn("bum"),Ml=Yn("um"),ah=Yn("sp"),lh=Yn("rtg"),ch=Yn("rtc");function uh(n,e=Nt){so("ec",n,e)}const Ju="components",Qu=Symbol.for("v-ndc");function xo(n){return Mt(n)?fh(Ju,n,!1)||n:n||Qu}function fh(n,e,t=!0,i=!1){const s=en||Nt;if(s){const r=s.type;if(n===Ju){const a=Qh(r,!1);if(a&&(a===e||a===cn(e)||a===eo(cn(e))))return r}const o=ql(s[n]||r[n],e)||ql(s.appContext[n],e);return!o&&i?r:o}}function ql(n,e){return n&&(n[e]||n[cn(e)]||n[eo(cn(e))])}function Wt(n,e,t,i){let s;const r=t&&t[i],o=ze(n);if(o||Mt(n)){const a=o&&os(n);let l=!1;a&&(l=!ln(n),n=no(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?It(n[c]):n[c],c,void 0,r&&r[c])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(pt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}const ha=n=>n?Mf(n)?ao(n):ha(n.parent):null,Is=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ha(n.parent),$root:n=>ha(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sl(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=da.bind(n.proxy)),$watch:n=>Ih.bind(n)}),Mo=(n,e)=>n!==ct&&!n.__isScriptSetup&&nt(n,e),dh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Mo(i,e))return o[e]=1,i[e];if(s!==ct&&nt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,r[e];if(t!==ct&&nt(t,e))return o[e]=4,t[e];pa&&(o[e]=0)}}const u=Is[e];let f,h;if(u)return e==="$attrs"&&Ut(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Mo(s,e)?(s[e]=t,!0):i!==ct&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ct&&nt(n,o)||Mo(e,o)||(a=r[0])&&nt(a,o)||nt(i,o)||nt(Is,o)||nt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yl(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let pa=!0;function hh(n){const e=Sl(n),t=n.proxy,i=n.ctx;pa=!1,e.beforeCreate&&$l(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:S,deactivated:g,beforeDestroy:d,beforeUnmount:R,destroyed:w,unmounted:y,render:I,renderTracked:U,renderTriggered:P,errorCaptured:B,serverPrefetch:T,expose:E,inheritAttrs:L,components:se,directives:Z,filters:oe}=e;if(c&&ph(c,i,null),o)for(const Q in o){const H=o[Q];He(H)&&(i[Q]=H.bind(t))}if(s){const Q=s.call(t,t);pt(Q)&&(n.data=rs(Q))}if(pa=!0,r)for(const Q in r){const H=r[Q],pe=He(H)?H.bind(t,t):He(H.get)?H.get.bind(t,t):xn,ve=!He(H)&&He(H.set)?H.set.bind(t):xn,Ae=tp({get:pe,set:ve});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ie=>Ae.value=Ie})}if(a)for(const Q in a)ef(a[Q],i,t,Q);if(l){const Q=He(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{Mh(H,Q[H])})}u&&$l(u,n,"c");function ee(Q,H){ze(H)?H.forEach(pe=>Q(pe.bind(t))):H&&Q(H.bind(t))}if(ee(nh,f),ee(ih,h),ee(sh,m),ee(rh,x),ee(Qd,S),ee(eh,g),ee(uh,B),ee(ch,U),ee(lh,P),ee(oh,R),ee(Ml,y),ee(ah,T),ze(E))if(E.length){const Q=n.exposed||(n.exposed={});E.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:pe=>t[H]=pe})})}else n.exposed||(n.exposed={});I&&n.render===xn&&(n.render=I),L!=null&&(n.inheritAttrs=L),se&&(n.components=se),Z&&(n.directives=Z),T&&Ku(n)}function ph(n,e,t=xn){ze(n)&&(n=ma(n));for(const i in n){const s=n[i];let r;pt(s)?"default"in s?r=Pr(s.from||i,s.default,!0):r=Pr(s.from||i):r=Pr(s),Ft(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function $l(n,e,t){Cn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ef(n,e,t,i){let s=i.includes(".")?mf(t,i):()=>t[i];if(Mt(n)){const r=e[n];He(r)&&Eo(s,r)}else if(He(n))Eo(s,n.bind(t));else if(pt(n))if(ze(n))n.forEach(r=>ef(r,e,t,i));else{const r=He(n.handler)?n.handler.bind(t):e[n.handler];He(r)&&Eo(s,r,n)}}function Sl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Xr(l,c,o,!0)),Xr(l,e,o)),pt(e)&&r.set(e,l),l}function Xr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Xr(n,r,t,!0),s&&s.forEach(o=>Xr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=mh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const mh={data:Kl,props:jl,emits:jl,methods:Rs,computed:Rs,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Rs,directives:Rs,watch:_h,provide:Kl,inject:gh};function Kl(n,e){return e?n?function(){return Rt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function gh(n,e){return Rs(ma(n),ma(e))}function ma(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?Rt(Object.create(null),n,e):e}function jl(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Yl(n),Yl(e!=null?e:{})):e}function _h(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function tf(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vh=0;function xh(n,e){return function(i,s=null){He(i)||(i=Rt({},i)),s!=null&&!pt(s)&&(s=null);const r=tf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:vh++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:np,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||ht(i,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,ao(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ls;ls=c;try{return u()}finally{ls=f}}};return c}}let ls=null;function Mh(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function Pr(n,e,t=!1){const i=Nt||en;if(i||ls){const s=ls?ls._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const nf={},sf=()=>Object.create(nf),rf=n=>Object.getPrototypeOf(n)===nf;function Sh(n,e,t,i=!1){const s={},r=sf();n.propsDefaults=Object.create(null),of(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Bd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Eh(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ro(n.emitsOptions,h))continue;const m=e[h];if(l)if(nt(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const x=cn(h);s[x]=ga(l,a,x,m,n,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{of(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Ii(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ga(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f)&&!0)&&(delete r[f],c=!0)}c&&Vn(n.attrs,"set","")}function of(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ps(l))continue;const c=e[l];let u;s&&nt(s,u=cn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ro(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||ct;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ga(s,l,f,c[f],n,!nt(c,f))}}return o}function ga(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=$s(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const yh=new WeakMap;function af(n,e,t=!1){const i=t?yh:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,m]=af(f,e,!0);Rt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return pt(n)&&i.set(n,is),is;if(ze(r))for(let u=0;u<r.length;u++){const f=cn(r[u]);Zl(f)&&(o[f]=ct)}else if(r)for(const u in r){const f=cn(u);if(Zl(f)){const h=r[u],m=o[f]=ze(h)||He(h)?{type:h}:Rt({},h),x=m.type;let S=!1,g=!0;if(ze(x))for(let d=0;d<x.length;++d){const R=x[d],w=He(R)&&R.name;if(w==="Boolean"){S=!0;break}else w==="String"&&(g=!1)}else S=He(x)&&x.name==="Boolean";m[0]=S,m[1]=g,(S||nt(m,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Zl(n){return n[0]!=="$"&&!Ps(n)}const lf=n=>n[0]==="_"||n==="$stable",El=n=>ze(n)?n.map(bn):[bn(n)],bh=(n,e,t)=>{if(e._n)return e;const i=jd((...s)=>El(e(...s)),t);return i._c=!1,i},cf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lf(s))continue;const r=n[s];if(He(r))e[s]=bh(s,r,i);else if(r!=null){const o=El(r);e[s]=()=>o}}},uf=(n,e)=>{const t=El(e);n.slots.default=()=>t},ff=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Th=(n,e,t)=>{const i=n.slots=sf();if(n.vnode.shapeFlag&32){const s=e._;s?(ff(i,e,t),t&&bu(i,"_",s,!0)):cf(e,i)}else e&&uf(n,e)},Ah=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:ff(s,e,t):(r=!e.$stable,cf(e,s)),o=e}else e&&(uf(n,e),o={default:1});if(r)for(const a in s)!lf(a)&&o[a]==null&&delete s[a]};function wh(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(qs().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Jt=Vh;function Rh(n){return Ch(n)}function Ch(n,e){wh();const t=qs();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=xn,insertStaticContent:x}=n,S=(A,_,Y,te=null,j=null,W=null,ce=void 0,J=null,v=!!_.dynamicChildren)=>{if(A===_)return;A&&!Es(A,_)&&(te=me(A),Ie(A,j,W,!0),A=null),_.patchFlag===-2&&(v=!1,_.dynamicChildren=null);const{type:p,ref:D,shapeFlag:N}=_;switch(p){case oo:g(A,_,Y,te);break;case Di:d(A,_,Y,te);break;case Dr:A==null&&R(_,Y,te,ce);break;case ft:se(A,_,Y,te,j,W,ce,J,v);break;default:N&1?I(A,_,Y,te,j,W,ce,J,v):N&6?Z(A,_,Y,te,j,W,ce,J,v):(N&64||N&128)&&p.process(A,_,Y,te,j,W,ce,J,v,Ce)}D!=null&&j&&Wr(D,A&&A.ref,W,_||A,!_)},g=(A,_,Y,te)=>{if(A==null)i(_.el=a(_.children),Y,te);else{const j=_.el=A.el;_.children!==A.children&&c(j,_.children)}},d=(A,_,Y,te)=>{A==null?i(_.el=l(_.children||""),Y,te):_.el=A.el},R=(A,_,Y,te)=>{[A.el,A.anchor]=x(A.children,_,Y,te,A.el,A.anchor)},w=({el:A,anchor:_},Y,te)=>{let j;for(;A&&A!==_;)j=h(A),i(A,Y,te),A=j;i(_,Y,te)},y=({el:A,anchor:_})=>{let Y;for(;A&&A!==_;)Y=h(A),s(A),A=Y;s(_)},I=(A,_,Y,te,j,W,ce,J,v)=>{_.type==="svg"?ce="svg":_.type==="math"&&(ce="mathml"),A==null?U(_,Y,te,j,W,ce,J,v):T(A,_,j,W,ce,J,v)},U=(A,_,Y,te,j,W,ce,J)=>{let v,p;const{props:D,shapeFlag:N,transition:G,dirs:k}=A;if(v=A.el=o(A.type,W,D&&D.is,D),N&8?u(v,A.children):N&16&&B(A.children,v,null,te,j,So(A,W),ce,J),k&&hi(A,null,te,"created"),P(v,A,A.scopeId,ce,te),D){for(const ne in D)ne!=="value"&&!Ps(ne)&&r(v,ne,null,D[ne],W,te);"value"in D&&r(v,"value",null,D.value,W),(p=D.onVnodeBeforeMount)&&En(p,te,A)}k&&hi(A,null,te,"beforeMount");const ue=Ph(j,G);ue&&G.beforeEnter(v),i(v,_,Y),((p=D&&D.onVnodeMounted)||ue||k)&&Jt(()=>{p&&En(p,te,A),ue&&G.enter(v),k&&hi(A,null,te,"mounted")},j)},P=(A,_,Y,te,j)=>{if(Y&&m(A,Y),te)for(let W=0;W<te.length;W++)m(A,te[W]);if(j){let W=j.subTree;if(_===W||_f(W.type)&&(W.ssContent===_||W.ssFallback===_)){const ce=j.vnode;P(A,ce,ce.scopeId,ce.slotScopeIds,j.parent)}}},B=(A,_,Y,te,j,W,ce,J,v=0)=>{for(let p=v;p<A.length;p++){const D=A[p]=J?ti(A[p]):bn(A[p]);S(null,D,_,Y,te,j,W,ce,J)}},T=(A,_,Y,te,j,W,ce)=>{const J=_.el=A.el;let{patchFlag:v,dynamicChildren:p,dirs:D}=_;v|=A.patchFlag&16;const N=A.props||ct,G=_.props||ct;let k;if(Y&&pi(Y,!1),(k=G.onVnodeBeforeUpdate)&&En(k,Y,_,A),D&&hi(_,A,Y,"beforeUpdate"),Y&&pi(Y,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&u(J,""),p?E(A.dynamicChildren,p,J,Y,te,So(_,j),W):ce||H(A,_,J,null,Y,te,So(_,j),W,!1),v>0){if(v&16)L(J,N,G,Y,j);else if(v&2&&N.class!==G.class&&r(J,"class",null,G.class,j),v&4&&r(J,"style",N.style,G.style,j),v&8){const ue=_.dynamicProps;for(let ne=0;ne<ue.length;ne++){const b=ue[ne],V=N[b],X=G[b];(X!==V||b==="value")&&r(J,b,V,X,j,Y)}}v&1&&A.children!==_.children&&u(J,_.children)}else!ce&&p==null&&L(J,N,G,Y,j);((k=G.onVnodeUpdated)||D)&&Jt(()=>{k&&En(k,Y,_,A),D&&hi(_,A,Y,"updated")},te)},E=(A,_,Y,te,j,W,ce)=>{for(let J=0;J<_.length;J++){const v=A[J],p=_[J],D=v.el&&(v.type===ft||!Es(v,p)||v.shapeFlag&70)?f(v.el):Y;S(v,p,D,null,te,j,W,ce,!0)}},L=(A,_,Y,te,j)=>{if(_!==Y){if(_!==ct)for(const W in _)!Ps(W)&&!(W in Y)&&r(A,W,_[W],null,j,te);for(const W in Y){if(Ps(W))continue;const ce=Y[W],J=_[W];ce!==J&&W!=="value"&&r(A,W,J,ce,j,te)}"value"in Y&&r(A,"value",_.value,Y.value,j)}},se=(A,_,Y,te,j,W,ce,J,v)=>{const p=_.el=A?A.el:a(""),D=_.anchor=A?A.anchor:a("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:k}=_;k&&(J=J?J.concat(k):k),A==null?(i(p,Y,te),i(D,Y,te),B(_.children||[],Y,D,j,W,ce,J,v)):N>0&&N&64&&G&&A.dynamicChildren?(E(A.dynamicChildren,G,Y,j,W,ce,J),(_.key!=null||j&&_===j.subTree)&&df(A,_,!0)):H(A,_,Y,D,j,W,ce,J,v)},Z=(A,_,Y,te,j,W,ce,J,v)=>{_.slotScopeIds=J,A==null?_.shapeFlag&512?j.ctx.activate(_,Y,te,ce,v):oe(_,Y,te,j,W,ce,v):ae(A,_,v)},oe=(A,_,Y,te,j,W,ce)=>{const J=A.component=$h(A,te,j);if(ju(A)&&(J.ctx.renderer=Ce),Kh(J,!1,ce),J.asyncDep){if(j&&j.registerDep(J,ee,ce),!A.el){const v=J.subTree=ht(Di);d(null,v,_,Y)}}else ee(J,A,_,Y,j,W,ce)},ae=(A,_,Y)=>{const te=_.component=A.component;if(zh(A,_,Y))if(te.asyncDep&&!te.asyncResolved){Q(te,_,Y);return}else te.next=_,te.update();else _.el=A.el,te.vnode=_},ee=(A,_,Y,te,j,W,ce)=>{const J=()=>{if(A.isMounted){let{next:N,bu:G,u:k,parent:ue,vnode:ne}=A;{const be=hf(A);if(be){N&&(N.el=ne.el,Q(A,N,ce)),be.asyncDep.then(()=>{A.isUnmounted||J()});return}}let b=N,V;pi(A,!1),N?(N.el=ne.el,Q(A,N,ce)):N=ne,G&&Cr(G),(V=N.props&&N.props.onVnodeBeforeUpdate)&&En(V,ue,N,ne),pi(A,!0);const X=yo(A),de=A.subTree;A.subTree=X,S(de,X,f(de.el),me(de),A,j,W),N.el=X.el,b===null&&Hh(A,X.el),k&&Jt(k,j),(V=N.props&&N.props.onVnodeUpdated)&&Jt(()=>En(V,ue,N,ne),j)}else{let N;const{el:G,props:k}=_,{bm:ue,m:ne,parent:b,root:V,type:X}=A,de=Us(_);if(pi(A,!1),ue&&Cr(ue),!de&&(N=k&&k.onVnodeBeforeMount)&&En(N,b,_),pi(A,!0),G&&rt){const be=()=>{A.subTree=yo(A),rt(G,A.subTree,A,j,null)};de&&X.__asyncHydrate?X.__asyncHydrate(G,A,be):be()}else{V.ce&&V.ce._injectChildStyle(X);const be=A.subTree=yo(A);S(null,be,Y,te,A,j,W),_.el=be.el}if(ne&&Jt(ne,j),!de&&(N=k&&k.onVnodeMounted)){const be=_;Jt(()=>En(N,b,be),j)}(_.shapeFlag&256||b&&Us(b.vnode)&&b.vnode.shapeFlag&256)&&A.a&&Jt(A.a,j),A.isMounted=!0,_=Y=te=null}};A.scope.on();const v=A.effect=new Ru(J);A.scope.off();const p=A.update=v.run.bind(v),D=A.job=v.runIfDirty.bind(v);D.i=A,D.id=A.uid,v.scheduler=()=>vl(D),pi(A,!0),p()},Q=(A,_,Y)=>{_.component=A;const te=A.vnode.props;A.vnode=_,A.next=null,Eh(A,_.props,te,Y),Ah(A,_.children,Y),ci(),Xl(A),ui()},H=(A,_,Y,te,j,W,ce,J,v=!1)=>{const p=A&&A.children,D=A?A.shapeFlag:0,N=_.children,{patchFlag:G,shapeFlag:k}=_;if(G>0){if(G&128){ve(p,N,Y,te,j,W,ce,J,v);return}else if(G&256){pe(p,N,Y,te,j,W,ce,J,v);return}}k&8?(D&16&&ge(p,j,W),N!==p&&u(Y,N)):D&16?k&16?ve(p,N,Y,te,j,W,ce,J,v):ge(p,j,W,!0):(D&8&&u(Y,""),k&16&&B(N,Y,te,j,W,ce,J,v))},pe=(A,_,Y,te,j,W,ce,J,v)=>{A=A||is,_=_||is;const p=A.length,D=_.length,N=Math.min(p,D);let G;for(G=0;G<N;G++){const k=_[G]=v?ti(_[G]):bn(_[G]);S(A[G],k,Y,null,j,W,ce,J,v)}p>D?ge(A,j,W,!0,!1,N):B(_,Y,te,j,W,ce,J,v,N)},ve=(A,_,Y,te,j,W,ce,J,v)=>{let p=0;const D=_.length;let N=A.length-1,G=D-1;for(;p<=N&&p<=G;){const k=A[p],ue=_[p]=v?ti(_[p]):bn(_[p]);if(Es(k,ue))S(k,ue,Y,null,j,W,ce,J,v);else break;p++}for(;p<=N&&p<=G;){const k=A[N],ue=_[G]=v?ti(_[G]):bn(_[G]);if(Es(k,ue))S(k,ue,Y,null,j,W,ce,J,v);else break;N--,G--}if(p>N){if(p<=G){const k=G+1,ue=k<D?_[k].el:te;for(;p<=G;)S(null,_[p]=v?ti(_[p]):bn(_[p]),Y,ue,j,W,ce,J,v),p++}}else if(p>G)for(;p<=N;)Ie(A[p],j,W,!0),p++;else{const k=p,ue=p,ne=new Map;for(p=ue;p<=G;p++){const Ne=_[p]=v?ti(_[p]):bn(_[p]);Ne.key!=null&&ne.set(Ne.key,p)}let b,V=0;const X=G-ue+1;let de=!1,be=0;const Pe=new Array(X);for(p=0;p<X;p++)Pe[p]=0;for(p=k;p<=N;p++){const Ne=A[p];if(V>=X){Ie(Ne,j,W,!0);continue}let Le;if(Ne.key!=null)Le=ne.get(Ne.key);else for(b=ue;b<=G;b++)if(Pe[b-ue]===0&&Es(Ne,_[b])){Le=b;break}Le===void 0?Ie(Ne,j,W,!0):(Pe[Le-ue]=p+1,Le>=be?be=Le:de=!0,S(Ne,_[Le],Y,null,j,W,ce,J,v),V++)}const ye=de?Dh(Pe):is;for(b=ye.length-1,p=X-1;p>=0;p--){const Ne=ue+p,Le=_[Ne],ot=Ne+1<D?_[Ne+1].el:te;Pe[p]===0?S(null,Le,Y,ot,j,W,ce,J,v):de&&(b<0||p!==ye[b]?Ae(Le,Y,ot,2):b--)}}},Ae=(A,_,Y,te,j=null)=>{const{el:W,type:ce,transition:J,children:v,shapeFlag:p}=A;if(p&6){Ae(A.component.subTree,_,Y,te);return}if(p&128){A.suspense.move(_,Y,te);return}if(p&64){ce.move(A,_,Y,Ce);return}if(ce===ft){i(W,_,Y);for(let N=0;N<v.length;N++)Ae(v[N],_,Y,te);i(A.anchor,_,Y);return}if(ce===Dr){w(A,_,Y);return}if(te!==2&&p&1&&J)if(te===0)J.beforeEnter(W),i(W,_,Y),Jt(()=>J.enter(W),j);else{const{leave:N,delayLeave:G,afterLeave:k}=J,ue=()=>i(W,_,Y),ne=()=>{N(W,()=>{ue(),k&&k()})};G?G(W,ue,ne):ne()}else i(W,_,Y)},Ie=(A,_,Y,te=!1,j=!1)=>{const{type:W,props:ce,ref:J,children:v,dynamicChildren:p,shapeFlag:D,patchFlag:N,dirs:G,cacheIndex:k}=A;if(N===-2&&(j=!1),J!=null&&Wr(J,null,Y,A,!0),k!=null&&(_.renderCache[k]=void 0),D&256){_.ctx.deactivate(A);return}const ue=D&1&&G,ne=!Us(A);let b;if(ne&&(b=ce&&ce.onVnodeBeforeUnmount)&&En(b,_,A),D&6)he(A.component,Y,te);else{if(D&128){A.suspense.unmount(Y,te);return}ue&&hi(A,null,_,"beforeUnmount"),D&64?A.type.remove(A,_,Y,Ce,te):p&&!p.hasOnce&&(W!==ft||N>0&&N&64)?ge(p,_,Y,!1,!0):(W===ft&&N&384||!j&&D&16)&&ge(v,_,Y),te&&$e(A)}(ne&&(b=ce&&ce.onVnodeUnmounted)||ue)&&Jt(()=>{b&&En(b,_,A),ue&&hi(A,null,_,"unmounted")},Y)},$e=A=>{const{type:_,el:Y,anchor:te,transition:j}=A;if(_===ft){re(Y,te);return}if(_===Dr){y(A);return}const W=()=>{s(Y),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(A.shapeFlag&1&&j&&!j.persisted){const{leave:ce,delayLeave:J}=j,v=()=>ce(Y,W);J?J(A.el,W,v):v()}else W()},re=(A,_)=>{let Y;for(;A!==_;)Y=h(A),s(A),A=Y;s(_)},he=(A,_,Y)=>{const{bum:te,scope:j,job:W,subTree:ce,um:J,m:v,a:p}=A;Jl(v),Jl(p),te&&Cr(te),j.stop(),W&&(W.flags|=8,Ie(ce,A,_,Y)),J&&Jt(J,_),Jt(()=>{A.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},ge=(A,_,Y,te=!1,j=!1,W=0)=>{for(let ce=W;ce<A.length;ce++)Ie(A[ce],_,Y,te,j)},me=A=>{if(A.shapeFlag&6)return me(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const _=h(A.anchor||A.el),Y=_&&_[Zd];return Y?h(Y):_};let Re=!1;const Fe=(A,_,Y)=>{A==null?_._vnode&&Ie(_._vnode,null,null,!0):S(_._vnode||null,A,_,null,null,null,Y),_._vnode=A,Re||(Re=!0,Xl(),qu(),Re=!1)},Ce={p:S,um:Ie,m:Ae,r:$e,mt:oe,mc:B,pc:H,pbc:E,n:me,o:n};let st,rt;return e&&([st,rt]=e(Ce)),{render:Fe,hydrate:st,createApp:xh(Fe,st)}}function So({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ph(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function df(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ti(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&df(o,a)),a.type===oo&&(a.el=o.el)}}function Dh(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hf(e)}function Jl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Lh=Symbol.for("v-scx"),Uh=()=>Pr(Lh);function Eo(n,e,t){return pf(n,e,t)}function pf(n,e,t=ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=Rt({},t),l=e&&i||!e&&r!=="post";let c;if(Vs){if(r==="sync"){const m=Uh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=xn,m.resume=xn,m.pause=xn,m}}const u=Nt;a.call=(m,x,S)=>Cn(m,u,x,S);let f=!1;r==="post"?a.scheduler=m=>{Jt(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,x)=>{x?m():vl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=qd(n,e,a);return Vs&&(c?c.push(h):l&&h()),h}function Ih(n,e,t){const i=this.proxy,s=Mt(n)?n.includes(".")?mf(i,n):()=>i[n]:n.bind(i,i);let r;He(e)?r=e:(r=e.handler,t=e);const o=$s(this),a=pf(s,r.bind(i),t);return o(),a}function mf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Nh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function Fh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let s=t;const r=e.startsWith("update:"),o=r&&Nh(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Mt(u)?u.trim():u)),o.number&&(s=t.map(oa)));let a,l=i[a=po(e)]||i[a=po(cn(e))];!l&&r&&(l=i[a=po(Ii(e))]),l&&Cn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,s)}}function gf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=gf(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(pt(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):Rt(o,r),pt(n)&&i.set(n,o),o)}function ro(n,e){return!n||!Zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Ii(e))||nt(n,e))}function yo(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:x,inheritAttrs:S}=n,g=Gr(n);let d,R;try{if(t.shapeFlag&4){const y=s||i,I=y;d=bn(c.call(I,y,u,f,m,h,x)),R=a}else{const y=e;d=bn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),R=e.props?a:Oh(a)}}catch(y){Ns.length=0,io(y,n,1),d=ht(Di)}let w=d;if(R&&S!==!1){const y=Object.keys(R),{shapeFlag:I}=w;y.length&&I&7&&(r&&y.some(ll)&&(R=Bh(R,r)),w=fs(w,R,!1,!0))}return t.dirs&&(w=fs(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&xl(w,t.transition),d=w,Gr(g),d}const Oh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zr(t))&&((e||(e={}))[t]=n[t]);return e},Bh=(n,e)=>{const t={};for(const i in n)(!ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zh(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ql(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ro(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ql(i,o,c):!0:!!o;return!1}function Ql(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ro(t,r))return!0}return!1}function Hh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const _f=n=>n.__isSuspense;function Vh(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Kd(n)}const ft=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),Di=Symbol.for("v-cmt"),Dr=Symbol.for("v-stc"),Ns=[];let tn=null;function ke(n=!1){Ns.push(tn=n?null:[])}function kh(){Ns.pop(),tn=Ns[Ns.length-1]||null}let Hs=1;function ec(n,e=!1){Hs+=n,n<0&&tn&&e&&(tn.hasOnce=!0)}function vf(n){return n.dynamicChildren=Hs>0?tn||is:null,kh(),Hs>0&&tn&&tn.push(n),n}function Xe(n,e,t,i,s,r){return vf(C(n,e,t,i,s,r,!0))}function Fs(n,e,t,i,s){return vf(ht(n,e,t,i,s,!0))}function qr(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const xf=({key:n})=>n!=null?n:null,Lr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Ft(n)||He(n)?{i:en,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,i=0,s=null,r=n===ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xf(e),ref:e&&Lr(e),scopeId:$u,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:en};return a?(yl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),Hs>0&&!o&&tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&tn.push(l),l}const ht=Gh;function Gh(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Qu)&&(n=Di),qr(n)){const a=fs(n,e,!0);return t&&yl(a,t),Hs>0&&!r&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag=-2,a}if(ep(n)&&(n=n.__vccOpts),e){e=Wh(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=At(a)),pt(l)&&(_l(l)&&!ze(l)&&(l=Rt({},l)),e.style=to(l))}const o=Mt(n)?1:_f(n)?128:Jd(n)?64:pt(n)?4:He(n)?2:0;return C(n,e,t,i,s,o,r,!0)}function Wh(n){return n?_l(n)||rf(n)?Rt({},n):n:null}function fs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Xh(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xf(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Lr(e)):[r,Lr(e)]:Lr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&xl(u,l.clone(u)),u}function es(n=" ",e=0){return ht(oo,null,n,e)}function tc(n,e){const t=ht(Dr,null,n);return t.staticCount=e,t}function Pt(n="",e=!1){return e?(ke(),Fs(Di,null,n)):ht(Di,null,n)}function bn(n){return n==null||typeof n=="boolean"?ht(Di):ze(n)?ht(ft,null,n.slice()):qr(n)?ti(n):ht(oo,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!rf(e)?e._ctx=en:s===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[es(e)]):t=8);n.children=e,n.shapeFlag|=t}function Xh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=At([e.class,i.class]));else if(s==="style")e.style=to([e.style,i.style]);else if(Zr(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function En(n,e,t,i=null){Cn(n,e,7,[t,i])}const qh=tf();let Yh=0;function $h(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||qh,r={uid:Yh++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(i,s),emitsOptions:gf(i,s),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Fh.bind(null,r),n.ce&&n.ce(r),r}let Nt=null,Yr,_a;{const n=qs(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yr=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),_a=e("__VUE_SSR_SETTERS__",t=>Vs=t)}const $s=n=>{const e=Nt;return Yr(n),n.scope.on(),()=>{n.scope.off(),Yr(e)}},nc=()=>{Nt&&Nt.scope.off(),Yr(null)};function Mf(n){return n.vnode.shapeFlag&4}let Vs=!1;function Kh(n,e=!1,t=!1){e&&_a(e);const{props:i,children:s}=n.vnode,r=Mf(n);Sh(n,i,r,e),Th(n,s,t);const o=r?jh(n,e):void 0;return e&&_a(!1),o}function jh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,dh);const{setup:i}=t;if(i){ci();const s=n.setupContext=i.length>1?Jh(n):null,r=$s(n),o=Ys(i,n,0,[n.props,s]),a=Su(o);if(ui(),r(),(a||n.sp)&&!Us(n)&&Ku(n),a){if(o.then(nc,nc),e)return o.then(l=>{ic(n,l,e)}).catch(l=>{io(l,n,0)});n.asyncDep=o}else ic(n,o,e)}else Sf(n,e)}function ic(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Gu(e)),Sf(n,t)}let sc;function Sf(n,e,t){const i=n.type;if(!n.render){if(!e&&sc&&!i.render){const s=i.template||Sl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:r,delimiters:a},o),l);i.render=sc(s,c)}}n.render=i.render||xn}{const s=$s(n);ci();try{hh(n)}finally{ui(),s()}}}const Zh={get(n,e){return Ut(n,"get",""),n[e]}};function Jh(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Zh),slots:n.slots,emit:n.emit,expose:e}}function ao(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Gu(zd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Is)return Is[t](n)},has(e,t){return t in e||t in Is}})):n.proxy}function Qh(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function ep(n){return He(n)&&"__vccOpts"in n}const tp=(n,e)=>Wd(n,e,Vs);function va(n,e,t){const i=arguments.length;return i===2?pt(e)&&!ze(e)?qr(e)?ht(n,null,[e]):ht(n,e):ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&qr(t)&&(t=[t]),ht(n,e,t))}const np="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xa;const rc=typeof window!="undefined"&&window.trustedTypes;if(rc)try{xa=rc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ef=xa?n=>xa.createHTML(n):n=>n,ip="http://www.w3.org/2000/svg",sp="http://www.w3.org/1998/Math/MathML",Hn=typeof document!="undefined"?document:null,oc=Hn&&Hn.createElement("template"),rp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Hn.createElementNS(ip,n):e==="mathml"?Hn.createElementNS(sp,n):t?Hn.createElement(n,{is:t}):Hn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Hn.createTextNode(n),createComment:n=>Hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{oc.innerHTML=Ef(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=oc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},op=Symbol("_vtc");function ap(n,e,t){const i=n[op];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ac=Symbol("_vod"),lp=Symbol("_vsh"),cp=Symbol(""),up=/(^|;)\s*display\s*:/;function fp(n,e,t){const i=n.style,s=Mt(t);let r=!1;if(t&&!s){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ur(i,a,"")}else for(const o in e)t[o]==null&&Ur(i,o,"");for(const o in t)o==="display"&&(r=!0),Ur(i,o,t[o])}else if(s){if(e!==t){const o=i[cp];o&&(t+=";"+o),i.cssText=t,r=up.test(t)}}else e&&n.removeAttribute("style");ac in n&&(n[ac]=r?i.display:"",n[lp]&&(i.display="none"))}const lc=/\s*!important$/;function Ur(n,e,t){if(ze(t))t.forEach(i=>Ur(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=dp(n,e);lc.test(t)?n.setProperty(Ii(i),t.replace(lc,""),"important"):n[i]=t}}const cc=["Webkit","Moz","ms"],bo={};function dp(n,e){const t=bo[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return bo[e]=i;i=eo(i);for(let s=0;s<cc.length;s++){const r=cc[s]+i;if(r in n)return bo[e]=r}return e}const uc="http://www.w3.org/1999/xlink";function fc(n,e,t,i,s,r=_d(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(uc,e.slice(6,e.length)):n.setAttributeNS(uc,e,t):t==null||r&&!Tu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":li(t)?String(t):t)}function dc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ef(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Tu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ts(n,e,t,i){n.addEventListener(e,t,i)}function hp(n,e,t,i){n.removeEventListener(e,t,i)}const hc=Symbol("_vei");function pp(n,e,t,i,s=null){const r=n[hc]||(n[hc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=mp(e);if(i){const c=r[e]=vp(i,s);ts(n,a,c,l)}else o&&(hp(n,a,o,l),r[e]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function mp(n){let e;if(pc.test(n)){e={};let i;for(;i=n.match(pc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let To=0;const gp=Promise.resolve(),_p=()=>To||(gp.then(()=>To=0),To=Date.now());function vp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(xp(i,t.value),e,5,[i])};return t.value=n,t.attached=_p(),t}function xp(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const mc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mp=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?ap(n,i,o):e==="style"?fp(n,t,i):Zr(e)?ll(e)||pp(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sp(n,e,i,o))?(dc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fc(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?dc(n,cn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fc(n,e,i,o))};function Sp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mc(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mc(e)&&Mt(t)?!1:e in n}const gc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>Cr(e,t):e};function Ep(n){n.target.composing=!0}function _c(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ao=Symbol("_assign"),Xt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ao]=gc(s);const r=i||s.props&&s.props.type==="number";ts(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=oa(a)),n[Ao](a)}),t&&ts(n,"change",()=>{n.value=n.value.trim()}),e||(ts(n,"compositionstart",Ep),ts(n,"compositionend",_c),ts(n,"change",_c))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ao]=gc(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?oa(n.value):n.value,l=e==null?"":e;a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},yp=["ctrl","shift","alt","meta"],bp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>yp.some(t=>n[`${t}Key`]&&!e.includes(t))},Bi=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=bp[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Tp=Rt({patchProp:Mp},rp);let vc;function Ap(){return vc||(vc=Rh(Tp))}const wp=(...n)=>{const e=Ap().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Cp(i);if(!s)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Rp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Rp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cp(n){return Mt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="176",Pp=0,xc=1,Dp=2,yf=1,Lp=2,zn=3,oi=0,Yt=1,Gn=2,si=0,cs=1,Mc=2,Sc=3,Ec=4,Up=5,bi=100,Ip=101,Np=102,Fp=103,Op=104,Bp=200,zp=201,Hp=202,Vp=203,Ma=204,Sa=205,kp=206,Gp=207,Wp=208,Xp=209,qp=210,Yp=211,$p=212,Kp=213,jp=214,Ea=0,ya=1,ba=2,ds=3,Ta=4,Aa=5,wa=6,Ra=7,bf=0,Zp=1,Jp=2,ri=0,Qp=1,em=2,tm=3,nm=4,im=5,sm=6,rm=7,Tf=300,hs=301,ps=302,Ca=303,Pa=304,lo=306,Da=1e3,Ai=1001,La=1002,Sn=1003,om=1004,rr=1005,An=1006,wo=1007,wi=1008,Pn=1009,Af=1010,wf=1011,ks=1012,Tl=1013,Li=1014,Wn=1015,Ks=1016,Al=1017,wl=1018,Gs=1020,Rf=35902,Cf=1021,Pf=1022,vn=1023,Ws=1026,Xs=1027,Df=1028,Rl=1029,Lf=1030,Cl=1031,Pl=1033,Ir=33776,Nr=33777,Fr=33778,Or=33779,Ua=35840,Ia=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,Ha=37808,Va=37809,ka=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,$a=37816,Ka=37817,ja=37818,Za=37819,Ja=37820,Qa=37821,Br=36492,el=36494,tl=36495,Uf=36283,nl=36284,il=36285,sl=36286,am=3200,lm=3201,If=0,cm=1,ni="",on="srgb",ms="srgb-linear",$r="linear",lt="srgb",zi=7680,yc=519,um=512,fm=513,dm=514,Nf=515,hm=516,pm=517,mm=518,gm=519,bc=35044,Tc="300 es",Xn=2e3,Kr=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ro=Math.PI/180,rl=180/Math.PI;function js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function _m(n,e){return(n%e+e)%e}function Co(n,e,t){return(1-t)*n+t*e}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],S=s[0],g=s[3],d=s[6],R=s[1],w=s[4],y=s[7],I=s[2],U=s[5],P=s[8];return r[0]=o*S+a*R+l*I,r[3]=o*g+a*w+l*U,r[6]=o*d+a*y+l*P,r[1]=c*S+u*R+f*I,r[4]=c*g+u*w+f*U,r[7]=c*d+u*y+f*P,r[2]=h*S+m*R+x*I,r[5]=h*g+m*w+x*U,r[8]=h*d+m*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,x=t*f+i*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ge;function Ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vm(){const n=jr("canvas");return n.style.display="block",n}const Ac={};function zr(n){n in Ac||(Ac[n]=!0,console.warn(n))}function xm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Mm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){const n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?$r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:wc,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:wc,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const Ze=Em();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class ym{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=jr("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bm=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Do(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ym.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class $t extends _s{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Ai,s=Ai,r=An,o=wi,a=vn,l=Pn,c=$t.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=js(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Tf;$t.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,I=(d+1)/2,U=(u+h)/4,P=(f+S)/4,B=(x+g)/4;return w>y&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=U/i,r=P/i):y>I?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=U/s,r=B/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=B/r),this.set(i,s,r,t),this}let R=Math.sqrt((g-x)*(g-x)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(g-x)/R,this.y=(f-S)/R,this.z=(h-u)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends _s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Am{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Of extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wm extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==h||c!==m||u!==x){let g=1-a;const d=l*h+c*m+u*x+f*S,R=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const I=Math.sqrt(w),U=Math.atan2(I,d*R);g=Math.sin(g*U)/I,a=Math.sin(a*U)/I}const y=a*R;if(l=l*g+h*y,c=c*g+m*y,u=u*g+x*y,f=f*g+S*y,g===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-a*m,e[t+2]=c*x+u*m+a*h-l*f,e[t+3]=u*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new K,Cc=new Zs;class Js{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ar.subVectors(this.max,bs),Vi.subVectors(e.a,bs),ki.subVectors(e.b,bs),Gi.subVectors(e.c,bs),$n.subVectors(ki,Vi),Kn.subVectors(Gi,ki),mi.subVectors(Vi,Gi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Uo(t,Vi,ki,Gi,ar)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,Vi,ki,Gi,ar))?!1:(lr.crossVectors($n,Kn),t=[lr.x,lr.y,lr.z],Uo(t,Vi,ki,Gi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new K,new K,new K,new K,new K,new K,new K,new K],hn=new K,or=new Js,Vi=new K,ki=new K,Gi=new K,$n=new K,Kn=new K,mi=new K,bs=new K,ar=new K,lr=new K,gi=new K;function Uo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Rm=new Js,Ts=new K,Io=new K;class Ll{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Io)),this.expandByPoint(Ts.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new K,No=new K,cr=new K,jn=new K,Fo=new K,ur=new K,Oo=new K;class Cm{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){No.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=jn.dot(this.direction),l=-jn.dot(cr),c=jn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=r*u,f>=0)if(h>=-x)if(h<=x){const S=1/u;f*=S,h*=S,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(No).addScaledVector(cr,h),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){Fo.subVectors(t,e),ur.subVectors(i,e),Oo.crossVectors(Fo,ur);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(ur.crossVectors(jn,ur));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(Oo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,m,x,S,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,m,x,S,g)}set(e,t,i,s,r,o,a,l,c,u,f,h,m,x,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,S=c*f;t[0]=h+S*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Dm)}lookAt(e,t,i){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(i,jt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(i,jt)),Zn.normalize(),fr.crossVectors(jt,Zn),s[0]=Zn.x,s[4]=fr.x,s[8]=jt.x,s[1]=Zn.y,s[5]=fr.y,s[9]=jt.y,s[2]=Zn.z,s[6]=fr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],S=i[6],g=i[10],d=i[14],R=i[3],w=i[7],y=i[11],I=i[15],U=s[0],P=s[4],B=s[8],T=s[12],E=s[1],L=s[5],se=s[9],Z=s[13],oe=s[2],ae=s[6],ee=s[10],Q=s[14],H=s[3],pe=s[7],ve=s[11],Ae=s[15];return r[0]=o*U+a*E+l*oe+c*H,r[4]=o*P+a*L+l*ae+c*pe,r[8]=o*B+a*se+l*ee+c*ve,r[12]=o*T+a*Z+l*Q+c*Ae,r[1]=u*U+f*E+h*oe+m*H,r[5]=u*P+f*L+h*ae+m*pe,r[9]=u*B+f*se+h*ee+m*ve,r[13]=u*T+f*Z+h*Q+m*Ae,r[2]=x*U+S*E+g*oe+d*H,r[6]=x*P+S*L+g*ae+d*pe,r[10]=x*B+S*se+g*ee+d*ve,r[14]=x*T+S*Z+g*Q+d*Ae,r[3]=R*U+w*E+y*oe+I*H,r[7]=R*P+w*L+y*ae+I*pe,r[11]=R*B+w*se+y*ee+I*ve,r[15]=R*T+w*Z+y*Q+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],S=e[7],g=e[11],d=e[15];return x*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*m-i*l*m)+S*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+g*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],S=e[13],g=e[14],d=e[15],R=f*g*c-S*h*c+S*l*m-a*g*m-f*l*d+a*h*d,w=x*h*c-u*g*c-x*l*m+o*g*m+u*l*d-o*h*d,y=u*S*c-x*f*c+x*a*m-o*S*m-u*a*d+o*f*d,I=x*f*l-u*S*l-x*a*h+o*S*h+u*a*g-o*f*g,U=t*R+i*w+s*y+r*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/U;return e[0]=R*P,e[1]=(S*h*r-f*g*r-S*s*m+i*g*m+f*s*d-i*h*d)*P,e[2]=(a*g*r-S*l*r+S*s*c-i*g*c-a*s*d+i*l*d)*P,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*m-i*l*m)*P,e[4]=w*P,e[5]=(u*g*r-x*h*r+x*s*m-t*g*m-u*s*d+t*h*d)*P,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*d-t*l*d)*P,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*P,e[8]=y*P,e[9]=(x*f*r-u*S*r-x*i*m+t*S*m+u*i*d-t*f*d)*P,e[10]=(o*S*r-x*a*r+x*i*c-t*S*c-o*i*d+t*a*d)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*P,e[12]=I*P,e[13]=(u*S*s-x*f*s+x*i*h-t*S*h-u*i*g+t*f*g)*P,e[14]=(x*a*s-o*S*s-x*i*l+t*S*l+o*i*g-t*a*g)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,x=r*f,S=o*u,g=o*f,d=a*f,R=l*c,w=l*u,y=l*f,I=i.x,U=i.y,P=i.z;return s[0]=(1-(S+d))*I,s[1]=(m+y)*I,s[2]=(x-w)*I,s[3]=0,s[4]=(m-y)*U,s[5]=(1-(h+d))*U,s[6]=(g+R)*U,s[7]=0,s[8]=(x+w)*P,s[9]=(g-R)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);const c=1/r,u=1/o,f=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let m,x;if(a===Xn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Kr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,m=(i+s)*u;let x,S;if(a===Xn)x=(o+r)*f,S=-2*f;else if(a===Kr)x=r*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new K,pn=new vt,Pm=new K(0,0,0),Dm=new K(1,1,1),Zn=new K,fr=new K,jt=new K,Pc=new vt,Dc=new Zs;class Dn{constructor(e=0,t=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lm=0;const Lc=new K,Xi=new Zs,Fn=new vt,dr=new K,As=new K,Um=new K,Im=new Zs,Uc=new K(1,0,0),Ic=new K(0,1,0),Nc=new K(0,0,1),Fc={type:"added"},Nm={type:"removed"},qi={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Ot extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new K,t=new Dn,i=new Zs,s=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(As,dr,this.up):Fn.lookAt(dr,As,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nm),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new K(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new K,On=new K,zo=new K,Bn=new K,Yi=new K,$i=new K,Oc=new K,Ho=new K,Vo=new K,ko=new K,Go=new _t,Wo=new _t,Xo=new _t;class _n{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),On.subVectors(i,t),zo.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(On),l=mn.dot(zo),c=On.dot(On),u=On.dot(zo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,i),Xo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),On.subVectors(e,t),mn.cross(On).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Yi.subVectors(s,i),$i.subVectors(r,i),Ho.subVectors(e,i);const l=Yi.dot(Ho),c=$i.dot(Ho);if(l<=0&&c<=0)return t.copy(i);Vo.subVectors(e,s);const u=Yi.dot(Vo),f=$i.dot(Vo);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Yi,o);ko.subVectors(e,r);const m=Yi.dot(ko),x=$i.dot(ko);if(x>=0&&m<=x)return t.copy(r);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector($i,a);const g=u*x-m*f;if(g<=0&&f-u>=0&&m-x>=0)return Oc.subVectors(r,s),a=(f-u)/(f-u+(m-x)),t.copy(s).addScaledVector(Oc,a);const d=1/(g+S+h);return o=S*d,a=h*d,t.copy(i).addScaledVector(Yi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=_m(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qo(o,r,e+1/3),this.g=qo(o,r,e),this.b=qo(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(qe(Lt.r*255,0,255))*65536+Math.round(qe(Lt.g*255,0,255))*256+Math.round(qe(Lt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=on){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,s=Lt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(hr);const i=Co(Jn.h,hr.h,t),s=Co(Jn.s,hr.s,t),r=Co(Jn.l,hr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Je;Je.NAMES=zf;let Fm=0;class Qs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=js(),this.name="",this.type="Material",this.blending=cs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ma&&(i.blendSrc=this.blendSrc),this.blendDst!==Sa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hf extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new K,pr=new it;let Om=0;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}}class Vf extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kf extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bm=0;const rn=new vt,Yo=new Ot,Ki=new K,Zt=new Js,ws=new Js,Tt=new K;class Ni extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?kf:Vf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Zt.min,ws.min),Zt.expandByPoint(Tt),Tt.addVectors(Zt.max,ws.max),Zt.expandByPoint(Tt)):(Zt.expandByPoint(ws.min),Zt.expandByPoint(ws.max))}Zt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Tt.add(Ki)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new K,l[B]=new K;const c=new K,u=new K,f=new K,h=new it,m=new it,x=new it,S=new K,g=new K;function d(B,T,E){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),h.fromBufferAttribute(r,B),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),u.sub(c),f.sub(c),m.sub(h),x.sub(h);const L=1/(m.x*x.y-x.x*m.y);!isFinite(L)||(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(L),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(L),a[B].add(S),a[T].add(S),a[E].add(S),l[B].add(g),l[T].add(g),l[E].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,T=R.length;B<T;++B){const E=R[B],L=E.start,se=E.count;for(let Z=L,oe=L+se;Z<oe;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new K,y=new K,I=new K,U=new K;function P(B){I.fromBufferAttribute(s,B),U.copy(I);const T=a[B];w.copy(T),w.sub(I.multiplyScalar(I.dot(T))).normalize(),y.crossVectors(U,T);const L=y.dot(l[B])<0?-1:1;o.setXYZW(B,w.x,w.y,w.z,L)}for(let B=0,T=R.length;B<T;++B){const E=R[B],L=E.start,se=E.count;for(let Z=L,oe=L+se;Z<oe;Z+=3)P(e.getX(Z+0)),P(e.getX(Z+1)),P(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new vt,_i=new Cm,mr=new Ll,zc=new K,gr=new K,_r=new K,vr=new K,$o=new K,xr=new K,Hc=new K,Mr=new K;class wn extends Ot{constructor(e=new Ni,t=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&($o.fromBufferAttribute(f,e),o?xr.addScaledVector($o,u):xr.addScaledVector($o.sub(t),u))}t.add(xr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(mr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(mr,zc)===null||_i.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=o[g.materialIndex],R=Math.max(g.start,m.start),w=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=R,I=w;y<I;y+=3){const U=a.getX(y),P=a.getX(y+1),B=a.getX(y+2);s=Sr(this,d,e,i,c,u,f,U,P,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let g=x,d=S;g<d;g+=3){const R=a.getX(g),w=a.getX(g+1),y=a.getX(g+2);s=Sr(this,o,e,i,c,u,f,R,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=o[g.materialIndex],R=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=R,I=w;y<I;y+=3){const U=y,P=y+1,B=y+2;s=Sr(this,d,e,i,c,u,f,U,P,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=x,d=S;g<d;g+=3){const R=g,w=g+1,y=g+2;s=Sr(this,o,e,i,c,u,f,R,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function zm(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,gr),n.getVertexPosition(l,_r),n.getVertexPosition(c,vr);const u=zm(n,e,t,i,gr,_r,vr,Hc);if(u){const f=new K;_n.getBarycoord(Hc,gr,_r,vr,f),s&&(u.uv=_n.getInterpolatedAttribute(s,a,l,c,f,new it)),r&&(u.uv1=_n.getInterpolatedAttribute(r,a,l,c,f,new it)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new K,materialIndex:0};_n.getNormal(gr,_r,vr,h.normal),u.face=h,u.barycoord=f}return u}class vs extends Ni{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(f,2));function x(S,g,d,R,w,y,I,U,P,B,T){const E=y/P,L=I/B,se=y/2,Z=I/2,oe=U/2,ae=P+1,ee=B+1;let Q=0,H=0;const pe=new K;for(let ve=0;ve<ee;ve++){const Ae=ve*L-Z;for(let Ie=0;Ie<ae;Ie++){const $e=Ie*E-se;pe[S]=$e*R,pe[g]=Ae*w,pe[d]=oe,c.push(pe.x,pe.y,pe.z),pe[S]=0,pe[g]=0,pe[d]=U>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Ie/P),f.push(1-ve/B),Q+=1}}for(let ve=0;ve<B;ve++)for(let Ae=0;Ae<P;Ae++){const Ie=h+Ae+ae*ve,$e=h+Ae+ae*(ve+1),re=h+(Ae+1)+ae*(ve+1),he=h+(Ae+1)+ae*ve;l.push(Ie,$e,he),l.push($e,re,he),H+=6}a.addGroup(m,H,T),m+=H,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const s in i)e[s]=i[s]}return e}function Hm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Vm={clone:gs,merge:Ht};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new K,Vc=new it,kc=new it;class an extends Wf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,kc),t.subVectors(kc,Vc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class Wm extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(ji,Zi,e,t);s.layers=this.layers,this.add(s);const r=new an(ji,Zi,e,t);r.layers=this.layers,this.add(r);const o=new an(ji,Zi,e,t);o.layers=this.layers,this.add(o);const a=new an(ji,Zi,e,t);a.layers=this.layers,this.add(a);const l=new an(ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new an(ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Xf extends $t{constructor(e=[],t=hs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Xf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vs(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:si});r.uniforms.tEquirect.value=t;const o=new wn(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=An),new Wm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Er extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ym extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jo=new K,$m=new K,Km=new Ge;class Ei{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=jo.subVectors(i,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Km.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Ll,yr=new K;class Ul{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],x=s[9],S=s[10],g=s[11],d=s[12],R=s[13],w=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,g-m,y-d).normalize(),i[1].setComponents(l+r,h+c,g+m,y+d).normalize(),i[2].setComponents(l+o,h+u,g+x,y+R).normalize(),i[3].setComponents(l-o,h-u,g-x,y-R).normalize(),i[4].setComponents(l-a,h-f,g-S,y-w).normalize(),t===Xn)i[5].setComponents(l+a,h+f,g+S,y+w).normalize();else if(t===Kr)i[5].setComponents(a,f,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qf extends $t{constructor(e,t,i=Li,s,r,o,a=Sn,l=Sn,c,u=Ws){if(u!==Ws&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class co extends Ni{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],x=[],S=[],g=[];for(let d=0;d<u;d++){const R=d*h-o;for(let w=0;w<c;w++){const y=w*f-r;x.push(y,-R,0),S.push(0,0,1),g.push(w/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const w=R+c*d,y=R+c*(d+1),I=R+1+c*(d+1),U=R+1+c*d;m.push(w,y,U),m.push(y,I,U)}this.setIndex(m),this.setAttribute("position",new Ci(x,3)),this.setAttribute("normal",new Ci(S,3)),this.setAttribute("uv",new Ci(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}class jm extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jm extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yf extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zo=new vt,Gc=new K,Wc=new K;class Qm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $f extends Wf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eg extends Qm{constructor(){super(new $f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends Yf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ng extends Yf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ig extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Xc(n,e,t,i){const s=sg(i);switch(t){case Cf:return n*e;case Df:return n*e/s.components*s.byteLength;case Rl:return n*e/s.components*s.byteLength;case Lf:return n*e*2/s.components*s.byteLength;case Cl:return n*e*2/s.components*s.byteLength;case Pf:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Pl:return n*e*4/s.components*s.byteLength;case Ir:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Fa:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Na:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Br:case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uf:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case il:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(n){switch(n){case Pn:case Af:return{byteLength:1,components:1};case ks:case wf:case Ks:return{byteLength:2,components:1};case Al:case wl:return{byteLength:2,components:4};case Li:case Tl:case Wn:return{byteLength:4,components:1};case Rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],S=f[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const S=f[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:fg,aomap_fragment:dg,aomap_pars_fragment:hg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:bg,color_fragment:Tg,color_pars_fragment:Ag,color_pars_vertex:wg,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Ug,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ng,colorspace_fragment:Fg,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Jg,envmap_vertex:kg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:$g,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:jg,lights_pars_begin:Zg,lights_toon_fragment:Qg,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:f_,map_fragment:d_,map_pars_fragment:h_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:__,morphinstance_vertex:v_,morphcolor_vertex:x_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:y_,normal_fragment_maps:b_,normal_pars_fragment:T_,normal_pars_vertex:A_,normal_vertex:w_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:L_,opaque_fragment:U_,packing:I_,premultiplied_alpha_fragment:N_,project_vertex:F_,dithering_fragment:O_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:k_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:$_,specularmap_fragment:K_,specularmap_pars_fragment:j_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:sv,background_vert:rv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:fv,depth_frag:dv,distanceRGBA_vert:hv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:_v,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:yv,meshmatcap_frag:bv,meshnormal_vert:Tv,meshnormal_frag:Av,meshphong_vert:wv,meshphong_frag:Rv,meshphysical_vert:Cv,meshphysical_frag:Pv,meshtoon_vert:Dv,meshtoon_frag:Lv,points_vert:Uv,points_frag:Iv,shadow_vert:Nv,shadow_frag:Fv,sprite_vert:Ov,sprite_frag:Bv},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Tn={basic:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([_e.common,_e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:Ht([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const br={r:0,b:0,g:0},xi=new Dn,zv=new vt;function Hv(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function x(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function S(w){let y=!1;const I=x(w);I===null?d(a,l):I&&I.isColor&&(d(I,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,y){const I=x(y);I&&(I.isCubeTexture||I.mapping===lo)?(u===void 0&&(u=new wn(new vs(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:gs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(xi)),u.material.toneMapped=Ze.getTransfer(I.colorSpace)!==lt,(f!==I||h!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new wn(new co(2,2),new ai({name:"BackgroundMaterial",uniforms:gs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(I.colorSpace)!==lt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(br,Gf(n)),i.buffers.color.setClear(br.r,br.g,br.b,y,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:S,addToRenderList:g,dispose:R}}function Vv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(E,L,se,Z,oe){let ae=!1;const ee=f(Z,se,L);r!==ee&&(r=ee,c(r.object)),ae=m(E,Z,se,oe),ae&&x(E,Z,se,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,y(E,L,se,Z),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,L,se){const Z=se.wireframe===!0;let oe=i[E.id];oe===void 0&&(oe={},i[E.id]=oe);let ae=oe[L.id];ae===void 0&&(ae={},oe[L.id]=ae);let ee=ae[Z];return ee===void 0&&(ee=h(l()),ae[Z]=ee),ee}function h(E){const L=[],se=[],Z=[];for(let oe=0;oe<t;oe++)L[oe]=0,se[oe]=0,Z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:se,attributeDivisors:Z,object:E,attributes:{},index:null}}function m(E,L,se,Z){const oe=r.attributes,ae=L.attributes;let ee=0;const Q=se.getAttributes();for(const H in Q)if(Q[H].location>=0){const ve=oe[H];let Ae=ae[H];if(Ae===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;ee++}return r.attributesNum!==ee||r.index!==Z}function x(E,L,se,Z){const oe={},ae=L.attributes;let ee=0;const Q=se.getAttributes();for(const H in Q)if(Q[H].location>=0){let ve=ae[H];ve===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),oe[H]=Ae,ee++}r.attributes=oe,r.attributesNum=ee,r.index=Z}function S(){const E=r.newAttributes;for(let L=0,se=E.length;L<se;L++)E[L]=0}function g(E){d(E,0)}function d(E,L){const se=r.newAttributes,Z=r.enabledAttributes,oe=r.attributeDivisors;se[E]=1,Z[E]===0&&(n.enableVertexAttribArray(E),Z[E]=1),oe[E]!==L&&(n.vertexAttribDivisor(E,L),oe[E]=L)}function R(){const E=r.newAttributes,L=r.enabledAttributes;for(let se=0,Z=L.length;se<Z;se++)L[se]!==E[se]&&(n.disableVertexAttribArray(se),L[se]=0)}function w(E,L,se,Z,oe,ae,ee){ee===!0?n.vertexAttribIPointer(E,L,se,oe,ae):n.vertexAttribPointer(E,L,se,Z,oe,ae)}function y(E,L,se,Z){S();const oe=Z.attributes,ae=se.getAttributes(),ee=L.defaultAttributeValues;for(const Q in ae){const H=ae[Q];if(H.location>=0){let pe=oe[Q];if(pe===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){const ve=pe.normalized,Ae=pe.itemSize,Ie=e.get(pe);if(Ie===void 0)continue;const $e=Ie.buffer,re=Ie.type,he=Ie.bytesPerElement,ge=re===n.INT||re===n.UNSIGNED_INT||pe.gpuType===Tl;if(pe.isInterleavedBufferAttribute){const me=pe.data,Re=me.stride,Fe=pe.offset;if(me.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)d(H.location+Ce,me.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)g(H.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Ce=0;Ce<H.locationSize;Ce++)w(H.location+Ce,Ae/H.locationSize,re,ve,Re*he,(Fe+Ae/H.locationSize*Ce)*he,ge)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)d(H.location+me,pe.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<H.locationSize;me++)g(H.location+me);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let me=0;me<H.locationSize;me++)w(H.location+me,Ae/H.locationSize,re,ve,Ae*he,Ae/H.locationSize*me*he,ge)}}else if(ee!==void 0){const ve=ee[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(H.location,ve);break;case 3:n.vertexAttrib3fv(H.location,ve);break;case 4:n.vertexAttrib4fv(H.location,ve);break;default:n.vertexAttrib1fv(H.location,ve)}}}}R()}function I(){B();for(const E in i){const L=i[E];for(const se in L){const Z=L[se];for(const oe in Z)u(Z[oe].object),delete Z[oe];delete L[se]}delete i[E]}}function U(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const se in L){const Z=L[se];for(const oe in Z)u(Z[oe].object),delete Z[oe];delete L[se]}delete i[E.id]}function P(E){for(const L in i){const se=i[L];if(se[E.id]===void 0)continue;const Z=se[E.id];for(const oe in Z)u(Z[oe].object),delete Z[oe];delete se[E.id]}}function B(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:R}}function kv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S]*h[S];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wn&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:I,maxSamples:U}}function Wv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ei,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{const R=r?0:i,w=R*4;let y=d.clippingState||null;l.value=y,y=u(x,h,w,m);for(let I=0;I!==w;++I)y[I]=t[I];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const d=m+S*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,y=m;w!==S;++w,y+=4)o.copy(f[w]).applyMatrix4(R,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Xv(n){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=hs:a===Pa&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ca||a===Pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ns=4,qc=[.125,.215,.35,.446,.526,.582],Ti=20,Jo=new $f,Yc=new Je;let Qo=null,ea=0,ta=0,na=!1;const yi=(1+Math.sqrt(5))/2,Ji=1/yi,$c=[new K(-yi,Ji,0),new K(yi,Ji,0),new K(-Ji,0,yi),new K(Ji,0,yi),new K(0,yi,-Ji),new K(0,yi,Ji),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],qv=new K;class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=qv}=r;Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ks,format:vn,colorSpace:ms,depthBuffer:!1},s=jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=$v(r,e,t)}return s}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,s,r){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Yc),f.toneMapping=ri,f.autoClear=!1;const x=new Hf({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),S=new wn(new vs,x);let g=!1;const d=e.background;d?d.isColor&&(x.color.copy(d),e.background=null,g=!0):(x.color.copy(Yc),g=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):w===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const y=this._cubeSize;Tr(s,w*y,R>2?y:0,y,y),f.setRenderTarget(s),g&&f.render(S,l),f.render(e,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===hs||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$c[(s-r-1)%$c.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wn(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),S=r/x,g=isFinite(r)?1+Math.floor(u*S):Ti;g>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const d=[];let R=0;for(let P=0;P<Ti;++P){const B=P/S,T=Math.exp(-B*B/2);d.push(T),P===0?R+=T:P<g&&(R+=2*T)}for(let P=0;P<d.length;P++)d[P]=d[P]/R;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-i;const y=this._sizeLods[s],I=3*y*(s>w-ns?s-w+ns:0),U=4*(this._cubeSize-y);Tr(t,I,U,3*y,2*y),l.setRenderTarget(t),l.render(f,Jo)}}function Yv(n){const e=[],t=[],i=[];let s=n;const r=n-ns+1+qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ns?l=qc[o-n+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,S=3,g=2,d=1,R=new Float32Array(S*x*m),w=new Float32Array(g*x*m),y=new Float32Array(d*x*m);for(let U=0;U<m;U++){const P=U%3*2/3-1,B=U>2?0:-1,T=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];R.set(T,S*x*U),w.set(h,g*x*U);const E=[U,U,U,U,U,U];y.set(E,d*x*U)}const I=new Ni;I.setAttribute("position",new Rn(R,S)),I.setAttribute("uv",new Rn(w,g)),I.setAttribute("faceIndex",new Rn(y,d)),e.push(I),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jc(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $v(n,e,t){const i=new Float32Array(Ti),s=new K(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zc(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jc(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ca||l===Pa,u=l===hs||l===ps;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Kc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Kc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zv(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,x=f.attributes.position;let S=0;if(m!==null){const R=m.array;S=m.version;for(let w=0,y=R.length;w<y;w+=3){const I=R[w+0],U=R[w+1],P=R[w+2];h.push(I,U,U,P,P,I)}}else if(x!==void 0){const R=x.array;S=x.version;for(let w=0,y=R.length/3-1;w<y;w+=3){const I=w+0,U=w+1,P=w+2;h.push(I,U,U,P,P,I)}}else return;const g=new(Ff(h)?kf:Vf)(h,1);g.version=S;const d=r.get(f);d&&e.remove(d),r.set(f,g)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jv(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,r,h*o),t.update(m,i,1)}function c(h,m,x){x!==0&&(n.drawElementsInstanced(i,m,r,h*o,x),t.update(m,i,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,x);let g=0;for(let d=0;d<x;d++)g+=m[d];t.update(g,i,1)}function f(h,m,x,S){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,S,0,x);let d=0;for(let R=0;R<x;R++)d+=m[R]*S[R];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function e0(n,e,t){const i=new WeakMap,s=new _t;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let I=a.attributes.position.count*y,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*U*4*f),B=new Of(P,I,U,f);B.type=Wn,B.needsUpdate=!0;const T=y*4;for(let L=0;L<f;L++){const se=d[L],Z=R[L],oe=w[L],ae=I*U*4*L;for(let ee=0;ee<se.count;ee++){const Q=ee*T;x===!0&&(s.fromBufferAttribute(se,ee),P[ae+Q+0]=s.x,P[ae+Q+1]=s.y,P[ae+Q+2]=s.z,P[ae+Q+3]=0),S===!0&&(s.fromBufferAttribute(Z,ee),P[ae+Q+4]=s.x,P[ae+Q+5]=s.y,P[ae+Q+6]=s.z,P[ae+Q+7]=0),g===!0&&(s.fromBufferAttribute(oe,ee),P[ae+Q+8]=s.x,P[ae+Q+9]=s.y,P[ae+Q+10]=s.z,P[ae+Q+11]=oe.itemSize===4?s.w:1)}}h={count:f,texture:B,size:new it(I,U)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function t0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const jf=new $t,Qc=new qf(1,1),Zf=new Of,Jf=new wm,Qf=new Xf,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),bt(t,i)}}function a0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;iu.set(i),n.uniformMatrix3fv(this.addr,!1,iu),bt(t,i)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;nu.set(i),n.uniformMatrix4fv(this.addr,!1,nu),bt(t,i)}}function c0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function _0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qc.compareFunction=Nf,r=Qc):r=jf,t.setTexture2D(e||r,s)}function v0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jf,s)}function x0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qf,s)}function M0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zf,s)}function S0(n){switch(n){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return h0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(n,e){n.uniform1fv(this.addr,e)}function y0(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function b0(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function T0(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w0(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R0(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C0(n,e){n.uniform1iv(this.addr,e)}function P0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function L0(n,e){n.uniform4iv(this.addr,e)}function U0(n,e){n.uniform1uiv(this.addr,e)}function I0(n,e){n.uniform2uiv(this.addr,e)}function N0(n,e){n.uniform3uiv(this.addr,e)}function F0(n,e){n.uniform4uiv(this.addr,e)}function O0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jf,r[o])}function B0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jf,r[o])}function z0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qf,r[o])}function H0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zf,r[o])}function V0(n){switch(n){case 5126:return E0;case 35664:return y0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return U0;case 36294:return I0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}class k0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class G0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function ru(n,e){n.seq.push(e),n.map[e.id]=e}function X0(n,e,t){const i=n.name,s=i.length;for(ia.lastIndex=0;;){const r=ia.exec(i),o=ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(t,c===void 0?new k0(a,n,e):new G0(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new W0(a),ru(t,f)),t=f}}}class Hr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);X0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ou(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q0=37297;let Y0=0;function $0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const au=new Ge;function K0(n){Ze._getMatrix(au,Ze.workingColorSpace,n);const e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$0(n.getShaderSource(e),o)}else return s}function j0(n,e){const t=K0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Z0(n,e){let t;switch(e){case Qp:t="Linear";break;case em:t="Reinhard";break;case tm:t="Cineon";break;case nm:t="ACESFilmic";break;case sm:t="AgX";break;case rm:t="Neutral";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new K;function J0(){Ze.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cs(n){return n!==""}function cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(nx,sx)}const ix=new Map;function sx(n,e){let t=We[e];if(t===void 0){const i=ix.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(rx,ox)}function ox(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ax(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case ps:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bf:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case Jp:e="ENVMAP_BLENDING_ADD";break}return e}function fx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ax(t),c=lx(t),u=cx(t),f=ux(t),h=fx(t),m=Q0(t),x=ex(r),S=s.createProgram();let g,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cs).join(`
`),d.length>0&&(d+=`
`)):(g=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?We.tonemapping_pars_fragment:"",t.toneMapping!==ri?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),J0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=ol(o),o=cu(o,t),o=uu(o,t),a=ol(a),a=cu(a,t),a=uu(a,t),o=fu(o),a=fu(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=R+g+o,y=R+d+a,I=ou(s,s.VERTEX_SHADER,w),U=ou(s,s.FRAGMENT_SHADER,y);s.attachShader(S,I),s.attachShader(S,U),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(L){if(n.debug.checkShaderErrors){const se=s.getProgramInfoLog(S).trim(),Z=s.getShaderInfoLog(I).trim(),oe=s.getShaderInfoLog(U).trim();let ae=!0,ee=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,I,U);else{const Q=lu(s,I,"vertex"),H=lu(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+se+`
`+Q+`
`+H)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Z===""||oe==="")&&(ee=!1);ee&&(L.diagnostics={runnable:ae,programLog:se,vertexShader:{log:Z,prefix:g},fragmentShader:{log:oe,prefix:d}})}s.deleteShader(I),s.deleteShader(U),B=new Hr(s,S),T=tx(s,S)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,q0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=U,this}let hx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mx(e),t.set(e,i)),i}}class mx{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function gx(n,e,t,i,s,r,o){const a=new Bf,l=new px,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,E,L,se,Z){const oe=se.fog,ae=Z.geometry,ee=T.isMeshStandardMaterial?se.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),H=!!Q&&Q.mapping===lo?Q.image.height:null,pe=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ve=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Ie=0;ae.morphAttributes.position!==void 0&&(Ie=1),ae.morphAttributes.normal!==void 0&&(Ie=2),ae.morphAttributes.color!==void 0&&(Ie=3);let $e,re,he,ge;if(pe){const at=Tn[pe];$e=at.vertexShader,re=at.fragmentShader}else $e=T.vertexShader,re=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const me=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Fe=Z.isInstancedMesh===!0,Ce=Z.isBatchedMesh===!0,st=!!T.map,rt=!!T.matcap,A=!!Q,_=!!T.aoMap,Y=!!T.lightMap,te=!!T.bumpMap,j=!!T.normalMap,W=!!T.displacementMap,ce=!!T.emissiveMap,J=!!T.metalnessMap,v=!!T.roughnessMap,p=T.anisotropy>0,D=T.clearcoat>0,N=T.dispersion>0,G=T.iridescence>0,k=T.sheen>0,ue=T.transmission>0,ne=p&&!!T.anisotropyMap,b=D&&!!T.clearcoatMap,V=D&&!!T.clearcoatNormalMap,X=D&&!!T.clearcoatRoughnessMap,de=G&&!!T.iridescenceMap,be=G&&!!T.iridescenceThicknessMap,Pe=k&&!!T.sheenColorMap,ye=k&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Le=!!T.specularColorMap,ot=!!T.specularIntensityMap,F=ue&&!!T.transmissionMap,Me=ue&&!!T.thicknessMap,ie=!!T.gradientMap,le=!!T.alphaMap,Ee=T.alphaTest>0,Se=!!T.alphaHash,Ve=!!T.extensions;let mt=ri;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Ct={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:re,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&Z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Z.instanceColor!==null,instancingMorph:Fe&&Z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ms,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:rt,envMap:A,envMapMode:A&&Q.mapping,envMapCubeUVHeight:H,aoMap:_,lightMap:Y,bumpMap:te,normalMap:j,displacementMap:h&&W,emissiveMap:ce,normalMapObjectSpace:j&&T.normalMapType===cm,normalMapTangentSpace:j&&T.normalMapType===If,metalnessMap:J,roughnessMap:v,anisotropy:p,anisotropyMap:ne,clearcoat:D,clearcoatMap:b,clearcoatNormalMap:V,clearcoatRoughnessMap:X,dispersion:N,iridescence:G,iridescenceMap:de,iridescenceThicknessMap:be,sheen:k,sheenColorMap:Pe,sheenRoughnessMap:ye,specularMap:Ne,specularColorMap:Le,specularIntensityMap:ot,transmission:ue,transmissionMap:F,thicknessMap:Me,gradientMap:ie,opaque:T.transparent===!1&&T.blending===cs&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:Ee,alphaHash:Se,combine:T.combine,mapUv:st&&S(T.map.channel),aoMapUv:_&&S(T.aoMap.channel),lightMapUv:Y&&S(T.lightMap.channel),bumpMapUv:te&&S(T.bumpMap.channel),normalMapUv:j&&S(T.normalMap.channel),displacementMapUv:W&&S(T.displacementMap.channel),emissiveMapUv:ce&&S(T.emissiveMap.channel),metalnessMapUv:J&&S(T.metalnessMap.channel),roughnessMapUv:v&&S(T.roughnessMap.channel),anisotropyMapUv:ne&&S(T.anisotropyMap.channel),clearcoatMapUv:b&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:V&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&S(T.sheenRoughnessMap.channel),specularMapUv:Ne&&S(T.specularMap.channel),specularColorMapUv:Le&&S(T.specularColorMap.channel),specularIntensityMapUv:ot&&S(T.specularIntensityMap.channel),transmissionMapUv:F&&S(T.transmissionMap.channel),thicknessMapUv:Me&&S(T.thicknessMap.channel),alphaMapUv:le&&S(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(j||p),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ae.attributes.uv&&(st||le),fog:!!oe,useFog:T.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===lt,decodeVideoTextureEmissive:ce&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gn,flipSided:T.side===Yt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function d(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(R(E,T),w(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function R(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function w(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=x[T.type];let L;if(E){const se=Tn[E];L=Vm.clone(se.uniforms)}else L=T.uniforms;return L}function I(T,E){let L;for(let se=0,Z=u.length;se<Z;se++){const oe=u[se];if(oe.cacheKey===E){L=oe,++L.usedTimes;break}}return L===void 0&&(L=new dx(n,E,T,r),u.push(L)),L}function U(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:I,releaseProgram:U,releaseShaderCache:P,programs:u,dispose:B}}function _x(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,x,S,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:S,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=S,d.group=g),e++,d}function a(f,h,m,x,S,g){const d=o(f,h,m,x,S,g);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,x,S,g){const d=o(f,h,m,x,S,g);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||vx),i.length>1&&i.sort(h||hu),s.length>1&&s.sort(h||hu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new pu,n.set(i,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Je};break;case"SpotLight":t={position:new K,direction:new K,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ex=0;function yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bx(n){const e=new Mx,t=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,r=new vt,o=new vt;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,x=0,S=0,g=0,d=0,R=0,w=0,y=0,I=0,U=0,P=0;c.sort(yx);for(let T=0,E=c.length;T<E;T++){const L=c[T],se=L.color,Z=L.intensity,oe=L.distance,ae=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=se.r*Z,f+=se.g*Z,h+=se.b*Z;else if(L.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(L.sh.coefficients[ee],Z);P++}else if(L.isDirectionalLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=ae,i.directionalShadowMatrix[m]=L.shadow.matrix,R++}i.directional[m]=ee,m++}else if(L.isSpotLight){const ee=e.get(L);ee.position.setFromMatrixPosition(L.matrixWorld),ee.color.copy(se).multiplyScalar(Z),ee.distance=oe,ee.coneCos=Math.cos(L.angle),ee.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ee.decay=L.decay,i.spot[S]=ee;const Q=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,Q.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[S]=Q.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=ae,y++}S++}else if(L.isRectAreaLight){const ee=e.get(L);ee.color.copy(se).multiplyScalar(Z),ee.halfWidth.set(L.width*.5,0,0),ee.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=ee,g++}else if(L.isPointLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),ee.distance=L.distance,ee.decay=L.decay,L.castShadow){const Q=L.shadow,H=t.get(L);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=ae,i.pointShadowMatrix[x]=L.shadow.matrix,w++}i.point[x]=ee,x++}else if(L.isHemisphereLight){const ee=e.get(L);ee.skyColor.copy(L.color).multiplyScalar(Z),ee.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[d]=ee,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==m||B.pointLength!==x||B.spotLength!==S||B.rectAreaLength!==g||B.hemiLength!==d||B.numDirectionalShadows!==R||B.numPointShadows!==w||B.numSpotShadows!==y||B.numSpotMaps!==I||B.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+I-U,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=P,B.directionalLength=m,B.pointLength=x,B.spotLength=S,B.rectAreaLength=g,B.hemiLength=d,B.numDirectionalShadows=R,B.numPointShadows=w,B.numSpotShadows=y,B.numSpotMaps=I,B.numLightProbes=P,i.version=Ex++)}function l(c,u){let f=0,h=0,m=0,x=0,S=0;const g=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const w=c[d];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(w.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(w.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),h++}else if(w.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function mu(n){const e=new bx(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new mu(n),e.set(s,[a])):r>=o.length?(a=new mu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(n,e,t){let i=new Ul;const s=new it,r=new it,o=new _t,a=new Zm({depthPacking:lm}),l=new Jm,c={},u=t.maxTextureSize,f={[oi]:Yt,[Yt]:oi,[Gn]:Gn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Ax,fragmentShader:wx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ni;x.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let d=this.type;this.render=function(U,P,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),se=n.state;se.setBlending(si),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=d!==zn&&this.type===zn,oe=d===zn&&this.type!==zn;for(let ae=0,ee=U.length;ae<ee;ae++){const Q=U[ae],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const pe=H.getFrameExtents();if(s.multiply(pe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,H.mapSize.y=r.y)),H.map===null||Z===!0||oe===!0){const Ae=this.type!==zn?{minFilter:Sn,magFilter:Sn}:{};H.map!==null&&H.map.dispose(),H.map=new Ui(s.x,s.y,Ae),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ve=H.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Ie=H.getViewport(Ae);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),se.viewport(o),H.updateMatrices(Q,Ae),i=H.getFrustum(),y(P,B,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===zn&&R(H,B),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(T,E,L)};function R(U,P){const B=e.update(S);h.defines.VSM_SAMPLES!==U.blurSamples&&(h.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ui(s.x,s.y)),h.uniforms.shadow_pass.value=U.map.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(P,null,B,h,S,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(P,null,B,m,S,null)}function w(U,P,B,T){let E=null;const L=B.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(L!==void 0)E=L;else if(E=B.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const se=E.uuid,Z=P.uuid;let oe=c[se];oe===void 0&&(oe={},c[se]=oe);let ae=oe[Z];ae===void 0&&(ae=E.clone(),oe[Z]=ae,P.addEventListener("dispose",I)),E=ae}if(E.visible=P.visible,E.wireframe=P.wireframe,T===zn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const se=n.properties.get(E);se.light=B}return E}function y(U,P,B,T,E){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&E===zn)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,U.matrixWorld);const Z=e.update(U),oe=U.material;if(Array.isArray(oe)){const ae=Z.groups;for(let ee=0,Q=ae.length;ee<Q;ee++){const H=ae[ee],pe=oe[H.materialIndex];if(pe&&pe.visible){const ve=w(U,pe,T,E);U.onBeforeShadow(n,U,P,B,Z,ve,H),n.renderBufferDirect(B,null,Z,ve,U,H),U.onAfterShadow(n,U,P,B,Z,ve,H)}}}else if(oe.visible){const ae=w(U,oe,T,E);U.onBeforeShadow(n,U,P,B,Z,ae,null),n.renderBufferDirect(B,null,Z,ae,U,null),U.onAfterShadow(n,U,P,B,Z,ae,null)}}const se=U.children;for(let Z=0,oe=se.length;Z<oe;Z++)y(se[Z],P,B,T,E)}function I(U){U.target.removeEventListener("dispose",I);for(const B in c){const T=c[B],E=U.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Cx={[Ea]:ya,[ba]:wa,[Ta]:Ra,[ds]:Aa,[ya]:Ea,[wa]:ba,[Ra]:Ta,[Aa]:ds};function Px(n,e){function t(){let F=!1;const Me=new _t;let ie=null;const le=new _t(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!F&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,Se,Ve,mt,Ct){Ct===!0&&(Ee*=mt,Se*=mt,Ve*=mt),Me.set(Ee,Se,Ve,mt),le.equals(Me)===!1&&(n.clearColor(Ee,Se,Ve,mt),le.copy(Me))},reset:function(){F=!1,ie=null,le.set(-1,0,0,0)}}}function i(){let F=!1,Me=!1,ie=null,le=null,Ee=null;return{setReversed:function(Se){if(Me!==Se){const Ve=e.get("EXT_clip_control");Se?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Me=Se;const mt=Ee;Ee=null,this.setClear(mt)}},getReversed:function(){return Me},setTest:function(Se){Se?me(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Se){ie!==Se&&!F&&(n.depthMask(Se),ie=Se)},setFunc:function(Se){if(Me&&(Se=Cx[Se]),le!==Se){switch(Se){case Ea:n.depthFunc(n.NEVER);break;case ya:n.depthFunc(n.ALWAYS);break;case ba:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Se}},setLocked:function(Se){F=Se},setClear:function(Se){Ee!==Se&&(Me&&(Se=1-Se),n.clearDepth(Se),Ee=Se)},reset:function(){F=!1,ie=null,le=null,Ee=null,Me=!1}}}function s(){let F=!1,Me=null,ie=null,le=null,Ee=null,Se=null,Ve=null,mt=null,Ct=null;return{setTest:function(at){F||(at?me(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(at){Me!==at&&!F&&(n.stencilMask(at),Me=at)},setFunc:function(at,fn,Ln){(ie!==at||le!==fn||Ee!==Ln)&&(n.stencilFunc(at,fn,Ln),ie=at,le=fn,Ee=Ln)},setOp:function(at,fn,Ln){(Se!==at||Ve!==fn||mt!==Ln)&&(n.stencilOp(at,fn,Ln),Se=at,Ve=fn,mt=Ln)},setLocked:function(at){F=at},setClear:function(at){Ct!==at&&(n.clearStencil(at),Ct=at)},reset:function(){F=!1,Me=null,ie=null,le=null,Ee=null,Se=null,Ve=null,mt=null,Ct=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],x=null,S=!1,g=null,d=null,R=null,w=null,y=null,I=null,U=null,P=new Je(0,0,0),B=0,T=!1,E=null,L=null,se=null,Z=null,oe=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=Q>=2);let pe=null,ve={};const Ae=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),$e=new _t().fromArray(Ae),re=new _t().fromArray(Ie);function he(F,Me,ie,le){const Ee=new Uint8Array(4),Se=n.createTexture();n.bindTexture(F,Se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ie;Ve++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Me+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Se}const ge={};ge[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(ds),te(!1),j(xc),me(n.CULL_FACE),_(si);function me(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Re(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Fe(F,Me){return f[F]!==Me?(n.bindFramebuffer(F,Me),f[F]=Me,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ce(F,Me){let ie=m,le=!1;if(F){ie=h.get(Me),ie===void 0&&(ie=[],h.set(Me,ie));const Ee=F.textures;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ve=Ee.length;Se<Ve;Se++)ie[Se]=n.COLOR_ATTACHMENT0+Se;ie.length=Ee.length,le=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,le=!0);le&&n.drawBuffers(ie)}function st(F){return x!==F?(n.useProgram(F),x=F,!0):!1}const rt={[bi]:n.FUNC_ADD,[Ip]:n.FUNC_SUBTRACT,[Np]:n.FUNC_REVERSE_SUBTRACT};rt[Fp]=n.MIN,rt[Op]=n.MAX;const A={[Bp]:n.ZERO,[zp]:n.ONE,[Hp]:n.SRC_COLOR,[Ma]:n.SRC_ALPHA,[qp]:n.SRC_ALPHA_SATURATE,[Wp]:n.DST_COLOR,[kp]:n.DST_ALPHA,[Vp]:n.ONE_MINUS_SRC_COLOR,[Sa]:n.ONE_MINUS_SRC_ALPHA,[Xp]:n.ONE_MINUS_DST_COLOR,[Gp]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[$p]:n.ONE_MINUS_CONSTANT_COLOR,[Kp]:n.CONSTANT_ALPHA,[jp]:n.ONE_MINUS_CONSTANT_ALPHA};function _(F,Me,ie,le,Ee,Se,Ve,mt,Ct,at){if(F===si){S===!0&&(Re(n.BLEND),S=!1);return}if(S===!1&&(me(n.BLEND),S=!0),F!==Up){if(F!==g||at!==T){if((d!==bi||y!==bi)&&(n.blendEquation(n.FUNC_ADD),d=bi,y=bi),at)switch(F){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,w=null,I=null,U=null,P.set(0,0,0),B=0,g=F,T=at}return}Ee=Ee||Me,Se=Se||ie,Ve=Ve||le,(Me!==d||Ee!==y)&&(n.blendEquationSeparate(rt[Me],rt[Ee]),d=Me,y=Ee),(ie!==R||le!==w||Se!==I||Ve!==U)&&(n.blendFuncSeparate(A[ie],A[le],A[Se],A[Ve]),R=ie,w=le,I=Se,U=Ve),(mt.equals(P)===!1||Ct!==B)&&(n.blendColor(mt.r,mt.g,mt.b,Ct),P.copy(mt),B=Ct),g=F,T=!1}function Y(F,Me){F.side===Gn?Re(n.CULL_FACE):me(n.CULL_FACE);let ie=F.side===Yt;Me&&(ie=!ie),te(ie),F.blending===cs&&F.transparent===!1?_(si):_(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const le=F.stencilWrite;a.setTest(le),le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function j(F){F!==Pp?(me(n.CULL_FACE),F!==L&&(F===xc?n.cullFace(n.BACK):F===Dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),L=F}function W(F){F!==se&&(ee&&n.lineWidth(F),se=F)}function ce(F,Me,ie){F?(me(n.POLYGON_OFFSET_FILL),(Z!==Me||oe!==ie)&&(n.polygonOffset(Me,ie),Z=Me,oe=ie)):Re(n.POLYGON_OFFSET_FILL)}function J(F){F?me(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function v(F){F===void 0&&(F=n.TEXTURE0+ae-1),pe!==F&&(n.activeTexture(F),pe=F)}function p(F,Me,ie){ie===void 0&&(pe===null?ie=n.TEXTURE0+ae-1:ie=pe);let le=ve[ie];le===void 0&&(le={type:void 0,texture:void 0},ve[ie]=le),(le.type!==F||le.texture!==Me)&&(pe!==ie&&(n.activeTexture(ie),pe=ie),n.bindTexture(F,Me||ge[F]),le.type=F,le.texture=Me)}function D(){const F=ve[pe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function b(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){$e.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),$e.copy(F))}function ye(F){re.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function Ne(F,Me){let ie=c.get(Me);ie===void 0&&(ie=new WeakMap,c.set(Me,ie));let le=ie.get(F);le===void 0&&(le=n.getUniformBlockIndex(Me,F.name),ie.set(F,le))}function Le(F,Me){const le=c.get(Me).get(F);l.get(Me)!==le&&(n.uniformBlockBinding(Me,le,F.__bindingPointIndex),l.set(Me,le))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ve={},f={},h=new WeakMap,m=[],x=null,S=!1,g=null,d=null,R=null,w=null,y=null,I=null,U=null,P=new Je(0,0,0),B=0,T=!1,E=null,L=null,se=null,Z=null,oe=null,$e.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Re,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:st,setBlending:_,setMaterial:Y,setFlipSided:te,setCullFace:j,setLineWidth:W,setPolygonOffset:ce,setScissorTest:J,activeTexture:v,bindTexture:p,unbindTexture:D,compressedTexImage2D:N,compressedTexImage3D:G,texImage2D:de,texImage3D:be,updateUBOMapping:Ne,uniformBlockBinding:Le,texStorage2D:V,texStorage3D:X,texSubImage2D:k,texSubImage3D:ue,compressedTexSubImage2D:ne,compressedTexSubImage3D:b,scissor:Pe,viewport:ye,reset:ot}}function Dx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,p){return m?new OffscreenCanvas(v,p):jr("canvas")}function S(v,p,D){let N=1;const G=J(v);if((G.width>D||G.height>D)&&(N=D/Math.max(G.width,G.height)),N<1)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap||typeof VideoFrame!="undefined"&&v instanceof VideoFrame){const k=Math.floor(N*G.width),ue=Math.floor(N*G.height);f===void 0&&(f=x(k,ue));const ne=p?x(k,ue):f;return ne.width=k,ne.height=ue,ne.getContext("2d").drawImage(v,0,0,k,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+k+"x"+ue+")."),ne}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),v;return v}function g(v){return v.generateMipmaps}function d(v){n.generateMipmap(v)}function R(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(v,p,D,N,G=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=p;if(p===n.RED&&(D===n.FLOAT&&(k=n.R32F),D===n.HALF_FLOAT&&(k=n.R16F),D===n.UNSIGNED_BYTE&&(k=n.R8)),p===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(k=n.R8UI),D===n.UNSIGNED_SHORT&&(k=n.R16UI),D===n.UNSIGNED_INT&&(k=n.R32UI),D===n.BYTE&&(k=n.R8I),D===n.SHORT&&(k=n.R16I),D===n.INT&&(k=n.R32I)),p===n.RG&&(D===n.FLOAT&&(k=n.RG32F),D===n.HALF_FLOAT&&(k=n.RG16F),D===n.UNSIGNED_BYTE&&(k=n.RG8)),p===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(k=n.RG8UI),D===n.UNSIGNED_SHORT&&(k=n.RG16UI),D===n.UNSIGNED_INT&&(k=n.RG32UI),D===n.BYTE&&(k=n.RG8I),D===n.SHORT&&(k=n.RG16I),D===n.INT&&(k=n.RG32I)),p===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(k=n.RGB8UI),D===n.UNSIGNED_SHORT&&(k=n.RGB16UI),D===n.UNSIGNED_INT&&(k=n.RGB32UI),D===n.BYTE&&(k=n.RGB8I),D===n.SHORT&&(k=n.RGB16I),D===n.INT&&(k=n.RGB32I)),p===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),D===n.UNSIGNED_INT&&(k=n.RGBA32UI),D===n.BYTE&&(k=n.RGBA8I),D===n.SHORT&&(k=n.RGBA16I),D===n.INT&&(k=n.RGBA32I)),p===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),p===n.RGBA){const ue=G?$r:Ze.getTransfer(N);D===n.FLOAT&&(k=n.RGBA32F),D===n.HALF_FLOAT&&(k=n.RGBA16F),D===n.UNSIGNED_BYTE&&(k=ue===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(v,p){let D;return v?p===null||p===Li||p===Gs?D=n.DEPTH24_STENCIL8:p===Wn?D=n.DEPTH32F_STENCIL8:p===ks&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Li||p===Gs?D=n.DEPTH_COMPONENT24:p===Wn?D=n.DEPTH_COMPONENT32F:p===ks&&(D=n.DEPTH_COMPONENT16),D}function I(v,p){return g(v)===!0||v.isFramebufferTexture&&v.minFilter!==Sn&&v.minFilter!==An?Math.log2(Math.max(p.width,p.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?p.mipmaps.length:1}function U(v){const p=v.target;p.removeEventListener("dispose",U),B(p),p.isVideoTexture&&u.delete(p)}function P(v){const p=v.target;p.removeEventListener("dispose",P),E(p)}function B(v){const p=i.get(v);if(p.__webglInit===void 0)return;const D=v.source,N=h.get(D);if(N){const G=N[p.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(v),Object.keys(N).length===0&&h.delete(D)}i.remove(v)}function T(v){const p=i.get(v);n.deleteTexture(p.__webglTexture);const D=v.source,N=h.get(D);delete N[p.__cacheKey],o.memory.textures--}function E(v){const p=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(p.__webglFramebuffer[N]))for(let G=0;G<p.__webglFramebuffer[N].length;G++)n.deleteFramebuffer(p.__webglFramebuffer[N][G]);else n.deleteFramebuffer(p.__webglFramebuffer[N]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[N])}else{if(Array.isArray(p.__webglFramebuffer))for(let N=0;N<p.__webglFramebuffer.length;N++)n.deleteFramebuffer(p.__webglFramebuffer[N]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let N=0;N<p.__webglColorRenderbuffer.length;N++)p.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[N]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const D=v.textures;for(let N=0,G=D.length;N<G;N++){const k=i.get(D[N]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(D[N])}i.remove(v)}let L=0;function se(){L=0}function Z(){const v=L;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),L+=1,v}function oe(v){const p=[];return p.push(v.wrapS),p.push(v.wrapT),p.push(v.wrapR||0),p.push(v.magFilter),p.push(v.minFilter),p.push(v.anisotropy),p.push(v.internalFormat),p.push(v.format),p.push(v.type),p.push(v.generateMipmaps),p.push(v.premultiplyAlpha),p.push(v.flipY),p.push(v.unpackAlignment),p.push(v.colorSpace),p.join()}function ae(v,p){const D=i.get(v);if(v.isVideoTexture&&W(v),v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){const N=v.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(D,v,p);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+p)}function ee(v,p){const D=i.get(v);if(v.version>0&&D.__version!==v.version){re(D,v,p);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+p)}function Q(v,p){const D=i.get(v);if(v.version>0&&D.__version!==v.version){re(D,v,p);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+p)}function H(v,p){const D=i.get(v);if(v.version>0&&D.__version!==v.version){he(D,v,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+p)}const pe={[Da]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},ve={[Sn]:n.NEAREST,[om]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Ae={[um]:n.NEVER,[gm]:n.ALWAYS,[fm]:n.LESS,[Nf]:n.LEQUAL,[dm]:n.EQUAL,[mm]:n.GEQUAL,[hm]:n.GREATER,[pm]:n.NOTEQUAL};function Ie(v,p){if(p.type===Wn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===An||p.magFilter===wo||p.magFilter===rr||p.magFilter===wi||p.minFilter===An||p.minFilter===wo||p.minFilter===rr||p.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,pe[p.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,pe[p.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,pe[p.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ve[p.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ve[p.minFilter]),p.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Ae[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Sn||p.minFilter!==rr&&p.minFilter!==wi||p.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function $e(v,p){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,p.addEventListener("dispose",U));const N=p.source;let G=h.get(N);G===void 0&&(G={},h.set(N,G));const k=oe(p);if(k!==v.__cacheKey){G[k]===void 0&&(G[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),G[k].usedTimes++;const ue=G[v.__cacheKey];ue!==void 0&&(G[v.__cacheKey].usedTimes--,ue.usedTimes===0&&T(p)),v.__cacheKey=k,v.__webglTexture=G[k].texture}return D}function re(v,p,D){let N=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(N=n.TEXTURE_3D);const G=$e(v,p),k=p.source;t.bindTexture(N,v.__webglTexture,n.TEXTURE0+D);const ue=i.get(k);if(k.version!==ue.__version||G===!0){t.activeTexture(n.TEXTURE0+D);const ne=Ze.getPrimaries(Ze.workingColorSpace),b=p.colorSpace===ni?null:Ze.getPrimaries(p.colorSpace),V=p.colorSpace===ni||ne===b?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let X=S(p.image,!1,s.maxTextureSize);X=ce(p,X);const de=r.convert(p.format,p.colorSpace),be=r.convert(p.type);let Pe=w(p.internalFormat,de,be,p.colorSpace,p.isVideoTexture);Ie(N,p);let ye;const Ne=p.mipmaps,Le=p.isVideoTexture!==!0,ot=ue.__version===void 0||G===!0,F=k.dataReady,Me=I(p,X);if(p.isDepthTexture)Pe=y(p.format===Xs,p.type),ot&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Pe,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,Pe,X.width,X.height,0,de,be,null));else if(p.isDataTexture)if(Ne.length>0){Le&&ot&&t.texStorage2D(n.TEXTURE_2D,Me,Pe,Ne[0].width,Ne[0].height);for(let ie=0,le=Ne.length;ie<le;ie++)ye=Ne[ie],Le?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Pe,ye.width,ye.height,0,de,be,ye.data);p.generateMipmaps=!1}else Le?(ot&&t.texStorage2D(n.TEXTURE_2D,Me,Pe,X.width,X.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,de,be,X.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,X.width,X.height,0,de,be,X.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Le&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Pe,Ne[0].width,Ne[0].height,X.depth);for(let ie=0,le=Ne.length;ie<le;ie++)if(ye=Ne[ie],p.format!==vn)if(de!==null)if(Le){if(F)if(p.layerUpdates.size>0){const Ee=Xc(ye.width,ye.height,p.format,p.type);for(const Se of p.layerUpdates){const Ve=ye.data.subarray(Se*Ee/ye.data.BYTES_PER_ELEMENT,(Se+1)*Ee/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Se,ye.width,ye.height,1,de,Ve)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,X.depth,de,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Pe,ye.width,ye.height,X.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,X.depth,de,be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Pe,ye.width,ye.height,X.depth,0,de,be,ye.data)}else{Le&&ot&&t.texStorage2D(n.TEXTURE_2D,Me,Pe,Ne[0].width,Ne[0].height);for(let ie=0,le=Ne.length;ie<le;ie++)ye=Ne[ie],p.format!==vn?de!==null?Le?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,de,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Pe,ye.width,ye.height,0,de,be,ye.data)}else if(p.isDataArrayTexture)if(Le){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Pe,X.width,X.height,X.depth),F)if(p.layerUpdates.size>0){const ie=Xc(X.width,X.height,p.format,p.type);for(const le of p.layerUpdates){const Ee=X.data.subarray(le*ie/X.data.BYTES_PER_ELEMENT,(le+1)*ie/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,X.width,X.height,1,de,be,Ee)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,be,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,X.width,X.height,X.depth,0,de,be,X.data);else if(p.isData3DTexture)Le?(ot&&t.texStorage3D(n.TEXTURE_3D,Me,Pe,X.width,X.height,X.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,be,X.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,X.width,X.height,X.depth,0,de,be,X.data);else if(p.isFramebufferTexture){if(ot)if(Le)t.texStorage2D(n.TEXTURE_2D,Me,Pe,X.width,X.height);else{let ie=X.width,le=X.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Pe,ie,le,0,de,be,null),ie>>=1,le>>=1}}else if(Ne.length>0){if(Le&&ot){const ie=J(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Me,Pe,ie.width,ie.height)}for(let ie=0,le=Ne.length;ie<le;ie++)ye=Ne[ie],Le?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de,be,ye):t.texImage2D(n.TEXTURE_2D,ie,Pe,de,be,ye);p.generateMipmaps=!1}else if(Le){if(ot){const ie=J(X);t.texStorage2D(n.TEXTURE_2D,Me,Pe,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,be,X)}else t.texImage2D(n.TEXTURE_2D,0,Pe,de,be,X);g(p)&&d(N),ue.__version=k.version,p.onUpdate&&p.onUpdate(p)}v.__version=p.version}function he(v,p,D){if(p.image.length!==6)return;const N=$e(v,p),G=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+D);const k=i.get(G);if(G.version!==k.__version||N===!0){t.activeTexture(n.TEXTURE0+D);const ue=Ze.getPrimaries(Ze.workingColorSpace),ne=p.colorSpace===ni?null:Ze.getPrimaries(p.colorSpace),b=p.colorSpace===ni||ue===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);const V=p.isCompressedTexture||p.image[0].isCompressedTexture,X=p.image[0]&&p.image[0].isDataTexture,de=[];for(let le=0;le<6;le++)!V&&!X?de[le]=S(p.image[le],!0,s.maxCubemapSize):de[le]=X?p.image[le].image:p.image[le],de[le]=ce(p,de[le]);const be=de[0],Pe=r.convert(p.format,p.colorSpace),ye=r.convert(p.type),Ne=w(p.internalFormat,Pe,ye,p.colorSpace),Le=p.isVideoTexture!==!0,ot=k.__version===void 0||N===!0,F=G.dataReady;let Me=I(p,be);Ie(n.TEXTURE_CUBE_MAP,p);let ie;if(V){Le&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ne,be.width,be.height);for(let le=0;le<6;le++){ie=de[le].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const Se=ie[Ee];p.format!==vn?Pe!==null?Le?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Se.width,Se.height,Pe,ye,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,Ne,Se.width,Se.height,0,Pe,ye,Se.data)}}}else{if(ie=p.mipmaps,Le&&ot){ie.length>0&&Me++;const le=J(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ne,le.width,le.height)}for(let le=0;le<6;le++)if(X){Le?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,de[le].width,de[le].height,Pe,ye,de[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,de[le].width,de[le].height,0,Pe,ye,de[le].data);for(let Ee=0;Ee<ie.length;Ee++){const Ve=ie[Ee].image[le].image;Le?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Ve.width,Ve.height,Pe,ye,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,Ne,Ve.width,Ve.height,0,Pe,ye,Ve.data)}}else{Le?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,ye,de[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,Pe,ye,de[le]);for(let Ee=0;Ee<ie.length;Ee++){const Se=ie[Ee];Le?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Pe,ye,Se.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,Ne,Pe,ye,Se.image[le])}}}g(p)&&d(n.TEXTURE_CUBE_MAP),k.__version=G.version,p.onUpdate&&p.onUpdate(p)}v.__version=p.version}function ge(v,p,D,N,G,k){const ue=r.convert(D.format,D.colorSpace),ne=r.convert(D.type),b=w(D.internalFormat,ue,ne,D.colorSpace),V=i.get(p),X=i.get(D);if(X.__renderTarget=p,!V.__hasExternalTextures){const de=Math.max(1,p.width>>k),be=Math.max(1,p.height>>k);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,k,b,de,be,p.depth,0,ue,ne,null):t.texImage2D(G,k,b,de,be,0,ue,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),j(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,G,X.__webglTexture,0,te(p)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,G,X.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(v,p,D){if(n.bindRenderbuffer(n.RENDERBUFFER,v),p.depthBuffer){const N=p.depthTexture,G=N&&N.isDepthTexture?N.type:null,k=y(p.stencilBuffer,G),ue=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=te(p);j(p)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,k,p.width,p.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,k,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,k,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,v)}else{const N=p.textures;for(let G=0;G<N.length;G++){const k=N[G],ue=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),b=w(k.internalFormat,ue,ne,k.colorSpace),V=te(p);D&&j(p)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,b,p.width,p.height):j(p)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,b,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,b,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(v,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(p.depthTexture);N.__renderTarget=p,(!N.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),ae(p.depthTexture,0);const G=N.__webglTexture,k=te(p);if(p.depthTexture.format===Ws)j(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(p.depthTexture.format===Xs)j(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Fe(v){const p=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==v.depthTexture){const N=v.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),N){const G=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,N.removeEventListener("dispose",G)};N.addEventListener("dispose",G),p.__depthDisposeCallback=G}p.__boundDepthTexture=N}if(v.depthTexture&&!p.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const N=v.texture.mipmaps;N&&N.length>0?Re(p.__webglFramebuffer[0],v):Re(p.__webglFramebuffer,v)}else if(D){p.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[N]),p.__webglDepthbuffer[N]===void 0)p.__webglDepthbuffer[N]=n.createRenderbuffer(),me(p.__webglDepthbuffer[N],v,!1);else{const G=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,k)}}else{const N=v.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),me(p.__webglDepthbuffer,v,!1);else{const G=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(v,p,D){const N=i.get(v);p!==void 0&&ge(N.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Fe(v)}function st(v){const p=v.texture,D=i.get(v),N=i.get(p);v.addEventListener("dispose",P);const G=v.textures,k=v.isWebGLCubeRenderTarget===!0,ue=G.length>1;if(ue||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=p.version,o.memory.textures++),k){D.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(p.mipmaps&&p.mipmaps.length>0){D.__webglFramebuffer[ne]=[];for(let b=0;b<p.mipmaps.length;b++)D.__webglFramebuffer[ne][b]=n.createFramebuffer()}else D.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){D.__webglFramebuffer=[];for(let ne=0;ne<p.mipmaps.length;ne++)D.__webglFramebuffer[ne]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ne=0,b=G.length;ne<b;ne++){const V=i.get(G[ne]);V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&j(v)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ne=0;ne<G.length;ne++){const b=G[ne];D.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);const V=r.convert(b.format,b.colorSpace),X=r.convert(b.type),de=w(b.internalFormat,V,X,b.colorSpace,v.isXRRenderTarget===!0),be=te(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,de,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,D.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),me(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,p);for(let ne=0;ne<6;ne++)if(p.mipmaps&&p.mipmaps.length>0)for(let b=0;b<p.mipmaps.length;b++)ge(D.__webglFramebuffer[ne][b],v,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,b);else ge(D.__webglFramebuffer[ne],v,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(p)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ne=0,b=G.length;ne<b;ne++){const V=G[ne],X=i.get(V);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),Ie(n.TEXTURE_2D,V),ge(D.__webglFramebuffer,v,V,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),g(V)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ne=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ie(ne,p),p.mipmaps&&p.mipmaps.length>0)for(let b=0;b<p.mipmaps.length;b++)ge(D.__webglFramebuffer[b],v,p,n.COLOR_ATTACHMENT0,ne,b);else ge(D.__webglFramebuffer,v,p,n.COLOR_ATTACHMENT0,ne,0);g(p)&&d(ne),t.unbindTexture()}v.depthBuffer&&Fe(v)}function rt(v){const p=v.textures;for(let D=0,N=p.length;D<N;D++){const G=p[D];if(g(G)){const k=R(v),ue=i.get(G).__webglTexture;t.bindTexture(k,ue),d(k),t.unbindTexture()}}}const A=[],_=[];function Y(v){if(v.samples>0){if(j(v)===!1){const p=v.textures,D=v.width,N=v.height;let G=n.COLOR_BUFFER_BIT;const k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(v),ne=p.length>1;if(ne)for(let V=0;V<p.length;V++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const b=v.texture.mipmaps;b&&b.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let V=0;V<p.length;V++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[V]);const X=i.get(p[V]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,D,N,0,0,D,N,G,n.NEAREST),l===!0&&(A.length=0,_.length=0,A.push(n.COLOR_ATTACHMENT0+V),v.depthBuffer&&v.resolveDepthBuffer===!1&&(A.push(k),_.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let V=0;V<p.length;V++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,ue.__webglColorRenderbuffer[V]);const X=i.get(p[V]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,X,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const p=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function te(v){return Math.min(s.maxSamples,v.samples)}function j(v){const p=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function W(v){const p=o.render.frame;u.get(v)!==p&&(u.set(v,p),v.update())}function ce(v,p){const D=v.colorSpace,N=v.format,G=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==ms&&D!==ni&&(Ze.getTransfer(D)===lt?(N!==vn||G!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),p}function J(v){return typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame!="undefined"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=ae,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ce,this.setupRenderTarget=st,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=j}function Lx(n,e){function t(i,s=ni){let r;const o=Ze.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Af)return n.BYTE;if(i===wf)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Tl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Ks)return n.HALF_FLOAT;if(i===Cf)return n.ALPHA;if(i===Pf)return n.RGB;if(i===vn)return n.RGBA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Df)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===Lf)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Pl)return n.RGBA_INTEGER;if(i===Ir||i===Nr||i===Fr||i===Or)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Ia||i===Na||i===Fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Ba||i===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oa||i===Ba)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===za)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ha||i===Va||i===ka||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka||i===ja||i===Za||i===Ja||i===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ga)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ya)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Za)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Br||i===el||i===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Br)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===nl||i===il||i===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:Ux,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends _s{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const S=new Nx,g=t.getContextAttributes();let d=null,R=null;const w=[],y=[],I=new it;let U=null;const P=new an;P.viewport=new _t;const B=new an;B.viewport=new _t;const T=[P,B],E=new ig;let L=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=w[re];return he===void 0&&(he=new Ko,w[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=w[re];return he===void 0&&(he=new Ko,w[re]=he),he.getGripSpace()},this.getHand=function(re){let he=w[re];return he===void 0&&(he=new Ko,w[re]=he),he.getHandSpace()};function Z(re){const he=y.indexOf(re.inputSource);if(he===-1)return;const ge=w[he];ge!==void 0&&(ge.update(re.inputSource,re.frame,c||o),ge.dispatchEvent({type:re.type,data:re.inputSource}))}function oe(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",ae);for(let re=0;re<w.length;re++){const he=y[re];he!==null&&(y[re]=null,w[re].disconnect(he))}L=null,se=null,S.reset(),e.setRenderTarget(d),m=null,h=null,f=null,s=null,R=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,me=null,Re=null;g.depth&&(Re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?Xs:Ws,me=g.stencil?Gs:Li);const Fe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new Ui(h.textureWidth,h.textureHeight,{format:vn,type:Pn,depthTexture:new qf(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Ui(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ae(re){for(let he=0;he<re.removed.length;he++){const ge=re.removed[he],me=y.indexOf(ge);me>=0&&(y[me]=null,w[me].disconnect(ge))}for(let he=0;he<re.added.length;he++){const ge=re.added[he];let me=y.indexOf(ge);if(me===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=y.length){y.push(ge),me=Fe;break}else if(y[Fe]===null){y[Fe]=ge,me=Fe;break}if(me===-1)break}const Re=w[me];Re&&Re.connect(ge)}}const ee=new K,Q=new K;function H(re,he,ge){ee.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(ge.matrixWorld);const me=ee.distanceTo(Q),Re=he.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,Ce=Re[14]/(Re[10]-1),st=Re[14]/(Re[10]+1),rt=(Re[9]+1)/Re[5],A=(Re[9]-1)/Re[5],_=(Re[8]-1)/Re[0],Y=(Fe[8]+1)/Fe[0],te=Ce*_,j=Ce*Y,W=me/(-_+Y),ce=W*-_;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(W),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Re[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=Ce+W,v=st+W,p=te-ce,D=j+(me-ce),N=rt*st/v*J,G=A*st/v*J;re.projectionMatrix.makePerspective(p,D,N,G,J,v),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let he=re.near,ge=re.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(ge=S.depthFar)),E.near=B.near=P.near=he,E.far=B.far=P.far=ge,(L!==E.near||se!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,se=E.far),P.layers.mask=re.layers.mask|2,B.layers.mask=re.layers.mask|4,E.layers.mask=P.layers.mask|B.layers.mask;const me=re.parent,Re=E.cameras;pe(E,me);for(let Fe=0;Fe<Re.length;Fe++)pe(Re[Fe],me);Re.length===2?H(E,P,B):E.projectionMatrix.copy(P.projectionMatrix),ve(re,E,me)};function ve(re,he,ge){ge===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ge.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=rl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Ae=null;function Ie(re,he){if(u=he.getViewerPose(c||o),x=he,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let me=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,me=!0);for(let Ce=0;Ce<ge.length;Ce++){const st=ge[Ce];let rt=null;if(m!==null)rt=m.getViewport(st);else{const _=f.getViewSubImage(h,st);rt=_.viewport,Ce===0&&(e.setRenderTargetTextures(R,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(R))}let A=T[Ce];A===void 0&&(A=new an,A.layers.enable(Ce),A.viewport=new _t,T[Ce]=A),A.matrix.fromArray(st.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(st.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(rt.x,rt.y,rt.width,rt.height),Ce===0&&(E.matrix.copy(A.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),me===!0&&E.cameras.push(A)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ce=f.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&S.init(e,Ce,s.renderState)}}for(let ge=0;ge<w.length;ge++){const me=y[ge],Re=w[ge];me!==null&&Re!==void 0&&Re.update(me,he,c||o)}Ae&&Ae(re,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),x=null}const $e=new Kf;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Mi=new Dn,Ox=new vt;function Bx(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Gf(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,R,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),x(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),S(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,R,w):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Yt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Yt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const R=e.get(d),w=R.envMap,y=R.envMapRotation;w&&(g.envMap.value=w,Mi.copy(y),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Mi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,R,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*R,g.scale.value=w*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,R){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const R=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const y=w.program;i.uniformBlockBinding(R,y)}function c(R,w){let y=s[R.id];y===void 0&&(x(R),y=u(R),s[R.id]=y,R.addEventListener("dispose",g));const I=w.program;i.updateUBOMapping(R,I);const U=e.render.frame;r[R.id]!==U&&(h(R),r[R.id]=U)}function u(R){const w=f();R.__bindingPointIndex=w;const y=n.createBuffer(),I=R.__size,U=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const w=s[R.id],y=R.uniforms,I=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let U=0,P=y.length;U<P;U++){const B=Array.isArray(y[U])?y[U]:[y[U]];for(let T=0,E=B.length;T<E;T++){const L=B[T];if(m(L,U,T,I)===!0){const se=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value];let oe=0;for(let ae=0;ae<Z.length;ae++){const ee=Z[ae],Q=S(ee);typeof ee=="number"||typeof ee=="boolean"?(L.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,se+oe,L.__data)):ee.isMatrix3?(L.__data[0]=ee.elements[0],L.__data[1]=ee.elements[1],L.__data[2]=ee.elements[2],L.__data[3]=0,L.__data[4]=ee.elements[3],L.__data[5]=ee.elements[4],L.__data[6]=ee.elements[5],L.__data[7]=0,L.__data[8]=ee.elements[6],L.__data[9]=ee.elements[7],L.__data[10]=ee.elements[8],L.__data[11]=0):(ee.toArray(L.__data,oe),oe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,se,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,w,y,I){const U=R.value,P=w+"_"+y;if(I[P]===void 0)return typeof U=="number"||typeof U=="boolean"?I[P]=U:I[P]=U.clone(),!0;{const B=I[P];if(typeof U=="number"||typeof U=="boolean"){if(B!==U)return I[P]=U,!0}else if(B.equals(U)===!1)return B.copy(U),!0}return!1}function x(R){const w=R.uniforms;let y=0;const I=16;for(let P=0,B=w.length;P<B;P++){const T=Array.isArray(w[P])?w[P]:[w[P]];for(let E=0,L=T.length;E<L;E++){const se=T[E],Z=Array.isArray(se.value)?se.value:[se.value];for(let oe=0,ae=Z.length;oe<ae;oe++){const ee=Z[oe],Q=S(ee),H=y%I,pe=H%Q.boundary,ve=H+pe;y+=pe,ve!==0&&I-ve<Q.storage&&(y+=I-ve),se.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=y,y+=Q.storage}}}const U=y%I;return U>0&&(y+=I-U),R.__size=y,R.__cache={},this}function S(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function g(R){const w=R.target;w.removeEventListener("dispose",g);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Hx{constructor(e={}){const{canvas:t=vm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),S=new Int32Array(4);let g=null,d=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let I=!1;this._outputColorSpace=on;let U=0,P=0,B=null,T=-1,E=null;const L=new _t,se=new _t;let Z=null;const oe=new Je(0);let ae=0,ee=t.width,Q=t.height,H=1,pe=null,ve=null;const Ae=new _t(0,0,ee,Q),Ie=new _t(0,0,ee,Q);let $e=!1;const re=new Ul;let he=!1,ge=!1;const me=new vt,Re=new vt,Fe=new K,Ce=new _t,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function A(){return B===null?H:1}let _=i;function Y(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),_===null){const O="webgl2";if(_=Y(O,M),_===null)throw Y(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,j,W,ce,J,v,p,D,N,G,k,ue,ne,b,V,X,de,be,Pe,ye,Ne,Le,ot,F;function Me(){te=new jv(_),te.init(),Le=new Lx(_,te),j=new Gv(_,te,e,Le),W=new Px(_,te),j.reverseDepthBuffer&&h&&W.buffers.depth.setReversed(!0),ce=new Qv(_),J=new _x,v=new Dx(_,te,W,J,j,Le,ce),p=new Xv(y),D=new Kv(y),N=new rg(_),ot=new Vv(_,N),G=new Zv(_,N,ce,ot),k=new t0(_,G,N,ce),Pe=new e0(_,j,v),X=new Wv(J),ue=new gx(y,p,D,te,j,ot,X),ne=new Bx(y,J),b=new xx,V=new Tx(te),be=new Hv(y,p,D,W,k,m,l),de=new Rx(y,k,j),F=new zx(_,ce,j,W),ye=new kv(_,te,ce),Ne=new Jv(_,te,ce),ce.programs=ue.programs,y.capabilities=j,y.extensions=te,y.properties=J,y.renderLists=b,y.shadowMap=de,y.state=W,y.info=ce}Me();const ie=new Fx(y,_);this.xr=ie,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(ee,Q,!1))},this.getSize=function(M){return M.set(ee,Q)},this.setSize=function(M,O,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,Q=O,t.width=Math.floor(M*H),t.height=Math.floor(O*H),q===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(ee*H,Q*H).floor()},this.setDrawingBufferSize=function(M,O,q){ee=M,Q=O,H=q,t.width=Math.floor(M*q),t.height=Math.floor(O*q),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,O,q,$){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,O,q,$),W.viewport(L.copy(Ae).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,O,q,$){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,O,q,$),W.scissor(se.copy(Ie).multiplyScalar(H).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){W.setScissorTest($e=M)},this.setOpaqueSort=function(M){pe=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,q=!0){let $=0;if(M){let z=!1;if(B!==null){const fe=B.texture.format;z=fe===Pl||fe===Cl||fe===Rl}if(z){const fe=B.texture.type,xe=fe===Pn||fe===Li||fe===ks||fe===Gs||fe===Al||fe===wl,Te=be.getClearColor(),we=be.getClearAlpha(),Be=Te.r,Oe=Te.g,De=Te.b;xe?(x[0]=Be,x[1]=Oe,x[2]=De,x[3]=we,_.clearBufferuiv(_.COLOR,0,x)):(S[0]=Be,S[1]=Oe,S[2]=De,S[3]=we,_.clearBufferiv(_.COLOR,0,S))}else $|=_.COLOR_BUFFER_BIT}O&&($|=_.DEPTH_BUFFER_BIT),q&&($|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),be.dispose(),b.dispose(),V.dispose(),J.dispose(),p.dispose(),D.dispose(),k.dispose(),ot.dispose(),F.dispose(),ue.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nl),ie.removeEventListener("sessionend",Fl),fi.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=ce.autoReset,O=de.enabled,q=de.autoUpdate,$=de.needsUpdate,z=de.type;Me(),ce.autoReset=M,de.enabled=O,de.autoUpdate=q,de.needsUpdate=$,de.type=z}function Se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const O=M.target;O.removeEventListener("dispose",Ve),mt(O)}function mt(M){Ct(M),J.remove(M)}function Ct(M){const O=J.get(M).programs;O!==void 0&&(O.forEach(function(q){ue.releaseProgram(q)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,q,$,z,fe){O===null&&(O=st);const xe=z.isMesh&&z.matrixWorld.determinant()<0,Te=ed(M,O,q,$,z);W.setMaterial($,xe);let we=q.index,Be=1;if($.wireframe===!0){if(we=G.getWireframeAttribute(q),we===void 0)return;Be=2}const Oe=q.drawRange,De=q.attributes.position;let Ye=Oe.start*Be,Qe=(Oe.start+Oe.count)*Be;fe!==null&&(Ye=Math.max(Ye,fe.start*Be),Qe=Math.min(Qe,(fe.start+fe.count)*Be)),we!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,we.count)):De!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,De.count));const St=Qe-Ye;if(St<0||St===1/0)return;ot.setup(z,$,Te,q,we);let gt,Ke=ye;if(we!==null&&(gt=N.get(we),Ke=Ne,Ke.setIndex(gt)),z.isMesh)$.wireframe===!0?(W.setLineWidth($.wireframeLinewidth*A()),Ke.setMode(_.LINES)):Ke.setMode(_.TRIANGLES);else if(z.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),W.setLineWidth(Ue*A()),z.isLineSegments?Ke.setMode(_.LINES):z.isLineLoop?Ke.setMode(_.LINE_LOOP):Ke.setMode(_.LINE_STRIP)}else z.isPoints?Ke.setMode(_.POINTS):z.isSprite&&Ke.setMode(_.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Ke.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,wt=z._multiDrawCounts,et=z._multiDrawCount,dn=we?N.get(we).bytesPerElement:1,Fi=J.get($).currentProgram.getUniforms();for(let Kt=0;Kt<et;Kt++)Fi.setValue(_,"_gl_DrawID",Kt),Ke.render(Ue[Kt]/dn,wt[Kt])}else if(z.isInstancedMesh)Ke.renderInstances(Ye,St,z.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,Ue);Ke.renderInstances(Ye,St,wt)}else Ke.render(Ye,St)};function at(M,O,q){M.transparent===!0&&M.side===Gn&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,tr(M,O,q),M.side=oi,M.needsUpdate=!0,tr(M,O,q),M.side=Gn):tr(M,O,q)}this.compile=function(M,O,q=null){q===null&&(q=M),d=V.get(q),d.init(O),w.push(d),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),M!==q&&M.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const $=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Te=fe[xe];at(Te,q,z),$.add(Te)}else at(fe,q,z),$.add(fe)}),d=w.pop(),$},this.compileAsync=function(M,O,q=null){const $=this.compile(M,O,q);return new Promise(z=>{function fe(){if($.forEach(function(xe){J.get(xe).currentProgram.isReady()&&$.delete(xe)}),$.size===0){z(M);return}setTimeout(fe,10)}te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let fn=null;function Ln(M){fn&&fn(M)}function Nl(){fi.stop()}function Fl(){fi.start()}const fi=new Kf;fi.setAnimationLoop(Ln),typeof self!="undefined"&&fi.setContext(self),this.setAnimationLoop=function(M){fn=M,ie.setAnimationLoop(M),M===null?fi.stop():fi.start()},ie.addEventListener("sessionstart",Nl),ie.addEventListener("sessionend",Fl),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,B),d=V.get(M,w.length),d.init(O),w.push(d),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,he=X.init(this.clippingPlanes,ge),g=b.get(M,R.length),g.init(),R.push(g),ie.enabled===!0&&ie.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&fo(fe,O,-1/0,y.sortObjects)}fo(M,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(pe,ve),rt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,rt&&be.addToRenderList(g,M),this.info.render.frame++,he===!0&&X.beginShadows();const q=d.state.shadowsArray;de.render(q,M,O),he===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,z=g.transmissive;if(d.setupLights(),O.isArrayCamera){const fe=O.cameras;if(z.length>0)for(let xe=0,Te=fe.length;xe<Te;xe++){const we=fe[xe];Bl($,z,M,we)}rt&&be.render(M);for(let xe=0,Te=fe.length;xe<Te;xe++){const we=fe[xe];Ol(g,M,we,we.viewport)}}else z.length>0&&Bl($,z,M,O),rt&&be.render(M),Ol(g,M,O);B!==null&&P===0&&(v.updateMultisampleRenderTarget(B),v.updateRenderTargetMipmap(B)),M.isScene===!0&&M.onAfterRender(y,M,O),ot.resetDefaultState(),T=-1,E=null,w.pop(),w.length>0?(d=w[w.length-1],he===!0&&X.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function fo(M,O,q,$){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){$&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);const xe=k.update(M),Te=M.material;Te.visible&&g.push(M,xe,Te,q,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const xe=k.update(M),Te=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ce.copy(xe.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(Te)){const we=xe.groups;for(let Be=0,Oe=we.length;Be<Oe;Be++){const De=we[Be],Ye=Te[De.materialIndex];Ye&&Ye.visible&&g.push(M,xe,Ye,q,Ce.z,De)}}else Te.visible&&g.push(M,xe,Te,q,Ce.z,null)}}const fe=M.children;for(let xe=0,Te=fe.length;xe<Te;xe++)fo(fe[xe],O,q,$)}function Ol(M,O,q,$){const z=M.opaque,fe=M.transmissive,xe=M.transparent;d.setupLightsView(q),he===!0&&X.setGlobalState(y.clippingPlanes,q),$&&W.viewport(L.copy($)),z.length>0&&er(z,O,q),fe.length>0&&er(fe,O,q),xe.length>0&&er(xe,O,q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Bl(M,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Ui(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ks:Pn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const fe=d.state.transmissionRenderTarget[$.id],xe=$.viewport||L;fe.setSize(xe.z*y.transmissionResolutionScale,xe.w*y.transmissionResolutionScale);const Te=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(oe),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),rt&&be.render(q);const we=y.toneMapping;y.toneMapping=ri;const Be=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),he===!0&&X.setGlobalState(y.clippingPlanes,$),er(M,q,$),v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let De=0,Ye=O.length;De<Ye;De++){const Qe=O[De],St=Qe.object,gt=Qe.geometry,Ke=Qe.material,Ue=Qe.group;if(Ke.side===Gn&&St.layers.test($.layers)){const wt=Ke.side;Ke.side=Yt,Ke.needsUpdate=!0,zl(St,q,$,gt,Ke,Ue),Ke.side=wt,Ke.needsUpdate=!0,Oe=!0}}Oe===!0&&(v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe))}y.setRenderTarget(Te),y.setClearColor(oe,ae),Be!==void 0&&($.viewport=Be),y.toneMapping=we}function er(M,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,fe=M.length;z<fe;z++){const xe=M[z],Te=xe.object,we=xe.geometry,Be=xe.group;let Oe=xe.material;Oe.allowOverride===!0&&$!==null&&(Oe=$),Te.layers.test(q.layers)&&zl(Te,O,q,we,Oe,Be)}}function zl(M,O,q,$,z,fe){M.onBeforeRender(y,O,q,$,z,fe),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(y,O,q,$,M,fe),z.transparent===!0&&z.side===Gn&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,y.renderBufferDirect(q,O,$,z,M,fe),z.side=oi,z.needsUpdate=!0,y.renderBufferDirect(q,O,$,z,M,fe),z.side=Gn):y.renderBufferDirect(q,O,$,z,M,fe),M.onAfterRender(y,O,q,$,z,fe)}function tr(M,O,q){O.isScene!==!0&&(O=st);const $=J.get(M),z=d.state.lights,fe=d.state.shadowsArray,xe=z.state.version,Te=ue.getParameters(M,z.state,fe,O,q),we=ue.getProgramCacheKey(Te);let Be=$.programs;$.environment=M.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(M.isMeshStandardMaterial?D:p).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Ve),Be=new Map,$.programs=Be);let Oe=Be.get(we);if(Oe!==void 0){if($.currentProgram===Oe&&$.lightsStateVersion===xe)return Vl(M,Te),Oe}else Te.uniforms=ue.getUniforms(M),M.onBeforeCompile(Te,y),Oe=ue.acquireProgram(Te,we),Be.set(we,Oe),$.uniforms=Te.uniforms;const De=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=X.uniform),Vl(M,Te),$.needsLights=nd(M),$.lightsStateVersion=xe,$.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Oe,$.uniformsList=null,Oe}function Hl(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Vl(M,O){const q=J.get(M);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function ed(M,O,q,$,z){O.isScene!==!0&&(O=st),v.resetTextureUnits();const fe=O.fog,xe=$.isMeshStandardMaterial?O.environment:null,Te=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ms,we=($.isMeshStandardMaterial?D:p).get($.envMap||xe),Be=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!q.morphAttributes.position,Ye=!!q.morphAttributes.normal,Qe=!!q.morphAttributes.color;let St=ri;$.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(St=y.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ke=gt!==void 0?gt.length:0,Ue=J.get($),wt=d.state.lights;if(he===!0&&(ge===!0||M!==E)){const Bt=M===E&&$.id===T;X.setState($,M,Bt)}let et=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==wt.state.version||Ue.outputColorSpace!==Te||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==we||$.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==X.numPlanes||Ue.numIntersection!==X.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==Oe||Ue.morphTargets!==De||Ue.morphNormals!==Ye||Ue.morphColors!==Qe||Ue.toneMapping!==St||Ue.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Ue.__version=$.version);let dn=Ue.currentProgram;et===!0&&(dn=tr($,O,z));let Fi=!1,Kt=!1,Ms=!1;const dt=dn.getUniforms(),nn=Ue.uniforms;if(W.useProgram(dn.program)&&(Fi=!0,Kt=!0,Ms=!0),$.id!==T&&(T=$.id,Kt=!0),Fi||E!==M){W.buffers.depth.getReversed()?(me.copy(M.projectionMatrix),Mm(me),Sm(me),dt.setValue(_,"projectionMatrix",me)):dt.setValue(_,"projectionMatrix",M.projectionMatrix),dt.setValue(_,"viewMatrix",M.matrixWorldInverse);const kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(_,Fe.setFromMatrixPosition(M.matrixWorld)),j.logarithmicDepthBuffer&&dt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Kt=!0,Ms=!0)}if(z.isSkinnedMesh){dt.setOptional(_,z,"bindMatrix"),dt.setOptional(_,z,"bindMatrixInverse");const Bt=z.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),dt.setValue(_,"boneTexture",Bt.boneTexture,v))}z.isBatchedMesh&&(dt.setOptional(_,z,"batchingTexture"),dt.setValue(_,"batchingTexture",z._matricesTexture,v),dt.setOptional(_,z,"batchingIdTexture"),dt.setValue(_,"batchingIdTexture",z._indirectTexture,v),dt.setOptional(_,z,"batchingColorTexture"),z._colorsTexture!==null&&dt.setValue(_,"batchingColorTexture",z._colorsTexture,v));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Pe.update(z,q,dn),(Kt||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,dt.setValue(_,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(nn.envMap.value=we,nn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),Kt&&(dt.setValue(_,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&td(nn,Ms),fe&&$.fog===!0&&ne.refreshFogUniforms(nn,fe),ne.refreshMaterialUniforms(nn,$,H,Q,d.state.transmissionRenderTarget[M.id]),Hr.upload(_,Hl(Ue),nn,v)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hr.upload(_,Hl(Ue),nn,v),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(_,"center",z.center),dt.setValue(_,"modelViewMatrix",z.modelViewMatrix),dt.setValue(_,"normalMatrix",z.normalMatrix),dt.setValue(_,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Bt=$.uniformsGroups;for(let kt=0,ho=Bt.length;kt<ho;kt++){const di=Bt[kt];F.update(di,dn),F.bind(di,dn)}}return dn}function td(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function nd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,O,q){const $=J.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=O,J.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const q=J.get(M);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const id=_.createFramebuffer();this.setRenderTarget=function(M,O=0,q=0){B=M,U=O,P=q;let $=!0,z=null,fe=!1,xe=!1;if(M){const we=J.get(M);if(we.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(_.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(we.__hasExternalTextures)v.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const De=M.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&J.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const Oe=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?z=Oe[O][q]:z=Oe[O],fe=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?z=J.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[q]:z=Oe,L.copy(M.viewport),se.copy(M.scissor),Z=M.scissorTest}else L.copy(Ae).multiplyScalar(H).floor(),se.copy(Ie).multiplyScalar(H).floor(),Z=$e;if(q!==0&&(z=id),W.bindFramebuffer(_.FRAMEBUFFER,z)&&$&&W.drawBuffers(M,z),W.viewport(L),W.scissor(se),W.setScissorTest(Z),fe){const we=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,q)}else if(xe){const we=J.get(M.texture),Be=O;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,we.__webglTexture,q,Be)}else if(M!==null&&q!==0){const we=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,we.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(M,O,q,$,z,fe,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){W.bindFramebuffer(_.FRAMEBUFFER,Te);try{const we=M.texture,Be=we.format,Oe=we.type;if(!j.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-$&&q>=0&&q<=M.height-z&&_.readPixels(O,q,$,z,Le.convert(Be),Le.convert(Oe),fe)}finally{const we=B!==null?J.get(B).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,O,q,$,z,fe,xe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te)if(O>=0&&O<=M.width-$&&q>=0&&q<=M.height-z){W.bindFramebuffer(_.FRAMEBUFFER,Te);const we=M.texture,Be=we.format,Oe=we.type;if(!j.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,De),_.bufferData(_.PIXEL_PACK_BUFFER,fe.byteLength,_.STREAM_READ),_.readPixels(O,q,$,z,Le.convert(Be),Le.convert(Oe),0);const Ye=B!==null?J.get(B).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,Ye);const Qe=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await xm(_,Qe,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,De),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,fe),_.deleteBuffer(De),_.deleteSync(Qe),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,q=0){const $=Math.pow(2,-q),z=Math.floor(M.image.width*$),fe=Math.floor(M.image.height*$),xe=O!==null?O.x:0,Te=O!==null?O.y:0;v.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,q,0,0,xe,Te,z,fe),W.unbindTexture()};const sd=_.createFramebuffer(),rd=_.createFramebuffer();this.copyTextureToTexture=function(M,O,q=null,$=null,z=0,fe=null){fe===null&&(z!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=z,z=0):fe=0);let xe,Te,we,Be,Oe,De,Ye,Qe,St;const gt=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(q!==null)xe=q.max.x-q.min.x,Te=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,Oe=q.min.y,De=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-z);xe=Math.floor(gt.width*sn),Te=Math.floor(gt.height*sn),M.isDataArrayTexture?we=gt.depth:M.isData3DTexture?we=Math.floor(gt.depth*sn):we=1,Be=0,Oe=0,De=0}$!==null?(Ye=$.x,Qe=$.y,St=$.z):(Ye=0,Qe=0,St=0);const Ke=Le.convert(O.format),Ue=Le.convert(O.type);let wt;O.isData3DTexture?(v.setTexture3D(O,0),wt=_.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),wt=_.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),wt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,O.unpackAlignment);const et=_.getParameter(_.UNPACK_ROW_LENGTH),dn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Fi=_.getParameter(_.UNPACK_SKIP_PIXELS),Kt=_.getParameter(_.UNPACK_SKIP_ROWS),Ms=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,gt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,gt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(_.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,De);const dt=M.isDataArrayTexture||M.isData3DTexture,nn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const sn=J.get(M),Bt=J.get(O),kt=J.get(sn.__renderTarget),ho=J.get(Bt.__renderTarget);W.bindFramebuffer(_.READ_FRAMEBUFFER,kt.__webglFramebuffer),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let di=0;di<we;di++)dt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(M).__webglTexture,z,De+di),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(O).__webglTexture,fe,St+di)),_.blitFramebuffer(Be,Oe,xe,Te,Ye,Qe,xe,Te,_.DEPTH_BUFFER_BIT,_.NEAREST);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||J.has(M)){const sn=J.get(M),Bt=J.get(O);W.bindFramebuffer(_.READ_FRAMEBUFFER,sd),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,rd);for(let kt=0;kt<we;kt++)dt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,sn.__webglTexture,z,De+kt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,sn.__webglTexture,z),nn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Bt.__webglTexture,fe,St+kt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Bt.__webglTexture,fe),z!==0?_.blitFramebuffer(Be,Oe,xe,Te,Ye,Qe,xe,Te,_.COLOR_BUFFER_BIT,_.NEAREST):nn?_.copyTexSubImage3D(wt,fe,Ye,Qe,St+kt,Be,Oe,xe,Te):_.copyTexSubImage2D(wt,fe,Ye,Qe,Be,Oe,xe,Te);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(wt,fe,Ye,Qe,St,xe,Te,we,Ke,Ue,gt.data):O.isCompressedArrayTexture?_.compressedTexSubImage3D(wt,fe,Ye,Qe,St,xe,Te,we,Ke,gt.data):_.texSubImage3D(wt,fe,Ye,Qe,St,xe,Te,we,Ke,Ue,gt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,fe,Ye,Qe,xe,Te,Ke,Ue,gt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,fe,Ye,Qe,gt.width,gt.height,Ke,gt.data):_.texSubImage2D(_.TEXTURE_2D,fe,Ye,Qe,xe,Te,Ke,Ue,gt);_.pixelStorei(_.UNPACK_ROW_LENGTH,et),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,dn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Fi),_.pixelStorei(_.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ms),fe===0&&O.generateMipmaps&&_.generateMipmap(wt),W.unbindTexture()},this.copyTextureToTexture3D=function(M,O,q=null,$=null,z=0){return zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,q,$,z)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),W.unbindTexture()},this.resetState=function(){U=0,P=0,B=null,W.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vx=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),kx=n=>{const e=Vx(n);return e.charAt(0).toUpperCase()+e.slice(1)},Gx=(...n)=>n.filter((e,t,i)=>Boolean(e)&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:o,...a},{slots:l})=>va("svg",{...wr,width:n||wr.width,height:n||wr.height,stroke:i||wr.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:Gx("lucide",...r?[`lucide-${gu(kx(r))}-icon`,`lucide-${gu(r)}`]:["lucide-icon"]),...a},[...s.map(c=>va(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(n,e)=>(t,{slots:i})=>va(Wx,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=un("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=un("camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=un("chart-no-axes-column",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=un("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=un("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=un("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=un("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=un("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=un("square-check-big",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=un("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=un("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=un("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var Zx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t};const Jx={class:"app-container"},Qx={class:"app-header"},eM={class:"header-actions"},tM={class:"icon-button"},nM={class:"main-content"},iM={key:0,class:"tab-content"},sM={class:"feature-grid"},rM=["onClick"],oM={class:"feature-header"},aM={class:"feature-title"},lM={class:"feature-description"},cM={class:"digital-twin-card"},uM={class:"card-header"},fM={class:"header-with-icon"},dM={class:"digital-twin-preview"},hM={class:"card"},pM={class:"card-content"},mM={class:"activity-list"},gM={class:"activity-icon-container"},_M={class:"activity-details"},vM={class:"activity-title"},xM={class:"activity-time"},MM={key:1,class:"tab-content"},SM={class:"card"},EM={class:"card-content"},yM={class:"record-list"},bM=["onClick"],TM={class:"button-with-icon"},AM={class:"record-content"},wM={key:0},RM={key:1},CM={key:2},PM=["onClick"],DM={key:3},LM=["onClick"],UM={key:2,class:"tab-content"},IM={class:"pest-id-card"},NM={class:"pest-id-header"},FM={class:"upload-area"},OM={class:"card"},BM={class:"card-content"},zM={class:"pest-grid"},HM={class:"pest-grid-name"},VM={key:3,class:"tab-content"},kM={class:"card"},GM={class:"card-content"},WM={class:"task-list"},XM={class:"task-header"},qM={class:"task-title"},YM={class:"task-date"},$M={class:"task-actions"},KM={class:"card"},jM={class:"card-content"},ZM={class:"timeline"},JM={class:"timeline-number"},QM={class:"timeline-content"},eS={class:"timeline-title"},tS={class:"timeline-description"},nS={key:4,class:"tab-content"},iS={class:"ai-assistant-card"},sS={class:"ai-header"},rS={class:"ai-avatar"},oS={class:"consultation"},aS={key:1,class:"chat-window"},lS={class:"chat-messages",ref:"chatMessages"},cS={class:"message-content"},uS=["disabled"],fS={class:"card"},dS={class:"card-content"},hS={class:"faq-list"},pS={class:"card"},mS={class:"card-content"},gS={class:"consultation-list"},_S={class:"consultation-question"},vS={class:"consultation-time"},xS={key:5,class:"tab-content"},MS={class:"digital-twin-banner"},SS={class:"digital-twin-preview large"},ES={class:"sandbox-container"},yS={class:"card"},bS={class:"card-content"},TS={class:"metrics-grid"},AS={class:"metric-header"},wS={class:"metric-name"},RS={class:"progress-bar"},CS={class:"card"},PS={class:"card-content"},DS={class:"area-list"},LS={class:"area-header"},US={class:"area-title"},IS={class:"area-info"},NS={key:6,class:"tab-content profile-page"},FS={class:"form-group"},OS={class:"form-group"},BS={class:"form-group"},zS={class:"form-group"},HS={class:"form-group"},VS={class:"form-group"},kS={class:"form-group"},GS={class:"user-services"},WS={class:"bottom-nav"},XS=["onClick"],qS={class:"nav-label"},YS={__name:"HelloWorld",setup(n){const e=xt("profile"),t=xt(0),i=[{title:"\u79CD\u690D\u8BB0\u5F55",buttonClass:"green-button"},{title:"\u517B\u6B96\u8BB0\u5F55",buttonClass:"blue-button"},{title:"\u6295\u5165\u54C1\u8BB0\u5F55",buttonClass:"amber-button"},{title:"\u6536\u83B7\u8BB0\u5F55",buttonClass:"purple-button"}],s=xt(""),r=xt("");function o(){r.value=s.value,alert("\u79CD\u690D\u5907\u6CE8\u5DF2\u4FDD\u5B58")}const a=xt(null),l=xt(null);function c(){l.value=a.value,alert("\u9972\u6599\u7528\u91CF\u5DF2\u4FDD\u5B58")}const u=xt(""),f=xt(null),h=xt([]);function m(){if(!u.value||!f.value){alert("\u8BF7\u8F93\u5165\u5B8C\u6574\u4FE1\u606F");return}h.value.push({name:u.value,quantity:f.value}),u.value="",f.value=null}function x(ne){h.value.splice(ne,1)}const S=xt(null),g=xt(""),d=xt([]);function R(){if(!S.value||!g.value){alert("\u8BF7\u8F93\u5165\u6536\u83B7\u91CD\u91CF\u548C\u65E5\u671F");return}d.value.push({weight:S.value,date:g.value}),S.value=null,g.value=""}function w(ne){d.value.splice(ne,1)}function y(ne){t.value=ne}const I=xt(!1),U=xt(""),P=xt([]),B=xt(!1);function T(){I.value=!0,P.value=[{text:"\u60A8\u597D\uFF01\u6211\u662F\u60A8\u7684\u519C\u4E1A\u4E13\u5BB6\u667A\u80FD\u52A9\u624B\uFF0C\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u60A8\u7684\u5417\uFF1F",isUser:!1}]}function E(){I.value=!1,U.value="",P.value=[],B.value=!1}function L(){da(()=>{const ne=document.querySelector(".chat-messages");ne&&(ne.scrollTop=ne.scrollHeight)})}function se(ne){const b=ne.toLowerCase();return b.includes("\u75C5\u866B\u5BB3\u8BC6\u522B")||b.includes("\u62CD\u7167\u8BC6\u522B")||b.includes("AI\u8BC6\u522B")?`\u60A8\u53EF\u4EE5\u901A\u8FC7\u62CD\u7167\u4E0A\u4F20\u4F5C\u7269\u53F6\u7247\u7684\u6E05\u6670\u7167\u7247\uFF0CAI\u667A\u80FD\u52A9\u624B\u5C06\u57FA\u4E8E\u56FE\u50CF\u8BC6\u522B\u6280\u672F\u5FEB\u901F\u8BCA\u65AD\u75C5\u866B\u5BB3\u7C7B\u578B\u3002
\u7CFB\u7EDF\u652F\u6301\u591A\u79CD\u4E3B\u8981\u519C\u4F5C\u7269\uFF0C\u8BC6\u522B\u51C6\u786E\u7387\u9AD8\u8FBE95%\u4EE5\u4E0A\u3002
\u8BC6\u522B\u5B8C\u6210\u540E\uFF0C\u4F1A\u63D0\u4F9B\u9488\u5BF9\u6027\u7684\u9632\u6CBB\u5EFA\u8BAE\u548C\u64CD\u4F5C\u6307\u5BFC\uFF0C\u5E2E\u52A9\u60A8\u79D1\u5B66\u7BA1\u7406\u75C5\u866B\u5BB3\u3002`:b.includes("\u866B\u5BB3")||b.includes("\u75C5\u5BB3")||b.includes("\u5BB3\u866B")||b.includes("\u9632\u6CBB")||b.includes("\u519C\u836F")?`\u9488\u5BF9\u75C5\u866B\u5BB3\u95EE\u9898\uFF0C\u5EFA\u8BAE\u91C7\u53D6\u7EFC\u5408\u9632\u6CBB\u63AA\u65BD\uFF1A
1. \u53CA\u65F6\u65BD\u7528\u7EFF\u8272\u73AF\u4FDD\u519C\u836F\uFF0C\u907F\u514D\u8FC7\u5EA6\u4F7F\u7528\u5316\u5B66\u519C\u836F\u5BFC\u81F4\u6297\u836F\u6027;
2. \u4FDD\u6301\u7530\u95F4\u6E05\u6D01\uFF0C\u6E05\u7406\u75C5\u6B8B\u682A\u548C\u6742\u8349\uFF0C\u51CF\u5C11\u75C5\u6E90;
3. \u7ED3\u5408\u5B9A\u671F\u5DE1\u67E5\uFF0C\u53CA\u65F6\u53D1\u73B0\u548C\u76D1\u6D4B\u866B\u60C5\u53D1\u5C55;
4. \u91C7\u7528\u7269\u7406\u9632\u6CBB\u3001\u8BF1\u6355\u548C\u751F\u7269\u9632\u6CBB\u7B49\u65B9\u6CD5\uFF0C\u4FC3\u8FDB\u751F\u6001\u5E73\u8861\u3002
\u79D1\u5B66\u5408\u7406\u7684\u9632\u6CBB\u65B9\u6848\u80FD\u591F\u6709\u6548\u51CF\u5C11\u75C5\u866B\u5BB3\u53D1\u751F\uFF0C\u63D0\u9AD8\u4F5C\u7269\u5065\u5EB7\u548C\u4EA7\u91CF\u3002`:b.includes("\u6536\u6210")||b.includes("\u80A5\u6599")||b.includes("\u4EA7\u91CF")||b.includes("\u65BD\u80A5")||b.includes("\u704C\u6E89")?`\u5408\u7406\u65BD\u80A5\u548C\u79D1\u5B66\u704C\u6E89\u662F\u63D0\u9AD8\u4F5C\u7269\u4EA7\u91CF\u7684\u5173\u952E\u63AA\u65BD\u3002
\u5EFA\u8BAE\u7ED3\u5408\u571F\u58E4\u68C0\u6D4B\u6570\u636E\u548C\u4F5C\u7269\u751F\u957F\u9700\u6C42\u5236\u5B9A\u4E2A\u6027\u5316\u65BD\u80A5\u65B9\u6848\uFF0C\u7CBE\u51C6\u65BD\u80A5\u65E2\u80FD\u63D0\u5347\u4EA7\u91CF\uFF0C\u53C8\u80FD\u4FDD\u62A4\u73AF\u5883\u3002
\u704C\u6E89\u65B9\u9762\uFF0C\u53EF\u91C7\u7528\u8282\u6C34\u704C\u6E89\u6280\u672F\uFF0C\u5982\u6EF4\u704C\u548C\u55B7\u704C\uFF0C\u4FDD\u8BC1\u571F\u58E4\u6C34\u5206\u5747\u8861\uFF0C\u4FC3\u8FDB\u6839\u7CFB\u5065\u5EB7\u751F\u957F\u3002
\u540C\u65F6\uFF0C\u6CE8\u610F\u5173\u952E\u751F\u80B2\u671F\u7684\u6C34\u80A5\u7BA1\u7406\uFF0C\u914D\u5408\u751F\u957F\u8C03\u8282\u5242\u4F7F\u7528\uFF0C\u5B9E\u73B0\u6700\u4F73\u751F\u957F\u6548\u679C\u3002`:b.includes("\u667A\u80FD\u4F53")||b.includes("\u4E13\u5BB6")||b.includes("\u52A9\u624B")||b.includes("\u54A8\u8BE2")||b.includes("\u5E2E\u52A9")?`\u6211\u662F\u57FA\u4E8E\u6587\u5FC3\u4E00\u8A00\u6784\u5EFA\u7684\u519C\u4E1A\u4E13\u5BB6\u667A\u80FD\u4F53\uFF0C\u6574\u5408\u4E86\u4E30\u5BCC\u7684\u519C\u827A\u77E5\u8BC6\u548C\u5B9E\u8DF5\u7ECF\u9A8C\u3002
\u60A8\u53EF\u4EE5\u5411\u6211\u54A8\u8BE2\u79CD\u690D\u517B\u6B96\u4E2D\u9047\u5230\u7684\u5404\u79CD\u95EE\u9898\uFF0C\u5305\u62EC\u75C5\u866B\u5BB3\u9632\u6CBB\u3001\u65BD\u80A5\u704C\u6E89\u3001\u54C1\u79CD\u9009\u62E9\u7B49\u3002
\u6211\u4F1A\u7ED3\u5408\u6700\u65B0\u7684\u79D1\u7814\u6210\u679C\u548C\u5B9E\u9645\u6848\u4F8B\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u79D1\u5B66\u3001\u6709\u6548\u7684\u4E13\u4E1A\u5EFA\u8BAE\uFF0C\u52A9\u529B\u60A8\u7684\u519C\u4E1A\u751F\u4EA7\u66F4\u9AD8\u6548\u3001\u66F4\u73AF\u4FDD\u3002`:b.includes("\u6570\u5B57\u5B6A\u751F")||b.includes("\u6C99\u76D8")||b.includes("\u53EF\u89C6\u5316")||b.includes("\u7A3B\u6E14")?`\u6570\u5B57\u5B6A\u751F\u6C99\u76D8\u7CFB\u7EDF\u80FD\u591F\u5B9E\u65F6\u83B7\u53D6\u7A3B\u6E14\u5171\u751F\u73AF\u5883\u7684\u591A\u9879\u53C2\u6570\uFF0C\u5982\u6C34\u6E29\u3001\u6EB6\u6C27\u3001PH\u503C\u7B49\uFF0C\u6784\u5EFA\u4E09\u7EF4\u751F\u6001\u6A21\u578B\u3002
\u901A\u8FC7\u53EF\u89C6\u5316\u754C\u9762\uFF0C\u7528\u6237\u53EF\u4EE5\u76F4\u89C2\u4E86\u89E3\u9C7C\u7FA4\u6D3B\u52A8\u3001\u7A3B\u7530\u6C34\u8D28\u53D8\u5316\u7B49\u4FE1\u606F\u3002
\u7CFB\u7EDF\u8FD8\u80FD\u81EA\u52A8\u5206\u6790\u98CE\u9669\uFF0C\u63A8\u8350\u517B\u6B96\u548C\u7BA1\u7406\u7B56\u7565\uFF0C\u5E2E\u52A9\u60A8\u5B9E\u73B0\u79D1\u5B66\u5316\u3001\u667A\u80FD\u5316\u7684\u7A3B\u6E14\u751F\u4EA7\u3002`:b.includes("\u9A8C\u6536")||b.includes("\u4EFB\u52A1")||b.includes("\u6D41\u7A0B")?`\u8D28\u91CF\u9A8C\u6536\u673A\u5236\u786E\u4FDD\u519C\u4EA7\u54C1\u7B26\u5408\u56FD\u5BB6\u548C\u5E02\u573A\u6807\u51C6\u3002
\u60A8\u53EF\u4EE5\u5728\u7CFB\u7EDF\u4E2D\u67E5\u770B\u5F85\u9A8C\u6536\u4EFB\u52A1\uFF0C\u7CFB\u7EDF\u63D0\u4F9B\u8BE6\u7EC6\u7684\u9A8C\u6536\u6D41\u7A0B\u548C\u6807\u51C6\u6307\u5357\uFF0C\u5E2E\u52A9\u60A8\u9AD8\u6548\u5B8C\u6210\u64CD\u4F5C\u3002
\u9A8C\u6536\u8FC7\u7A0B\u91C7\u7528\u591A\u91CD\u68C0\u6D4B\u624B\u6BB5\uFF0C\u5305\u62EC\u519C\u836F\u6B8B\u7559\u3001\u6C34\u5206\u542B\u91CF\u3001\u54C1\u8D28\u6307\u6807\u7B49\uFF0C\u786E\u4FDD\u4EA7\u54C1\u5B89\u5168\u548C\u8D28\u91CF\u3002`:`\u611F\u8C22\u60A8\u7684\u63D0\u95EE\uFF01\u8BF7\u60A8\u8BE6\u7EC6\u63CF\u8FF0\u6240\u9047\u5230\u7684\u95EE\u9898\uFF0C
\u5305\u62EC\u5177\u4F53\u4F5C\u7269\u7C7B\u522B\u3001\u5F53\u524D\u751F\u957F\u9636\u6BB5\u3001\u9047\u5230\u7684\u75C7\u72B6\u6216\u56F0\u60D1\uFF0C\u4EE5\u53CA\u6240\u5728\u5730\u533A\u73AF\u5883\u7279\u70B9\u3002
\u8FD9\u6837\u6211\u80FD\u4E3A\u60A8\u63D0\u4F9B\u66F4\u7CBE\u51C6\u3001\u66F4\u6709\u9488\u5BF9\u6027\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u52A9\u529B\u60A8\u7684\u519C\u4E1A\u751F\u4EA7\u987A\u5229\u8FDB\u884C\u3002`}async function Z(){if(!U.value.trim()||B.value)return;P.value.push({text:U.value.trim(),isUser:!0});const ne=U.value.trim();U.value="",B.value=!0,L(),setTimeout(()=>{const b=se(ne);P.value.push({text:b,isUser:!1}),B.value=!1,L()},1e3)}const oe=xt(!1),ae=xt(!1),ee=rs({username:"",phone:""}),Q=rs({username:"",phone:"",password:""}),H=rs({username:"",phone:"",password:"",confirmPassword:""}),pe=xt([]);function ve(ne){return/^1[3-9]\d{9}$/.test(ne)}function Ae(){const{username:ne,phone:b,password:V,confirmPassword:X}=H;if(!ne||!b||!V||!X){alert("\u8BF7\u5B8C\u6574\u586B\u5199\u6CE8\u518C\u4FE1\u606F");return}if(!ve(b)){alert("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u624B\u673A\u53F7");return}if(V!==X){alert("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");return}if(pe.value.some(Pe=>Pe.username===ne)){alert("\u7528\u6237\u540D\u5DF2\u5B58\u5728\uFF0C\u8BF7\u66F4\u6362\u5176\u4ED6\u7528\u6237\u540D");return}if(pe.value.some(Pe=>Pe.phone===b)){alert("\u624B\u673A\u53F7\u5DF2\u88AB\u6CE8\u518C\uFF0C\u8BF7\u76F4\u63A5\u767B\u5F55");return}pe.value.push({username:ne,phone:b,password:V}),alert("\u6CE8\u518C\u6210\u529F\uFF0C\u8BF7\u767B\u5F55"),oe.value=!1,H.username="",H.phone="",H.password="",H.confirmPassword=""}function Ie(){const{username:ne,phone:b,password:V}=Q;if(!ne||!b||!V){alert("\u8BF7\u8F93\u5165\u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u548C\u5BC6\u7801");return}if(!ve(b)){alert("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u624B\u673A\u53F7");return}const X=pe.value.find(de=>de.username===ne&&de.phone===b&&de.password===V);X?(ee.username=X.username,ee.phone=X.phone,ae.value=!0,alert("\u767B\u5F55\u6210\u529F"),Q.username="",Q.phone="",Q.password=""):alert("\u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u6216\u5BC6\u7801\u9519\u8BEF")}function $e(){ae.value=!1,ee.username="",ee.phone="",oe.value=!1,Q.username="",Q.phone="",Q.password=""}function re(){console.log("\u62CD\u7167\u8BC6\u522B\u529F\u80FD\u89E6\u53D1"),e.value="pestIdentification"}const he=xt(!1),ge=xt(null);let me,Re,Fe,Ce,st;function rt(){console.log("\u8FDB\u5165\u6570\u5B57\u5B6A\u751F\u6C99\u76D8"),e.value="digitalTwin"}function A(){he.value=!0,da(()=>{Y(),j()})}function _(){he.value=!1,cancelAnimationFrame(st),Fe&&(Fe.dispose(),Fe=null),ge.value&&(ge.value.innerHTML=""),window.removeEventListener("resize",te)}function Y(){me=new Ym;const ne=ge.value.clientWidth,b=ge.value.clientHeight;Re=new an(75,ne/b,.1,1e3),Re.position.z=5,Fe=new Hx({antialias:!0}),Fe.setSize(ne,b),ge.value.appendChild(Fe.domElement);const V=new vs,X=new jm({color:1483594});Ce=new wn(V,X),me.add(Ce);const de=new ng(16777215,.7);me.add(de);const be=new tg(16777215,1);be.position.set(5,5,5),me.add(be),window.addEventListener("resize",te,!1)}function te(){if(!ge.value||!Fe||!Re)return;const ne=ge.value.clientWidth,b=ge.value.clientHeight;Re.aspect=ne/b,Re.updateProjectionMatrix(),Fe.setSize(ne,b)}function j(){st=requestAnimationFrame(j),Ce.rotation.x+=.01,Ce.rotation.y+=.01,Fe.render(me,Re)}Ml(()=>{cancelAnimationFrame(st),window.removeEventListener("resize",te),Fe&&(Fe.dispose(),Fe=null)});const W=[{icon:_u,iconClass:"green",title:"\u6570\u5B57\u5316\u4FE1\u606F\u7BA1\u7406",description:"\u5168\u9762\u8BB0\u5F55\u548C\u7BA1\u7406\u519C\u4E1A\u751F\u4EA7\u6570\u636E",tab:"digitalManagement"},{icon:Rr,iconClass:"red",title:"\u75C5\u866B\u5BB3\u8BC6\u522B\u8BCA\u65AD",description:"AI\u667A\u80FD\u8BC6\u522B\u4F5C\u7269\u75C5\u866B\u5BB3\u95EE\u9898",tab:"pestIdentification"},{icon:vu,iconClass:"blue",title:"\u9AD8\u6548\u9A8C\u6536\u673A\u5236",description:"\u7B80\u5316\u519C\u4EA7\u54C1\u8D28\u91CF\u9A8C\u6536\u6D41\u7A0B",tab:"verification"},{icon:xu,iconClass:"purple",title:"\u519C\u6C11\u9662\u58EB\u667A\u80FD\u4F53",description:"\u4E13\u4E1A\u519C\u4E1A\u77E5\u8BC6\u54A8\u8BE2\u4E0E\u6307\u5BFC",tab:"aiAssistant"}],ce=[{icon:Kx,iconClass:"amber",title:"\u6C34\u7A3B\u533A\u57DF3\u53F7\u68C0\u6D4B\u5230\u53EF\u80FD\u7684\u75C5\u5BB3",time:"10\u5206\u949F\u524D"},{icon:vu,iconClass:"green",title:"\u5B8C\u6210\u4E86\u4E1C\u533A\u9C7C\u5858\u6C34\u8D28\u68C0\u6D4B",time:"2\u5C0F\u65F6\uFFFD\uFFFD\uFFFD"},{icon:qx,iconClass:"blue",title:"\u66F4\u65B0\u4E86\u672C\u5468\u751F\u4EA7\u8BA1\u5212",time:"\u6628\u5929"}],J=[{id:"home",icon:Yx,label:"\u9996\u9875"},{id:"digitalManagement",icon:_u,label:"\u6570\u636E"},{id:"pestIdentification",icon:Rr,label:"\u8BC6\u522B"},{id:"digitalTwin",icon:sa,label:"\u6C99\u76D8"},{id:"profile",icon:xu,label:"\u6211\u7684"}],v=["\u7A3B\u761F\u75C5","\u7A3B\u98DE\u8671","\u7EB9\u67AF\u75C5","\u7A3B\u66F2\u75C5","\u9C7C\u70C2\u9CC3\u75C5","\u66F4\u591A"],p=[{title:"\u4E1C\u533A\u6C34\u7A3B\u6536\u5272\u9A8C\u6536",date:"2025-03-28",itemClass:"green-task",buttonClass:"green-bg"},{title:"\u897F\u533A\u9C7C\u5858\u6355\u635E\u9A8C\u6536",date:"2025-03-30",itemClass:"blue-task",buttonClass:"blue-bg"}],D=[{title:"\u63D0\u4EA4\u9A8C\u6536\u7533\u8BF7",description:"\u586B\u5199\u9A8C\u6536\u4FE1\u606F\uFF0C\u63D0\u4EA4\u9A8C\u6536\u7533\u8BF7",markerClass:"green-marker"},{title:"\u73B0\u573A\u9A8C\u6536",description:"\u9A8C\u6536\u4EBA\u5458\u5230\u573A\uFF0C\u8FDB\u884C\u73B0\u573A\u68C0\u67E5\u548C\u6570\u636E\u8BB0\u5F55",markerClass:"blue-marker"},{title:"\u8D28\u91CF\u8BC4\u4F30",description:"\u5BF9\u4EA7\u54C1\u8D28\u91CF\u8FDB\u884C\u8BC4\u4F30\u548C\u5206\u7EA7",markerClass:"purple-marker"},{title:"\u9A8C\u6536\u786E\u8BA4",description:"\u53CC\u65B9\u786E\u8BA4\u9A8C\u6536\u7ED3\u679C\uFF0C\u5B8C\u6210\u9A8C\u6536\u6D41\u7A0B",markerClass:"amber-marker"}],N=["\u6C34\u7A3B\u79CD\u690D\u6700\u4F73\u65F6\u95F4\u662F\u4EC0\u4E48\u65F6\u5019\uFF1F","\u7A3B\u7530\u517B\u9C7C\u5982\u4F55\u63A7\u5236\u6C34\u8D28\uFF1F","\u7A3B\u761F\u75C5\u7684\u65E9\u671F\u75C7\u72B6\u6709\u54EA\u4E9B\uFF1F","\u5982\u4F55\u63D0\u9AD8\u7A3B\u6E14\u5171\u751F\u7CFB\u7EDF\u4EA7\u91CF\uFF1F"],G=[{question:"\u5982\u4F55\u9632\u6CBB\u6C34\u7A3B\u7EB9\u67AF\u75C5\uFF1F",time:"2025-03-24 16:45"},{question:"\u9C7C\u5858\u6C34\u8D28\u6D51\u6D4A\u600E\u4E48\u5904\u7406\uFF1F",time:"2025-03-22 09:30"}],k=[{name:"\u6C34\u6E29",value:"26.5\xB0C",status:"\u6B63\u5E38",percentage:65,cardClass:"blue-metric",statusClass:"blue-status",valueClass:"blue-value",barClass:"blue-bar"},{name:"\u6EB6\u6C27\u91CF",value:"7.2mg/L",status:"\u826F\u597D",percentage:80,cardClass:"green-metric",statusClass:"green-status",valueClass:"green-value",barClass:"green-bar"},{name:"pH\u503C",value:"6.8",status:"\u6CE8\u610F",percentage:60,cardClass:"amber-metric",statusClass:"amber-status",valueClass:"amber-value",barClass:"amber-bar"},{name:"\u6C28\u6C2E",value:"0.5mg/L",status:"\u6B63\u5E38",percentage:30,cardClass:"purple-metric",statusClass:"purple-status",valueClass:"purple-value",barClass:"purple-bar"}],ue=[{name:"\u4E1C\u533A\u7A3B\u7530",status:"\u751F\u957F\u826F\u597D",areaInfo:"\u9762\u79EF: 45\u4EA9",additionalInfo:"\u751F\u957F\u5468\u671F: 65\u5929",itemClass:"blue-area",statusClass:"green-status"},{name:"\u897F\u533A\u9C7C\u5858",status:"\u9700\u8981\u5173\u6CE8",areaInfo:"\u9762\u79EF: 28\u4EA9",additionalInfo:"\u5B58\u9C7C\u91CF: 2.5\u4E07\u5C3E",itemClass:"green-area",statusClass:"amber-status"}];return(ne,b)=>(ke(),Xe("div",Jx,[C("header",Qx,[b[20]||(b[20]=C("h1",{class:"app-title"},"\u519C\u94F6\u667A\u94FE",-1)),C("div",eM,[C("button",tM,[ht(gn($x),{class:"icon"})])])]),C("main",nM,[e.value==="home"?(ke(),Xe("div",iM,[b[25]||(b[25]=C("div",{class:"banner"},[C("div",{class:"banner-content"},[C("h2",{class:"banner-title"},"\u667A\u6167\u519C\u4E1A\u65B0\u65F6\u4EE3"),C("p",{class:"banner-subtitle"},"\u6570\u5B57\u5316\u7BA1\u7406 \xB7 \u79D1\u5B66\u79CD\u517B \xB7 \u9AD8\u6548\u751F\u4EA7")])],-1)),C("div",sM,[(ke(),Xe(ft,null,Wt(W,(V,X)=>C("div",{key:X,class:"feature-card",onClick:de=>e.value=V.tab},[C("div",oM,[(ke(),Fs(xo(V.icon),{class:At(["feature-icon",V.iconClass])},null,8,["class"])),ht(gn(ra),{class:"chevron-icon"})]),C("h3",aM,je(V.title),1),C("p",lM,je(V.description),1)],8,rM)),64))]),C("div",cM,[C("div",uM,[C("div",fM,[ht(gn(sa),{class:"icon"}),b[21]||(b[21]=C("h3",{class:"card-title"},"\u6570\u5B57\u5B6A\u751F\u6C99\u76D8",-1))]),b[22]||(b[22]=C("p",{class:"card-subtitle"},"\u5F00\u542F\u7A3B\u6E14\u5171\u751F\u53EF\u89C6\u5316\u7BA1\u7406\u65B0\u65F6\u4EE3",-1))]),C("div",dM,[ht(gn(Xx),{class:"preview-icon"}),b[23]||(b[23]=C("span",{class:"preview-text"},"\u70B9\u51FB\u67E5\u770B\u5B9E\u65F6\u6570\u636E",-1))]),C("button",{class:"primary-button white-button",onClick:rt}," \u8FDB\u5165\u6C99\u76D8 ")]),C("div",hM,[b[24]||(b[24]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u6700\u8FD1\u6D3B\u52A8")],-1)),C("div",pM,[C("div",mM,[(ke(),Xe(ft,null,Wt(ce,(V,X)=>C("div",{key:X,class:"activity-item"},[C("div",gM,[(ke(),Fs(xo(V.icon),{class:At(["activity-icon",V.iconClass])},null,8,["class"]))]),C("div",_M,[C("p",vM,je(V.title),1),C("p",xM,je(V.time),1)]),ht(gn(ra),{class:"chevron-icon small"})])),64))])])])])):Pt("",!0),e.value==="digitalManagement"?(ke(),Xe("div",MM,[b[41]||(b[41]=tc('<h2 class="page-title green" data-v-92cc2056>\u6570\u5B57\u5316\u4FE1\u606F\u7BA1\u7406</h2><div class="card" data-v-92cc2056><div class="card-header" data-v-92cc2056><h3 class="card-title" data-v-92cc2056>\u751F\u4EA7\u6570\u636E\u6982\u89C8</h3></div><div class="card-content" data-v-92cc2056><div class="stats-grid" data-v-92cc2056><div class="stat-card blue" data-v-92cc2056><p class="stat-label" data-v-92cc2056>\u6C34\u7A3B\u79CD\u690D\u9762\u79EF</p><p class="stat-value blue" data-v-92cc2056>128.5 \u4EA9</p></div><div class="stat-card green" data-v-92cc2056><p class="stat-label" data-v-92cc2056>\u9C7C\u5858\u9762\u79EF</p><p class="stat-value green" data-v-92cc2056>42.8 \u4EA9</p></div><div class="stat-card amber" data-v-92cc2056><p class="stat-label" data-v-92cc2056>\u9884\u8BA1\u4EA7\u91CF</p><p class="stat-value amber" data-v-92cc2056>86.2 \u5428</p></div><div class="stat-card purple" data-v-92cc2056><p class="stat-label" data-v-92cc2056>\u751F\u957F\u5468\u671F</p><p class="stat-value purple" data-v-92cc2056>75 \u5929</p></div></div></div></div>',2)),C("div",SM,[b[40]||(b[40]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u8BB0\u5F55\u7BA1\u7406")],-1)),C("div",EM,[C("div",yM,[(ke(),Xe(ft,null,Wt(i,(V,X)=>C("button",{key:X,class:At(["record-button",[V.buttonClass,t.value===X?"active":""]]),onClick:de=>y(X)},[C("div",TM,[b[26]||(b[26]=C("i",{class:"fa fa-file-text-o icon"},null,-1)),C("span",null,je(V.title),1)]),b[27]||(b[27]=C("i",{class:"fa fa-chevron-right chevron-icon"},null,-1))],10,bM)),64))]),C("div",AM,[t.value===0?(ke(),Xe("div",wM,[b[28]||(b[28]=C("h4",null,"\u79CD\u690D\u8BB0\u5F55",-1)),b[29]||(b[29]=C("p",null,"\u6C34\u7A3B\u79CD\u690D\u9762\u79EF\uFF1A128.5 \u4EA9",-1)),b[30]||(b[30]=C("p",null,"\u751F\u957F\u5468\u671F\uFF1A75 \u5929",-1)),b[31]||(b[31]=C("p",null,"\u9884\u8BA1\u4EA7\u91CF\uFF1A86.2 \u5428",-1)),Gt(C("textarea",{"onUpdate:modelValue":b[0]||(b[0]=V=>s.value=V),rows:"4",placeholder:"\u5199\u5165\u79CD\u690D\u5907\u6CE8"},null,512),[[Xt,s.value]]),C("button",{onClick:o},"\u4FDD\u5B58\u5907\u6CE8"),C("p",null,"\u5907\u6CE8\uFF1A"+je(r.value),1)])):Pt("",!0),t.value===1?(ke(),Xe("div",RM,[b[32]||(b[32]=C("h4",null,"\u517B\u6B96\u8BB0\u5F55",-1)),b[33]||(b[33]=C("p",null,"\u9C7C\u5858\u9762\u79EF\uFF1A42.8 \u4EA9",-1)),b[34]||(b[34]=C("p",null,"\u751F\u957F\u5468\u671F\uFF1A75 \u5929",-1)),b[35]||(b[35]=C("p",null,"\u9884\u8BA1\u4EA7\u91CF\uFF1A86.2 \u5428",-1)),Gt(C("input",{type:"number","onUpdate:modelValue":b[1]||(b[1]=V=>a.value=V),placeholder:"\u8F93\u5165\u9972\u6599\u7528\u91CF\uFF08kg\uFF09"},null,512),[[Xt,a.value,void 0,{number:!0}]]),C("button",{onClick:c},"\u4FDD\u5B58\u9972\u6599\u6570\u91CF"),C("p",null,"\u5DF2\u4FDD\u5B58\u9972\u6599\u7528\u91CF\uFF1A"+je(l.value)+" kg",1)])):Pt("",!0),t.value===2?(ke(),Xe("div",CM,[b[36]||(b[36]=C("h4",null,"\u6295\u5165\u54C1\u8BB0\u5F55",-1)),b[37]||(b[37]=C("p",null,"\u8BB0\u5F55\u80A5\u6599\u3001\u79CD\u5B50\u3001\u9972\u6599\u7B49\u6295\u5165\u7BA1\u7406",-1)),Gt(C("input",{"onUpdate:modelValue":b[2]||(b[2]=V=>u.value=V),placeholder:"\u8F93\u5165\u6295\u5165\u54C1\u540D\u79F0"},null,512),[[Xt,u.value]]),Gt(C("input",{type:"number","onUpdate:modelValue":b[3]||(b[3]=V=>f.value=V),placeholder:"\u8F93\u5165\u6570\u91CF"},null,512),[[Xt,f.value,void 0,{number:!0}]]),C("button",{onClick:m},"\u6DFB\u52A0\u6295\u5165\u54C1"),C("ul",null,[(ke(!0),Xe(ft,null,Wt(h.value,(V,X)=>(ke(),Xe("li",{key:X},[es(je(V.name)+" \u2014 \u6570\u91CF\uFF1A"+je(V.quantity)+" ",1),C("button",{onClick:de=>x(X)},"\u5220\u9664",8,PM)]))),128))])])):Pt("",!0),t.value===3?(ke(),Xe("div",DM,[b[38]||(b[38]=C("h4",null,"\u6536\u83B7\u8BB0\u5F55",-1)),b[39]||(b[39]=C("p",null,"\u8BB0\u5F55\u6536\u83B7\u91CD\u91CF\u53CA\u65E5\u671F",-1)),Gt(C("input",{type:"number","onUpdate:modelValue":b[4]||(b[4]=V=>S.value=V),placeholder:"\u8F93\u5165\u6536\u83B7\u91CD\u91CF\uFF08\u5428\uFF09"},null,512),[[Xt,S.value,void 0,{number:!0}]]),Gt(C("input",{type:"date","onUpdate:modelValue":b[5]||(b[5]=V=>g.value=V)},null,512),[[Xt,g.value]]),C("button",{onClick:R},"\u4FDD\u5B58\u6536\u83B7\u8BB0\u5F55"),C("ul",null,[(ke(!0),Xe(ft,null,Wt(d.value,(V,X)=>(ke(),Xe("li",{key:X},[es(je(V.date)+" \u2013 \u91CD\u91CF\uFF1A"+je(V.weight)+" \u5428 ",1),C("button",{onClick:de=>w(X)},"\u5220\u9664",8,LM)]))),128))])])):Pt("",!0)])])])])):Pt("",!0),e.value==="pestIdentification"?(ke(),Xe("div",UM,[b[48]||(b[48]=C("h2",{class:"page-title green"},"\u75C5\u866B\u5BB3\u8BC6\u522B\u8BCA\u65AD\u7CFB\u7EDF",-1)),C("div",IM,[C("div",NM,[ht(gn(Rr),{class:"pest-id-icon"}),b[42]||(b[42]=C("h3",{class:"pest-id-title"},"\u62CD\u7167\u8BC6\u522B\u75C5\u866B\u5BB3",-1)),b[43]||(b[43]=C("p",{class:"pest-id-subtitle"},"AI\u667A\u80FD\u5206\u6790\uFF0C\u79D2\u51FA\u8BCA\u65AD\u7ED3\u679C",-1))]),C("div",FM,[b[45]||(b[45]=C("p",{class:"upload-text"},"\u70B9\u51FB\u4E0A\u4F20\u6216\u62CD\u6444\u7167\u7247",-1)),C("button",{class:"primary-button white-button",onClick:re},[ht(gn(Rr),{class:"button-icon small"}),b[44]||(b[44]=es(" \u62CD\u7167\u8BC6\u522B "))])])]),b[49]||(b[49]=tc('<div class="card" data-v-92cc2056><div class="card-header" data-v-92cc2056><h3 class="card-title" data-v-92cc2056>\u6700\u8FD1\u8BC6\u522B\u8BB0\u5F55</h3></div><div class="card-content" data-v-92cc2056><div class="pest-record-list" data-v-92cc2056><div class="pest-record red" data-v-92cc2056><div class="pest-image" data-v-92cc2056></div><div class="pest-details" data-v-92cc2056><p class="pest-name red" data-v-92cc2056>\u7A3B\u761F\u75C5</p><p class="pest-time" data-v-92cc2056>\u8BC6\u522B\u65F6\u95F4: \u4ECA\u5929 14:30</p><p class="pest-confidence" data-v-92cc2056>\u7F6E\u4FE1\u5EA6: 92%</p></div><button class="outline-button" data-v-92cc2056>\u67E5\u770B\u8BE6\u60C5</button></div><div class="pest-record amber" data-v-92cc2056><div class="pest-image" data-v-92cc2056></div><div class="pest-details" data-v-92cc2056><p class="pest-name amber" data-v-92cc2056>\u7A3B\u98DE\u8671</p><p class="pest-time" data-v-92cc2056>\u8BC6\u522B\u65F6\u95F4: \u6628\u5929 09:15</p><p class="pest-confidence" data-v-92cc2056>\u7F6E\u4FE1\u5EA6: 87%</p></div><button class="outline-button" data-v-92cc2056>\u67E5\u770B\u8BE6\u60C5</button></div></div></div></div>',1)),C("div",OM,[b[47]||(b[47]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u5E38\u89C1\u75C5\u866B\u5BB3")],-1)),C("div",BM,[C("div",zM,[(ke(),Xe(ft,null,Wt(v,(V,X)=>C("div",{key:X,class:"pest-grid-item"},[b[46]||(b[46]=C("div",{class:"pest-thumbnail"},null,-1)),C("p",HM,je(V),1)])),64))])])])])):Pt("",!0),e.value==="verification"?(ke(),Xe("div",VM,[b[54]||(b[54]=C("h2",{class:"page-title green"},"\u9AD8\u6548\u7684\u9A8C\u6536\u673A\u5236",-1)),C("div",kM,[b[52]||(b[52]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u5F85\u9A8C\u6536\u4EFB\u52A1")],-1)),C("div",GM,[C("div",WM,[(ke(),Xe(ft,null,Wt(p,(V,X)=>C("div",{key:X,class:At(["task-item",V.itemClass])},[C("div",XM,[C("h3",qM,je(V.title),1),b[50]||(b[50]=C("span",{class:"status-badge"},"\u5F85\u9A8C\u6536",-1))]),C("p",YM,"\u8BA1\u5212\u9A8C\u6536\u65F6\u95F4: "+je(V.date),1),C("div",$M,[b[51]||(b[51]=C("button",{class:"outline-button"},"\u67E5\u770B\u8BE6\u60C5",-1)),C("button",{class:At(["primary-button",V.buttonClass])},"\u5F00\u59CB\u9A8C\u6536",2)])],2)),64))])])]),C("div",KM,[b[53]||(b[53]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u9A8C\u6536\u6D41\u7A0B")],-1)),C("div",jM,[C("div",ZM,[(ke(),Xe(ft,null,Wt(D,(V,X)=>C("div",{key:X,class:"timeline-item"},[C("div",{class:At(["timeline-marker",V.markerClass])},[C("span",JM,je(X+1),1)],2),C("div",QM,[C("h3",eS,je(V.title),1),C("p",tS,je(V.description),1)])])),64))])])])])):Pt("",!0),e.value==="aiAssistant"?(ke(),Xe("div",nS,[b[60]||(b[60]=C("h2",{class:"page-title green"},"\u519C\u6C11\u9662\u58EB\u667A\u80FD\u4F53",-1)),C("div",iS,[C("div",sS,[C("div",rS,[ht(gn(jx),{class:"ai-avatar-icon"})]),b[55]||(b[55]=C("div",{class:"ai-info"},[C("h3",{class:"ai-title"},"\u519C\u6C11\u9662\u58EB"),C("p",{class:"ai-subtitle"},"\u60A8\u7684\u4E13\u4E1A\u519C\u4E1A\u987E\u95EE")],-1))]),b[56]||(b[56]=C("p",{class:"ai-description"}," \u6211\u662F\u60A8\u7684\u667A\u80FD\u519C\u4E1A\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u79CD\u690D\u517B\u6B96\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E13\u4E1A\u5EFA\u8BAE\uFF0C\u5E2E\u52A9\u60A8\u63D0\u9AD8\u4EA7\u91CF\u548C\u8D28\u91CF\u3002 ",-1)),C("div",oS,[I.value?Pt("",!0):(ke(),Xe("button",{key:0,class:"primary-button",onClick:T},"\u5F00\u59CB\u54A8\u8BE2")),I.value?(ke(),Xe("div",aS,[C("div",lS,[(ke(!0),Xe(ft,null,Wt(P.value,(V,X)=>(ke(),Xe("div",{key:X,class:At(["chat-message",V.isUser?"user":"ai"])},[C("div",cS,je(V.text),1)],2))),128))],512),C("form",{onSubmit:Bi(Z,["prevent"]),class:"input-area"},[Gt(C("input",{"onUpdate:modelValue":b[6]||(b[6]=V=>U.value=V),type:"text",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u95EE\u9898...",autocomplete:"off",required:"",class:"text-input"},null,512),[[Xt,U.value]]),C("button",{type:"submit",class:"send-button",disabled:B.value},je(B.value?"\u53D1\u9001\u4E2D...":"\u53D1\u9001"),9,uS)],32),C("button",{class:"cancel-button",onClick:E},"\u7ED3\u675F\u54A8\u8BE2")])):Pt("",!0)])]),C("div",fS,[b[57]||(b[57]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u5E38\u89C1\u95EE\u9898")],-1)),C("div",dS,[C("div",hS,[(ke(),Xe(ft,null,Wt(N,(V,X)=>C("button",{key:X,class:"faq-button"},[C("span",null,je(V),1),ht(gn(ra),{class:"chevron-icon"})])),64))])])]),C("div",pS,[b[59]||(b[59]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u6700\u8FD1\u54A8\u8BE2\u8BB0\u5F55")],-1)),C("div",mS,[C("div",gS,[(ke(),Xe(ft,null,Wt(G,(V,X)=>C("div",{key:X,class:"consultation-item"},[C("p",_S,je(V.question),1),C("p",vS,je(V.time),1),b[58]||(b[58]=C("button",{class:"outline-button full-width"},"\u67E5\u770B\u56DE\u7B54",-1))])),64))])])])])):Pt("",!0),e.value==="digitalTwin"?(ke(),Xe("div",xS,[b[67]||(b[67]=C("h2",{class:"page-title green"},"\u6570\u5B57\u5B6A\u751F\u6C99\u76D8",-1)),C("div",MS,[b[62]||(b[62]=C("h3",{class:"digital-twin-banner-title"},"\u7A3B\u6E14\u5171\u751F\u6570\u5B57\u5B6A\u751F\u7CFB\u7EDF",-1)),b[63]||(b[63]=C("p",{class:"digital-twin-banner-subtitle"},"\u5B9E\u65F6\u76D1\u63A7\u3001\u6570\u636E\u5206\u6790\u3001\u667A\u80FD\u9884\u8B66",-1)),C("div",SS,[ht(gn(sa),{class:"preview-icon large"}),b[61]||(b[61]=C("p",{class:"preview-text"},"3D\u53EF\u89C6\u5316\u6C99\u76D8",-1)),C("button",{class:"primary-button white-button small",onClick:A}," \u52A0\u8F7D\u6C99\u76D8 ")])]),he.value?(ke(),Xe("div",{key:0,class:"sandbox-overlay",onClick:Bi(_,["self"])},[C("div",ES,[C("button",{class:"close-btn",onClick:_},"\u2715"),C("div",{ref_key:"sandboxCanvas",ref:ge,class:"sandbox-canvas"},null,512)])])):Pt("",!0),C("div",yS,[b[64]||(b[64]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u5B9E\u65F6\u76D1\u6D4B\u6570\u636E")],-1)),C("div",bS,[C("div",TS,[(ke(),Xe(ft,null,Wt(k,(V,X)=>C("div",{key:X,class:At(["metric-card",V.cardClass])},[C("div",AS,[C("p",wS,je(V.name),1),C("span",{class:At(["metric-status",V.statusClass])},je(V.status),3)]),C("p",{class:At(["metric-value",V.valueClass])},je(V.value),3),C("div",RS,[C("div",{class:At(["progress-fill",V.barClass]),style:to({width:V.percentage+"%"})},null,6)])],2)),64))])])]),C("div",CS,[b[66]||(b[66]=C("div",{class:"card-header"},[C("h3",{class:"card-title"},"\u533A\u57DF\u7BA1\u7406")],-1)),C("div",PS,[C("div",DS,[(ke(),Xe(ft,null,Wt(ue,(V,X)=>C("div",{key:X,class:At(["area-item",V.itemClass])},[C("div",LS,[C("h3",US,je(V.name),1),C("span",{class:At(["area-status",V.statusClass])},je(V.status),3)]),C("div",IS,[C("span",null,je(V.areaInfo),1),C("span",null,je(V.additionalInfo),1)]),b[65]||(b[65]=C("button",{class:"outline-button full-width"},"\u67E5\u770B\u8BE6\u60C5",-1))],2)),64))])])])])):Pt("",!0),e.value==="profile"?(ke(),Xe("div",NS,[ae.value?(ke(),Xe(ft,{key:1},[C("h2",null,"\u6B22\u8FCE\uFF0C"+je(ee.username),1),C("button",{class:"primary-button logout-button",onClick:$e},"\u9000\u51FA\u767B\u5F55"),b[81]||(b[81]=C("section",{class:"introduction"},[C("h3",null,"\u519C\u94F6\u667A\u94FE\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4ECB\u7ECD"),C("p",null," \u519C\u94F6\u667A\u94FE\u662F\u4E00\u6B3E\u81EA\u4E3B\u5F00\u53D1\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u901A\u8FC7AI\u6280\u672F\u7684\u52A0\u6301\uFF0C \u63D0\u4F9B\u6570\u5B57\u5316\u4FE1\u606F\u7BA1\u7406\u548C\u9AD8\u6548\u7684\u9A8C\u6536\u673A\u5236\u3002 \u5C0F\u7A0B\u5E8F\u878D\u5165\u75C5\u866B\u5BB3\u667A\u80FD\u8BC6\u522B\u529F\u80FD\uFF0C\u4EE5\u53CA\u57FA\u4E8E\u6587\u5FC3\u4E00\u8A00\u5927\u6A21\u578B\u7684\u519C\u6C11\u9662\u58EB\u667A\u80FD\u4F53\uFF0C \u519C\u4E1A\u4E13\u5BB6\u865A\u62DF\u5316\u8EAB\u5F00\u542F\u7A3B\u6E14\u5171\u751F\u53EF\u89C6\u5316\u7BA1\u7406\u65B0\u65F6\u4EE3\u3002 "),C("p",null," \u6211\u4EEC\u81F4\u529B\u4E8E\u4E3A\u519C\u6237\u63D0\u4F9B\u5168\u65B9\u4F4D\u667A\u80FD\u5316\u670D\u52A1\uFF0C \u63A8\u52A8\u9AD8\u9644\u52A0\u503C\u7A3B\u6E14\u4EA7\u54C1\u8FDB\u5165\u5E02\u573A\uFF0C\u52A9\u529B\u519C\u6C11\u589E\u6536\u81F4\u5BCC\u3002 ")],-1)),C("section",GS,[b[80]||(b[80]=C("h3",null,"\u4F60\u7684\u670D\u52A1",-1)),C("button",{class:"services-button",onClick:b[16]||(b[16]=V=>e.value="digitalManagement")},"\u6570\u5B57\u5316\u4FE1\u606F\u7BA1\u7406"),C("button",{class:"services-button",onClick:b[17]||(b[17]=V=>e.value="pestIdentification")},"\u75C5\u866B\u5BB3\u667A\u80FD\u8BC6\u522B"),C("button",{class:"services-button",onClick:b[18]||(b[18]=V=>e.value="aiAssistant")},"\u519C\u4E1A\u4E13\u5BB6\u865A\u62DF\u5316\u8EAB\u54A8\u8BE2"),C("button",{class:"services-button",onClick:b[19]||(b[19]=V=>e.value="verification")},"\u9AD8\u6548\u8D28\u91CF\u9A8C\u6536")])],64)):(ke(),Xe(ft,{key:0},[b[79]||(b[79]=C("h2",null,"\u7528\u6237\u767B\u5F55 / \u6CE8\u518C",-1)),oe.value?Pt("",!0):(ke(),Xe("form",{key:0,onSubmit:Bi(Ie,["prevent"])},[C("div",FS,[b[68]||(b[68]=C("label",{for:"loginUsername"},"\u7528\u6237\u540D",-1)),Gt(C("input",{id:"loginUsername","onUpdate:modelValue":b[7]||(b[7]=V=>Q.username=V),type:"text",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",required:""},null,512),[[Xt,Q.username]])]),C("div",OS,[b[69]||(b[69]=C("label",{for:"loginPhone"},"\u624B\u673A\u53F7",-1)),Gt(C("input",{id:"loginPhone","onUpdate:modelValue":b[8]||(b[8]=V=>Q.phone=V),type:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",required:""},null,512),[[Xt,Q.phone]])]),C("div",BS,[b[70]||(b[70]=C("label",{for:"loginPassword"},"\u5BC6\u7801",-1)),Gt(C("input",{id:"loginPassword","onUpdate:modelValue":b[9]||(b[9]=V=>Q.password=V),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",required:""},null,512),[[Xt,Q.password]])]),b[72]||(b[72]=C("button",{type:"submit",class:"primary-button"},"\u767B\u5F55",-1)),C("p",null,[b[71]||(b[71]=es(" \u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F ")),C("a",{href:"#",onClick:b[10]||(b[10]=Bi(V=>oe.value=!0,["prevent"]))},"\u53BB\u6CE8\u518C")])],32)),oe.value?(ke(),Xe("form",{key:1,onSubmit:Bi(Ae,["prevent"])},[C("div",zS,[b[73]||(b[73]=C("label",{for:"regUsername"},"\u7528\u6237\u540D",-1)),Gt(C("input",{id:"regUsername","onUpdate:modelValue":b[11]||(b[11]=V=>H.username=V),type:"text",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",required:""},null,512),[[Xt,H.username]])]),C("div",HS,[b[74]||(b[74]=C("label",{for:"regPhone"},"\u624B\u673A\u53F7",-1)),Gt(C("input",{id:"regPhone","onUpdate:modelValue":b[12]||(b[12]=V=>H.phone=V),type:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",required:""},null,512),[[Xt,H.phone]])]),C("div",VS,[b[75]||(b[75]=C("label",{for:"regPassword"},"\u5BC6\u7801",-1)),Gt(C("input",{id:"regPassword","onUpdate:modelValue":b[13]||(b[13]=V=>H.password=V),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",required:""},null,512),[[Xt,H.password]])]),C("div",kS,[b[76]||(b[76]=C("label",{for:"regConfirmPassword"},"\u786E\u8BA4\u5BC6\u7801",-1)),Gt(C("input",{id:"regConfirmPassword","onUpdate:modelValue":b[14]||(b[14]=V=>H.confirmPassword=V),type:"password",placeholder:"\u8BF7\u786E\u8BA4\u5BC6\u7801",required:""},null,512),[[Xt,H.confirmPassword]])]),b[78]||(b[78]=C("button",{type:"submit",class:"primary-button"},"\u6CE8\u518C",-1)),C("p",null,[b[77]||(b[77]=es(" \u5DF2\u6709\u8D26\u53F7\uFF1F ")),C("a",{href:"#",onClick:b[15]||(b[15]=Bi(V=>oe.value=!1,["prevent"]))},"\u53BB\u767B\u5F55")])],32)):Pt("",!0)],64))])):Pt("",!0)]),C("div",WS,[(ke(),Xe(ft,null,Wt(J,(V,X)=>C("div",{key:X,class:At(["nav-item",{active:e.value===V.id}]),onClick:de=>e.value=V.id},[C("div",{class:At(["nav-icon-container",{"active-bg":e.value===V.id}])},[(ke(),Fs(xo(V.icon),{class:"nav-icon"}))],2),C("span",qS,je(V.label),1)],10,XS)),64))])]))}};var $S=Zx(YS,[["__scopeId","data-v-92cc2056"]]);const KS={__name:"App",setup(n){return(e,t)=>(ke(),Fs($S,{msg:"Hello Vue 3 + Vite"}))}};wp(KS).mount("#app");
