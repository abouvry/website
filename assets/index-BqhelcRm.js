(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var ld={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function xb(){if(V_)return rl;V_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:a,type:s,key:c,ref:o!==void 0?o:null,props:u}}return rl.Fragment=t,rl.jsx=n,rl.jsxs=n,rl}var H_;function Sb(){return H_||(H_=1,ld.exports=xb()),ld.exports}var Gt=Sb(),ud={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Mb(){if(G_)return le;G_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function y(O,nt,St){this.props=O,this.context=nt,this.refs=E,this.updater=St||T}y.prototype.isReactComponent={},y.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=y.prototype;function U(O,nt,St){this.props=O,this.context=nt,this.refs=E,this.updater=St||T}var C=U.prototype=new N;C.constructor=U,b(C,y.prototype),C.isPureReactComponent=!0;var z=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(O,nt,St){var bt=St.ref;return{$$typeof:a,type:O,key:nt,ref:bt!==void 0?bt:null,props:St}}function w(O,nt){return D(O.type,nt,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function tt(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return nt[St]})}var ut=/\/+/g;function ht(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):nt.toString(36)}function dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,nt,St,bt,Dt){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case a:case t:ct=!0;break;case g:return ct=O._init,B(ct(O._payload),nt,St,bt,Dt)}}if(ct)return Dt=Dt(O),ct=bt===""?"."+ht(O,0):bt,z(Dt)?(St="",ct!=null&&(St=ct.replace(ut,"$&/")+"/"),B(Dt,nt,St,"",function(qt){return qt})):Dt!=null&&(H(Dt)&&(Dt=w(Dt,St+(Dt.key==null||O&&O.key===Dt.key?"":(""+Dt.key).replace(ut,"$&/")+"/")+ct)),nt.push(Dt)),1;ct=0;var Ct=bt===""?".":bt+":";if(z(O))for(var zt=0;zt<O.length;zt++)bt=O[zt],it=Ct+ht(bt,zt),ct+=B(bt,nt,St,it,Dt);else if(zt=M(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(bt=O.next()).done;)bt=bt.value,it=Ct+ht(bt,zt++),ct+=B(bt,nt,St,it,Dt);else if(it==="object"){if(typeof O.then=="function")return B(dt(O),nt,St,bt,Dt);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Y(O,nt,St){if(O==null)return O;var bt=[],Dt=0;return B(O,bt,"","",function(it){return nt.call(St,it,Dt++)}),bt}function W(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var vt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:Y,forEach:function(O,nt,St){Y(O,function(){nt.apply(this,arguments)},St)},count:function(O){var nt=0;return Y(O,function(){nt++}),nt},toArray:function(O){return Y(O,function(nt){return nt})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return le.Activity=v,le.Children=xt,le.Component=y,le.Fragment=n,le.Profiler=o,le.PureComponent=U,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(O,nt,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var bt=b({},O.props),Dt=O.key;if(nt!=null)for(it in nt.key!==void 0&&(Dt=""+nt.key),nt)!k.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(bt[it]=nt[it]);var it=arguments.length-2;if(it===1)bt.children=St;else if(1<it){for(var ct=Array(it),Ct=0;Ct<it;Ct++)ct[Ct]=arguments[Ct+2];bt.children=ct}return D(O.type,Dt,bt)},le.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},le.createElement=function(O,nt,St){var bt,Dt={},it=null;if(nt!=null)for(bt in nt.key!==void 0&&(it=""+nt.key),nt)k.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Dt[bt]=nt[bt]);var ct=arguments.length-2;if(ct===1)Dt.children=St;else if(1<ct){for(var Ct=Array(ct),zt=0;zt<ct;zt++)Ct[zt]=arguments[zt+2];Dt.children=Ct}if(O&&O.defaultProps)for(bt in ct=O.defaultProps,ct)Dt[bt]===void 0&&(Dt[bt]=ct[bt]);return D(O,it,Dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:h,render:O}},le.isValidElement=H,le.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:W}},le.memo=function(O,nt){return{$$typeof:d,type:O,compare:nt===void 0?null:nt}},le.startTransition=function(O){var nt=P.T,St={};P.T=St;try{var bt=O(),Dt=P.S;Dt!==null&&Dt(St,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(F,vt)}catch(it){vt(it)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),P.T=nt}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(O){return P.H.use(O)},le.useActionState=function(O,nt,St){return P.H.useActionState(O,nt,St)},le.useCallback=function(O,nt){return P.H.useCallback(O,nt)},le.useContext=function(O){return P.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,nt){return P.H.useDeferredValue(O,nt)},le.useEffect=function(O,nt){return P.H.useEffect(O,nt)},le.useEffectEvent=function(O){return P.H.useEffectEvent(O)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(O,nt,St){return P.H.useImperativeHandle(O,nt,St)},le.useInsertionEffect=function(O,nt){return P.H.useInsertionEffect(O,nt)},le.useLayoutEffect=function(O,nt){return P.H.useLayoutEffect(O,nt)},le.useMemo=function(O,nt){return P.H.useMemo(O,nt)},le.useOptimistic=function(O,nt){return P.H.useOptimistic(O,nt)},le.useReducer=function(O,nt,St){return P.H.useReducer(O,nt,St)},le.useRef=function(O){return P.H.useRef(O)},le.useState=function(O){return P.H.useState(O)},le.useSyncExternalStore=function(O,nt,St){return P.H.useSyncExternalStore(O,nt,St)},le.useTransition=function(){return P.H.useTransition()},le.version="19.2.0",le}var k_;function _m(){return k_||(k_=1,ud.exports=Mb()),ud.exports}var Qt=_m(),cd={exports:{}},ol={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function Eb(){return X_||(X_=1,(function(a){function t(B,Y){var W=B.length;B.push(Y);t:for(;0<W;){var vt=W-1>>>1,xt=B[vt];if(0<o(xt,Y))B[vt]=Y,B[W]=xt,W=vt;else break t}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Y=B[0],W=B.pop();if(W!==Y){B[0]=W;t:for(var vt=0,xt=B.length,O=xt>>>1;vt<O;){var nt=2*(vt+1)-1,St=B[nt],bt=nt+1,Dt=B[bt];if(0>o(St,W))bt<xt&&0>o(Dt,St)?(B[vt]=Dt,B[bt]=W,vt=bt):(B[vt]=St,B[nt]=W,vt=nt);else if(bt<xt&&0>o(Dt,W))B[vt]=Dt,B[bt]=W,vt=bt;else break t}}return Y}function o(B,Y){var W=B.sortIndex-Y.sortIndex;return W!==0?W:B.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();a.unstable_now=function(){return c.now()-h}}var m=[],d=[],g=1,v=null,_=3,M=!1,T=!1,b=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Y=n(d);Y!==null;){if(Y.callback===null)s(d);else if(Y.startTime<=B)s(d),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=n(d)}}function z(B){if(b=!1,C(B),!T)if(n(m)!==null)T=!0,F||(F=!0,tt());else{var Y=n(d);Y!==null&&dt(z,Y.startTime-B)}}var F=!1,P=-1,k=5,D=-1;function w(){return E?!0:!(a.unstable_now()-D<k)}function H(){if(E=!1,F){var B=a.unstable_now();D=B;var Y=!0;try{t:{T=!1,b&&(b=!1,N(P),P=-1),M=!0;var W=_;try{e:{for(C(B),v=n(m);v!==null&&!(v.expirationTime>B&&w());){var vt=v.callback;if(typeof vt=="function"){v.callback=null,_=v.priorityLevel;var xt=vt(v.expirationTime<=B);if(B=a.unstable_now(),typeof xt=="function"){v.callback=xt,C(B),Y=!0;break e}v===n(m)&&s(m),C(B)}else s(m);v=n(m)}if(v!==null)Y=!0;else{var O=n(d);O!==null&&dt(z,O.startTime-B),Y=!1}}break t}finally{v=null,_=W,M=!1}Y=void 0}}finally{Y?tt():F=!1}}}var tt;if(typeof U=="function")tt=function(){U(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ht=ut.port2;ut.port1.onmessage=H,tt=function(){ht.postMessage(null)}}else tt=function(){y(H,0)};function dt(B,Y){P=y(function(){B(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var W=_;_=Y;try{return B()}finally{_=W}},a.unstable_requestPaint=function(){E=!0},a.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return Y()}finally{_=W}},a.unstable_scheduleCallback=function(B,Y,W){var vt=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,B){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=W+xt,B={id:g++,callback:Y,priorityLevel:B,startTime:W,expirationTime:xt,sortIndex:-1},W>vt?(B.sortIndex=W,t(d,B),n(m)===null&&B===n(d)&&(b?(N(P),P=-1):b=!0,dt(z,W-vt))):(B.sortIndex=xt,t(m,B),T||M||(T=!0,F||(F=!0,tt()))),B},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(B){var Y=_;return function(){var W=_;_=Y;try{return B.apply(this,arguments)}finally{_=W}}}})(hd)),hd}var W_;function Tb(){return W_||(W_=1,fd.exports=Eb()),fd.exports}var dd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function bb(){if(q_)return Ln;q_=1;var a=_m();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(m,d,null,g)},Ln.flushSync=function(m){var d=c.T,g=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=d,s.p=g,s.d.f()}},Ln.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Ln.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,d){return m(d)},Ln.useFormState=function(m,d,g){return c.H.useFormState(m,d,g)},Ln.useFormStatus=function(){return c.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var Y_;function Ab(){if(Y_)return dd.exports;Y_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),dd.exports=bb(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function Rb(){if(j_)return ol;j_=1;var a=Tb(),t=_m(),n=Ab();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===r)return m(f),e;if(p===l)return m(f),i;p=p.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=p;else{for(var S=!1,A=f.child;A;){if(A===r){S=!0,r=f,l=p;break}if(A===l){S=!0,l=f,r=p;break}A=A.sibling}if(!S){for(A=p.child;A;){if(A===r){S=!0,r=p,l=f;break}if(A===l){S=!0,l=p,r=f;break}A=A.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},vt=[],xt=-1;function O(e){return{current:e}}function nt(e){0>xt||(e.current=vt[xt],vt[xt]=null,xt--)}function St(e,i){xt++,vt[xt]=e.current,e.current=i}var bt=O(null),Dt=O(null),it=O(null),ct=O(null);function Ct(e,i){switch(St(it,i),St(Dt,e),St(bt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=u_(i),e=c_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(bt),St(bt,e)}function zt(){nt(bt),nt(Dt),nt(it)}function qt(e){e.memoizedState!==null&&St(ct,e);var i=bt.current,r=c_(i,e.type);i!==r&&(St(Dt,e),St(bt,r))}function he(e){Dt.current===e&&(nt(bt),nt(Dt)),ct.current===e&&(nt(ct),nl._currentValue=W)}var $e,V;function Ae(e){if($e===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",V=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+V}var ae=!1;function ee(e,i){if(!e||ae)return"";ae=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var et=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){et=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){et=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&et&&typeof lt.stack=="string")return[lt.stack,et.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],A=p[1];if(S&&A){var I=S.split(`
`),$=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===$.length)for(l=I.length-1,f=$.length-1;1<=l&&0<=f&&I[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==$[f]){var pt=`
`+I[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{ae=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ae(r):""}function Yt(e,i){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==i&&i!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return Ae("Activity");default:return""}}function Ee(e){try{var i="",r=null;do i+=Yt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var It=Object.prototype.hasOwnProperty,re=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,We=a.unstable_shouldYield,L=a.unstable_requestPaint,x=a.unstable_now,G=a.unstable_getCurrentPriorityLevel,Q=a.unstable_ImmediatePriority,ft=a.unstable_UserBlockingPriority,at=a.unstable_NormalPriority,Pt=a.unstable_LowPriority,At=a.unstable_IdlePriority,Vt=a.log,jt=a.unstable_setDisableYieldValue,Et=null,Rt=null;function Zt(e){if(typeof Vt=="function"&&jt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,e)}catch{}}var Bt=Math.clz32?Math.clz32:q,Ut=Math.log,ue=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ut(e)/ue|0)|0}var Tt=256,wt=262144,Ft=4194304;function Mt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?f=Mt(l):(S&=A,S!==0?f=Mt(S):r||(r=A&~e,r!==0&&(f=Mt(r))))):(A=l&~p,A!==0?f=Mt(A):S!==0?f=Mt(S):r||(r=l&~e,r!==0&&(f=Mt(r)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,r=i&-i,p>=r||p===32&&(r&4194048)!==0)?i:f}function Ht(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Re(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Bn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ci(e,i,r,l,f,p){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(r=S&~r;0<r;){var pt=31-Bt(r),gt=1<<pt;A[pt]=0,I[pt]=-1;var et=$[pt];if(et!==null)for($[pt]=null,pt=0;pt<et.length;pt++){var lt=et[pt];lt!==null&&(lt.lane&=-536870913)}r&=~gt}l!==0&&go(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~i))}function go(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Bt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Fi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Bt(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function Qs(e,i){var r=i&-i;return r=(r&42)!==0?1:Js(r),(r&(e.suspendedLanes|i))!==0?0:r}function Js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ds(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:N_(e.type))}function vo(e,i){var r=Y.p;try{return Y.p=e,i()}finally{Y.p=r}}var $n=Math.random().toString(36).slice(2),un="__reactFiber$"+$n,Tn="__reactProps$"+$n,Ca="__reactContainer$"+$n,_o="__reactEvents$"+$n,ef="__reactListeners$"+$n,nf="__reactHandles$"+$n,Gl="__reactResources$"+$n,ps="__reactMarker$"+$n;function R(e){delete e[un],delete e[Tn],delete e[_o],delete e[ef],delete e[nf]}function j(e){var i=e[un];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ca]||r[un]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=v_(e);e!==null;){if(r=e[un])return r;e=v_(e)}return i}e=r,r=e.parentNode}return null}function st(e){if(e=e[un]||e[Ca]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Z(e){var i=e[Gl];return i||(i=e[Gl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(e){e[ps]=!0}var Lt=new Set,Xt={};function Ot(e,i){Jt(e,i),Jt(e+"Capture",i)}function Jt(e,i){for(Xt[e]=i,e=0;e<i.length;e++)Lt.add(i[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ge={};function Oe(e){return It.call(ge,e)?!0:It.call($t,e)?!1:ie.test(e)?ge[e]=!0:($t[e]=!0,!1)}function ke(e,i,r){if(Oe(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Pe(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function ve(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,p.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function bn(e){if(!e._valueTracker){var i=qe(e)?"checked":"value";e._valueTracker=Ce(e,i,""+e[i])}}function Ki(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=qe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ms=/[\n"\\]/g;function xe(e){return e.replace(ms,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,r,l,f,p,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Wt(i)):e.value!==""+Wt(i)&&(e.value=""+Wt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?vn(e,S,Wt(i)):r!=null?vn(e,S,Wt(r)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Wt(A):e.removeAttribute("name")}function zn(e,i,r,l,f,p,S,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){bn(e);return}r=r!=null?""+Wt(r):"",i=i!=null?""+Wt(i):r,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),bn(e)}function vn(e,i,r){i==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function sn(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Wt(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function tr(e,i,r){if(i!=null&&(i=""+Wt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Wt(r):""}function Ii(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(s(92));if(dt(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Wt(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),bn(e)}function er(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var mE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rg(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||mE.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function og(e,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&rg(e,f,l)}else for(var p in i)i.hasOwnProperty(p)&&rg(e,p,i[p])}function af(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return vE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var sf=null;function rf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,ir=null;function lg(e){var i=st(e);if(i&&(e=i.stateNode)){var r=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xe(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[Tn]||null;if(!f)throw Error(s(90));Un(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Ki(l)}break t;case"textarea":tr(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&sn(e,!!r.multiple,i,!1)}}}var of=!1;function ug(e,i,r){if(of)return e(i,r);of=!0;try{var l=e(i);return l}finally{if(of=!1,(nr!==null||ir!==null)&&(Du(),nr&&(i=nr,e=ir,ir=nr=null,lg(i),e)))for(i=0;i<e.length;i++)lg(e[i])}}function yo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Tn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(Qi)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{lf=!1}var wa=null,uf=null,Xl=null;function cg(){if(Xl)return Xl;var e,i=uf,r=i.length,l,f="value"in wa?wa.value:wa.textContent,p=f.length;for(e=0;e<r&&i[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===f[p-l];l++);return Xl=f.slice(e,1<l?1-l:void 0)}function Wl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function fg(){return!1}function Gn(e){function i(r,l,f,p,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ql:fg,this.isPropagationStopped=fg,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Gn(gs),So=v({},gs,{view:0,detail:0}),_E=Gn(So),cf,ff,Mo,jl=v({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(cf=e.screenX-Mo.screenX,ff=e.screenY-Mo.screenY):ff=cf=0,Mo=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:ff}}),hg=Gn(jl),yE=v({},jl,{dataTransfer:0}),xE=Gn(yE),SE=v({},So,{relatedTarget:0}),hf=Gn(SE),ME=v({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),EE=Gn(ME),TE=v({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bE=Gn(TE),AE=v({},gs,{data:0}),dg=Gn(AE),RE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DE(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=wE[e])?!!i[e]:!1}function df(){return DE}var UE=v({},So,{key:function(e){if(e.key){var i=RE[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?CE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LE=Gn(UE),NE=v({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pg=Gn(NE),OE=v({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),PE=Gn(OE),BE=v({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zE=Gn(BE),FE=v({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=Gn(FE),VE=v({},gs,{newState:0,oldState:0}),HE=Gn(VE),GE=[9,13,27,32],pf=Qi&&"CompositionEvent"in window,Eo=null;Qi&&"documentMode"in document&&(Eo=document.documentMode);var kE=Qi&&"TextEvent"in window&&!Eo,mg=Qi&&(!pf||Eo&&8<Eo&&11>=Eo),gg=" ",vg=!1;function _g(e,i){switch(e){case"keyup":return GE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function XE(e,i){switch(e){case"compositionend":return yg(i);case"keypress":return i.which!==32?null:(vg=!0,gg);case"textInput":return e=i.data,e===gg&&vg?null:e;default:return null}}function WE(e,i){if(ar)return e==="compositionend"||!pf&&_g(e,i)?(e=cg(),Xl=uf=wa=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mg&&i.locale!=="ko"?null:i.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!qE[e.type]:i==="textarea"}function Sg(e,i,r,l){nr?ir?ir.push(l):ir=[l]:nr=l,i=zu(i,"onChange"),0<i.length&&(r=new Yl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var To=null,bo=null;function YE(e){i_(e,0)}function Kl(e){var i=ot(e);if(Ki(i))return e}function Mg(e,i){if(e==="change")return i}var Eg=!1;if(Qi){var mf;if(Qi){var gf="oninput"in document;if(!gf){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),gf=typeof Tg.oninput=="function"}mf=gf}else mf=!1;Eg=mf&&(!document.documentMode||9<document.documentMode)}function bg(){To&&(To.detachEvent("onpropertychange",Ag),bo=To=null)}function Ag(e){if(e.propertyName==="value"&&Kl(bo)){var i=[];Sg(i,bo,e,rf(e)),ug(YE,i)}}function jE(e,i,r){e==="focusin"?(bg(),To=i,bo=r,To.attachEvent("onpropertychange",Ag)):e==="focusout"&&bg()}function KE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(bo)}function ZE(e,i){if(e==="click")return Kl(i)}function QE(e,i){if(e==="input"||e==="change")return Kl(i)}function JE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ti=typeof Object.is=="function"?Object.is:JE;function Ao(e,i){if(ti(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!It.call(i,f)||!ti(e[f],i[f]))return!1}return!0}function Rg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cg(e,i){var r=Rg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Rg(r)}}function wg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?wg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Dg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Sn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Sn(e.document)}return i}function vf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var $E=Qi&&"documentMode"in document&&11>=document.documentMode,sr=null,_f=null,Ro=null,yf=!1;function Ug(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yf||sr==null||sr!==Sn(l)||(l=sr,"selectionStart"in l&&vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ro&&Ao(Ro,l)||(Ro=l,l=zu(_f,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=sr)))}function vs(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var rr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},xf={},Lg={};Qi&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function _s(e){if(xf[e])return xf[e];if(!rr[e])return e;var i=rr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Lg)return xf[e]=i[r];return e}var Ng=_s("animationend"),Og=_s("animationiteration"),Pg=_s("animationstart"),tT=_s("transitionrun"),eT=_s("transitionstart"),nT=_s("transitioncancel"),Bg=_s("transitionend"),zg=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Ri(e,i){zg.set(e,i),Ot(i,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],or=0,Mf=0;function Ql(){for(var e=or,i=Mf=or=0;i<e;){var r=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var p=fi[i];if(fi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&Fg(r,f,p)}}function Jl(e,i,r,l){fi[or++]=e,fi[or++]=i,fi[or++]=r,fi[or++]=l,Mf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ef(e,i,r,l){return Jl(e,i,r,l),$l(e)}function ys(e,i){return Jl(e,null,null,i),$l(e)}function Fg(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,p=e.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&i!==null&&(f=31-Bt(r),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),p):null}function $l(e){if(50<Ko)throw Ko=0,Lh=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var lr={};function iT(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,i,r,l){return new iT(e,i,r,l)}function Tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,i){var r=e.alternate;return r===null?(r=ei(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Ig(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function tu(e,i,r,l,f,p){var S=0;if(l=e,typeof e=="function")Tf(e)&&(S=1);else if(typeof e=="string")S=lb(e,r,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ei(31,r,i,f),e.elementType=D,e.lanes=p,e;case b:return xs(r.children,f,p,i);case E:S=8,f|=24;break;case y:return e=ei(12,r,i,f|2),e.elementType=y,e.lanes=p,e;case z:return e=ei(13,r,i,f),e.elementType=z,e.lanes=p,e;case F:return e=ei(19,r,i,f),e.elementType=F,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case N:S=9;break t;case C:S=11;break t;case P:S=14;break t;case k:S=16,l=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=ei(S,r,i,f),i.elementType=e,i.type=l,i.lanes=p,i}function xs(e,i,r,l){return e=ei(7,e,l,i),e.lanes=r,e}function bf(e,i,r){return e=ei(6,e,null,i),e.lanes=r,e}function Vg(e){var i=ei(18,null,null,0);return i.stateNode=e,i}function Af(e,i,r){return i=ei(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Hg=new WeakMap;function hi(e,i){if(typeof e=="object"&&e!==null){var r=Hg.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ee(i)},Hg.set(e,i),i)}return{value:e,source:i,stack:Ee(i)}}var ur=[],cr=0,eu=null,Co=0,di=[],pi=0,Da=null,Vi=1,Hi="";function $i(e,i){ur[cr++]=Co,ur[cr++]=eu,eu=e,Co=i}function Gg(e,i,r){di[pi++]=Vi,di[pi++]=Hi,di[pi++]=Da,Da=e;var l=Vi;e=Hi;var f=32-Bt(l)-1;l&=~(1<<f),r+=1;var p=32-Bt(i)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Vi=1<<32-Bt(i)+f|r<<f|l,Hi=p+e}else Vi=1<<p|r<<f|l,Hi=e}function Rf(e){e.return!==null&&($i(e,1),Gg(e,1,0))}function Cf(e){for(;e===eu;)eu=ur[--cr],ur[cr]=null,Co=ur[--cr],ur[cr]=null;for(;e===Da;)Da=di[--pi],di[pi]=null,Hi=di[--pi],di[pi]=null,Vi=di[--pi],di[pi]=null}function kg(e,i){di[pi++]=Vi,di[pi++]=Hi,di[pi++]=Da,Vi=i.id,Hi=i.overflow,Da=e}var An=null,je=null,Te=!1,Ua=null,mi=!1,wf=Error(s(519));function La(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(hi(i,e)),wf}function Xg(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[un]=e,i[Tn]=l,r){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)ye(Qo[r],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),Ii(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||o_(i.textContent,r)?(l.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),l.onScroll!=null&&ye("scroll",i),l.onScrollEnd!=null&&ye("scrollend",i),l.onClick!=null&&(i.onclick=Zi),i=!0):i=!1,i||La(e,!0)}function Wg(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function fr(e){if(e!==An)return!1;if(!Te)return Wg(e),Te=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Yh(e.type,e.memoizedProps)),r=!r),r&&je&&La(e),Wg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=g_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=g_(e)}else i===27?(i=je,qa(e.type)?(e=Jh,Jh=null,je=e):je=i):je=An?vi(e.stateNode.nextSibling):null;return!0}function Ss(){je=An=null,Te=!1}function Df(){var e=Ua;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ua=null),e}function wo(e){Ua===null?Ua=[e]:Ua.push(e)}var Uf=O(null),Ms=null,ta=null;function Na(e,i,r){St(Uf,i._currentValue),i._currentValue=r}function ea(e){e._currentValue=Uf.current,nt(Uf)}function Lf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Nf(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){p.lanes|=r,A=p.alternate,A!==null&&(A.lanes|=r),Lf(p.return,r,e),l||(S=null);break t}p=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=r,p=S.alternate,p!==null&&(p.lanes|=r),Lf(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function hr(e,i,r,l){e=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=f.type;ti(f.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(f===ct.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}f=f.return}e!==null&&Nf(i,e,r,l),i.flags|=262144}function nu(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return qg(Ms,e)}function iu(e,i){return Ms===null&&Es(e),qg(e,i)}function qg(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ta===null){if(e===null)throw Error(s(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return r}var aT=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},sT=a.unstable_scheduleCallback,rT=a.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new aT,data:new Map,refCount:0}}function Do(e){e.refCount--,e.refCount===0&&sT(rT,function(){e.controller.abort()})}var Uo=null,Pf=0,dr=0,pr=null;function oT(e,i){if(Uo===null){var r=Uo=[];Pf=0,dr=Fh(),pr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Pf++,i.then(Yg,Yg),i}function Yg(){if(--Pf===0&&Uo!==null){pr!==null&&(pr.status="fulfilled");var e=Uo;Uo=null,dr=0,pr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function lT(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var jg=B.S;B.S=function(e,i){U0=x(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oT(e,i),jg!==null&&jg(e,i)};var Ts=O(null);function Bf(){var e=Ts.current;return e!==null?e:Xe.pooledCache}function au(e,i){i===null?St(Ts,Ts.current):St(Ts,i.pool)}function Kg(){var e=Bf();return e===null?null:{parent:cn._currentValue,pool:e}}var mr=Error(s(460)),zf=Error(s(474)),su=Error(s(542)),ru={then:function(){}};function Zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qg(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Zi,Zi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$g(e),e;default:if(typeof i.status=="string")i.then(Zi,Zi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$g(e),e}throw As=i,mr}}function bs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(As=r,mr):r}}var As=null;function Jg(){if(As===null)throw Error(s(459));var e=As;return As=null,e}function $g(e){if(e===mr||e===su)throw Error(s(483))}var gr=null,Lo=0;function ou(e){var i=Lo;return Lo+=1,gr===null&&(gr=[]),Qg(gr,e,i)}function No(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function lu(e,i){throw i.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function tv(e){function i(K,X){if(e){var J=K.deletions;J===null?(K.deletions=[X],K.flags|=16):J.push(X)}}function r(K,X){if(!e)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function l(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function f(K,X){return K=Ji(K,X),K.index=0,K.sibling=null,K}function p(K,X,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<X?(K.flags|=67108866,X):J):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,J,mt){return X===null||X.tag!==6?(X=bf(J,K.mode,mt),X.return=K,X):(X=f(X,J),X.return=K,X)}function I(K,X,J,mt){var te=J.type;return te===b?pt(K,X,J.props.children,mt,J.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===k&&bs(te)===X.type)?(X=f(X,J.props),No(X,J),X.return=K,X):(X=tu(J.type,J.key,J.props,null,K.mode,mt),No(X,J),X.return=K,X)}function $(K,X,J,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Af(J,K.mode,mt),X.return=K,X):(X=f(X,J.children||[]),X.return=K,X)}function pt(K,X,J,mt,te){return X===null||X.tag!==7?(X=xs(J,K.mode,mt,te),X.return=K,X):(X=f(X,J),X.return=K,X)}function gt(K,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=bf(""+X,K.mode,J),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return J=tu(X.type,X.key,X.props,null,K.mode,J),No(J,X),J.return=K,J;case T:return X=Af(X,K.mode,J),X.return=K,X;case k:return X=bs(X),gt(K,X,J)}if(dt(X)||tt(X))return X=xs(X,K.mode,J,null),X.return=K,X;if(typeof X.then=="function")return gt(K,ou(X),J);if(X.$$typeof===U)return gt(K,iu(K,X),J);lu(K,X)}return null}function et(K,X,J,mt){var te=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return te!==null?null:A(K,X,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===te?I(K,X,J,mt):null;case T:return J.key===te?$(K,X,J,mt):null;case k:return J=bs(J),et(K,X,J,mt)}if(dt(J)||tt(J))return te!==null?null:pt(K,X,J,mt,null);if(typeof J.then=="function")return et(K,X,ou(J),mt);if(J.$$typeof===U)return et(K,X,iu(K,J),mt);lu(K,J)}return null}function lt(K,X,J,mt,te){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,A(X,K,""+mt,te);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return K=K.get(mt.key===null?J:mt.key)||null,I(X,K,mt,te);case T:return K=K.get(mt.key===null?J:mt.key)||null,$(X,K,mt,te);case k:return mt=bs(mt),lt(K,X,J,mt,te)}if(dt(mt)||tt(mt))return K=K.get(J)||null,pt(X,K,mt,te,null);if(typeof mt.then=="function")return lt(K,X,J,ou(mt),te);if(mt.$$typeof===U)return lt(K,X,J,iu(X,mt),te);lu(X,mt)}return null}function kt(K,X,J,mt){for(var te=null,we=null,Kt=X,de=X=0,Me=null;Kt!==null&&de<J.length;de++){Kt.index>de?(Me=Kt,Kt=null):Me=Kt.sibling;var De=et(K,Kt,J[de],mt);if(De===null){Kt===null&&(Kt=Me);break}e&&Kt&&De.alternate===null&&i(K,Kt),X=p(De,X,de),we===null?te=De:we.sibling=De,we=De,Kt=Me}if(de===J.length)return r(K,Kt),Te&&$i(K,de),te;if(Kt===null){for(;de<J.length;de++)Kt=gt(K,J[de],mt),Kt!==null&&(X=p(Kt,X,de),we===null?te=Kt:we.sibling=Kt,we=Kt);return Te&&$i(K,de),te}for(Kt=l(Kt);de<J.length;de++)Me=lt(Kt,K,de,J[de],mt),Me!==null&&(e&&Me.alternate!==null&&Kt.delete(Me.key===null?de:Me.key),X=p(Me,X,de),we===null?te=Me:we.sibling=Me,we=Me);return e&&Kt.forEach(function(Qa){return i(K,Qa)}),Te&&$i(K,de),te}function ne(K,X,J,mt){if(J==null)throw Error(s(151));for(var te=null,we=null,Kt=X,de=X=0,Me=null,De=J.next();Kt!==null&&!De.done;de++,De=J.next()){Kt.index>de?(Me=Kt,Kt=null):Me=Kt.sibling;var Qa=et(K,Kt,De.value,mt);if(Qa===null){Kt===null&&(Kt=Me);break}e&&Kt&&Qa.alternate===null&&i(K,Kt),X=p(Qa,X,de),we===null?te=Qa:we.sibling=Qa,we=Qa,Kt=Me}if(De.done)return r(K,Kt),Te&&$i(K,de),te;if(Kt===null){for(;!De.done;de++,De=J.next())De=gt(K,De.value,mt),De!==null&&(X=p(De,X,de),we===null?te=De:we.sibling=De,we=De);return Te&&$i(K,de),te}for(Kt=l(Kt);!De.done;de++,De=J.next())De=lt(Kt,K,de,De.value,mt),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?de:De.key),X=p(De,X,de),we===null?te=De:we.sibling=De,we=De);return e&&Kt.forEach(function(yb){return i(K,yb)}),Te&&$i(K,de),te}function He(K,X,J,mt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var te=J.key;X!==null;){if(X.key===te){if(te=J.type,te===b){if(X.tag===7){r(K,X.sibling),mt=f(X,J.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===k&&bs(te)===X.type){r(K,X.sibling),mt=f(X,J.props),No(mt,J),mt.return=K,K=mt;break t}r(K,X);break}else i(K,X);X=X.sibling}J.type===b?(mt=xs(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=tu(J.type,J.key,J.props,null,K.mode,mt),No(mt,J),mt.return=K,K=mt)}return S(K);case T:t:{for(te=J.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){r(K,X.sibling),mt=f(X,J.children||[]),mt.return=K,K=mt;break t}else{r(K,X);break}else i(K,X);X=X.sibling}mt=Af(J,K.mode,mt),mt.return=K,K=mt}return S(K);case k:return J=bs(J),He(K,X,J,mt)}if(dt(J))return kt(K,X,J,mt);if(tt(J)){if(te=tt(J),typeof te!="function")throw Error(s(150));return J=te.call(J),ne(K,X,J,mt)}if(typeof J.then=="function")return He(K,X,ou(J),mt);if(J.$$typeof===U)return He(K,X,iu(K,J),mt);lu(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(r(K,X.sibling),mt=f(X,J),mt.return=K,K=mt):(r(K,X),mt=bf(J,K.mode,mt),mt.return=K,K=mt),S(K)):r(K,X)}return function(K,X,J,mt){try{Lo=0;var te=He(K,X,J,mt);return gr=null,te}catch(Kt){if(Kt===mr||Kt===su)throw Kt;var we=ei(29,Kt,null,K.mode);return we.lanes=mt,we.return=K,we}finally{}}}var Rs=tv(!0),ev=tv(!1),Oa=!1;function Ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=$l(e),Fg(e,null,r),i}return Jl(e,l,i,r),$l(e)}function Oo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Fi(e,r)}}function Vf(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,r=r.next}while(r!==null);p===null?f=p=i:p=p.next=i}else f=p=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Hf=!1;function Po(){if(Hf){var e=pr;if(e!==null)throw e}}function Bo(e,i,r,l){Hf=!1;var f=e.updateQueue;Oa=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,$=I.next;I.next=null,S===null?p=$:S.next=$,S=I;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==S&&(A===null?pt.firstBaseUpdate=$:A.next=$,pt.lastBaseUpdate=I))}if(p!==null){var gt=f.baseState;S=0,pt=$=I=null,A=p;do{var et=A.lane&-536870913,lt=et!==A.lane;if(lt?(Se&et)===et:(l&et)===et){et!==0&&et===dr&&(Hf=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ne=A;et=i;var He=r;switch(ne.tag){case 1:if(kt=ne.payload,typeof kt=="function"){gt=kt.call(He,gt,et);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ne.payload,et=typeof kt=="function"?kt.call(He,gt,et):kt,et==null)break t;gt=v({},gt,et);break t;case 2:Oa=!0}}et=A.callback,et!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[et]:lt.push(et))}else lt={lane:et,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?($=pt=lt,I=gt):pt=pt.next=lt,S|=et;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);pt===null&&(I=gt),f.baseState=I,f.firstBaseUpdate=$,f.lastBaseUpdate=pt,p===null&&(f.shared.lanes=0),Ha|=S,e.lanes=S,e.memoizedState=gt}}function nv(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function iv(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)nv(r[e],i)}var vr=O(null),uu=O(0);function av(e,i){e=ca,St(uu,e),St(vr,i),ca=e|i.baseLanes}function Gf(){St(uu,ca),St(vr,vr.current)}function kf(){ca=uu.current,nt(vr),nt(uu)}var ni=O(null),gi=null;function za(e){var i=e.alternate;St(rn,rn.current&1),St(ni,e),gi===null&&(i===null||vr.current!==null||i.memoizedState!==null)&&(gi=e)}function Xf(e){St(rn,rn.current),St(ni,e),gi===null&&(gi=e)}function sv(e){e.tag===22?(St(rn,rn.current),St(ni,e),gi===null&&(gi=e)):Fa()}function Fa(){St(rn,rn.current),St(ni,ni.current)}function ii(e){nt(ni),gi===e&&(gi=null),nt(rn)}var rn=O(0);function cu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Zh(r)||Qh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var na=0,fe=null,Ie=null,fn=null,fu=!1,_r=!1,Cs=!1,hu=0,zo=0,yr=null,uT=0;function tn(){throw Error(s(321))}function Wf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ti(e[r],i[r]))return!1;return!0}function qf(e,i,r,l,f,p){return na=p,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Gv:oh,Cs=!1,p=r(l,f),Cs=!1,_r&&(p=ov(i,r,l,f)),rv(e),p}function rv(e){B.H=Vo;var i=Ie!==null&&Ie.next!==null;if(na=0,fn=Ie=fe=null,fu=!1,zo=0,yr=null,i)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&nu(e)&&(hn=!0))}function ov(e,i,r,l){fe=e;var f=0;do{if(_r&&(yr=null),zo=0,_r=!1,25<=f)throw Error(s(301));if(f+=1,fn=Ie=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=kv,p=i(r,l)}while(_r);return p}function cT(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Fo(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(fe.flags|=1024),i}function Yf(){var e=hu!==0;return hu=0,e}function jf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Kf(e){if(fu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}fu=!1}na=0,fn=Ie=fe=null,_r=!1,zo=hu=0,yr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?fe.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=fn===null?fe.memoizedState:fn.next;if(i!==null)fn=i,Ie=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},fn===null?fe.memoizedState=fn=e:fn=fn.next=e}return fn}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var i=zo;return zo+=1,yr===null&&(yr=[]),e=Qg(yr,e,i),i=fe,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Gv:oh),e}function pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fo(e);if(e.$$typeof===U)return Rn(e)}throw Error(s(438,String(e)))}function Zf(e){var i=null,r=fe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=du(),fe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=w;return i.index++,r}function ia(e,i){return typeof i=="function"?i(e):i}function mu(e){var i=on();return Qf(i,Ie,e)}function Qf(e,i,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}i.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{i=f.next;var A=S=null,I=null,$=i,pt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Se&gt)===gt:(na&gt)===gt){var et=$.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===dr&&(pt=!0);else if((na&et)===et){$=$.next,et===dr&&(pt=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=gt,S=p):I=I.next=gt,fe.lanes|=et,Ha|=et;gt=$.action,Cs&&r(p,gt),p=$.hasEagerState?$.eagerState:r(p,gt)}else et={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=et,S=p):I=I.next=et,fe.lanes|=gt,Ha|=gt;$=$.next}while($!==null&&$!==i);if(I===null?S=p:I.next=A,!ti(p,e.memoizedState)&&(hn=!0,pt&&(r=pr,r!==null)))throw r;e.memoizedState=p,e.baseState=S,e.baseQueue=I,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Jf(e){var i=on(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,p=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do p=e(p,S.action),S=S.next;while(S!==f);ti(p,i.memoizedState)||(hn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),r.lastRenderedState=p}return[p,l]}function lv(e,i,r){var l=fe,f=on(),p=Te;if(p){if(r===void 0)throw Error(s(407));r=r()}else r=i();var S=!ti((Ie||f).memoizedState,r);if(S&&(f.memoizedState=r,hn=!0),f=f.queue,eh(fv.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,xr(9,{destroy:void 0},cv.bind(null,l,f,r,i),null),Xe===null)throw Error(s(349));p||(na&127)!==0||uv(l,i,r)}return r}function uv(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=fe.updateQueue,i===null?(i=du(),fe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function cv(e,i,r,l){i.value=r,i.getSnapshot=l,hv(i)&&dv(e)}function fv(e,i,r){return r(function(){hv(i)&&dv(e)})}function hv(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ti(e,r)}catch{return!0}}function dv(e){var i=ys(e,2);i!==null&&Yn(i,e,2)}function $f(e){var i=Fn();if(typeof e=="function"){var r=e;if(e=r(),Cs){Zt(!0);try{r()}finally{Zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},i}function pv(e,i,r,l){return e.baseState=r,Qf(e,Ie,typeof l=="function"?l:ia)}function fT(e,i,r,l,f){if(_u(e))throw Error(s(485));if(e=i.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};B.T!==null?r(!0):p.isTransition=!1,l(p),r=i.pending,r===null?(p.next=i.pending=p,mv(i,p)):(p.next=r.next,i.pending=r.next=p)}}function mv(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var p=B.T,S={};B.T=S;try{var A=r(f,l),I=B.S;I!==null&&I(S,A),gv(e,i,A)}catch($){th(e,i,$)}finally{p!==null&&S.types!==null&&(p.types=S.types),B.T=p}}else try{p=r(f,l),gv(e,i,p)}catch($){th(e,i,$)}}function gv(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){vv(e,i,l)},function(l){return th(e,i,l)}):vv(e,i,r)}function vv(e,i,r){i.status="fulfilled",i.value=r,_v(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,mv(e,r)))}function th(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,_v(i),i=i.next;while(i!==l)}e.action=null}function _v(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function yv(e,i){return i}function xv(e,i){if(Te){var r=Xe.formState;if(r!==null){t:{var l=fe;if(Te){if(je){e:{for(var f=je,p=mi;f.nodeType!==8;){if(!p){f=null;break e}if(f=vi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){je=vi(f.nextSibling),l=f.data==="F!";break t}}La(l)}l=!1}l&&(i=r[0])}}return r=Fn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yv,lastRenderedState:i},r.queue=l,r=Iv.bind(null,fe,l),l.dispatch=r,l=$f(!1),p=rh.bind(null,fe,!1,l.queue),l=Fn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=fT.bind(null,fe,f,p,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function Sv(e){var i=on();return Mv(i,Ie,e)}function Mv(e,i,r){if(i=Qf(e,i,yv)[0],e=mu(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Fo(i)}catch(S){throw S===mr?su:S}else l=i;i=on();var f=i.queue,p=f.dispatch;return r!==i.memoizedState&&(fe.flags|=2048,xr(9,{destroy:void 0},hT.bind(null,f,r),null)),[l,p,e]}function hT(e,i){e.action=i}function Ev(e){var i=on(),r=Ie;if(r!==null)return Mv(i,r,e);on(),i=i.memoizedState,r=on();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function xr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=fe.updateQueue,i===null&&(i=du(),fe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Tv(){return on().memoizedState}function gu(e,i,r,l){var f=Fn();fe.flags|=e,f.memoizedState=xr(1|i,{destroy:void 0},r,l===void 0?null:l)}function vu(e,i,r,l){var f=on();l=l===void 0?null:l;var p=f.memoizedState.inst;Ie!==null&&l!==null&&Wf(l,Ie.memoizedState.deps)?f.memoizedState=xr(i,p,r,l):(fe.flags|=e,f.memoizedState=xr(1|i,p,r,l))}function bv(e,i){gu(8390656,8,e,i)}function eh(e,i){vu(2048,8,e,i)}function dT(e){fe.flags|=4;var i=fe.updateQueue;if(i===null)i=du(),fe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Av(e){var i=on().memoizedState;return dT({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Rv(e,i){return vu(4,2,e,i)}function Cv(e,i){return vu(4,4,e,i)}function wv(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Dv(e,i,r){r=r!=null?r.concat([e]):null,vu(4,4,wv.bind(null,i,e),r)}function nh(){}function Uv(e,i){var r=on();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Wf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Lv(e,i){var r=on();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Wf(i,l[1]))return l[0];if(l=e(),Cs){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[l,i],l}function ih(e,i,r){return r===void 0||(na&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=N0(),fe.lanes|=e,Ha|=e,r)}function Nv(e,i,r,l){return ti(r,i)?r:vr.current!==null?(e=ih(e,r,l),ti(e,i)||(hn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Se&261930)===0?(hn=!0,e.memoizedState=r):(e=N0(),fe.lanes|=e,Ha|=e,i)}function Ov(e,i,r,l,f){var p=Y.p;Y.p=p!==0&&8>p?p:8;var S=B.T,A={};B.T=A,rh(e,!1,i,r);try{var I=f(),$=B.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=lT(I,l);Io(e,i,pt,ri(e))}else Io(e,i,l,ri(e))}catch(gt){Io(e,i,{then:function(){},status:"rejected",reason:gt},ri())}finally{Y.p=p,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function pT(){}function ah(e,i,r,l){if(e.tag!==5)throw Error(s(476));var f=Pv(e).queue;Ov(e,f,i,W,r===null?pT:function(){return Bv(e),r(l)})}function Pv(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:W},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Bv(e){var i=Pv(e);i.next===null&&(i=e.alternate.memoizedState),Io(e,i.next.queue,{},ri())}function sh(){return Rn(nl)}function zv(){return on().memoizedState}function Fv(){return on().memoizedState}function mT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ri();e=Pa(r);var l=Ba(i,e,r);l!==null&&(Yn(l,i,r),Oo(l,i,r)),i={cache:Of()},e.payload=i;return}i=i.return}}function gT(e,i,r){var l=ri();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_u(e)?Vv(i,r):(r=Ef(e,i,r,l),r!==null&&(Yn(r,e,l),Hv(r,i,l)))}function Iv(e,i,r){var l=ri();Io(e,i,r,l)}function Io(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Vv(i,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,A=p(S,r);if(f.hasEagerState=!0,f.eagerState=A,ti(A,S))return Jl(e,i,f,0),Xe===null&&Ql(),!1}catch{}finally{}if(r=Ef(e,i,f,l),r!==null)return Yn(r,e,l),Hv(r,i,l),!0}return!1}function rh(e,i,r,l){if(l={lane:2,revertLane:Fh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_u(e)){if(i)throw Error(s(479))}else i=Ef(e,r,l,2),i!==null&&Yn(i,e,2)}function _u(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function Vv(e,i){_r=fu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Hv(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Fi(e,r)}}var Vo={readContext:Rn,use:pu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Vo.useEffectEvent=tn;var Gv={readContext:Rn,use:pu,useCallback:function(e,i){return Fn().memoizedState=[e,i===void 0?null:i],e},useContext:Rn,useEffect:bv,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,gu(4194308,4,wv.bind(null,i,e),r)},useLayoutEffect:function(e,i){return gu(4194308,4,e,i)},useInsertionEffect:function(e,i){gu(4,2,e,i)},useMemo:function(e,i){var r=Fn();i=i===void 0?null:i;var l=e();if(Cs){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Fn();if(r!==void 0){var f=r(i);if(Cs){Zt(!0);try{r(i)}finally{Zt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=gT.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var i=Fn();return e={current:e},i.memoizedState=e},useState:function(e){e=$f(e);var i=e.queue,r=Iv.bind(null,fe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:nh,useDeferredValue:function(e,i){var r=Fn();return ih(r,e,i)},useTransition:function(){var e=$f(!1);return e=Ov.bind(null,fe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=fe,f=Fn();if(Te){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),Xe===null)throw Error(s(349));(Se&127)!==0||uv(l,i,r)}f.memoizedState=r;var p={value:r,getSnapshot:i};return f.queue=p,bv(fv.bind(null,l,p,e),[e]),l.flags|=2048,xr(9,{destroy:void 0},cv.bind(null,l,p,r,i),null),r},useId:function(){var e=Fn(),i=Xe.identifierPrefix;if(Te){var r=Hi,l=Vi;r=(l&~(1<<32-Bt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=hu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=uT++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:sh,useFormState:xv,useActionState:xv,useOptimistic:function(e){var i=Fn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=rh.bind(null,fe,!0,r),r.dispatch=i,[e,i]},useMemoCache:Zf,useCacheRefresh:function(){return Fn().memoizedState=mT.bind(null,fe)},useEffectEvent:function(e){var i=Fn(),r={impl:e};return i.memoizedState=r,function(){if((Le&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},oh={readContext:Rn,use:pu,useCallback:Uv,useContext:Rn,useEffect:eh,useImperativeHandle:Dv,useInsertionEffect:Rv,useLayoutEffect:Cv,useMemo:Lv,useReducer:mu,useRef:Tv,useState:function(){return mu(ia)},useDebugValue:nh,useDeferredValue:function(e,i){var r=on();return Nv(r,Ie.memoizedState,e,i)},useTransition:function(){var e=mu(ia)[0],i=on().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:lv,useId:zv,useHostTransitionStatus:sh,useFormState:Sv,useActionState:Sv,useOptimistic:function(e,i){var r=on();return pv(r,Ie,e,i)},useMemoCache:Zf,useCacheRefresh:Fv};oh.useEffectEvent=Av;var kv={readContext:Rn,use:pu,useCallback:Uv,useContext:Rn,useEffect:eh,useImperativeHandle:Dv,useInsertionEffect:Rv,useLayoutEffect:Cv,useMemo:Lv,useReducer:Jf,useRef:Tv,useState:function(){return Jf(ia)},useDebugValue:nh,useDeferredValue:function(e,i){var r=on();return Ie===null?ih(r,e,i):Nv(r,Ie.memoizedState,e,i)},useTransition:function(){var e=Jf(ia)[0],i=on().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:lv,useId:zv,useHostTransitionStatus:sh,useFormState:Ev,useActionState:Ev,useOptimistic:function(e,i){var r=on();return Ie!==null?pv(r,Ie,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:Fv};kv.useEffectEvent=Av;function lh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var uh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Pa(l);f.payload=i,r!=null&&(f.callback=r),i=Ba(e,f,l),i!==null&&(Yn(i,e,l),Oo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Pa(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Ba(e,f,l),i!==null&&(Yn(i,e,l),Oo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ri(),l=Pa(r);l.tag=2,i!=null&&(l.callback=i),i=Ba(e,l,r),i!==null&&(Yn(i,e,r),Oo(i,e,r))}};function Xv(e,i,r,l,f,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,S):i.prototype&&i.prototype.isPureReactComponent?!Ao(r,l)||!Ao(f,p):!0}function Wv(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&uh.enqueueReplaceState(i,i.state,null)}function ws(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function qv(e){Zl(e)}function Yv(e){console.error(e)}function jv(e){Zl(e)}function yu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Kv(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ch(e,i,r){return r=Pa(r),r.tag=3,r.payload={element:null},r.callback=function(){yu(e,i)},r}function Zv(e){return e=Pa(e),e.tag=3,e}function Qv(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){Kv(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Kv(i,r,l),typeof f!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function vT(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&hr(i,r,f,!0),r=ni.current,r!==null){switch(r.tag){case 31:case 13:return gi===null?Uu():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===ru?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Ph(e,l,f)),!1;case 22:return r.flags|=65536,l===ru?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Ph(e,l,f)),!1}throw Error(s(435,r.tag))}return Ph(e,l,f),Uu(),!1}if(Te)return i=ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==wf&&(e=Error(s(422),{cause:l}),wo(hi(e,r)))):(l!==wf&&(i=Error(s(423),{cause:l}),wo(hi(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=hi(l,r),f=ch(e.stateNode,l,f),Vf(e,f),en!==4&&(en=2)),!1;var p=Error(s(520),{cause:l});if(p=hi(p,r),jo===null?jo=[p]:jo.push(p),en!==4&&(en=2),i===null)return!0;l=hi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=ch(r.stateNode,l,e),Vf(r,e),!1;case 1:if(i=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ga===null||!Ga.has(p))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Zv(f),Qv(f,e,r,l),Vf(r,f),!1}r=r.return}while(r!==null);return!1}var fh=Error(s(461)),hn=!1;function Cn(e,i,r,l){i.child=e===null?ev(i,null,r,l):Rs(i,e.child,r,l)}function Jv(e,i,r,l,f){r=r.render;var p=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Es(i),l=qf(e,i,r,S,p,f),A=Yf(),e!==null&&!hn?(jf(e,i,f),aa(e,i,f)):(Te&&A&&Rf(i),i.flags|=1,Cn(e,i,l,f),i.child)}function $v(e,i,r,l,f){if(e===null){var p=r.type;return typeof p=="function"&&!Tf(p)&&p.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=p,t0(e,i,p,l,f)):(e=tu(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!yh(e,f)){var S=p.memoizedProps;if(r=r.compare,r=r!==null?r:Ao,r(S,l)&&e.ref===i.ref)return aa(e,i,f)}return i.flags|=1,e=Ji(p,l),e.ref=i.ref,e.return=i,i.child=e}function t0(e,i,r,l,f){if(e!==null){var p=e.memoizedProps;if(Ao(p,l)&&e.ref===i.ref)if(hn=!1,i.pendingProps=l=p,yh(e,f))(e.flags&131072)!==0&&(hn=!0);else return i.lanes=e.lanes,aa(e,i,f)}return hh(e,i,r,l,f)}function e0(e,i,r,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,i.child=null;return n0(e,i,p,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&au(i,p!==null?p.cachePool:null),p!==null?av(i,p):Gf(),sv(i);else return l=i.lanes=536870912,n0(e,i,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(au(i,p.cachePool),av(i,p),Fa(),i.memoizedState=null):(e!==null&&au(i,null),Gf(),Fa());return Cn(e,i,f,r),i.child}function Ho(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function n0(e,i,r,l,f){var p=Bf();return p=p===null?null:{parent:cn._currentValue,pool:p},i.memoizedState={baseLanes:r,cachePool:p},e!==null&&au(i,null),Gf(),sv(i),e!==null&&hr(e,i,l,!0),i.childLanes=f,null}function xu(e,i){return i=Mu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function i0(e,i,r){return Rs(i,e.child,null,r),e=xu(i,i.pendingProps),e.flags|=2,ii(i),i.memoizedState=null,e}function _T(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=xu(i,l),i.lanes=536870912,Ho(null,e);if(Xf(i),(e=je)?(e=m_(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Vi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=Vg(e),r.return=i,i.child=r,An=i,je=null)):e=null,e===null)throw La(i);return i.lanes=536870912,null}return xu(i,l)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(Xf(i),f)if(i.flags&256)i.flags&=-257,i=i0(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(hn||hr(e,i,r,!1),f=(r&e.childLanes)!==0,hn||f){if(l=Xe,l!==null&&(S=Qs(l,r),S!==0&&S!==p.retryLane))throw p.retryLane=S,ys(e,S),Yn(l,e,S),fh;Uu(),i=i0(e,i,r)}else e=p.treeContext,je=vi(S.nextSibling),An=i,Te=!0,Ua=null,mi=!1,e!==null&&kg(i,e),i=xu(i,l),i.flags|=4096;return i}return e=Ji(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Su(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function hh(e,i,r,l,f){return Es(i),r=qf(e,i,r,l,void 0,f),l=Yf(),e!==null&&!hn?(jf(e,i,f),aa(e,i,f)):(Te&&l&&Rf(i),i.flags|=1,Cn(e,i,r,f),i.child)}function a0(e,i,r,l,f,p){return Es(i),i.updateQueue=null,r=ov(i,l,r,f),rv(e),l=Yf(),e!==null&&!hn?(jf(e,i,p),aa(e,i,p)):(Te&&l&&Rf(i),i.flags|=1,Cn(e,i,r,p),i.child)}function s0(e,i,r,l,f){if(Es(i),i.stateNode===null){var p=lr,S=r.contextType;typeof S=="object"&&S!==null&&(p=Rn(S)),p=new r(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=uh,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},Ff(i),S=r.contextType,p.context=typeof S=="object"&&S!==null?Rn(S):lr,p.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(lh(i,r,S,l),p.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&uh.enqueueReplaceState(p,p.state,null),Bo(i,l,p,f),Po(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var A=i.memoizedProps,I=ws(r,A);p.props=I;var $=p.context,pt=r.contextType;S=lr,typeof pt=="object"&&pt!==null&&(S=Rn(pt));var gt=r.getDerivedStateFromProps;pt=typeof gt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||$!==S)&&Wv(i,p,l,S),Oa=!1;var et=i.memoizedState;p.state=et,Bo(i,l,p,f),Po(),$=i.memoizedState,A||et!==$||Oa?(typeof gt=="function"&&(lh(i,r,gt,l),$=i.memoizedState),(I=Oa||Xv(i,r,I,l,et,$,S))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),p.props=l,p.state=$,p.context=S,l=I):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,If(e,i),S=i.memoizedProps,pt=ws(r,S),p.props=pt,gt=i.pendingProps,et=p.context,$=r.contextType,I=lr,typeof $=="object"&&$!==null&&(I=Rn($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==gt||et!==I)&&Wv(i,p,l,I),Oa=!1,et=i.memoizedState,p.state=et,Bo(i,l,p,f),Po();var lt=i.memoizedState;S!==gt||et!==lt||Oa||e!==null&&e.dependencies!==null&&nu(e.dependencies)?(typeof A=="function"&&(lh(i,r,A,l),lt=i.memoizedState),(pt=Oa||Xv(i,r,pt,l,et,lt,I)||e!==null&&e.dependencies!==null&&nu(e.dependencies))?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,lt,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,lt,I)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),p.props=l,p.state=lt,p.context=I,l=pt):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,Su(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=Rs(i,e.child,null,f),i.child=Rs(i,null,r,f)):Cn(e,i,r,f),i.memoizedState=p.state,e=i.child):e=aa(e,i,f),e}function r0(e,i,r,l){return Ss(),i.flags|=256,Cn(e,i,r,l),i.child}var dh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ph(e){return{baseLanes:e,cachePool:Kg()}}function mh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=si),e}function o0(e,i,r){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Te){if(f?za(i):Fa(),(e=je)?(e=m_(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Vi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=Vg(e),r.return=i,i.child=r,An=i,je=null)):e=null,e===null)throw La(i);return Qh(e)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(Fa(),f=i.mode,A=Mu({mode:"hidden",children:A},f),l=xs(l,f,r,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=ph(r),l.childLanes=mh(e,S,r),i.memoizedState=dh,Ho(null,l)):(za(i),gh(i,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(p)i.flags&256?(za(i),i.flags&=-257,i=vh(e,i,r)):i.memoizedState!==null?(Fa(),i.child=e.child,i.flags|=128,i=null):(Fa(),A=l.fallback,f=i.mode,l=Mu({mode:"visible",children:l.children},f),A=xs(A,f,r,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Rs(i,e.child,null,r),l=i.child,l.memoizedState=ph(r),l.childLanes=mh(e,S,r),i.memoizedState=dh,i=Ho(null,l));else if(za(i),Qh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,l=Error(s(419)),l.stack="",l.digest=S,wo({value:l,source:null,stack:null}),i=vh(e,i,r)}else if(hn||hr(e,i,r,!1),S=(r&e.childLanes)!==0,hn||S){if(S=Xe,S!==null&&(l=Qs(S,r),l!==0&&l!==I.retryLane))throw I.retryLane=l,ys(e,l),Yn(S,e,l),fh;Zh(A)||Uu(),i=vh(e,i,r)}else Zh(A)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,je=vi(A.nextSibling),An=i,Te=!0,Ua=null,mi=!1,e!==null&&kg(i,e),i=gh(i,l.children),i.flags|=4096);return i}return f?(Fa(),A=l.fallback,f=i.mode,I=e.child,$=I.sibling,l=Ji(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,$!==null?A=Ji($,A):(A=xs(A,f,r,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Ho(null,l),l=i.child,A=e.child.memoizedState,A===null?A=ph(r):(f=A.cachePool,f!==null?(I=cn._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=Kg(),A={baseLanes:A.baseLanes|r,cachePool:f}),l.memoizedState=A,l.childLanes=mh(e,S,r),i.memoizedState=dh,Ho(e.child,l)):(za(i),r=e.child,e=r.sibling,r=Ji(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function gh(e,i){return i=Mu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Mu(e,i){return e=ei(22,e,null,i),e.lanes=0,e}function vh(e,i,r){return Rs(i,e.child,null,r),e=gh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function l0(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Lf(e.return,i,r)}function _h(e,i,r,l,f,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:p}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=p)}function u0(e,i,r){var l=i.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,St(rn,S),Cn(e,i,l,r),l=Te?Co:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,r,i);else if(e.tag===19)l0(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&cu(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),_h(i,!1,f,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&cu(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}_h(i,!0,r,null,p,l);break;case"together":_h(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function aa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(hr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,r=Ji(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ji(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function yh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&nu(e)))}function yT(e,i,r){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Na(i,cn,e.memoizedState.cache),Ss();break;case 27:case 5:qt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Na(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Xf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(za(i),i.flags|=128,null):(r&i.child.childLanes)!==0?o0(e,i,r):(za(i),e=aa(e,i,r),e!==null?e.sibling:null);za(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(hr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return u0(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),St(rn,rn.current),l)break;return null;case 22:return i.lanes=0,e0(e,i,r,i.pendingProps);case 24:Na(i,cn,e.memoizedState.cache)}return aa(e,i,r)}function c0(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)hn=!0;else{if(!yh(e,r)&&(i.flags&128)===0)return hn=!1,yT(e,i,r);hn=(e.flags&131072)!==0}else hn=!1,Te&&(i.flags&1048576)!==0&&Gg(i,Co,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=bs(i.elementType),i.type=e,typeof e=="function")Tf(e)?(l=ws(e,l),i.tag=1,i=s0(null,i,e,l,r)):(i.tag=0,i=hh(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===C){i.tag=11,i=Jv(null,i,e,l,r);break t}else if(f===P){i.tag=14,i=$v(null,i,e,l,r);break t}}throw i=ht(e)||e,Error(s(306,i,""))}}return i;case 0:return hh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=ws(l,i.pendingProps),s0(e,i,l,f,r);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,If(e,i),Bo(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Na(i,cn,l),l!==p.cache&&Nf(i,[cn],r,!0),Po(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=r0(e,i,l,r);break t}else if(l!==f){f=hi(Error(s(424)),i),wo(f),i=r0(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=vi(e.firstChild),An=i,Te=!0,Ua=null,mi=!0,r=ev(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ss(),l===f){i=aa(e,i,r);break t}Cn(e,i,l,r)}i=i.child}return i;case 26:return Su(e,i),e===null?(r=S_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Te||(r=i.type,e=i.pendingProps,l=Fu(it.current).createElement(r),l[un]=i,l[Tn]=e,wn(l,r,e),yt(l),i.stateNode=l):i.memoizedState=S_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return qt(i),e===null&&Te&&(l=i.stateNode=__(i.type,i.pendingProps,it.current),An=i,mi=!0,f=je,qa(i.type)?(Jh=f,je=vi(l.firstChild)):je=f),Cn(e,i,i.pendingProps.children,r),Su(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Te&&((f=l=je)&&(l=KT(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,An=i,je=vi(l.firstChild),mi=!1,f=!0):f=!1),f||La(i)),qt(i),f=i.type,p=i.pendingProps,S=e!==null?e.memoizedProps:null,l=p.children,Yh(f,p)?l=null:S!==null&&Yh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=qf(e,i,cT,null,null,r),nl._currentValue=f),Su(e,i),Cn(e,i,l,r),i.child;case 6:return e===null&&Te&&((e=r=je)&&(r=ZT(r,i.pendingProps,mi),r!==null?(i.stateNode=r,An=i,je=null,e=!0):e=!1),e||La(i)),null;case 13:return o0(e,i,r);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Rs(i,null,l,r):Cn(e,i,l,r),i.child;case 11:return Jv(e,i,i.type,i.pendingProps,r);case 7:return Cn(e,i,i.pendingProps,r),i.child;case 8:return Cn(e,i,i.pendingProps.children,r),i.child;case 12:return Cn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Na(i,i.type,l.value),Cn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Es(i),f=Rn(f),l=l(f),i.flags|=1,Cn(e,i,l,r),i.child;case 14:return $v(e,i,i.type,i.pendingProps,r);case 15:return t0(e,i,i.type,i.pendingProps,r);case 19:return u0(e,i,r);case 31:return _T(e,i,r);case 22:return e0(e,i,r,i.pendingProps);case 24:return Es(i),l=Rn(cn),e===null?(f=Bf(),f===null&&(f=Xe,p=Of(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=r),f=p),i.memoizedState={parent:l,cache:f},Ff(i),Na(i,cn,f)):((e.lanes&r)!==0&&(If(e,i),Bo(i,null,null,r),Po()),f=e.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Na(i,cn,l)):(l=p.cache,Na(i,cn,l),l!==f.cache&&Nf(i,[cn],r,!0))),Cn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function sa(e){e.flags|=4}function xh(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(z0())e.flags|=8192;else throw As=ru,zf}else e.flags&=-16777217}function f0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!A_(i))if(z0())e.flags|=8192;else throw As=ru,zf}function Eu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Be():536870912,e.lanes|=i,Tr|=i)}function Go(e,i){if(!Te)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function xT(e,i,r){var l=i.pendingProps;switch(Cf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ea(cn),zt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(i)?sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Df())),Ke(i),null;case 26:var f=i.type,p=i.memoizedState;return e===null?(sa(i),p!==null?(Ke(i),f0(i,p)):(Ke(i),xh(i,f,null,l,r))):p?p!==e.memoizedState?(sa(i),Ke(i),f0(i,p)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&sa(i),Ke(i),xh(i,f,e,l,r)),null;case 27:if(he(i),r=it.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}e=bt.current,fr(i)?Xg(i):(e=__(f,l,r),i.stateNode=e,sa(i))}return Ke(i),null;case 5:if(he(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}if(p=bt.current,fr(i))Xg(i);else{var S=Fu(it.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[un]=i,p[Tn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=p;t:switch(wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&sa(i)}}return Ke(i),xh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,fr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=An,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[un]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||o_(e.nodeValue,r)),e||La(i,!0)}else e=Fu(e).createTextNode(l),e[un]=i,i.stateNode=e}return Ke(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=fr(i),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else r=Df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ii(i),i):(ii(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Ke(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=fr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[un]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),f=!1}else f=Df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ii(i),i):(ii(i),null)}return ii(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Eu(i,i.updateQueue),Ke(i),null);case 4:return zt(),e===null&&Gh(i.stateNode.containerInfo),Ke(i),null;case 10:return ea(i.type),Ke(i),null;case 19:if(nt(rn),l=i.memoizedState,l===null)return Ke(i),null;if(f=(i.flags&128)!==0,p=l.rendering,p===null)if(f)Go(l,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=cu(e),p!==null){for(i.flags|=128,Go(l,!1),e=p.updateQueue,i.updateQueue=e,Eu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)Ig(r,e),r=r.sibling;return St(rn,rn.current&1|2),Te&&$i(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&x()>Cu&&(i.flags|=128,f=!0,Go(l,!1),i.lanes=4194304)}else{if(!f)if(e=cu(p),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Eu(i,e),Go(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Te)return Ke(i),null}else 2*x()-l.renderingStartTime>Cu&&r!==536870912&&(i.flags|=128,f=!0,Go(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(e=l.last,e!==null?e.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=x(),e.sibling=null,r=rn.current,St(rn,f?r&1|2:r&1),Te&&$i(i,l.treeForkCount),e):(Ke(i),null);case 22:case 23:return ii(i),kf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),r=i.updateQueue,r!==null&&Eu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&nt(Ts),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ea(cn),Ke(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function ST(e,i){switch(Cf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(cn),zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return he(i),null;case 31:if(i.memoizedState!==null){if(ii(i),i.alternate===null)throw Error(s(340));Ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ii(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(rn),null;case 4:return zt(),null;case 10:return ea(i.type),null;case 22:case 23:return ii(i),kf(),e!==null&&nt(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function h0(e,i){switch(Cf(i),i.tag){case 3:ea(cn),zt();break;case 26:case 27:case 5:he(i);break;case 4:zt();break;case 31:i.memoizedState!==null&&ii(i);break;case 13:ii(i);break;case 19:nt(rn);break;case 10:ea(i.type);break;case 22:case 23:ii(i),kf(),e!==null&&nt(Ts);break;case 24:ea(cn)}}function ko(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var p=r.create,S=r.inst;l=p(),S.destroy=l}r=r.next}while(r!==f)}}catch(A){Fe(i,i.return,A)}}function Ia(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var I=r,$=A;try{$()}catch(pt){Fe(f,I,pt)}}}l=l.next}while(l!==p)}}catch(pt){Fe(i,i.return,pt)}}function d0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{iv(i,r)}catch(l){Fe(e,e.return,l)}}}function p0(e,i,r){r.props=ws(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Fe(e,i,l)}}function Xo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Fe(e,i,f)}}function Gi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Fe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Fe(e,i,f)}else r.current=null}function m0(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Fe(e,e.return,f)}}function Sh(e,i,r){try{var l=e.stateNode;kT(l,e.type,r,i),l[Tn]=i}catch(f){Fe(e,e.return,f)}}function g0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Mh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Zi));else if(l!==4&&(l===27&&qa(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Eh(e,i,r),e=e.sibling;e!==null;)Eh(e,i,r),e=e.sibling}function Tu(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&qa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Tu(e,i,r),e=e.sibling;e!==null;)Tu(e,i,r),e=e.sibling}function v0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,l,r),i[un]=e,i[Tn]=r}catch(p){Fe(e,e.return,p)}}var ra=!1,dn=!1,Th=!1,_0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function MT(e,i){if(e=e.containerInfo,Wh=Wu,e=Dg(e),vf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var S=0,A=-1,I=-1,$=0,pt=0,gt=e,et=null;e:for(;;){for(var lt;gt!==r||f!==0&&gt.nodeType!==3||(A=S+f),gt!==p||l!==0&&gt.nodeType!==3||(I=S+l),gt.nodeType===3&&(S+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)et=gt,gt=lt;for(;;){if(gt===e)break e;if(et===r&&++$===f&&(A=S),et===p&&++pt===l&&(I=S),(lt=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=lt}r=A===-1||I===-1?null:{start:A,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(qh={focusedElem:e,selectionRange:r},Wu=!1,Mn=i;Mn!==null;)if(i=Mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Mn=e;else for(;Mn!==null;){switch(i=Mn,p=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=i,f=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var kt=ws(r.type,f);e=l.getSnapshotBeforeUpdate(kt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Fe(r,r.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Kh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Mn=e;break}Mn=i.return}}function y0(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:la(e,r),l&4&&ko(5,r);break;case 1:if(la(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Fe(r,r.return,S)}else{var f=ws(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(r,r.return,S)}}l&64&&d0(r),l&512&&Xo(r,r.return);break;case 3:if(la(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{iv(e,i)}catch(S){Fe(r,r.return,S)}}break;case 27:i===null&&l&4&&v0(r);case 26:case 5:la(e,r),i===null&&l&4&&m0(r),l&512&&Xo(r,r.return);break;case 12:la(e,r);break;case 31:la(e,r),l&4&&M0(e,r);break;case 13:la(e,r),l&4&&E0(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=UT.bind(null,r),QT(e,r))));break;case 22:if(l=r.memoizedState!==null||ra,!l){i=i!==null&&i.memoizedState!==null||dn,f=ra;var p=dn;ra=l,(dn=i)&&!p?ua(e,r,(r.subtreeFlags&8772)!==0):la(e,r),ra=f,dn=p}break;case 30:break;default:la(e,r)}}function x0(e){var i=e.alternate;i!==null&&(e.alternate=null,x0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&R(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,kn=!1;function oa(e,i,r){for(r=r.child;r!==null;)S0(e,i,r),r=r.sibling}function S0(e,i,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:dn||Gi(r,i),oa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:dn||Gi(r,i);var l=Ze,f=kn;qa(r.type)&&(Ze=r.stateNode,kn=!1),oa(e,i,r),$o(r.stateNode),Ze=l,kn=f;break;case 5:dn||Gi(r,i);case 6:if(l=Ze,f=kn,Ze=null,oa(e,i,r),Ze=l,kn=f,Ze!==null)if(kn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(r.stateNode)}catch(p){Fe(r,i,p)}else try{Ze.removeChild(r.stateNode)}catch(p){Fe(r,i,p)}break;case 18:Ze!==null&&(kn?(e=Ze,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Lr(e)):d_(Ze,r.stateNode));break;case 4:l=Ze,f=kn,Ze=r.stateNode.containerInfo,kn=!0,oa(e,i,r),Ze=l,kn=f;break;case 0:case 11:case 14:case 15:Ia(2,r,i),dn||Ia(4,r,i),oa(e,i,r);break;case 1:dn||(Gi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&p0(r,i,l)),oa(e,i,r);break;case 21:oa(e,i,r);break;case 22:dn=(l=dn)||r.memoizedState!==null,oa(e,i,r),dn=l;break;default:oa(e,i,r)}}function M0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lr(e)}catch(r){Fe(i,i.return,r)}}}function E0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lr(e)}catch(r){Fe(i,i.return,r)}}function ET(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new _0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new _0),i;default:throw Error(s(435,e.tag))}}function bu(e,i){var r=ET(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=LT.bind(null,e,l);l.then(f,f)}})}function Xn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],p=e,S=i,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){Ze=A.stateNode,kn=!1;break t}break;case 5:Ze=A.stateNode,kn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));S0(p,S,f),Ze=null,kn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)T0(i,e),i=i.sibling}var Ci=null;function T0(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),Wn(e),l&4&&(Ia(3,e,e.return),ko(3,e),Ia(5,e,e.return));break;case 1:Xn(i,e),Wn(e),l&512&&(dn||r===null||Gi(r,r.return)),l&64&&ra&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ci;if(Xn(i,e),Wn(e),l&512&&(dn||r===null||Gi(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ps]||p[un]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),wn(p,l,r),p[un]=e,yt(p),l=p;break t;case"link":var S=T_("link","href",f).get(l+(r.href||""));if(S){for(var A=0;A<S.length;A++)if(p=S[A],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(A,1);break e}}p=f.createElement(l),wn(p,l,r),f.head.appendChild(p);break;case"meta":if(S=T_("meta","content",f).get(l+(r.content||""))){for(A=0;A<S.length;A++)if(p=S[A],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(A,1);break e}}p=f.createElement(l),wn(p,l,r),f.head.appendChild(p);break;default:throw Error(s(468,l))}p[un]=e,yt(p),l=p}e.stateNode=l}else b_(f,e.type,e.stateNode);else e.stateNode=E_(f,l,e.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?b_(f,e.type,e.stateNode):E_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Sh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Xn(i,e),Wn(e),l&512&&(dn||r===null||Gi(r,r.return)),r!==null&&l&4&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Xn(i,e),Wn(e),l&512&&(dn||r===null||Gi(r,r.return)),e.flags&32){f=e.stateNode;try{er(f,"")}catch(kt){Fe(e,e.return,kt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Sh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Th=!0);break;case 6:if(Xn(i,e),Wn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(Hu=null,f=Ci,Ci=Iu(i.containerInfo),Xn(i,e),Ci=f,Wn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Lr(i.containerInfo)}catch(kt){Fe(e,e.return,kt)}Th&&(Th=!1,b0(e));break;case 4:l=Ci,Ci=Iu(e.stateNode.containerInfo),Xn(i,e),Wn(e),Ci=l;break;case 12:Xn(i,e),Wn(e);break;case 31:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 13:Xn(i,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ru=x()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 22:f=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,$=ra,pt=dn;if(ra=$||f,dn=pt||I,Xn(i,e),dn=pt,ra=$,Wn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||I||ra||dn||Ds(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(p=I.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(kt){Fe(I,I.return,kt)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(kt){Fe(I,I.return,kt)}}}else if(i.tag===18){if(r===null){I=i;try{var lt=I.stateNode;f?p_(lt,!0):p_(I.stateNode,!1)}catch(kt){Fe(I,I.return,kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,bu(e,r))));break;case 19:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 30:break;case 21:break;default:Xn(i,e),Wn(e)}}function Wn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(g0(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,p=Mh(e);Tu(e,p,f);break;case 5:var S=r.stateNode;r.flags&32&&(er(S,""),r.flags&=-33);var A=Mh(e);Tu(e,A,S);break;case 3:case 4:var I=r.stateNode.containerInfo,$=Mh(e);Eh(e,$,I);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function b0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;b0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)y0(e,i.alternate,i),i=i.sibling}function Ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ia(4,i,i.return),Ds(i);break;case 1:Gi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&p0(i,i.return,r),Ds(i);break;case 27:$o(i.stateNode);case 26:case 5:Gi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}e=e.sibling}}function ua(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,p=i,S=p.flags;switch(p.tag){case 0:case 11:case 15:ua(f,p,r),ko(4,p);break;case 1:if(ua(f,p,r),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Fe(l,l.return,$)}if(l=p,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)nv(I[f],A)}catch($){Fe(l,l.return,$)}}r&&S&64&&d0(p),Xo(p,p.return);break;case 27:v0(p);case 26:case 5:ua(f,p,r),r&&l===null&&S&4&&m0(p),Xo(p,p.return);break;case 12:ua(f,p,r);break;case 31:ua(f,p,r),r&&S&4&&M0(f,p);break;case 13:ua(f,p,r),r&&S&4&&E0(f,p);break;case 22:p.memoizedState===null&&ua(f,p,r),Xo(p,p.return);break;case 30:break;default:ua(f,p,r)}i=i.sibling}}function bh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Do(r))}function Ah(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Do(e))}function wi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)A0(e,i,r,l),i=i.sibling}function A0(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:wi(e,i,r,l),f&2048&&ko(9,i);break;case 1:wi(e,i,r,l);break;case 3:wi(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Do(e)));break;case 12:if(f&2048){wi(e,i,r,l),e=i.stateNode;try{var p=i.memoizedProps,S=p.id,A=p.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(i,i.return,I)}}else wi(e,i,r,l);break;case 31:wi(e,i,r,l);break;case 13:wi(e,i,r,l);break;case 23:break;case 22:p=i.stateNode,S=i.alternate,i.memoizedState!==null?p._visibility&2?wi(e,i,r,l):Wo(e,i):p._visibility&2?wi(e,i,r,l):(p._visibility|=2,Sr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&bh(S,i);break;case 24:wi(e,i,r,l),f&2048&&Ah(i.alternate,i);break;default:wi(e,i,r,l)}}function Sr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=e,S=i,A=r,I=l,$=S.flags;switch(S.tag){case 0:case 11:case 15:Sr(p,S,A,I,f),ko(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Sr(p,S,A,I,f):Wo(p,S):(pt._visibility|=2,Sr(p,S,A,I,f)),f&&$&2048&&bh(S.alternate,S);break;case 24:Sr(p,S,A,I,f),f&&$&2048&&Ah(S.alternate,S);break;default:Sr(p,S,A,I,f)}i=i.sibling}}function Wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:Wo(r,l),f&2048&&bh(l.alternate,l);break;case 24:Wo(r,l),f&2048&&Ah(l.alternate,l);break;default:Wo(r,l)}i=i.sibling}}var qo=8192;function Mr(e,i,r){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)R0(e,i,r),e=e.sibling}function R0(e,i,r){switch(e.tag){case 26:Mr(e,i,r),e.flags&qo&&e.memoizedState!==null&&ub(r,Ci,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,i,r);break;case 3:case 4:var l=Ci;Ci=Iu(e.stateNode.containerInfo),Mr(e,i,r),Ci=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=qo,qo=16777216,Mr(e,i,r),qo=l):Mr(e,i,r));break;default:Mr(e,i,r)}}function C0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Yo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Mn=l,D0(l,e)}C0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)w0(e),e=e.sibling}function w0(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Au(e)):Yo(e);break;default:Yo(e)}}function Au(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Mn=l,D0(l,e)}C0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ia(8,i,i.return),Au(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Au(i));break;default:Au(i)}e=e.sibling}}function D0(e,i){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Ia(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Do(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Mn=l;else t:for(r=e;Mn!==null;){l=Mn;var f=l.sibling,p=l.return;if(x0(l),l===r){Mn=null;break t}if(f!==null){f.return=p,Mn=f;break t}Mn=p}}}var TT={getCacheForType:function(e){var i=Rn(cn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Rn(cn).controller.signal}},bT=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,_e=null,Se=0,ze=0,ai=null,Va=!1,Er=!1,Rh=!1,ca=0,en=0,Ha=0,Us=0,Ch=0,si=0,Tr=0,jo=null,qn=null,wh=!1,Ru=0,U0=0,Cu=1/0,wu=null,Ga=null,_n=0,ka=null,br=null,fa=0,Dh=0,Uh=null,L0=null,Ko=0,Lh=null;function ri(){return(Le&2)!==0&&Se!==0?Se&-Se:B.T!==null?Fh():ds()}function N0(){if(si===0)if((Se&536870912)===0||Te){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Yn(e,i,r){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),Xa(e,Se,si,!1)),Bn(e,r),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(Us|=r),en===4&&Xa(e,Se,si,!1)),ki(e))}function O0(e,i,r){if((Le&6)!==0)throw Error(s(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Ht(e,i),f=l?CT(e,i):Oh(e,i,!0),p=l;do{if(f===0){Er&&!l&&Xa(e,i,0,!1);break}else{if(r=e.current.alternate,p&&!AT(r)){f=Oh(e,i,!1),p=!1;continue}if(f===2){if(p=i,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var A=e;f=jo;var I=A.current.memoizedState.isDehydrated;if(I&&(Ar(A,S).flags|=256),S=Oh(A,S,!1),S!==2){if(Rh&&!I){A.errorRecoveryDisabledLanes|=p,Us|=p,f=4;break t}p=qn,qn=f,p!==null&&(qn===null?qn=p:qn.push.apply(qn,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Ar(e,0),Xa(e,i,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xa(l,i,si,!Va);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Ru+300-x(),10<f)){if(Xa(l,i,si,!Va),_t(l,0,!0)!==0)break t;fa=i,l.timeoutHandle=f_(P0.bind(null,l,r,qn,wu,wh,i,si,Us,Tr,Va,p,"Throttled",-0,0),f);break t}P0(l,r,qn,wu,wh,i,si,Us,Tr,Va,p,null,-0,0)}}break}while(!0);ki(e)}function P0(e,i,r,l,f,p,S,A,I,$,pt,gt,et,lt){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},R0(i,p,gt);var kt=(p&62914560)===p?Ru-x():(p&4194048)===p?U0-x():0;if(kt=cb(gt,kt),kt!==null){fa=p,e.cancelPendingCommit=kt(k0.bind(null,e,i,p,r,l,f,S,A,I,pt,gt,null,et,lt)),Xa(e,p,S,!$);return}}k0(e,i,p,r,l,f,S,A,I)}function AT(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],p=f.getSnapshot;f=f.value;try{if(!ti(p(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xa(e,i,r,l){i&=~Ch,i&=~Us,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var p=31-Bt(f),S=1<<p;l[p]=-1,f&=~S}r!==0&&go(e,r,i)}function Du(){return(Le&6)===0?(Zo(0),!1):!0}function Nh(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,ta=Ms=null,Kf(e),gr=null,Lo=0,e=_e;for(;e!==null;)h0(e.alternate,e),e=e.return;_e=null}}function Ar(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,qT(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),fa=0,Nh(),Xe=e,_e=r=Ji(e.current,null),Se=i,ze=0,ai=null,Va=!1,Er=Ht(e,i),Rh=!1,Tr=si=Ch=Us=Ha=en=0,qn=jo=null,wh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Bt(l),p=1<<f;i|=e[f],l&=~p}return ca=i,Ql(),r}function B0(e,i){fe=null,B.H=Vo,i===mr||i===su?(i=Jg(),ze=3):i===zf?(i=Jg(),ze=4):ze=i===fh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,_e===null&&(en=1,yu(e,hi(i,e.current)))}function z0(){var e=ni.current;return e===null?!0:(Se&4194048)===Se?gi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===gi:!1}function F0(){var e=B.H;return B.H=Vo,e===null?Vo:e}function I0(){var e=B.A;return B.A=TT,e}function Uu(){en=4,Va||(Se&4194048)!==Se&&ni.current!==null||(Er=!0),(Ha&134217727)===0&&(Us&134217727)===0||Xe===null||Xa(Xe,Se,si,!1)}function Oh(e,i,r){var l=Le;Le|=2;var f=F0(),p=I0();(Xe!==e||Se!==i)&&(wu=null,Ar(e,i)),i=!1;var S=en;t:do try{if(ze!==0&&_e!==null){var A=_e,I=ai;switch(ze){case 8:Nh(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(i=!0);var $=ze;if(ze=0,ai=null,Rr(e,A,I,$),r&&Er){S=0;break t}break;default:$=ze,ze=0,ai=null,Rr(e,A,I,$)}}RT(),S=en;break}catch(pt){B0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ta=Ms=null,Le=l,B.H=f,B.A=p,_e===null&&(Xe=null,Se=0,Ql()),S}function RT(){for(;_e!==null;)V0(_e)}function CT(e,i){var r=Le;Le|=2;var l=F0(),f=I0();Xe!==e||Se!==i?(wu=null,Cu=x()+500,Ar(e,i)):Er=Ht(e,i);t:do try{if(ze!==0&&_e!==null){i=_e;var p=ai;e:switch(ze){case 1:ze=0,ai=null,Rr(e,i,p,1);break;case 2:case 9:if(Zg(p)){ze=0,ai=null,H0(i);break}i=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),ki(e)},p.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Zg(p)?(ze=0,ai=null,H0(i)):(ze=0,ai=null,Rr(e,i,p,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var A=_e;if(S?A_(S):A.stateNode.complete){ze=0,ai=null;var I=A.sibling;if(I!==null)_e=I;else{var $=A.return;$!==null?(_e=$,Lu($)):_e=null}break e}}ze=0,ai=null,Rr(e,i,p,5);break;case 6:ze=0,ai=null,Rr(e,i,p,6);break;case 8:Nh(),en=6;break t;default:throw Error(s(462))}}wT();break}catch(pt){B0(e,pt)}while(!0);return ta=Ms=null,B.H=l,B.A=f,Le=r,_e!==null?0:(Xe=null,Se=0,Ql(),en)}function wT(){for(;_e!==null&&!We();)V0(_e)}function V0(e){var i=c0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,i===null?Lu(e):_e=i}function H0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=a0(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=a0(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Kf(i);default:h0(r,i),i=_e=Ig(i,ca),i=c0(r,i,ca)}e.memoizedProps=e.pendingProps,i===null?Lu(e):_e=i}function Rr(e,i,r,l){ta=Ms=null,Kf(i),gr=null,Lo=0;var f=i.return;try{if(vT(e,f,i,r,Se)){en=1,yu(e,hi(r,e.current)),_e=null;return}}catch(p){if(f!==null)throw _e=f,p;en=1,yu(e,hi(r,e.current)),_e=null;return}i.flags&32768?(Te||l===1?e=!0:Er||(Se&536870912)!==0?e=!1:(Va=e=!0,(l===2||l===9||l===3||l===6)&&(l=ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),G0(i,e)):Lu(i)}function Lu(e){var i=e;do{if((i.flags&32768)!==0){G0(i,Va);return}e=i.return;var r=xT(i.alternate,i,ca);if(r!==null){_e=r;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);en===0&&(en=5)}function G0(e,i){do{var r=ST(e.alternate,e);if(r!==null){r.flags&=32767,_e=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){_e=e;return}_e=e=r}while(e!==null);en=6,_e=null}function k0(e,i,r,l,f,p,S,A,I){e.cancelPendingCommit=null;do Nu();while(_n!==0);if((Le&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(p=i.lanes|i.childLanes,p|=Mf,ci(e,r,p,S,A,I),e===Xe&&(_e=Xe=null,Se=0),br=i,ka=e,fa=r,Dh=p,Uh=f,L0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,NT(at,function(){return j0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=Y.p,Y.p=2,S=Le,Le|=4;try{MT(e,i,r)}finally{Le=S,Y.p=f,B.T=l}}_n=1,X0(),W0(),q0()}}function X0(){if(_n===1){_n=0;var e=ka,i=br,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Le;Le|=4;try{T0(i,e);var p=qh,S=Dg(e.containerInfo),A=p.focusedElem,I=p.selectionRange;if(S!==A&&A&&A.ownerDocument&&wg(A.ownerDocument.documentElement,A)){if(I!==null&&vf(A)){var $=I.start,pt=I.end;if(pt===void 0&&(pt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(pt,A.value.length);else{var gt=A.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var lt=et.getSelection(),kt=A.textContent.length,ne=Math.min(I.start,kt),He=I.end===void 0?ne:Math.min(I.end,kt);!lt.extend&&ne>He&&(S=He,He=ne,ne=S);var K=Cg(A,ne),X=Cg(A,He);if(K&&X&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var J=gt.createRange();J.setStart(K.node,K.offset),lt.removeAllRanges(),ne>He?(lt.addRange(J),lt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),lt.addRange(J))}}}}for(gt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Wu=!!Wh,qh=Wh=null}finally{Le=f,Y.p=l,B.T=r}}e.current=i,_n=2}}function W0(){if(_n===2){_n=0;var e=ka,i=br,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Le;Le|=4;try{y0(e,i.alternate,i)}finally{Le=f,Y.p=l,B.T=r}}_n=3}}function q0(){if(_n===4||_n===3){_n=0,L();var e=ka,i=br,r=fa,l=L0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,br=ka=null,Y0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ga=null),$s(r),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=Y.p,Y.p=2,B.T=null;try{for(var p=e.onRecoverableError,S=0;S<l.length;S++){var A=l[S];p(A.value,{componentStack:A.stack})}}finally{B.T=i,Y.p=f}}(fa&3)!==0&&Nu(),ki(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Lh?Ko++:(Ko=0,Lh=e):Ko=0,Zo(0)}}function Y0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Do(i)))}function Nu(){return X0(),W0(),q0(),j0()}function j0(){if(_n!==5)return!1;var e=ka,i=Dh;Dh=0;var r=$s(fa),l=B.T,f=Y.p;try{Y.p=32>r?32:r,B.T=null,r=Uh,Uh=null;var p=ka,S=fa;if(_n=0,br=ka=null,fa=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,w0(p.current),A0(p,p.current,S,r),Le=A,Zo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,p)}catch{}return!0}finally{Y.p=f,B.T=l,Y0(e,i)}}function K0(e,i,r){i=hi(r,i),i=ch(e.stateNode,i,2),e=Ba(e,i,2),e!==null&&(Bn(e,2),ki(e))}function Fe(e,i,r){if(e.tag===3)K0(e,e,r);else for(;i!==null;){if(i.tag===3){K0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ga===null||!Ga.has(l))){e=hi(r,e),r=Zv(2),l=Ba(i,r,2),l!==null&&(Qv(r,l,i,e),Bn(l,2),ki(l));break}}i=i.return}}function Ph(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new bT;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Rh=!0,f.add(r),e=DT.bind(null,e,i,r),i.then(e,e))}function DT(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(Se&r)===r&&(en===4||en===3&&(Se&62914560)===Se&&300>x()-Ru?(Le&2)===0&&Ar(e,0):Ch|=r,Tr===Se&&(Tr=0)),ki(e)}function Z0(e,i){i===0&&(i=Be()),e=ys(e,i),e!==null&&(Bn(e,i),ki(e))}function UT(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Z0(e,r)}function LT(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Z0(e,r)}function NT(e,i){return re(e,i)}var Ou=null,Cr=null,Bh=!1,Pu=!1,zh=!1,Wa=0;function ki(e){e!==Cr&&e.next===null&&(Cr===null?Ou=Cr=e:Cr=Cr.next=e),Pu=!0,Bh||(Bh=!0,PT())}function Zo(e,i){if(!zh&&Pu){zh=!0;do for(var r=!1,l=Ou;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-Bt(42|e)+1)-1,p&=f&~(S&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,t_(l,p))}else p=Se,p=_t(l,l===Xe?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ht(l,p)||(r=!0,t_(l,p));l=l.next}while(r);zh=!1}}function OT(){Q0()}function Q0(){Pu=Bh=!1;var e=0;Wa!==0&&WT()&&(e=Wa);for(var i=x(),r=null,l=Ou;l!==null;){var f=l.next,p=J0(l,i);p===0?(l.next=null,r===null?Ou=f:r.next=f,f===null&&(Cr=r)):(r=l,(e!==0||(p&3)!==0)&&(Pu=!0)),l=f}_n!==0&&_n!==5||Zo(e),Wa!==0&&(Wa=0)}function J0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-Bt(p),A=1<<S,I=f[S];I===-1?((A&r)===0||(A&l)!==0)&&(f[S]=oe(A,i)):I<=i&&(e.expiredLanes|=A),p&=~A}if(i=Xe,r=Se,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ye(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ht(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Ye(l),$s(r)){case 2:case 8:r=ft;break;case 32:r=at;break;case 268435456:r=At;break;default:r=at}return l=$0.bind(null,e),r=re(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Ye(l),e.callbackPriority=2,e.callbackNode=null,2}function $0(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Nu()&&e.callbackNode!==r)return null;var l=Se;return l=_t(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(O0(e,l,i),J0(e,x()),e.callbackNode!=null&&e.callbackNode===r?$0.bind(null,e):null)}function t_(e,i){if(Nu())return null;O0(e,i,!0)}function PT(){YT(function(){(Le&6)!==0?re(Q,OT):Q0()})}function Fh(){if(Wa===0){var e=dr;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Wa=e}return Wa}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function n_(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function BT(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var p=e_((f[Tn]||null).action),S=l.submitter;S&&(i=(i=S[Tn]||null)?e_(i.formAction):S.getAttribute("formAction"),i!==null&&(p=i,S=null));var A=new Yl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wa!==0){var I=S?n_(f,S):new FormData(f);ah(r,{pending:!0,data:I,method:f.method,action:p},null,I)}}else typeof p=="function"&&(A.preventDefault(),I=S?n_(f,S):new FormData(f),ah(r,{pending:!0,data:I,method:f.method,action:p},p,I))},currentTarget:f}]})}}for(var Ih=0;Ih<Sf.length;Ih++){var Vh=Sf[Ih],zT=Vh.toLowerCase(),FT=Vh[0].toUpperCase()+Vh.slice(1);Ri(zT,"on"+FT)}Ri(Ng,"onAnimationEnd"),Ri(Og,"onAnimationIteration"),Ri(Pg,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(tT,"onTransitionRun"),Ri(eT,"onTransitionStart"),Ri(nT,"onTransitionCancel"),Ri(Bg,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function i_(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=$;try{p(f)}catch(pt){Zl(pt)}f.currentTarget=null,p=I}else for(S=0;S<l.length;S++){if(A=l[S],I=A.instance,$=A.currentTarget,A=A.listener,I!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=$;try{p(f)}catch(pt){Zl(pt)}f.currentTarget=null,p=I}}}}function ye(e,i){var r=i[_o];r===void 0&&(r=i[_o]=new Set);var l=e+"__bubble";r.has(l)||(a_(i,e,2,!1),r.add(l))}function Hh(e,i,r){var l=0;i&&(l|=4),a_(r,e,l,i)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function Gh(e){if(!e[Bu]){e[Bu]=!0,Lt.forEach(function(r){r!=="selectionchange"&&(IT.has(r)||Hh(r,!1,e),Hh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Bu]||(i[Bu]=!0,Hh("selectionchange",!1,i))}}function a_(e,i,r,l){switch(N_(i)){case 2:var f=db;break;case 8:f=pb;break;default:f=id}r=f.bind(null,i,r,e),f=void 0,!lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function kh(e,i,r,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=j(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){l=p=S;continue t}A=A.parentNode}}l=l.return}ug(function(){var $=p,pt=rf(r),gt=[];t:{var et=zg.get(e);if(et!==void 0){var lt=Yl,kt=e;switch(e){case"keypress":if(Wl(r)===0)break t;case"keydown":case"keyup":lt=LE;break;case"focusin":kt="focus",lt=hf;break;case"focusout":kt="blur",lt=hf;break;case"beforeblur":case"afterblur":lt=hf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=xE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=PE;break;case Ng:case Og:case Pg:lt=EE;break;case Bg:lt=zE;break;case"scroll":case"scrollend":lt=_E;break;case"wheel":lt=IE;break;case"copy":case"cut":case"paste":lt=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=pg;break;case"toggle":case"beforetoggle":lt=HE}var ne=(i&4)!==0,He=!ne&&(e==="scroll"||e==="scrollend"),K=ne?et!==null?et+"Capture":null:et;ne=[];for(var X=$,J;X!==null;){var mt=X;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=yo(X,K),mt!=null&&ne.push(Jo(X,mt,J))),He)break;X=X.return}0<ne.length&&(et=new lt(et,kt,null,r,pt),gt.push({event:et,listeners:ne}))}}if((i&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",et&&r!==sf&&(kt=r.relatedTarget||r.fromElement)&&(j(kt)||kt[Ca]))break t;if((lt||et)&&(et=pt.window===pt?pt:(et=pt.ownerDocument)?et.defaultView||et.parentWindow:window,lt?(kt=r.relatedTarget||r.toElement,lt=$,kt=kt?j(kt):null,kt!==null&&(He=u(kt),ne=kt.tag,kt!==He||ne!==5&&ne!==27&&ne!==6)&&(kt=null)):(lt=null,kt=$),lt!==kt)){if(ne=hg,mt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=pg,mt="onPointerLeave",K="onPointerEnter",X="pointer"),He=lt==null?et:ot(lt),J=kt==null?et:ot(kt),et=new ne(mt,X+"leave",lt,r,pt),et.target=He,et.relatedTarget=J,mt=null,j(pt)===$&&(ne=new ne(K,X+"enter",kt,r,pt),ne.target=J,ne.relatedTarget=He,mt=ne),He=mt,lt&&kt)e:{for(ne=VT,K=lt,X=kt,J=0,mt=K;mt;mt=ne(mt))J++;mt=0;for(var te=X;te;te=ne(te))mt++;for(;0<J-mt;)K=ne(K),J--;for(;0<mt-J;)X=ne(X),mt--;for(;J--;){if(K===X||X!==null&&K===X.alternate){ne=K;break e}K=ne(K),X=ne(X)}ne=null}else ne=null;lt!==null&&s_(gt,et,lt,ne,!1),kt!==null&&He!==null&&s_(gt,He,kt,ne,!0)}}t:{if(et=$?ot($):window,lt=et.nodeName&&et.nodeName.toLowerCase(),lt==="select"||lt==="input"&&et.type==="file")var we=Mg;else if(xg(et))if(Eg)we=QE;else{we=KE;var Kt=jE}else lt=et.nodeName,!lt||lt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&af($.elementType)&&(we=Mg):we=ZE;if(we&&(we=we(e,$))){Sg(gt,we,r,pt);break t}Kt&&Kt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&vn(et,"number",et.value)}switch(Kt=$?ot($):window,e){case"focusin":(xg(Kt)||Kt.contentEditable==="true")&&(sr=Kt,_f=$,Ro=null);break;case"focusout":Ro=_f=sr=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Ug(gt,r,pt);break;case"selectionchange":if($E)break;case"keydown":case"keyup":Ug(gt,r,pt)}var de;if(pf)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else ar?_g(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(mg&&r.locale!=="ko"&&(ar||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ar&&(de=cg()):(wa=pt,uf="value"in wa?wa.value:wa.textContent,ar=!0)),Kt=zu($,Me),0<Kt.length&&(Me=new dg(Me,e,null,r,pt),gt.push({event:Me,listeners:Kt}),de?Me.data=de:(de=yg(r),de!==null&&(Me.data=de)))),(de=kE?XE(e,r):WE(e,r))&&(Me=zu($,"onBeforeInput"),0<Me.length&&(Kt=new dg("onBeforeInput","beforeinput",null,r,pt),gt.push({event:Kt,listeners:Me}),Kt.data=de)),BT(gt,e,$,r,pt)}i_(gt,i)})}function Jo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function zu(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=yo(e,r),f!=null&&l.unshift(Jo(e,f,p)),f=yo(e,i),f!=null&&l.push(Jo(e,f,p))),e.tag===3)return l;e=e.return}return[]}function VT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,i,r,l,f){for(var p=i._reactName,S=[];r!==null&&r!==l;){var A=r,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||$===null||(I=$,f?($=yo(r,p),$!=null&&S.unshift(Jo(r,$,I))):f||($=yo(r,p),$!=null&&S.push(Jo(r,$,I)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var HT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace(HT,`
`).replace(GT,"")}function o_(e,i){return i=r_(i),r_(e)===i}function Ve(e,i,r,l,f,p){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||er(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&er(e,""+l);break;case"className":Pe(e,"class",l);break;case"tabIndex":Pe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,r,l);break;case"style":og(e,l,p);break;case"data":if(i!=="object"){Pe(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=kl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=kl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Zi);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=kl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ke(e,"popover",l);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ke(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=gE.get(r)||r,ke(e,r,l))}}function Xh(e,i,r,l,f,p){switch(r){case"style":og(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?er(e,l):(typeof l=="number"||typeof l=="bigint")&&er(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),p=e[Tn]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ke(e,r,l)}}}function wn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,f=!1,p;for(p in r)if(r.hasOwnProperty(p)){var S=r[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ve(e,i,p,S,r,null)}}f&&Ve(e,i,"srcSet",r.srcSet,r,null),l&&Ve(e,i,"src",r.src,r,null);return;case"input":ye("invalid",e);var A=p=S=f=null,I=null,$=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":S=pt;break;case"checked":I=pt;break;case"defaultChecked":$=pt;break;case"value":p=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,i));break;default:Ve(e,i,l,pt,r,null)}}zn(e,p,A,I,$,S,f,!1);return;case"select":ye("invalid",e),l=S=p=null;for(f in r)if(r.hasOwnProperty(f)&&(A=r[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Ve(e,i,f,A,r,null)}i=p,r=S,e.multiple=!!l,i!=null?sn(e,!!l,i,!1):r!=null&&sn(e,!!l,r,!0);return;case"textarea":ye("invalid",e),p=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,i,S,A,r,null)}Ii(e,l,f,p);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(l=r[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,I,l,r,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<Qo.length;l++)ye(Qo[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ve(e,i,$,l,r,null)}return;default:if(af(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&Xh(e,i,pt,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&Ve(e,i,A,l,r,null))}function kT(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,A=null,I=null,$=null,pt=null;for(lt in r){var gt=r[lt];if(r.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=gt;default:l.hasOwnProperty(lt)||Ve(e,i,lt,null,l,gt)}}for(var et in l){var lt=l[et];if(gt=r[et],l.hasOwnProperty(et)&&(lt!=null||gt!=null))switch(et){case"type":p=lt;break;case"name":f=lt;break;case"checked":$=lt;break;case"defaultChecked":pt=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,i));break;default:lt!==gt&&Ve(e,i,et,lt,l,gt)}}Un(e,S,A,I,$,pt,p,f);return;case"select":lt=S=A=et=null;for(p in r)if(I=r[p],r.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":lt=I;default:l.hasOwnProperty(p)||Ve(e,i,p,null,l,I)}for(f in l)if(p=l[f],I=r[f],l.hasOwnProperty(f)&&(p!=null||I!=null))switch(f){case"value":et=p;break;case"defaultValue":A=p;break;case"multiple":S=p;default:p!==I&&Ve(e,i,f,p,l,I)}i=A,r=S,l=lt,et!=null?sn(e,!!r,et,!1):!!l!=!!r&&(i!=null?sn(e,!!r,i,!0):sn(e,!!r,r?[]:"",!1));return;case"textarea":lt=et=null;for(A in r)if(f=r[A],r.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,i,A,null,l,f)}for(S in l)if(f=l[S],p=r[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":et=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&Ve(e,i,S,f,l,p)}tr(e,et,lt);return;case"option":for(var kt in r)if(et=r[kt],r.hasOwnProperty(kt)&&et!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,i,kt,null,l,et)}for(I in l)if(et=l[I],lt=r[I],l.hasOwnProperty(I)&&et!==lt&&(et!=null||lt!=null))switch(I){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ve(e,i,I,et,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)et=r[ne],r.hasOwnProperty(ne)&&et!=null&&!l.hasOwnProperty(ne)&&Ve(e,i,ne,null,l,et);for($ in l)if(et=l[$],lt=r[$],l.hasOwnProperty($)&&et!==lt&&(et!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,i));break;default:Ve(e,i,$,et,l,lt)}return;default:if(af(i)){for(var He in r)et=r[He],r.hasOwnProperty(He)&&et!==void 0&&!l.hasOwnProperty(He)&&Xh(e,i,He,void 0,l,et);for(pt in l)et=l[pt],lt=r[pt],!l.hasOwnProperty(pt)||et===lt||et===void 0&&lt===void 0||Xh(e,i,pt,et,l,lt);return}}for(var K in r)et=r[K],r.hasOwnProperty(K)&&et!=null&&!l.hasOwnProperty(K)&&Ve(e,i,K,null,l,et);for(gt in l)et=l[gt],lt=r[gt],!l.hasOwnProperty(gt)||et===lt||et==null&&lt==null||Ve(e,i,gt,et,l,lt)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],p=f.transferSize,S=f.initiatorType,A=f.duration;if(p&&A&&l_(S)){for(S=0,A=f.responseEnd,l+=1;l<r.length;l++){var I=r[l],$=I.startTime;if($>A)break;var pt=I.transferSize,gt=I.initiatorType;pt&&l_(gt)&&(I=I.responseEnd,S+=pt*(I<A?1:(A-$)/(I-$)))}if(--l,i+=8*(p+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wh=null,qh=null;function Fu(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Yh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jh=null;function WT(){var e=window.event;return e&&e.type==="popstate"?e===jh?!1:(jh=e,!0):(jh=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,qT=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,YT=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(e){return h_.resolve(null).then(e).catch(jT)}:f_;function jT(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function d_(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),Lr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")$o(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,$o(r);for(var p=r.firstChild;p;){var S=p.nextSibling,A=p.nodeName;p[ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=S}}else r==="body"&&$o(e.ownerDocument.body);r=f}while(r);Lr(i)}function p_(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Kh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Kh(r),R(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function KT(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ps])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function ZT(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=vi(e.nextSibling),e===null))return null;return e}function m_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=vi(e.nextSibling),e===null))return null;return e}function Zh(e){return e.data==="$?"||e.data==="$~"}function Qh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QT(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Jh=null;function g_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return vi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function __(e,i,r){switch(i=Fu(r),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function $o(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);R(e)}var _i=new Map,y_=new Set;function Iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=Y.d;Y.d={f:JT,r:$T,D:tb,C:eb,L:nb,m:ib,X:sb,S:ab,M:rb};function JT(){var e=ha.f(),i=Du();return e||i}function $T(e){var i=st(e);i!==null&&i.tag===5&&i.type==="form"?Bv(i):ha.r(e)}var wr=typeof document>"u"?null:document;function x_(e,i,r){var l=wr;if(l&&typeof i=="string"&&i){var f=xe(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),y_.has(f)||(y_.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),wn(i,"link",e),yt(i),l.head.appendChild(i)))}}function tb(e){ha.D(e),x_("dns-prefetch",e,null)}function eb(e,i){ha.C(e,i),x_("preconnect",e,i)}function nb(e,i,r){ha.L(e,i,r);var l=wr;if(l&&e&&i){var f='link[rel="preload"][as="'+xe(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+xe(r.imageSizes)+'"]')):f+='[href="'+xe(e)+'"]';var p=f;switch(i){case"style":p=Dr(e);break;case"script":p=Ur(e)}_i.has(p)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),_i.set(p,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(tl(p))||i==="script"&&l.querySelector(el(p))||(i=l.createElement("link"),wn(i,"link",e),yt(i),l.head.appendChild(i)))}}function ib(e,i){ha.m(e,i);var r=wr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+xe(l)+'"][href="'+xe(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ur(e)}if(!_i.has(p)&&(e=v({rel:"modulepreload",href:e},i),_i.set(p,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(el(p)))return}l=r.createElement("link"),wn(l,"link",e),yt(l),r.head.appendChild(l)}}}function ab(e,i,r){ha.S(e,i,r);var l=wr;if(l&&e){var f=Z(l).hoistableStyles,p=Dr(e);i=i||"default";var S=f.get(p);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(tl(p)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=_i.get(p))&&$h(e,r);var I=S=l.createElement("link");yt(I),wn(I,"link",e),I._p=new Promise(function($,pt){I.onload=$,I.onerror=pt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Vu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(p,S)}}}function sb(e,i){ha.X(e,i);var r=wr;if(r&&e){var l=Z(r).hoistableScripts,f=Ur(e),p=l.get(f);p||(p=r.querySelector(el(f)),p||(e=v({src:e,async:!0},i),(i=_i.get(f))&&td(e,i),p=r.createElement("script"),yt(p),wn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function rb(e,i){ha.M(e,i);var r=wr;if(r&&e){var l=Z(r).hoistableScripts,f=Ur(e),p=l.get(f);p||(p=r.querySelector(el(f)),p||(e=v({src:e,async:!0,type:"module"},i),(i=_i.get(f))&&td(e,i),p=r.createElement("script"),yt(p),wn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function S_(e,i,r,l){var f=(f=it.current)?Iu(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Dr(r.href),r=Z(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Dr(r.href);var p=Z(f).hoistableStyles,S=p.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=f.querySelector(tl(e)))&&!p._p&&(S.instance=p,S.state.loading=5),_i.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},_i.set(e,r),p||ob(f,e,r,S.state))),i&&l===null)throw Error(s(528,""));return S}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ur(r),r=Z(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Dr(e){return'href="'+xe(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function M_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ob(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",r),yt(i),e.head.appendChild(i))}function Ur(e){return'[src="'+xe(e)+'"]'}function el(e){return"script[async]"+e}function E_(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+xe(r.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),yt(l),wn(l,"style",f),Vu(l,r.precedence,e),i.instance=l;case"stylesheet":f=Dr(r.href);var p=e.querySelector(tl(f));if(p)return i.state.loading|=4,i.instance=p,yt(p),p;l=M_(r),(f=_i.get(f))&&$h(l,f),p=(e.ownerDocument||e).createElement("link"),yt(p);var S=p;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),wn(p,"link",l),i.state.loading|=4,Vu(p,r.precedence,e),i.instance=p;case"script":return p=Ur(r.src),(f=e.querySelector(el(p)))?(i.instance=f,yt(f),f):(l=r,(f=_i.get(p))&&(l=v({},r),td(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),yt(f),wn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Vu(l,r.precedence,e));return i.instance}function Vu(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function $h(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Hu=null;function T_(e,i,r){if(Hu===null){var l=new Map,f=Hu=new Map;f.set(r,l)}else f=Hu,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var p=r[f];if(!(p[ps]||p[un]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(i)||"";S=e+S;var A=l.get(S);A?A.push(p):l.set(S,[p])}}return l}function b_(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function lb(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function A_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ub(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Dr(l.href),p=i.querySelector(tl(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Gu.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=p,yt(p);return}p=i.ownerDocument||i,l=M_(l),(f=_i.get(f))&&$h(l,f),p=p.createElement("link"),yt(p);var S=p;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),wn(p,"link",l),r.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Gu.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var ed=0;function cb(e,i){return e.stylesheets&&e.count===0&&Xu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Xu(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+i);0<e.imgBytes&&ed===0&&(ed=62500*XT());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xu(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>ed?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Gu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ku=null;function Xu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ku=new Map,i.forEach(fb,e),ku=null,Gu.call(e))}function fb(e,i){if(!(i.state.loading&4)){var r=ku.get(e);if(r)var l=r.get(null);else{r=new Map,ku.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),p=r.get(S)||l,p===l&&r.set(null,f),r.set(S,f),this.count++,l=Gu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var nl={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function hb(e,i,r,l,f,p,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function R_(e,i,r,l,f,p,S,A,I,$,pt,gt){return e=new hb(e,i,r,S,I,$,pt,gt,A),i=1,p===!0&&(i|=24),p=ei(3,null,null,i),e.current=p,p.stateNode=e,i=Of(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:i},Ff(p),e}function C_(e){return e?(e=lr,e):lr}function w_(e,i,r,l,f,p){f=C_(f),l.context===null?l.context=f:l.pendingContext=f,l=Pa(i),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=Ba(e,l,i),r!==null&&(Yn(r,e,i),Oo(r,e,i))}function D_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function nd(e,i){D_(e,i),(e=e.alternate)&&D_(e,i)}function U_(e){if(e.tag===13||e.tag===31){var i=ys(e,67108864);i!==null&&Yn(i,e,67108864),nd(e,67108864)}}function L_(e){if(e.tag===13||e.tag===31){var i=ri();i=Js(i);var r=ys(e,i);r!==null&&Yn(r,e,i),nd(e,i)}}var Wu=!0;function db(e,i,r,l){var f=B.T;B.T=null;var p=Y.p;try{Y.p=2,id(e,i,r,l)}finally{Y.p=p,B.T=f}}function pb(e,i,r,l){var f=B.T;B.T=null;var p=Y.p;try{Y.p=8,id(e,i,r,l)}finally{Y.p=p,B.T=f}}function id(e,i,r,l){if(Wu){var f=ad(l);if(f===null)kh(e,i,l,qu,r),O_(e,l);else if(gb(f,e,i,r,l))l.stopPropagation();else if(O_(e,l),i&4&&-1<mb.indexOf(e)){for(;f!==null;){var p=st(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Mt(p.pendingLanes);if(S!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-Bt(S);A.entanglements[1]|=I,S&=~I}ki(p),(Le&6)===0&&(Cu=x()+500,Zo(0))}}break;case 31:case 13:A=ys(p,2),A!==null&&Yn(A,p,2),Du(),nd(p,2)}if(p=ad(l),p===null&&kh(e,i,l,qu,r),p===f)break;f=p}f!==null&&l.stopPropagation()}else kh(e,i,l,null,r)}}function ad(e){return e=rf(e),sd(e)}var qu=null;function sd(e){if(qu=null,e=j(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return qu=e,null}function N_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Q:return 2;case ft:return 8;case at:case Pt:return 32;case At:return 268435456;default:return 32}default:return 32}}var rd=!1,Ya=null,ja=null,Ka=null,il=new Map,al=new Map,Za=[],mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O_(e,i){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":il.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(i.pointerId)}}function sl(e,i,r,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=st(i),i!==null&&U_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function gb(e,i,r,l,f){switch(i){case"focusin":return Ya=sl(Ya,e,i,r,l,f),!0;case"dragenter":return ja=sl(ja,e,i,r,l,f),!0;case"mouseover":return Ka=sl(Ka,e,i,r,l,f),!0;case"pointerover":var p=f.pointerId;return il.set(p,sl(il.get(p)||null,e,i,r,l,f)),!0;case"gotpointercapture":return p=f.pointerId,al.set(p,sl(al.get(p)||null,e,i,r,l,f)),!0}return!1}function P_(e){var i=j(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,vo(e.priority,function(){L_(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,vo(e.priority,function(){L_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=ad(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);sf=l,r.target.dispatchEvent(l),sf=null}else return i=st(r),i!==null&&U_(i),e.blockedOn=r,!1;i.shift()}return!0}function B_(e,i,r){Yu(e)&&r.delete(i)}function vb(){rd=!1,Ya!==null&&Yu(Ya)&&(Ya=null),ja!==null&&Yu(ja)&&(ja=null),Ka!==null&&Yu(Ka)&&(Ka=null),il.forEach(B_),al.forEach(B_)}function ju(e,i){e.blockedOn===i&&(e.blockedOn=null,rd||(rd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vb)))}var Ku=null;function z_(e){Ku!==e&&(Ku=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ku===e&&(Ku=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(sd(l||r)===null)continue;break}var p=st(r);p!==null&&(e.splice(i,3),i-=3,ah(p,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Lr(e){function i(I){return ju(I,e)}Ya!==null&&ju(Ya,e),ja!==null&&ju(ja,e),Ka!==null&&ju(Ka,e),il.forEach(i),al.forEach(i);for(var r=0;r<Za.length;r++){var l=Za[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(r=Za[0],r.blockedOn===null);)P_(r),r.blockedOn===null&&Za.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],p=r[l+1],S=f[Tn]||null;if(typeof p=="function")S||z_(r);else if(S){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Tn]||null)A=S.formAction;else if(sd(f)!==null)continue}else A=S.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),z_(r)}}}function F_(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function od(e){this._internalRoot=e}Zu.prototype.render=od.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,l=ri();w_(r,l,e,i,null,null)},Zu.prototype.unmount=od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;w_(e.current,2,null,e,null,null),Du(),i[Ca]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var i=ds();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Za.length&&i!==0&&i<Za[r].priority;r++);Za.splice(r,0,e),r===0&&P_(e)}};var I_=t.version;if(I_!=="19.2.0")throw Error(s(527,I_,"19.2.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var _b={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Et=Qu.inject(_b),Rt=Qu}catch{}}return ol.createRoot=function(e,i){if(!o(e))throw Error(s(299));var r=!1,l="",f=qv,p=Yv,S=jv;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=R_(e,1,!1,null,null,r,l,null,f,p,S,F_),e[Ca]=i.current,Gh(e),new od(i)},ol.hydrateRoot=function(e,i,r){if(!o(e))throw Error(s(299));var l=!1,f="",p=qv,S=Yv,A=jv,I=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),i=R_(e,1,!0,i,r??null,l,f,I,p,S,A,F_),i.context=C_(null),r=i.current,l=ri(),l=Js(l),f=Pa(l),f.callback=null,Ba(r,f,l),r=l,i.current.lanes=r,Bn(i,r),ki(i),e[Ca]=i.current,Gh(e),new Zu(i)},ol.version="19.2.0",ol}var K_;function Cb(){if(K_)return cd.exports;K_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),cd.exports=Rb(),cd.exports}var wb=Cb();const oS=Qt.createContext({});function Db(a){const t=Qt.useRef(null);return t.current===null&&(t.current=a()),t.current}const ym=typeof window<"u",Ub=ym?Qt.useLayoutEffect:Qt.useEffect,xm=Qt.createContext(null);function Sm(a,t){a.indexOf(t)===-1&&a.push(t)}function Mm(a,t){const n=a.indexOf(t);n>-1&&a.splice(n,1)}const Ma=(a,t,n)=>n>t?t:n<a?a:n;let Em=()=>{};const Ea={},lS=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function uS(a){return typeof a=="object"&&a!==null}const cS=a=>/^0[^.\s]+$/u.test(a);function Tm(a){let t;return()=>(t===void 0&&(t=a()),t)}const Ai=a=>a,Lb=(a,t)=>n=>t(a(n)),Nl=(...a)=>a.reduce(Lb),Ml=(a,t,n)=>{const s=t-a;return s===0?1:(n-a)/s};class bm{constructor(){this.subscriptions=[]}add(t){return Sm(this.subscriptions,t),()=>Mm(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let u=0;u<o;u++){const c=this.subscriptions[u];c&&c(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yi=a=>a*1e3,Ei=a=>a/1e3;function fS(a,t){return t?a*(1e3/t):0}const hS=(a,t,n)=>(((1-3*n+3*t)*a+(3*n-6*t))*a+3*t)*a,Nb=1e-7,Ob=12;function Pb(a,t,n,s,o){let u,c,h=0;do c=t+(n-t)/2,u=hS(c,s,o)-a,u>0?n=c:t=c;while(Math.abs(u)>Nb&&++h<Ob);return c}function Ol(a,t,n,s){if(a===t&&n===s)return Ai;const o=u=>Pb(u,0,1,a,n);return u=>u===0||u===1?u:hS(o(u),t,s)}const dS=a=>t=>t<=.5?a(2*t)/2:(2-a(2*(1-t)))/2,pS=a=>t=>1-a(1-t),mS=Ol(.33,1.53,.69,.99),Am=pS(mS),gS=dS(Am),vS=a=>(a*=2)<1?.5*Am(a):.5*(2-Math.pow(2,-10*(a-1))),Rm=a=>1-Math.sin(Math.acos(a)),_S=pS(Rm),yS=dS(Rm),Bb=Ol(.42,0,1,1),zb=Ol(0,0,.58,1),xS=Ol(.42,0,.58,1),Fb=a=>Array.isArray(a)&&typeof a[0]!="number",SS=a=>Array.isArray(a)&&typeof a[0]=="number",Ib={linear:Ai,easeIn:Bb,easeInOut:xS,easeOut:zb,circIn:Rm,circInOut:yS,circOut:_S,backIn:Am,backInOut:gS,backOut:mS,anticipate:vS},Vb=a=>typeof a=="string",Z_=a=>{if(SS(a)){Em(a.length===4);const[t,n,s,o]=a;return Ol(t,n,s,o)}else if(Vb(a))return Ib[a];return a},Ju=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Hb(a,t){let n=new Set,s=new Set,o=!1,u=!1;const c=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(g){c.has(g)&&(d.schedule(g),a()),g(h)}const d={schedule:(g,v=!1,_=!1)=>{const T=_&&o?n:s;return v&&c.add(g),T.has(g)||T.add(g),g},cancel:g=>{s.delete(g),c.delete(g)},process:g=>{if(h=g,o){u=!0;return}o=!0,[n,s]=[s,n],n.forEach(m),n.clear(),o=!1,u&&(u=!1,d.process(g))}};return d}const Gb=40;function MS(a,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},u=()=>n=!0,c=Ju.reduce((U,C)=>(U[C]=Hb(u),U),{}),{setup:h,read:m,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:M,postRender:T}=c,b=()=>{const U=Ea.useManualTiming?o.timestamp:performance.now();n=!1,Ea.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(U-o.timestamp,Gb),1)),o.timestamp=U,o.isProcessing=!0,h.process(o),m.process(o),d.process(o),g.process(o),v.process(o),_.process(o),M.process(o),T.process(o),o.isProcessing=!1,n&&t&&(s=!1,a(b))},E=()=>{n=!0,s=!0,o.isProcessing||a(b)};return{schedule:Ju.reduce((U,C)=>{const z=c[C];return U[C]=(F,P=!1,k=!1)=>(n||E(),z.schedule(F,P,k)),U},{}),cancel:U=>{for(let C=0;C<Ju.length;C++)c[Ju[C]].cancel(U)},state:o,steps:c}}const{schedule:Qe,cancel:ls,state:Dn,steps:pd}=MS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ai,!0);let Cc;function kb(){Cc=void 0}const Kn={now:()=>(Cc===void 0&&Kn.set(Dn.isProcessing||Ea.useManualTiming?Dn.timestamp:performance.now()),Cc),set:a=>{Cc=a,queueMicrotask(kb)}},ES=a=>t=>typeof t=="string"&&t.startsWith(a),Cm=ES("--"),Xb=ES("var(--"),wm=a=>Xb(a)?Wb.test(a.split("/*")[0].trim()):!1,Wb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,uo={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},El={...uo,transform:a=>Ma(0,1,a)},$u={...uo,default:1},vl=a=>Math.round(a*1e5)/1e5,Dm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qb(a){return a==null}const Yb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Um=(a,t)=>n=>!!(typeof n=="string"&&Yb.test(n)&&n.startsWith(a)||t&&!qb(n)&&Object.prototype.hasOwnProperty.call(n,t)),TS=(a,t,n)=>s=>{if(typeof s!="string")return s;const[o,u,c,h]=s.match(Dm);return{[a]:parseFloat(o),[t]:parseFloat(u),[n]:parseFloat(c),alpha:h!==void 0?parseFloat(h):1}},jb=a=>Ma(0,255,a),md={...uo,transform:a=>Math.round(jb(a))},Xs={test:Um("rgb","red"),parse:TS("red","green","blue"),transform:({red:a,green:t,blue:n,alpha:s=1})=>"rgba("+md.transform(a)+", "+md.transform(t)+", "+md.transform(n)+", "+vl(El.transform(s))+")"};function Kb(a){let t="",n="",s="",o="";return a.length>5?(t=a.substring(1,3),n=a.substring(3,5),s=a.substring(5,7),o=a.substring(7,9)):(t=a.substring(1,2),n=a.substring(2,3),s=a.substring(3,4),o=a.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const op={test:Um("#"),parse:Kb,transform:Xs.transform},Pl=a=>({test:t=>typeof t=="string"&&t.endsWith(a)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${a}`}),as=Pl("deg"),ji=Pl("%"),se=Pl("px"),Zb=Pl("vh"),Qb=Pl("vw"),Q_={...ji,parse:a=>ji.parse(a)/100,transform:a=>ji.transform(a*100)},Yr={test:Um("hsl","hue"),parse:TS("hue","saturation","lightness"),transform:({hue:a,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(a)+", "+ji.transform(vl(t))+", "+ji.transform(vl(n))+", "+vl(El.transform(s))+")"},mn={test:a=>Xs.test(a)||op.test(a)||Yr.test(a),parse:a=>Xs.test(a)?Xs.parse(a):Yr.test(a)?Yr.parse(a):op.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Xs.transform(a):Yr.transform(a),getAnimatableNone:a=>{const t=mn.parse(a);return t.alpha=0,mn.transform(t)}},Jb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function $b(a){return isNaN(a)&&typeof a=="string"&&(a.match(Dm)?.length||0)+(a.match(Jb)?.length||0)>0}const bS="number",AS="color",tA="var",eA="var(",J_="${}",nA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tl(a){const t=a.toString(),n=[],s={color:[],number:[],var:[]},o=[];let u=0;const h=t.replace(nA,m=>(mn.test(m)?(s.color.push(u),o.push(AS),n.push(mn.parse(m))):m.startsWith(eA)?(s.var.push(u),o.push(tA),n.push(m)):(s.number.push(u),o.push(bS),n.push(parseFloat(m))),++u,J_)).split(J_);return{values:n,split:h,indexes:s,types:o}}function RS(a){return Tl(a).values}function CS(a){const{split:t,types:n}=Tl(a),s=t.length;return o=>{let u="";for(let c=0;c<s;c++)if(u+=t[c],o[c]!==void 0){const h=n[c];h===bS?u+=vl(o[c]):h===AS?u+=mn.transform(o[c]):u+=o[c]}return u}}const iA=a=>typeof a=="number"?0:mn.test(a)?mn.getAnimatableNone(a):a;function aA(a){const t=RS(a);return CS(a)(t.map(iA))}const us={test:$b,parse:RS,createTransformer:CS,getAnimatableNone:aA};function gd(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*(2/3-n)*6:a}function sA({hue:a,saturation:t,lightness:n,alpha:s}){a/=360,t/=100,n/=100;let o=0,u=0,c=0;if(!t)o=u=c=n;else{const h=n<.5?n*(1+t):n+t-n*t,m=2*n-h;o=gd(m,h,a+1/3),u=gd(m,h,a),c=gd(m,h,a-1/3)}return{red:Math.round(o*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:s}}function zc(a,t){return n=>n>0?t:a}const Je=(a,t,n)=>a+(t-a)*n,vd=(a,t,n)=>{const s=a*a,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},rA=[op,Xs,Yr],oA=a=>rA.find(t=>t.test(a));function $_(a){const t=oA(a);if(!t)return!1;let n=t.parse(a);return t===Yr&&(n=sA(n)),n}const ty=(a,t)=>{const n=$_(a),s=$_(t);if(!n||!s)return zc(a,t);const o={...n};return u=>(o.red=vd(n.red,s.red,u),o.green=vd(n.green,s.green,u),o.blue=vd(n.blue,s.blue,u),o.alpha=Je(n.alpha,s.alpha,u),Xs.transform(o))},lp=new Set(["none","hidden"]);function lA(a,t){return lp.has(a)?n=>n<=0?a:t:n=>n>=1?t:a}function uA(a,t){return n=>Je(a,t,n)}function Lm(a){return typeof a=="number"?uA:typeof a=="string"?wm(a)?zc:mn.test(a)?ty:hA:Array.isArray(a)?wS:typeof a=="object"?mn.test(a)?ty:cA:zc}function wS(a,t){const n=[...a],s=n.length,o=a.map((u,c)=>Lm(u)(u,t[c]));return u=>{for(let c=0;c<s;c++)n[c]=o[c](u);return n}}function cA(a,t){const n={...a,...t},s={};for(const o in n)a[o]!==void 0&&t[o]!==void 0&&(s[o]=Lm(a[o])(a[o],t[o]));return o=>{for(const u in s)n[u]=s[u](o);return n}}function fA(a,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const u=t.types[o],c=a.indexes[u][s[u]],h=a.values[c]??0;n[o]=h,s[u]++}return n}const hA=(a,t)=>{const n=us.createTransformer(t),s=Tl(a),o=Tl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?lp.has(a)&&!o.values.length||lp.has(t)&&!s.values.length?lA(a,t):Nl(wS(fA(s,o),o.values),n):zc(a,t)};function DS(a,t,n){return typeof a=="number"&&typeof t=="number"&&typeof n=="number"?Je(a,t,n):Lm(a)(a,t)}const dA=a=>{const t=({timestamp:n})=>a(n);return{start:(n=!0)=>Qe.update(t,n),stop:()=>ls(t),now:()=>Dn.isProcessing?Dn.timestamp:Kn.now()}},US=(a,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let u=0;u<o;u++)s+=Math.round(a(u/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Fc=2e4;function Nm(a){let t=0;const n=50;let s=a.next(t);for(;!s.done&&t<Fc;)t+=n,s=a.next(t);return t>=Fc?1/0:t}function pA(a,t=100,n){const s=n({...a,keyframes:[0,t]}),o=Math.min(Nm(s),Fc);return{type:"keyframes",ease:u=>s.next(o*u).value/t,duration:Ei(o)}}const mA=5;function LS(a,t,n){const s=Math.max(t-mA,0);return fS(n-a(s),t-s)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_d=.001;function gA({duration:a=nn.duration,bounce:t=nn.bounce,velocity:n=nn.velocity,mass:s=nn.mass}){let o,u,c=1-t;c=Ma(nn.minDamping,nn.maxDamping,c),a=Ma(nn.minDuration,nn.maxDuration,Ei(a)),c<1?(o=d=>{const g=d*c,v=g*a,_=g-n,M=up(d,c),T=Math.exp(-v);return _d-_/M*T},u=d=>{const v=d*c*a,_=v*n+n,M=Math.pow(c,2)*Math.pow(d,2)*a,T=Math.exp(-v),b=up(Math.pow(d,2),c);return(-o(d)+_d>0?-1:1)*((_-M)*T)/b}):(o=d=>{const g=Math.exp(-d*a),v=(d-n)*a+1;return-_d+g*v},u=d=>{const g=Math.exp(-d*a),v=(n-d)*(a*a);return g*v});const h=5/a,m=_A(o,u,h);if(a=Yi(a),isNaN(m))return{stiffness:nn.stiffness,damping:nn.damping,duration:a};{const d=Math.pow(m,2)*s;return{stiffness:d,damping:c*2*Math.sqrt(s*d),duration:a}}}const vA=12;function _A(a,t,n){let s=n;for(let o=1;o<vA;o++)s=s-a(s)/t(s);return s}function up(a,t){return a*Math.sqrt(1-t*t)}const yA=["duration","bounce"],xA=["stiffness","damping","mass"];function ey(a,t){return t.some(n=>a[n]!==void 0)}function SA(a){let t={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...a};if(!ey(a,xA)&&ey(a,yA))if(a.visualDuration){const n=a.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,u=2*Ma(.05,1,1-(a.bounce||0))*Math.sqrt(o);t={...t,mass:nn.mass,stiffness:o,damping:u}}else{const n=gA(a);t={...t,...n,mass:nn.mass},t.isResolvedFromDuration=!0}return t}function Ic(a=nn.visualDuration,t=nn.bounce){const n=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:t}:a;let{restSpeed:s,restDelta:o}=n;const u=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],h={done:!1,value:u},{stiffness:m,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:M}=SA({...n,velocity:-Ei(n.velocity||0)}),T=_||0,b=d/(2*Math.sqrt(m*g)),E=c-u,y=Ei(Math.sqrt(m/g)),N=Math.abs(E)<5;s||(s=N?nn.restSpeed.granular:nn.restSpeed.default),o||(o=N?nn.restDelta.granular:nn.restDelta.default);let U;if(b<1){const z=up(y,b);U=F=>{const P=Math.exp(-b*y*F);return c-P*((T+b*y*E)/z*Math.sin(z*F)+E*Math.cos(z*F))}}else if(b===1)U=z=>c-Math.exp(-y*z)*(E+(T+y*E)*z);else{const z=y*Math.sqrt(b*b-1);U=F=>{const P=Math.exp(-b*y*F),k=Math.min(z*F,300);return c-P*((T+b*y*E)*Math.sinh(k)+z*E*Math.cosh(k))/z}}const C={calculatedDuration:M&&v||null,next:z=>{const F=U(z);if(M)h.done=z>=v;else{let P=z===0?T:0;b<1&&(P=z===0?Yi(T):LS(U,z,F));const k=Math.abs(P)<=s,D=Math.abs(c-F)<=o;h.done=k&&D}return h.value=h.done?c:F,h},toString:()=>{const z=Math.min(Nm(C),Fc),F=US(P=>C.next(z*P).value,z,30);return z+"ms "+F},toTransition:()=>{}};return C}Ic.applyToOptions=a=>{const t=pA(a,100,Ic);return a.ease=t.ease,a.duration=Yi(t.duration),a.type="keyframes",a};function cp({keyframes:a,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:u=500,modifyTarget:c,min:h,max:m,restDelta:d=.5,restSpeed:g}){const v=a[0],_={done:!1,value:v},M=k=>h!==void 0&&k<h||m!==void 0&&k>m,T=k=>h===void 0?m:m===void 0||Math.abs(h-k)<Math.abs(m-k)?h:m;let b=n*t;const E=v+b,y=c===void 0?E:c(E);y!==E&&(b=y-v);const N=k=>-b*Math.exp(-k/s),U=k=>y+N(k),C=k=>{const D=N(k),w=U(k);_.done=Math.abs(D)<=d,_.value=_.done?y:w};let z,F;const P=k=>{M(_.value)&&(z=k,F=Ic({keyframes:[_.value,T(_.value)],velocity:LS(U,k,_.value),damping:o,stiffness:u,restDelta:d,restSpeed:g}))};return P(0),{calculatedDuration:null,next:k=>{let D=!1;return!F&&z===void 0&&(D=!0,C(k),P(k)),z!==void 0&&k>=z?F.next(k-z):(!D&&C(k),_)}}}function MA(a,t,n){const s=[],o=n||Ea.mix||DS,u=a.length-1;for(let c=0;c<u;c++){let h=o(a[c],a[c+1]);if(t){const m=Array.isArray(t)?t[c]||Ai:t;h=Nl(m,h)}s.push(h)}return s}function EA(a,t,{clamp:n=!0,ease:s,mixer:o}={}){const u=a.length;if(Em(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const c=a[0]===a[1];a[0]>a[u-1]&&(a=[...a].reverse(),t=[...t].reverse());const h=MA(t,s,o),m=h.length,d=g=>{if(c&&g<a[0])return t[0];let v=0;if(m>1)for(;v<a.length-2&&!(g<a[v+1]);v++);const _=Ml(a[v],a[v+1],g);return h[v](_)};return n?g=>d(Ma(a[0],a[u-1],g)):d}function TA(a,t){const n=a[a.length-1];for(let s=1;s<=t;s++){const o=Ml(0,t,s);a.push(Je(n,1,o))}}function bA(a){const t=[0];return TA(t,a.length-1),t}function AA(a,t){return a.map(n=>n*t)}function RA(a,t){return a.map(()=>t||xS).splice(0,a.length-1)}function _l({duration:a=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=Fb(s)?s.map(Z_):Z_(s),u={done:!1,value:t[0]},c=AA(n&&n.length===t.length?n:bA(t),a),h=EA(c,t,{ease:Array.isArray(o)?o:RA(t,o)});return{calculatedDuration:a,next:m=>(u.value=h(m),u.done=m>=a,u)}}const CA=a=>a!==null;function Om(a,{repeat:t,repeatType:n="loop"},s,o=1){const u=a.filter(CA),h=o<0||t&&n!=="loop"&&t%2===1?0:u.length-1;return!h||s===void 0?u[h]:s}const wA={decay:cp,inertia:cp,tween:_l,keyframes:_l,spring:Ic};function NS(a){typeof a.type=="string"&&(a.type=wA[a.type])}class Pm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const DA=a=>a/100;class Bm extends Pm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Kn.now()&&this.tick(Kn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;NS(t);const{type:n=_l,repeat:s=0,repeatDelay:o=0,repeatType:u,velocity:c=0}=t;let{keyframes:h}=t;const m=n||_l;m!==_l&&typeof h[0]!="number"&&(this.mixKeyframes=Nl(DA,DS(h[0],h[1])),h=[0,100]);const d=m({...t,keyframes:h});u==="mirror"&&(this.mirroredGenerator=m({...t,keyframes:[...h].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Nm(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:M,type:T,onUpdate:b,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let U=this.currentTime,C=s;if(v){const k=Math.min(this.currentTime,o)/h;let D=Math.floor(k),w=k%1;!w&&k>=1&&(w=1),w===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(_==="reverse"?(w=1-w,M&&(w-=M/h)):_==="mirror"&&(C=c)),U=Ma(0,1,w)*h}const z=N?{done:!1,value:g[0]}:C.next(U);u&&(z.value=u(z.value));let{done:F}=z;!N&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return P&&T!==cp&&(z.value=Om(g,this.options,E,this.speed)),b&&b(z.value),P&&this.finish(),z}then(t,n){return this.finished.then(t,n)}get duration(){return Ei(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ei(t)}get time(){return Ei(this.currentTime)}set time(t){t=Yi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Kn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ei(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=dA,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Kn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function UA(a){for(let t=1;t<a.length;t++)a[t]??(a[t]=a[t-1])}const Ws=a=>a*180/Math.PI,fp=a=>{const t=Ws(Math.atan2(a[1],a[0]));return hp(t)},LA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:fp,rotateZ:fp,skewX:a=>Ws(Math.atan(a[1])),skewY:a=>Ws(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},hp=a=>(a=a%360,a<0&&(a+=360),a),ny=fp,iy=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),ay=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),NA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:iy,scaleY:ay,scale:a=>(iy(a)+ay(a))/2,rotateX:a=>hp(Ws(Math.atan2(a[6],a[5]))),rotateY:a=>hp(Ws(Math.atan2(-a[2],a[0]))),rotateZ:ny,rotate:ny,skewX:a=>Ws(Math.atan(a[4])),skewY:a=>Ws(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function dp(a){return a.includes("scale")?1:0}function pp(a,t){if(!a||a==="none")return dp(t);const n=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=NA,o=n;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=LA,o=h}if(!o)return dp(t);const u=s[t],c=o[1].split(",").map(PA);return typeof u=="function"?u(c):c[u]}const OA=(a,t)=>{const{transform:n="none"}=getComputedStyle(a);return pp(n,t)};function PA(a){return parseFloat(a.trim())}const co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fo=new Set(co),sy=a=>a===uo||a===se,BA=new Set(["x","y","z"]),zA=co.filter(a=>!BA.has(a));function FA(a){const t=[];return zA.forEach(n=>{const s=a.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Ys={width:({x:a},{paddingLeft:t="0",paddingRight:n="0"})=>a.max-a.min-parseFloat(t)-parseFloat(n),height:({y:a},{paddingTop:t="0",paddingBottom:n="0"})=>a.max-a.min-parseFloat(t)-parseFloat(n),top:(a,{top:t})=>parseFloat(t),left:(a,{left:t})=>parseFloat(t),bottom:({y:a},{top:t})=>parseFloat(t)+(a.max-a.min),right:({x:a},{left:t})=>parseFloat(t)+(a.max-a.min),x:(a,{transform:t})=>pp(t,"x"),y:(a,{transform:t})=>pp(t,"y")};Ys.translateX=Ys.x;Ys.translateY=Ys.y;const js=new Set;let mp=!1,gp=!1,vp=!1;function OS(){if(gp){const a=Array.from(js).filter(s=>s.needsMeasurement),t=new Set(a.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=FA(s);o.length&&(n.set(s,o),s.render())}),a.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([u,c])=>{s.getValue(u)?.set(c)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}gp=!1,mp=!1,js.forEach(a=>a.complete(vp)),js.clear()}function PS(){js.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(gp=!0)})}function IA(){vp=!0,PS(),OS(),vp=!1}class zm{constructor(t,n,s,o,u,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=u,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(js.add(this),mp||(mp=!0,Qe.read(PS),Qe.resolveKeyframes(OS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const u=o?.get(),c=t[t.length-1];if(u!==void 0)t[0]=u;else if(s&&n){const h=s.readValue(n,c);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=c),o&&u===void 0&&o.set(t[0])}UA(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),js.delete(this)}cancel(){this.state==="scheduled"&&(js.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const VA=a=>a.startsWith("--");function HA(a,t,n){VA(t)?a.style.setProperty(t,n):a.style[t]=n}const GA=Tm(()=>window.ScrollTimeline!==void 0),kA={};function XA(a,t){const n=Tm(a);return()=>kA[t]??n()}const BS=XA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ml=([a,t,n,s])=>`cubic-bezier(${a}, ${t}, ${n}, ${s})`,ry={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ml([0,.65,.55,1]),circOut:ml([.55,0,1,.45]),backIn:ml([.31,.01,.66,-.59]),backOut:ml([.33,1.53,.69,.99])};function zS(a,t){if(a)return typeof a=="function"?BS()?US(a,t):"ease-out":SS(a)?ml(a):Array.isArray(a)?a.map(n=>zS(n,t)||ry.easeOut):ry[a]}function WA(a,t,n,{delay:s=0,duration:o=300,repeat:u=0,repeatType:c="loop",ease:h="easeOut",times:m}={},d=void 0){const g={[t]:n};m&&(g.offset=m);const v=zS(h,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return d&&(_.pseudoElement=d),a.animate(g,_)}function FS(a){return typeof a=="function"&&"applyToOptions"in a}function qA({type:a,...t}){return FS(a)&&BS()?a.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class YA extends Pm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:h,onComplete:m}=t;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=t,Em(typeof t.type!="string");const d=qA(t);this.animation=WA(n,s,o,d,u),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Om(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):HA(n,s,g),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ei(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ei(t)}get time(){return Ei(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Yi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&GA()?(this.animation.timeline=t,Ai):n(this)}}const IS={anticipate:vS,backInOut:gS,circInOut:yS};function jA(a){return a in IS}function KA(a){typeof a.ease=="string"&&jA(a.ease)&&(a.ease=IS[a.ease])}const oy=10;class ZA extends YA{constructor(t){KA(t),NS(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:u,...c}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new Bm({...c,autoplay:!1}),m=Yi(this.finishedTime??this.time);n.setWithVelocity(h.sample(m-oy).value,h.sample(m).value,oy),h.stop()}}const ly=(a,t)=>t==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(us.test(a)||a==="0")&&!a.startsWith("url("));function QA(a){const t=a[0];if(a.length===1)return!0;for(let n=0;n<a.length;n++)if(a[n]!==t)return!0}function JA(a,t,n,s){const o=a[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const u=a[a.length-1],c=ly(o,t),h=ly(u,t);return!c||!h?!1:QA(a)||(n==="spring"||FS(n))&&s}function _p(a){a.duration=0,a.type="keyframes"}const $A=new Set(["opacity","clipPath","filter","transform"]),t1=Tm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function e1(a){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:u,type:c}=a;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:d}=t.owner.getProps();return t1()&&n&&$A.has(n)&&(n!=="transform"||!d)&&!m&&!s&&o!=="mirror"&&u!==0&&c!=="inertia"}const n1=40;class i1 extends Pm{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:c="loop",keyframes:h,name:m,motionValue:d,element:g,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Kn.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:u,repeatType:c,name:m,motionValue:d,element:g,...v},M=g?.KeyframeResolver||zm;this.keyframeResolver=new M(h,(T,b,E)=>this.onKeyframesResolved(T,b,_,!E),m,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:u,type:c,velocity:h,delay:m,isHandoff:d,onUpdate:g}=s;this.resolvedAt=Kn.now(),JA(t,u,c,h)||((Ea.instantAnimations||!m)&&g?.(Om(t,s,n)),t[0]=t[t.length-1],_p(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>n1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},M=!d&&e1(_)?new ZA({..._,element:_.motionValue.owner.current}):new Bm(_);M.finished.then(()=>this.notifyFinished()).catch(Ai),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),IA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const a1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function s1(a){const t=a1.exec(a);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function VS(a,t,n=1){const[s,o]=s1(a);if(!s)return;const u=window.getComputedStyle(t).getPropertyValue(s);if(u){const c=u.trim();return lS(c)?parseFloat(c):c}return wm(o)?VS(o,t,n+1):o}function Fm(a,t){return a?.[t]??a?.default??a}const HS=new Set(["width","height","top","left","right","bottom",...co]),r1={test:a=>a==="auto",parse:a=>a},GS=a=>t=>t.test(a),kS=[uo,se,ji,as,Qb,Zb,r1],uy=a=>kS.find(GS(a));function o1(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||cS(a):!0}const l1=new Set(["brightness","contrast","saturate","opacity"]);function u1(a){const[t,n]=a.slice(0,-1).split("(");if(t==="drop-shadow")return a;const[s]=n.match(Dm)||[];if(!s)return a;const o=n.replace(s,"");let u=l1.has(t)?1:0;return s!==n&&(u*=100),t+"("+u+o+")"}const c1=/\b([a-z-]*)\(.*?\)/gu,yp={...us,getAnimatableNone:a=>{const t=a.match(c1);return t?t.map(u1).join(" "):a}},cy={...uo,transform:Math.round},f1={rotate:as,rotateX:as,rotateY:as,rotateZ:as,scale:$u,scaleX:$u,scaleY:$u,scaleZ:$u,skew:as,skewX:as,skewY:as,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:El,originX:Q_,originY:Q_,originZ:se},Im={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,radius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,top:se,right:se,bottom:se,left:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,backgroundPositionX:se,backgroundPositionY:se,...f1,zIndex:cy,fillOpacity:El,strokeOpacity:El,numOctaves:cy},h1={...Im,color:mn,backgroundColor:mn,outlineColor:mn,fill:mn,stroke:mn,borderColor:mn,borderTopColor:mn,borderRightColor:mn,borderBottomColor:mn,borderLeftColor:mn,filter:yp,WebkitFilter:yp},XS=a=>h1[a];function WS(a,t){let n=XS(a);return n!==yp&&(n=us),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const d1=new Set(["auto","none","0"]);function p1(a,t,n){let s=0,o;for(;s<a.length&&!o;){const u=a[s];typeof u=="string"&&!d1.has(u)&&Tl(u).values.length&&(o=a[s]),s++}if(o&&n)for(const u of t)a[u]=WS(n,o)}class m1 extends zm{constructor(t,n,s,o,u){super(t,n,s,o,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<t.length;m++){let d=t[m];if(typeof d=="string"&&(d=d.trim(),wm(d))){const g=VS(d,n.current);g!==void 0&&(t[m]=g),m===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!HS.has(s)||t.length!==2)return;const[o,u]=t,c=uy(o),h=uy(u);if(c!==h)if(sy(c)&&sy(h))for(let m=0;m<t.length;m++){const d=t[m];typeof d=="string"&&(t[m]=parseFloat(d))}else Ys[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||o1(t[o]))&&s.push(o);s.length&&p1(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ys[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const u=s.length-1,c=s[u];s[u]=Ys[n](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,m])=>{t.getValue(h).set(m)}),this.resolveNoneKeyframes()}}function g1(a,t,n){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const o=n?.[a]??s.querySelectorAll(a);return o?Array.from(o):[]}return Array.from(a)}const qS=(a,t)=>t&&typeof a=="number"?t.transform(a):a;function v1(a){return uS(a)&&"offsetHeight"in a}const fy=30,_1=a=>!isNaN(parseFloat(a));class y1{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=Kn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Kn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=_1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new bm);const s=this.events[t].add(n);return t==="change"?()=>{s(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>fy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,fy);return fS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function no(a,t){return new y1(a,t)}const{schedule:Vm}=MS(queueMicrotask,!1),Ni={x:!1,y:!1};function YS(){return Ni.x||Ni.y}function x1(a){return a==="x"||a==="y"?Ni[a]?null:(Ni[a]=!0,()=>{Ni[a]=!1}):Ni.x||Ni.y?null:(Ni.x=Ni.y=!0,()=>{Ni.x=Ni.y=!1})}function jS(a,t){const n=g1(a),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function hy(a){return!(a.pointerType==="touch"||YS())}function S1(a,t,n={}){const[s,o,u]=jS(a,n),c=h=>{if(!hy(h))return;const{target:m}=h,d=t(m,h);if(typeof d!="function"||!m)return;const g=v=>{hy(v)&&(d(v),m.removeEventListener("pointerleave",g))};m.addEventListener("pointerleave",g,o)};return s.forEach(h=>{h.addEventListener("pointerenter",c,o)}),u}const KS=(a,t)=>t?a===t?!0:KS(a,t.parentElement):!1,Hm=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,M1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function E1(a){return M1.has(a.tagName)||a.tabIndex!==-1}const wc=new WeakSet;function dy(a){return t=>{t.key==="Enter"&&a(t)}}function yd(a,t){a.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const T1=(a,t)=>{const n=a.currentTarget;if(!n)return;const s=dy(()=>{if(wc.has(n))return;yd(n,"down");const o=dy(()=>{yd(n,"up")}),u=()=>yd(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",u,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function py(a){return Hm(a)&&!YS()}function b1(a,t,n={}){const[s,o,u]=jS(a,n),c=h=>{const m=h.currentTarget;if(!py(h))return;wc.add(m);const d=t(m,h),g=(M,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),wc.has(m)&&wc.delete(m),py(M)&&typeof d=="function"&&d(M,{success:T})},v=M=>{g(M,m===window||m===document||n.useGlobalTarget||KS(m,M.target))},_=M=>{g(M,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",c,o),v1(h)&&(h.addEventListener("focus",d=>T1(d,o)),!E1(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function ZS(a){return uS(a)&&"ownerSVGElement"in a}function A1(a){return ZS(a)&&a.tagName==="svg"}const Pn=a=>!!(a&&a.getVelocity),R1=[...kS,mn,us],C1=a=>R1.find(GS(a)),QS=Qt.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function w1(a=!0){const t=Qt.useContext(xm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,u=Qt.useId();Qt.useEffect(()=>{if(a)return o(u)},[a]);const c=Qt.useCallback(()=>a&&s&&s(u),[u,s,a]);return!n&&s?[!1,c]:[!0]}const JS=Qt.createContext({strict:!1}),my={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},io={};for(const a in my)io[a]={isEnabled:t=>my[a].some(n=>!!t[n])};function D1(a){for(const t in a)io[t]={...io[t],...a[t]}}const U1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vc(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||U1.has(a)}let $S=a=>!Vc(a);function L1(a){typeof a=="function"&&($S=t=>t.startsWith("on")?!Vc(t):a(t))}try{L1(require("@emotion/is-prop-valid").default)}catch{}function N1(a,t,n){const s={};for(const o in a)o==="values"&&typeof a.values=="object"||($S(o)||n===!0&&Vc(o)||!t&&!Vc(o)||a.draggable&&o.startsWith("onDrag"))&&(s[o]=a[o]);return s}const jc=Qt.createContext({});function Kc(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function bl(a){return typeof a=="string"||Array.isArray(a)}const Gm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],km=["initial",...Gm];function Zc(a){return Kc(a.animate)||km.some(t=>bl(a[t]))}function tM(a){return!!(Zc(a)||a.variants)}function O1(a,t){if(Zc(a)){const{initial:n,animate:s}=a;return{initial:n===!1||bl(n)?n:void 0,animate:bl(s)?s:void 0}}return a.inherit!==!1?t:{}}function P1(a){const{initial:t,animate:n}=O1(a,Qt.useContext(jc));return Qt.useMemo(()=>({initial:t,animate:n}),[gy(t),gy(n)])}function gy(a){return Array.isArray(a)?a.join(" "):a}const Al={};function B1(a){for(const t in a)Al[t]=a[t],Cm(t)&&(Al[t].isCSSVariable=!0)}function eM(a,{layout:t,layoutId:n}){return fo.has(a)||a.startsWith("origin")||(t||n!==void 0)&&(!!Al[a]||a==="opacity")}const z1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},F1=co.length;function I1(a,t,n){let s="",o=!0;for(let u=0;u<F1;u++){const c=co[u],h=a[c];if(h===void 0)continue;let m=!0;if(typeof h=="number"?m=h===(c.startsWith("scale")?1:0):m=parseFloat(h)===0,!m||n){const d=qS(h,Im[c]);if(!m){o=!1;const g=z1[c]||c;s+=`${g}(${d}) `}n&&(t[c]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Xm(a,t,n){const{style:s,vars:o,transformOrigin:u}=a;let c=!1,h=!1;for(const m in t){const d=t[m];if(fo.has(m)){c=!0;continue}else if(Cm(m)){o[m]=d;continue}else{const g=qS(d,Im[m]);m.startsWith("origin")?(h=!0,u[m]=g):s[m]=g}}if(t.transform||(c||n?s.transform=I1(t,a.transform,n):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:d="50%",originZ:g=0}=u;s.transformOrigin=`${m} ${d} ${g}`}}const Wm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nM(a,t,n){for(const s in t)!Pn(t[s])&&!eM(s,n)&&(a[s]=t[s])}function V1({transformTemplate:a},t){return Qt.useMemo(()=>{const n=Wm();return Xm(n,t,a),Object.assign({},n.vars,n.style)},[t])}function H1(a,t){const n=a.style||{},s={};return nM(s,n,a),Object.assign(s,V1(a,t)),s}function G1(a,t){const n={},s=H1(a,t);return a.drag&&a.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(n.tabIndex=0),n.style=s,n}const k1={offset:"stroke-dashoffset",array:"stroke-dasharray"},X1={offset:"strokeDashoffset",array:"strokeDasharray"};function W1(a,t,n=1,s=0,o=!0){a.pathLength=1;const u=o?k1:X1;a[u.offset]=se.transform(-s);const c=se.transform(t),h=se.transform(n);a[u.array]=`${c} ${h}`}function iM(a,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:u=1,pathOffset:c=0,...h},m,d,g){if(Xm(a,h,d),m){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:_}=a;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=g?.transformBox??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&W1(v,o,u,c,!1)}const aM=()=>({...Wm(),attrs:{}}),sM=a=>typeof a=="string"&&a.toLowerCase()==="svg";function q1(a,t,n,s){const o=Qt.useMemo(()=>{const u=aM();return iM(u,t,sM(s),a.transformTemplate,a.style),{...u.attrs,style:{...u.style}}},[t]);if(a.style){const u={};nM(u,a.style,a),o.style={...u,...o.style}}return o}const Y1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qm(a){return typeof a!="string"||a.includes("-")?!1:!!(Y1.indexOf(a)>-1||/[A-Z]/u.test(a))}function j1(a,t,n,{latestValues:s},o,u=!1){const h=(qm(a)?q1:G1)(t,s,o,a),m=N1(t,typeof a=="string",u),d=a!==Qt.Fragment?{...m,...h,ref:n}:{},{children:g}=t,v=Qt.useMemo(()=>Pn(g)?g.get():g,[g]);return Qt.createElement(a,{...d,children:v})}function vy(a){const t=[{},{}];return a?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function Ym(a,t,n,s){if(typeof t=="function"){const[o,u]=vy(s);t=t(n!==void 0?n:a.custom,o,u)}if(typeof t=="string"&&(t=a.variants&&a.variants[t]),typeof t=="function"){const[o,u]=vy(s);t=t(n!==void 0?n:a.custom,o,u)}return t}function Dc(a){return Pn(a)?a.get():a}function K1({scrapeMotionValuesFromProps:a,createRenderState:t},n,s,o){return{latestValues:Z1(n,s,o,a),renderState:t()}}function Z1(a,t,n,s){const o={},u=s(a,{});for(const _ in u)o[_]=Dc(u[_]);let{initial:c,animate:h}=a;const m=Zc(a),d=tM(a);t&&d&&!m&&a.inherit!==!1&&(c===void 0&&(c=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||c===!1;const v=g?h:c;if(v&&typeof v!="boolean"&&!Kc(v)){const _=Array.isArray(v)?v:[v];for(let M=0;M<_.length;M++){const T=Ym(a,_[M]);if(T){const{transitionEnd:b,transition:E,...y}=T;for(const N in y){let U=y[N];if(Array.isArray(U)){const C=g?U.length-1:0;U=U[C]}U!==null&&(o[N]=U)}for(const N in b)o[N]=b[N]}}}return o}const rM=a=>(t,n)=>{const s=Qt.useContext(jc),o=Qt.useContext(xm),u=()=>K1(a,t,s,o);return n?u():Db(u)};function jm(a,t,n){const{style:s}=a,o={};for(const u in s)(Pn(s[u])||t.style&&Pn(t.style[u])||eM(u,a)||n?.getValue(u)?.liveStyle!==void 0)&&(o[u]=s[u]);return o}const Q1=rM({scrapeMotionValuesFromProps:jm,createRenderState:Wm});function oM(a,t,n){const s=jm(a,t,n);for(const o in a)if(Pn(a[o])||Pn(t[o])){const u=co.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[u]=a[o]}return s}const J1=rM({scrapeMotionValuesFromProps:oM,createRenderState:aM}),$1=Symbol.for("motionComponentSymbol");function jr(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function tR(a,t,n){return Qt.useCallback(s=>{s&&a.onMount&&a.onMount(s),t&&(s?t.mount(s):t.unmount()),n&&(typeof n=="function"?n(s):jr(n)&&(n.current=s))},[t])}const Km=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eR="framerAppearId",lM="data-"+Km(eR),uM=Qt.createContext({});function nR(a,t,n,s,o){const{visualElement:u}=Qt.useContext(jc),c=Qt.useContext(JS),h=Qt.useContext(xm),m=Qt.useContext(QS).reducedMotion,d=Qt.useRef(null);s=s||c.renderer,!d.current&&s&&(d.current=s(a,{visualState:t,parent:u,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const g=d.current,v=Qt.useContext(uM);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&iR(d.current,n,o,v);const _=Qt.useRef(!1);Qt.useInsertionEffect(()=>{g&&_.current&&g.update(n,h)});const M=n[lM],T=Qt.useRef(!!M&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return Ub(()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),T.current&&g.animationState&&g.animationState.animateChanges())}),Qt.useEffect(()=>{g&&(!T.current&&g.animationState&&g.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),T.current=!1),g.enteringChildren=void 0)}),g}function iR(a,t,n,s){const{layoutId:o,layout:u,drag:c,dragConstraints:h,layoutScroll:m,layoutRoot:d,layoutCrossfade:g}=t;a.projection=new n(a.latestValues,t["data-framer-portal-id"]?void 0:cM(a.parent)),a.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!c||h&&jr(h),visualElement:a,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:m,layoutRoot:d})}function cM(a){if(a)return a.options.allowProjection!==!1?a.projection:cM(a.parent)}function xd(a,{forwardMotionProps:t=!1}={},n,s){n&&D1(n);const o=qm(a)?J1:Q1;function u(h,m){let d;const g={...Qt.useContext(QS),...h,layoutId:aR(h)},{isStatic:v}=g,_=P1(h),M=o(h,v);if(!v&&ym){sR();const T=rR(g);d=T.MeasureLayout,_.visualElement=nR(a,M,g,s,T.ProjectionNode)}return Gt.jsxs(jc.Provider,{value:_,children:[d&&_.visualElement?Gt.jsx(d,{visualElement:_.visualElement,...g}):null,j1(a,h,tR(M,_.visualElement,m),M,v,t)]})}u.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const c=Qt.forwardRef(u);return c[$1]=a,c}function aR({layoutId:a}){const t=Qt.useContext(oS).id;return t&&a!==void 0?t+"-"+a:a}function sR(a,t){Qt.useContext(JS).strict}function rR(a){const{drag:t,layout:n}=io;if(!t&&!n)return{};const s={...t,...n};return{MeasureLayout:t?.isEnabled(a)||n?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function oR(a,t){if(typeof Proxy>"u")return xd;const n=new Map,s=(u,c)=>xd(u,c,a,t),o=(u,c)=>s(u,c);return new Proxy(o,{get:(u,c)=>c==="create"?s:(n.has(c)||n.set(c,xd(c,void 0,a,t)),n.get(c))})}function fM({top:a,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:a,max:s}}}function lR({x:a,y:t}){return{top:t.min,right:a.max,bottom:t.max,left:a.min}}function uR(a,t){if(!t)return a;const n=t({x:a.left,y:a.top}),s=t({x:a.right,y:a.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Sd(a){return a===void 0||a===1}function xp({scale:a,scaleX:t,scaleY:n}){return!Sd(a)||!Sd(t)||!Sd(n)}function Is(a){return xp(a)||hM(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function hM(a){return _y(a.x)||_y(a.y)}function _y(a){return a&&a!=="0%"}function Hc(a,t,n){const s=a-n,o=t*s;return n+o}function yy(a,t,n,s,o){return o!==void 0&&(a=Hc(a,o,s)),Hc(a,n,s)+t}function Sp(a,t=0,n=1,s,o){a.min=yy(a.min,t,n,s,o),a.max=yy(a.max,t,n,s,o)}function dM(a,{x:t,y:n}){Sp(a.x,t.translate,t.scale,t.originPoint),Sp(a.y,n.translate,n.scale,n.originPoint)}const xy=.999999999999,Sy=1.0000000000001;function cR(a,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let u,c;for(let h=0;h<o;h++){u=n[h],c=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Zr(a,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,dM(a,c)),s&&Is(u.latestValues)&&Zr(a,u.latestValues))}t.x<Sy&&t.x>xy&&(t.x=1),t.y<Sy&&t.y>xy&&(t.y=1)}function Kr(a,t){a.min=a.min+t,a.max=a.max+t}function My(a,t,n,s,o=.5){const u=Je(a.min,a.max,o);Sp(a,t,n,u,s)}function Zr(a,t){My(a.x,t.x,t.scaleX,t.scale,t.originX),My(a.y,t.y,t.scaleY,t.scale,t.originY)}function pM(a,t){return fM(uR(a.getBoundingClientRect(),t))}function fR(a,t,n){const s=pM(a,n),{scroll:o}=t;return o&&(Kr(s.x,o.offset.x),Kr(s.y,o.offset.y)),s}const Ey=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qr=()=>({x:Ey(),y:Ey()}),Ty=()=>({min:0,max:0}),ln=()=>({x:Ty(),y:Ty()}),Mp={current:null},mM={current:!1};function hR(){if(mM.current=!0,!!ym)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),t=()=>Mp.current=a.matches;a.addEventListener("change",t),t()}else Mp.current=!1}const dR=new WeakMap;function pR(a,t,n){for(const s in t){const o=t[s],u=n[s];if(Pn(o))a.addValue(s,o);else if(Pn(u))a.addValue(s,no(o,{owner:a}));else if(u!==o)if(a.hasValue(s)){const c=a.getValue(s);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=a.getStaticValue(s);a.addValue(s,no(c!==void 0?c:o,{owner:a}))}}for(const s in n)t[s]===void 0&&a.removeValue(s);return t}const by=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mR{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:u,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=zm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Kn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Qe.render(this.render,!1,!0))};const{latestValues:m,renderState:d}=c;this.latestValues=m,this.baseTarget={...m},this.initialValues=n.initial?{...m}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=Zc(n),this.isVariantNode=tM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const M=v[_];m[_]!==void 0&&Pn(M)&&M.set(m[_])}}mount(t){this.current=t,dR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),mM.current||hR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Mp.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ls(this.notifyUpdate),ls(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=fo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",c=>{this.latestValues[t]=c,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in io){const n=io[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ln()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<by.length;s++){const o=by[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const u="on"+o,c=t[u];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=pR(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=no(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(lS(s)||cS(s))?s=parseFloat(s):!C1(s)&&us.test(n)&&(s=WS(t,n)),this.setBaseTarget(t,Pn(s)?s.get():s)),Pn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=Ym(this.props,n,this.presenceContext?.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Pn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new bm),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Vm.render(this.render)}}class gM extends mR{constructor(){super(...arguments),this.KeyframeResolver=m1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function vM(a,{style:t,vars:n},s,o){const u=a.style;let c;for(c in t)u[c]=t[c];o?.applyProjectionStyles(u,s);for(c in n)u.setProperty(c,n[c])}function gR(a){return window.getComputedStyle(a)}class vR extends gM{constructor(){super(...arguments),this.type="html",this.renderInstance=vM}readValueFromInstance(t,n){if(fo.has(n))return this.projection?.isProjecting?dp(n):OA(t,n);{const s=gR(t),o=(Cm(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return pM(t,n)}build(t,n,s){Xm(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return jm(t,n,s)}}const _M=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _R(a,t,n,s){vM(a,t,void 0,s);for(const o in t.attrs)a.setAttribute(_M.has(o)?o:Km(o),t.attrs[o])}class yR extends gM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ln}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(fo.has(n)){const s=XS(n);return s&&s.default||0}return n=_M.has(n)?n:Km(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return oM(t,n,s)}build(t,n,s){iM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){_R(t,n,s,o)}mount(t){this.isSVGTag=sM(t.tagName),super.mount(t)}}const xR=(a,t)=>qm(a)?new yR(t):new vR(t,{allowProjection:a!==Qt.Fragment});function $r(a,t,n){const s=a.getProps();return Ym(s,t,n!==void 0?n:s.custom,a)}const Ep=a=>Array.isArray(a);function SR(a,t,n){a.hasValue(t)?a.getValue(t).set(n):a.addValue(t,no(n))}function MR(a){return Ep(a)?a[a.length-1]||0:a}function ER(a,t){const n=$r(a,t);let{transitionEnd:s={},transition:o={},...u}=n||{};u={...u,...s};for(const c in u){const h=MR(u[c]);SR(a,c,h)}}function TR(a){return!!(Pn(a)&&a.add)}function Tp(a,t){const n=a.getValue("willChange");if(TR(n))return n.add(t);if(!n&&Ea.WillChange){const s=new Ea.WillChange("auto");a.addValue("willChange",s),s.add(t)}}function yM(a){return a.props[lM]}const bR=a=>a!==null;function AR(a,{repeat:t,repeatType:n="loop"},s){const o=a.filter(bR),u=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[u]}const RR={type:"spring",stiffness:500,damping:25,restSpeed:10},CR=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),wR={type:"keyframes",duration:.8},DR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},UR=(a,{keyframes:t})=>t.length>2?wR:fo.has(a)?a.startsWith("scale")?CR(t[1]):RR:DR;function LR({when:a,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:u,repeatType:c,repeatDelay:h,from:m,elapsed:d,...g}){return!!Object.keys(g).length}const Zm=(a,t,n,s={},o,u)=>c=>{const h=Fm(s,a)||{},m=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Yi(m);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-d,onUpdate:_=>{t.set(_),h.onUpdate&&h.onUpdate(_)},onComplete:()=>{c(),h.onComplete&&h.onComplete()},name:a,motionValue:t,element:u?void 0:o};LR(h)||Object.assign(g,UR(a,g)),g.duration&&(g.duration=Yi(g.duration)),g.repeatDelay&&(g.repeatDelay=Yi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(_p(g),g.delay===0&&(v=!0)),(Ea.instantAnimations||Ea.skipAnimations)&&(v=!0,_p(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,v&&!u&&t.get()!==void 0){const _=AR(g.keyframes,h);if(_!==void 0){Qe.update(()=>{g.onUpdate(_),g.onComplete()});return}}return h.isSync?new Bm(g):new i1(g)};function NR({protectedKeys:a,needsAnimating:t},n){const s=a.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function xM(a,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:u=a.getDefaultTransition(),transitionEnd:c,...h}=t;s&&(u=s);const m=[],d=o&&a.animationState&&a.animationState.getState()[o];for(const g in h){const v=a.getValue(g,a.latestValues[g]??null),_=h[g];if(_===void 0||d&&NR(d,g))continue;const M={delay:n,...Fm(u||{},g)},T=v.get();if(T!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===T&&!M.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const y=yM(a);if(y){const N=window.MotionHandoffAnimation(y,g,Qe);N!==null&&(M.startTime=N,b=!0)}}Tp(a,g),v.start(Zm(g,v,_,a.shouldReduceMotion&&HS.has(g)?{type:!1}:M,a,b));const E=v.animation;E&&m.push(E)}return c&&Promise.all(m).then(()=>{Qe.update(()=>{c&&ER(a,c)})}),m}function SM(a,t,n,s=0,o=1){const u=Array.from(a).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),c=a.size,h=(c-1)*s;return typeof n=="function"?n(u,c):o===1?u*s:h-u*s}function bp(a,t,n={}){const s=$r(a,t,n.type==="exit"?a.presenceContext?.custom:void 0);let{transition:o=a.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const u=s?()=>Promise.all(xM(a,s,n)):()=>Promise.resolve(),c=a.variantChildren&&a.variantChildren.size?(m=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:v}=o;return OR(a,t,m,d,g,v,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[m,d]=h==="beforeChildren"?[u,c]:[c,u];return m().then(()=>d())}else return Promise.all([u(),c(n.delay)])}function OR(a,t,n=0,s=0,o=0,u=1,c){const h=[];for(const m of a.variantChildren)m.notify("AnimationStart",t),h.push(bp(m,t,{...c,delay:n+(typeof s=="function"?0:s)+SM(a.variantChildren,m,s,o,u)}).then(()=>m.notify("AnimationComplete",t)));return Promise.all(h)}function PR(a,t,n={}){a.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(u=>bp(a,u,n));s=Promise.all(o)}else if(typeof t=="string")s=bp(a,t,n);else{const o=typeof t=="function"?$r(a,t,n.custom):t;s=Promise.all(xM(a,o,n))}return s.then(()=>{a.notify("AnimationComplete",t)})}function MM(a,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==a.length)return!1;for(let s=0;s<n;s++)if(t[s]!==a[s])return!1;return!0}const BR=km.length;function EM(a){if(!a)return;if(!a.isControllingVariants){const n=a.parent?EM(a.parent)||{}:{};return a.props.initial!==void 0&&(n.initial=a.props.initial),n}const t={};for(let n=0;n<BR;n++){const s=km[n],o=a.props[s];(bl(o)||o===!1)&&(t[s]=o)}return t}const zR=[...Gm].reverse(),FR=Gm.length;function IR(a){return t=>Promise.all(t.map(({animation:n,options:s})=>PR(a,n,s)))}function VR(a){let t=IR(a),n=Ay(),s=!0;const o=m=>(d,g)=>{const v=$r(a,g,m==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:_,transitionEnd:M,...T}=v;d={...d,...T,...M}}return d};function u(m){t=m(a)}function c(m){const{props:d}=a,g=EM(a.parent)||{},v=[],_=new Set;let M={},T=1/0;for(let E=0;E<FR;E++){const y=zR[E],N=n[y],U=d[y]!==void 0?d[y]:g[y],C=bl(U),z=y===m?N.isActive:null;z===!1&&(T=E);let F=U===g[y]&&U!==d[y]&&C;if(F&&s&&a.manuallyAnimateOnMount&&(F=!1),N.protectedKeys={...M},!N.isActive&&z===null||!U&&!N.prevProp||Kc(U)||typeof U=="boolean")continue;const P=HR(N.prevProp,U);let k=P||y===m&&N.isActive&&!F&&C||E>T&&C,D=!1;const w=Array.isArray(U)?U:[U];let H=w.reduce(o(y),{});z===!1&&(H={});const{prevResolvedValues:tt={}}=N,ut={...tt,...H},ht=Y=>{k=!0,_.has(Y)&&(D=!0,_.delete(Y)),N.needsAnimating[Y]=!0;const W=a.getValue(Y);W&&(W.liveStyle=!1)};for(const Y in ut){const W=H[Y],vt=tt[Y];if(M.hasOwnProperty(Y))continue;let xt=!1;Ep(W)&&Ep(vt)?xt=!MM(W,vt):xt=W!==vt,xt?W!=null?ht(Y):_.add(Y):W!==void 0&&_.has(Y)?ht(Y):N.protectedKeys[Y]=!0}N.prevProp=U,N.prevResolvedValues=H,N.isActive&&(M={...M,...H}),s&&a.blockInitialAnimation&&(k=!1);const dt=F&&P;k&&(!dt||D)&&v.push(...w.map(Y=>{const W={type:y};if(typeof Y=="string"&&s&&!dt&&a.manuallyAnimateOnMount&&a.parent){const{parent:vt}=a,xt=$r(vt,Y);if(vt.enteringChildren&&xt){const{delayChildren:O}=xt.transition||{};W.delay=SM(vt.enteringChildren,a,O)}}return{animation:Y,options:W}}))}if(_.size){const E={};if(typeof d.initial!="boolean"){const y=$r(a,Array.isArray(d.initial)?d.initial[0]:d.initial);y&&y.transition&&(E.transition=y.transition)}_.forEach(y=>{const N=a.getBaseTarget(y),U=a.getValue(y);U&&(U.liveStyle=!0),E[y]=N??null}),v.push({animation:E})}let b=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!a.manuallyAnimateOnMount&&(b=!1),s=!1,b?t(v):Promise.resolve()}function h(m,d){if(n[m].isActive===d)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(m,d)),n[m].isActive=d;const g=c(m);for(const v in n)n[v].protectedKeys={};return g}return{animateChanges:c,setActive:h,setAnimateFunction:u,getState:()=>n,reset:()=>{n=Ay(),s=!0}}}function HR(a,t){return typeof t=="string"?t!==a:Array.isArray(t)?!MM(t,a):!1}function Ls(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ay(){return{animate:Ls(!0),whileInView:Ls(),whileHover:Ls(),whileTap:Ls(),whileDrag:Ls(),whileFocus:Ls(),exit:Ls()}}class hs{constructor(t){this.isMounted=!1,this.node=t}update(){}}class GR extends hs{constructor(t){super(t),t.animationState||(t.animationState=VR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Kc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let kR=0;class XR extends hs{constructor(){super(...arguments),this.id=kR++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const WR={animation:{Feature:GR},exit:{Feature:XR}};function Rl(a,t,n,s={passive:!0}){return a.addEventListener(t,n,s),()=>a.removeEventListener(t,n)}function Bl(a){return{point:{x:a.pageX,y:a.pageY}}}const qR=a=>t=>Hm(t)&&a(t,Bl(t));function yl(a,t,n,s){return Rl(a,t,qR(n),s)}const TM=1e-4,YR=1-TM,jR=1+TM,bM=.01,KR=0-bM,ZR=0+bM;function Vn(a){return a.max-a.min}function QR(a,t,n){return Math.abs(a-t)<=n}function Ry(a,t,n,s=.5){a.origin=s,a.originPoint=Je(t.min,t.max,a.origin),a.scale=Vn(n)/Vn(t),a.translate=Je(n.min,n.max,a.origin)-a.originPoint,(a.scale>=YR&&a.scale<=jR||isNaN(a.scale))&&(a.scale=1),(a.translate>=KR&&a.translate<=ZR||isNaN(a.translate))&&(a.translate=0)}function xl(a,t,n,s){Ry(a.x,t.x,n.x,s?s.originX:void 0),Ry(a.y,t.y,n.y,s?s.originY:void 0)}function Cy(a,t,n){a.min=n.min+t.min,a.max=a.min+Vn(t)}function JR(a,t,n){Cy(a.x,t.x,n.x),Cy(a.y,t.y,n.y)}function wy(a,t,n){a.min=t.min-n.min,a.max=a.min+Vn(t)}function Sl(a,t,n){wy(a.x,t.x,n.x),wy(a.y,t.y,n.y)}function Si(a){return[a("x"),a("y")]}const AM=({current:a})=>a?a.ownerDocument.defaultView:null,Dy=(a,t)=>Math.abs(a-t);function $R(a,t){const n=Dy(a.x,t.x),s=Dy(a.y,t.y);return Math.sqrt(n**2+s**2)}class RM{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:u=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Ed(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,T=$R(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!T)return;const{point:b}=_,{timestamp:E}=Dn;this.history.push({...b,timestamp:E});const{onStart:y,onMove:N}=this.handlers;M||(y&&y(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastMoveEventInfo=Md(M,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:T,onSessionEnd:b,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Ed(_.type==="pointercancel"?this.lastMoveEventInfo:Md(M,this.transformPagePoint),this.history);this.startEvent&&T&&T(_,y),b&&b(_,y)},!Hm(t))return;this.dragSnapToOrigin=u,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=c,this.contextWindow=o||window;const h=Bl(t),m=Md(h,this.transformPagePoint),{point:d}=m,{timestamp:g}=Dn;this.history=[{...d,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,Ed(m,this.history)),this.removeListeners=Nl(yl(this.contextWindow,"pointermove",this.handlePointerMove),yl(this.contextWindow,"pointerup",this.handlePointerUp),yl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ls(this.updatePoint)}}function Md(a,t){return t?{point:t(a.point)}:a}function Uy(a,t){return{x:a.x-t.x,y:a.y-t.y}}function Ed({point:a},t){return{point:a,delta:Uy(a,CM(t)),offset:Uy(a,tC(t)),velocity:eC(t,.1)}}function tC(a){return a[0]}function CM(a){return a[a.length-1]}function eC(a,t){if(a.length<2)return{x:0,y:0};let n=a.length-1,s=null;const o=CM(a);for(;n>=0&&(s=a[n],!(o.timestamp-s.timestamp>Yi(t)));)n--;if(!s)return{x:0,y:0};const u=Ei(o.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const c={x:(o.x-s.x)/u,y:(o.y-s.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function nC(a,{min:t,max:n},s){return t!==void 0&&a<t?a=s?Je(t,a,s.min):Math.max(a,t):n!==void 0&&a>n&&(a=s?Je(n,a,s.max):Math.min(a,n)),a}function Ly(a,t,n){return{min:t!==void 0?a.min+t:void 0,max:n!==void 0?a.max+n-(a.max-a.min):void 0}}function iC(a,{top:t,left:n,bottom:s,right:o}){return{x:Ly(a.x,n,o),y:Ly(a.y,t,s)}}function Ny(a,t){let n=t.min-a.min,s=t.max-a.max;return t.max-t.min<a.max-a.min&&([n,s]=[s,n]),{min:n,max:s}}function aC(a,t){return{x:Ny(a.x,t.x),y:Ny(a.y,t.y)}}function sC(a,t){let n=.5;const s=Vn(a),o=Vn(t);return o>s?n=Ml(t.min,t.max-s,a.min):s>o&&(n=Ml(a.min,a.max-o,t.min)),Ma(0,1,n)}function rC(a,t){const n={};return t.min!==void 0&&(n.min=t.min-a.min),t.max!==void 0&&(n.max=t.max-a.min),n}const Ap=.35;function oC(a=Ap){return a===!1?a=0:a===!0&&(a=Ap),{x:Oy(a,"left","right"),y:Oy(a,"top","bottom")}}function Oy(a,t,n){return{min:Py(a,t),max:Py(a,n)}}function Py(a,t){return typeof a=="number"?a:a[t]||0}const lC=new WeakMap;class uC{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ln(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:_}=this.getProps();_?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Bl(v).point)},c=(v,_)=>{const{drag:M,dragPropagation:T,onDragStart:b}=this.getProps();if(M&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=x1(M),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Si(y=>{let N=this.getAxisMotionValue(y).get()||0;if(ji.test(N)){const{projection:U}=this.visualElement;if(U&&U.layout){const C=U.layout.layoutBox[y];C&&(N=Vn(C)*(parseFloat(N)/100))}}this.originPoint[y]=N}),b&&Qe.postRender(()=>b(v,_)),Tp(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:M,dragDirectionLock:T,onDirectionLock:b,onDrag:E}=this.getProps();if(!M&&!this.openDragLock)return;const{offset:y}=_;if(T&&this.currentDirection===null){this.currentDirection=cC(y),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",_.point,y),this.updateAxis("y",_.point,y),this.visualElement.render(),E&&E(v,_)},m=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>Si(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new RM(t,{onSessionStart:u,onStart:c,onMove:h,onSessionEnd:m,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:AM(this.visualElement)})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!o||!s)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:h}=this.getProps();h&&Qe.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!tc(t,o,this.currentDirection))return;const u=this.getAxisMotionValue(t);let c=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(c=nC(c,this.constraints[t],this.elastic[t])),u.set(c)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&jr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=iC(s.layoutBox,t):this.constraints=!1,this.elastic=oC(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Si(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=rC(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!jr(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const u=fR(s,o.root,this.visualElement.getTransformPagePoint());let c=aC(o.layout.layoutBox,u);if(n){const h=n(lR(c));this.hasMutatedConstraints=!!h,h&&(c=fM(h))}return c}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},d=Si(g=>{if(!tc(g,n,this.currentDirection))return;let v=m&&m[g]||{};c&&(v={min:0,max:0});const _=o?200:1e6,M=o?40:1e7,T={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:M,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(g,T)});return Promise.all(d).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Tp(this.visualElement,t),s.start(Zm(t,s,0,n,this.visualElement,!1))}stopAnimation(){Si(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Si(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){Si(n=>{const{drag:s}=this.getProps();if(!tc(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,u=this.getAxisMotionValue(n);if(o&&o.layout){const{min:c,max:h}=o.layout.layoutBox[n];u.set(t[n]-Je(c,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!jr(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Si(c=>{const h=this.getAxisMotionValue(c);if(h&&this.constraints!==!1){const m=h.get();o[c]=sC({min:m,max:m},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Si(c=>{if(!tc(c,t,null))return;const h=this.getAxisMotionValue(c),{min:m,max:d}=this.constraints[c];h.set(Je(m,d,o[c]))})}addListeners(){if(!this.visualElement.current)return;lC.set(this.visualElement,this);const t=this.visualElement.current,n=yl(t,"pointerdown",m=>{const{drag:d,dragListener:g=!0}=this.getProps();d&&g&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();jr(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,u=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Qe.read(s);const c=Rl(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:d})=>{this.isDragging&&d&&(Si(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=m[g].translate,v.set(v.get()+m[g].translate))}),this.visualElement.render())}));return()=>{c(),n(),u(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:u=!1,dragElastic:c=Ap,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:u,dragElastic:c,dragMomentum:h}}}function tc(a,t,n){return(t===!0||t===a)&&(n===null||n===a)}function cC(a,t=10){let n=null;return Math.abs(a.y)>t?n="y":Math.abs(a.x)>t&&(n="x"),n}class fC extends hs{constructor(t){super(t),this.removeGroupControls=Ai,this.removeListeners=Ai,this.controls=new uC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ai}unmount(){this.removeGroupControls(),this.removeListeners()}}const By=a=>(t,n)=>{a&&Qe.postRender(()=>a(t,n))};class hC extends hs{constructor(){super(...arguments),this.removePointerDownListener=Ai}onPointerDown(t){this.session=new RM(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:AM(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:By(t),onStart:By(n),onMove:s,onEnd:(u,c)=>{delete this.session,o&&Qe.postRender(()=>o(u,c))}}}mount(){this.removePointerDownListener=yl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Uc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zy(a,t){return t.max===t.min?0:a/(t.max-t.min)*100}const ll={correct:(a,t)=>{if(!t.target)return a;if(typeof a=="string")if(se.test(a))a=parseFloat(a);else return a;const n=zy(a,t.target.x),s=zy(a,t.target.y);return`${n}% ${s}%`}},dC={correct:(a,{treeScale:t,projectionDelta:n})=>{const s=a,o=us.parse(a);if(o.length>5)return s;const u=us.createTransformer(a),c=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,m=n.y.scale*t.y;o[0+c]/=h,o[1+c]/=m;const d=Je(h,m,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),u(o)}};let Td=!1;class pC extends Qt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:u}=t;B1(mC),u&&(n.group&&n.group.add(u),s&&s.register&&o&&s.register(u),Td&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Uc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:u}=this.props,{projection:c}=s;return c&&(c.isPresent=u,Td=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==u?c.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?c.promote():c.relegate()||Qe.postRender(()=>{const h=c.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Vm.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Td=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function wM(a){const[t,n]=w1(),s=Qt.useContext(oS);return Gt.jsx(pC,{...a,layoutGroup:s,switchLayoutGroup:Qt.useContext(uM),isPresent:t,safeToRemove:n})}const mC={borderRadius:{...ll,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ll,borderTopRightRadius:ll,borderBottomLeftRadius:ll,borderBottomRightRadius:ll,boxShadow:dC};function gC(a,t,n){const s=Pn(a)?a:no(a);return s.start(Zm("",s,t,n)),s.animation}const vC=(a,t)=>a.depth-t.depth;class _C{constructor(){this.children=[],this.isDirty=!1}add(t){Sm(this.children,t),this.isDirty=!0}remove(t){Mm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(vC),this.isDirty=!1,this.children.forEach(t)}}function yC(a,t){const n=Kn.now(),s=({timestamp:o})=>{const u=o-n;u>=t&&(ls(s),a(u-t))};return Qe.setup(s,!0),()=>ls(s)}const DM=["TopLeft","TopRight","BottomLeft","BottomRight"],xC=DM.length,Fy=a=>typeof a=="string"?parseFloat(a):a,Iy=a=>typeof a=="number"||se.test(a);function SC(a,t,n,s,o,u){o?(a.opacity=Je(0,n.opacity??1,MC(s)),a.opacityExit=Je(t.opacity??1,0,EC(s))):u&&(a.opacity=Je(t.opacity??1,n.opacity??1,s));for(let c=0;c<xC;c++){const h=`border${DM[c]}Radius`;let m=Vy(t,h),d=Vy(n,h);if(m===void 0&&d===void 0)continue;m||(m=0),d||(d=0),m===0||d===0||Iy(m)===Iy(d)?(a[h]=Math.max(Je(Fy(m),Fy(d),s),0),(ji.test(d)||ji.test(m))&&(a[h]+="%")):a[h]=d}(t.rotate||n.rotate)&&(a.rotate=Je(t.rotate||0,n.rotate||0,s))}function Vy(a,t){return a[t]!==void 0?a[t]:a.borderRadius}const MC=UM(0,.5,_S),EC=UM(.5,.95,Ai);function UM(a,t,n){return s=>s<a?0:s>t?1:n(Ml(a,t,s))}function Hy(a,t){a.min=t.min,a.max=t.max}function yi(a,t){Hy(a.x,t.x),Hy(a.y,t.y)}function Gy(a,t){a.translate=t.translate,a.scale=t.scale,a.originPoint=t.originPoint,a.origin=t.origin}function ky(a,t,n,s,o){return a-=t,a=Hc(a,1/n,s),o!==void 0&&(a=Hc(a,1/o,s)),a}function TC(a,t=0,n=1,s=.5,o,u=a,c=a){if(ji.test(t)&&(t=parseFloat(t),t=Je(c.min,c.max,t/100)-c.min),typeof t!="number")return;let h=Je(u.min,u.max,s);a===u&&(h-=t),a.min=ky(a.min,t,n,h,o),a.max=ky(a.max,t,n,h,o)}function Xy(a,t,[n,s,o],u,c){TC(a,t[n],t[s],t[o],t.scale,u,c)}const bC=["x","scaleX","originX"],AC=["y","scaleY","originY"];function Wy(a,t,n,s){Xy(a.x,t,bC,n?n.x:void 0,s?s.x:void 0),Xy(a.y,t,AC,n?n.y:void 0,s?s.y:void 0)}function qy(a){return a.translate===0&&a.scale===1}function LM(a){return qy(a.x)&&qy(a.y)}function Yy(a,t){return a.min===t.min&&a.max===t.max}function RC(a,t){return Yy(a.x,t.x)&&Yy(a.y,t.y)}function jy(a,t){return Math.round(a.min)===Math.round(t.min)&&Math.round(a.max)===Math.round(t.max)}function NM(a,t){return jy(a.x,t.x)&&jy(a.y,t.y)}function Ky(a){return Vn(a.x)/Vn(a.y)}function Zy(a,t){return a.translate===t.translate&&a.scale===t.scale&&a.originPoint===t.originPoint}class CC{constructor(){this.members=[]}add(t){Sm(this.members,t),t.scheduleRender()}remove(t){if(Mm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const u=this.members[o];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function wC(a,t,n){let s="";const o=a.x.translate/t.x,u=a.y.translate/t.y,c=n?.z||0;if((o||u||c)&&(s=`translate3d(${o}px, ${u}px, ${c}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:v,rotateY:_,skewX:M,skewY:T}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),M&&(s+=`skewX(${M}deg) `),T&&(s+=`skewY(${T}deg) `)}const h=a.x.scale*t.x,m=a.y.scale*t.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const bd=["","X","Y","Z"],DC=1e3;let UC=0;function Ad(a,t,n,s){const{latestValues:o}=t;o[a]&&(n[a]=o[a],t.setStaticValue(a,0),s&&(s[a]=0))}function OM(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:t}=a.options;if(!t)return;const n=yM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:u}=a.options;window.MotionCancelOptimisedAnimation(n,"transform",Qe,!(o||u))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&OM(s)}function PM({attachResizeListener:a,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(c={},h=t?.()){this.id=UC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(OC),this.nodes.forEach(FC),this.nodes.forEach(IC),this.nodes.forEach(PC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new _C)}addEventListener(c,h){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new bm),this.eventHandlers.get(c).add(h)}notifyListeners(c,...h){const m=this.eventHandlers.get(c);m&&m.notify(...h)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=ZS(c)&&!A1(c),this.instance=c;const{layoutId:h,layout:m,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),a){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;Qe.read(()=>{v=window.innerWidth}),a(c,()=>{const M=window.innerWidth;M!==v&&(v=M,this.root.updateBlockedByResize=!0,g&&g(),g=yC(_,250),Uc.hasAnimatedSinceResize&&(Uc.hasAnimatedSinceResize=!1,this.nodes.forEach($y)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&d&&(h||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||d.getDefaultTransition()||XC,{onLayoutAnimationStart:b,onLayoutAnimationComplete:E}=d.getProps(),y=!this.targetLayout||!NM(this.targetLayout,M),N=!v&&_;if(this.options.layoutRoot||this.resumeFrom||N||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...Fm(T,"layout"),onPlay:b,onComplete:E};(d.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(g,N)}else v||$y(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ls(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(VC),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&OM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Qy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Jy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zC),this.nodes.forEach(LC),this.nodes.forEach(NC)):this.nodes.forEach(Jy),this.clearAllSnapshots();const h=Kn.now();Dn.delta=Ma(0,1e3/60,h-Dn.timestamp),Dn.timestamp=h,Dn.isProcessing=!0,pd.update.process(Dn),pd.preRender.process(Dn),pd.render.process(Dn),Dn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(BC),this.sharedNodes.forEach(HC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ln(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(h=!1),h&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:m,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!LM(this.projectionDelta),m=this.getTransformTemplate(),d=m?m(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;c&&this.instance&&(h||Is(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return c&&(m=this.removeTransform(m)),WC(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return ln();const h=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(qC))){const{scroll:d}=this.root;d&&(Kr(h.x,d.offset.x),Kr(h.y,d.offset.y))}return h}removeElementScroll(c){const h=ln();if(yi(h,c),this.scroll?.wasRoot)return h;for(let m=0;m<this.path.length;m++){const d=this.path[m],{scroll:g,options:v}=d;d!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&yi(h,c),Kr(h.x,g.offset.x),Kr(h.y,g.offset.y))}return h}applyTransform(c,h=!1){const m=ln();yi(m,c);for(let d=0;d<this.path.length;d++){const g=this.path[d];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Zr(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Is(g.latestValues)&&Zr(m,g.latestValues)}return Is(this.latestValues)&&Zr(m,this.latestValues),m}removeTransform(c){const h=ln();yi(h,c);for(let m=0;m<this.path.length;m++){const d=this.path[m];if(!d.instance||!Is(d.latestValues))continue;xp(d.latestValues)&&d.updateSnapshot();const g=ln(),v=d.measurePageBox();yi(g,v),Wy(h,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return Is(this.latestValues)&&Wy(h,this.latestValues),h}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Dn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=Dn.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),Sl(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),yi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ln(),this.targetWithTransforms=ln()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),JR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):yi(this.target,this.layout.layoutBox),dM(this.target,this.targetDelta)):yi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),Sl(this.relativeTargetOrigin,this.target,_.target),yi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||xp(this.parent.latestValues)||hM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const c=this.getLead(),h=!!this.resumingFrom||this!==c;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Dn.timestamp&&(m=!1),m)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;yi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;cR(this.layoutCorrected,this.treeScale,this.path,h),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=ln());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gy(this.prevProjectionDelta.x,this.projectionDelta.x),Gy(this.prevProjectionDelta.y,this.projectionDelta.y)),xl(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!Zy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Zy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qr(),this.projectionDelta=Qr(),this.projectionDeltaWithTransform=Qr()}setAnimationOrigin(c,h=!1){const m=this.snapshot,d=m?m.latestValues:{},g={...this.latestValues},v=Qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const _=ln(),M=m?m.source:void 0,T=this.layout?this.layout.source:void 0,b=M!==T,E=this.getStack(),y=!E||E.members.length<=1,N=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(kC));this.animationProgress=0;let U;this.mixTargetDelta=C=>{const z=C/1e3;tx(v.x,c.x,z),tx(v.y,c.y,z),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sl(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),GC(this.relativeTarget,this.relativeTargetOrigin,_,z),U&&RC(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=ln()),yi(U,this.relativeTarget)),b&&(this.animationValues=g,SC(g,d,this.latestValues,z,N,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ls(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Uc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=no(0)),this.currentAnimation=gC(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),c.onUpdate&&c.onUpdate(h)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(DC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:h,target:m,layout:d,latestValues:g}=c;if(!(!h||!m||!d)){if(this!==c&&this.layout&&d&&BM(this.options.animationType,this.layout.layoutBox,d.layoutBox)){m=this.target||ln();const v=Vn(this.layout.layoutBox.x);m.x.min=c.target.x.min,m.x.max=m.x.min+v;const _=Vn(this.layout.layoutBox.y);m.y.min=c.target.y.min,m.y.max=m.y.min+_}yi(h,m),Zr(h,g),xl(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(c,h){this.sharedNodes.has(c)||this.sharedNodes.set(c,new CC),this.sharedNodes.get(c).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:h,preserveFollowOpacity:m}={}){const d=this.getStack();d&&d.promote(this,m),c&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let h=!1;const{latestValues:m}=c;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const d={};m.z&&Ad("z",c,d,this.animationValues);for(let g=0;g<bd.length;g++)Ad(`rotate${bd[g]}`,c,d,this.animationValues),Ad(`skew${bd[g]}`,c,d,this.animationValues);c.render();for(const g in d)c.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);c.scheduleRender()}applyProjectionStyles(c,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Dc(h?.pointerEvents)||"",c.transform=m?m(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Dc(h?.pointerEvents)||""),this.hasProjected&&!Is(this.latestValues)&&(c.transform=m?m({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=wC(this.projectionDeltaWithTransform,this.treeScale,g);m&&(v=m(g,v)),c.transform=v;const{x:_,y:M}=this.projectionDelta;c.transformOrigin=`${_.origin*100}% ${M.origin*100}% 0`,d.animationValues?c.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in Al){if(g[T]===void 0)continue;const{correct:b,applyTo:E,isCSSVariable:y}=Al[T],N=v==="none"?g[T]:b(g[T],d);if(E){const U=E.length;for(let C=0;C<U;C++)c[E[C]]=N}else y?this.options.visualElement.renderState.vars[T]=N:c[T]=N}this.options.layoutId&&(c.pointerEvents=d===this?Dc(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Qy),this.root.sharedNodes.clear()}}}function LC(a){a.updateLayout()}function NC(a){const t=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&t&&a.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=a.layout,{animationType:o}=a.options,u=t.source!==a.layout.source;o==="size"?Si(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],_=Vn(v);v.min=n[g].min,v.max=v.min+_}):BM(o,t.layoutBox,n)&&Si(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],_=Vn(n[g]);v.max=v.min+_,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[g].max=a.relativeTarget[g].min+_)});const c=Qr();xl(c,n,t.layoutBox);const h=Qr();u?xl(h,a.applyTransform(s,!0),t.measuredBox):xl(h,n,t.layoutBox);const m=!LM(c);let d=!1;if(!a.resumeFrom){const g=a.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:_}=g;if(v&&_){const M=ln();Sl(M,t.layoutBox,v.layoutBox);const T=ln();Sl(T,n,_.layoutBox),NM(M,T)||(d=!0),g.options.layoutRoot&&(a.relativeTarget=T,a.relativeTargetOrigin=M,a.relativeParent=g)}}}a.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:h,layoutDelta:c,hasLayoutChanged:m,hasRelativeLayoutChanged:d})}else if(a.isLead()){const{onExitComplete:n}=a.options;n&&n()}a.options.transition=void 0}function OC(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function PC(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function BC(a){a.clearSnapshot()}function Qy(a){a.clearMeasurements()}function Jy(a){a.isLayoutDirty=!1}function zC(a){const{visualElement:t}=a.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),a.resetTransform()}function $y(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function FC(a){a.resolveTargetDelta()}function IC(a){a.calcProjection()}function VC(a){a.resetSkewAndRotation()}function HC(a){a.removeLeadSnapshot()}function tx(a,t,n){a.translate=Je(t.translate,0,n),a.scale=Je(t.scale,1,n),a.origin=t.origin,a.originPoint=t.originPoint}function ex(a,t,n,s){a.min=Je(t.min,n.min,s),a.max=Je(t.max,n.max,s)}function GC(a,t,n,s){ex(a.x,t.x,n.x,s),ex(a.y,t.y,n.y,s)}function kC(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const XC={duration:.45,ease:[.4,0,.1,1]},nx=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),ix=nx("applewebkit/")&&!nx("chrome/")?Math.round:Ai;function ax(a){a.min=ix(a.min),a.max=ix(a.max)}function WC(a){ax(a.x),ax(a.y)}function BM(a,t,n){return a==="position"||a==="preserve-aspect"&&!QR(Ky(t),Ky(n),.2)}function qC(a){return a!==a.root&&a.scroll?.wasRoot}const YC=PM({attachResizeListener:(a,t)=>Rl(a,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Rd={current:void 0},zM=PM({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Rd.current){const a=new YC({});a.mount(window),a.setOptions({layoutScroll:!0}),Rd.current=a}return Rd.current},resetTransform:(a,t)=>{a.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),jC={pan:{Feature:hC},drag:{Feature:fC,ProjectionNode:zM,MeasureLayout:wM}};function sx(a,t,n){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,u=s[o];u&&Qe.postRender(()=>u(t,Bl(t)))}class KC extends hs{mount(){const{current:t}=this.node;t&&(this.unmount=S1(t,(n,s)=>(sx(this.node,s,"Start"),o=>sx(this.node,o,"End"))))}unmount(){}}class ZC extends hs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nl(Rl(this.node.current,"focus",()=>this.onFocus()),Rl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rx(a,t,n){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),u=s[o];u&&Qe.postRender(()=>u(t,Bl(t)))}class QC extends hs{mount(){const{current:t}=this.node;t&&(this.unmount=b1(t,(n,s)=>(rx(this.node,s,"Start"),(o,{success:u})=>rx(this.node,o,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Rp=new WeakMap,Cd=new WeakMap,JC=a=>{const t=Rp.get(a.target);t&&t(a)},$C=a=>{a.forEach(JC)};function t2({root:a,...t}){const n=a||document;Cd.has(n)||Cd.set(n,{});const s=Cd.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver($C,{root:a,...t})),s[o]}function e2(a,t,n){const s=t2(t);return Rp.set(a,n),s.observe(a),()=>{Rp.delete(a),s.unobserve(a)}}const n2={some:0,all:1};class i2 extends hs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:u}=t,c={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:n2[o]},h=m=>{const{isIntersecting:d}=m;if(this.isInView===d||(this.isInView=d,u&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=d?g:v;_&&_(m)};return e2(this.node.current,c,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(a2(t,n))&&this.startObserver()}unmount(){}}function a2({viewport:a={}},{viewport:t={}}={}){return n=>a[n]!==t[n]}const s2={inView:{Feature:i2},tap:{Feature:QC},focus:{Feature:ZC},hover:{Feature:KC}},r2={layout:{ProjectionNode:zM,MeasureLayout:wM}},o2={...WR,...s2,...jC,...r2},l2=oR(o2,xR);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c2=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),ox=a=>{const t=c2(a);return t.charAt(0).toUpperCase()+t.slice(1)},FM=(...a)=>a.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),f2=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=Qt.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:c,...h},m)=>Qt.createElement("svg",{ref:m,...h2,width:t,height:t,stroke:a,strokeWidth:s?Number(n)*24/Number(t):n,className:FM("lucide",o),...!u&&!f2(h)&&{"aria-hidden":"true"},...h},[...c.map(([d,g])=>Qt.createElement(d,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=(a,t)=>{const n=Qt.forwardRef(({className:s,...o},u)=>Qt.createElement(d2,{ref:u,iconNode:t,className:FM(`lucide-${u2(ox(a))}`,`lucide-${a}`,s),...o}));return n.displayName=ox(a),n};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],m2=Qc("file-text",p2);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],v2=Qc("github",g2);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],y2=Qc("linkedin",_2);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],S2=Qc("mail",x2);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qm="180",M2=0,lx=1,E2=2,IM=1,T2=2,_a=3,cs=0,Qn=1,ya=2,rs=0,to=1,Cp=2,ux=3,cx=4,b2=5,Gs=100,A2=101,R2=102,C2=103,w2=104,D2=200,U2=201,L2=202,N2=203,wp=204,Dp=205,O2=206,P2=207,B2=208,z2=209,F2=210,I2=211,V2=212,H2=213,G2=214,Up=0,Lp=1,Np=2,ao=3,Op=4,Pp=5,Bp=6,zp=7,VM=0,k2=1,X2=2,os=0,W2=1,q2=2,Y2=3,j2=4,K2=5,Z2=6,Q2=7,HM=300,so=301,ro=302,Fp=303,Ip=304,Jc=306,Vp=1e3,Bi=1001,Hp=1002,ui=1003,J2=1004,ec=1005,Zn=1006,wd=1007,qs=1008,Ta=1009,GM=1010,kM=1011,Cl=1012,Jm=1013,Zs=1014,Wi=1015,ho=1016,$m=1017,tg=1018,wl=1020,XM=35902,WM=35899,qM=1021,YM=1022,Ti=1023,Dl=1026,Ul=1027,jM=1028,eg=1029,KM=1030,ng=1031,ig=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,Gp=35840,kp=35841,Xp=35842,Wp=35843,qp=36196,Yp=37492,jp=37496,Kp=37808,Zp=37809,Qp=37810,Jp=37811,$p=37812,tm=37813,em=37814,nm=37815,im=37816,am=37817,sm=37818,rm=37819,om=37820,lm=37821,um=36492,cm=36494,fm=36495,hm=36283,dm=36284,pm=36285,mm=36286,$2=3200,tw=3201,ew=0,nw=1,ss="",Mi="srgb",oo="srgb-linear",Gc="linear",Ge="srgb",Nr=7680,fx=519,iw=512,aw=513,sw=514,ZM=515,rw=516,ow=517,lw=518,uw=519,hx=35044,dx="300 es",qi=2e3,kc=2001;class po{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=Math.PI/180,gm=180/Math.PI;function zl(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function be(a,t,n){return Math.max(t,Math.min(n,a))}function cw(a,t){return(a%t+t)%t}function Ud(a,t,n){return(1-n)*a+n*t}function ul(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,n=0){ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*s-c*o+t.x,this.y=u*o+c*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fl{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,u,c,h){let m=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];const _=u[c+0],M=u[c+1],T=u[c+2],b=u[c+3];if(h===0){t[n+0]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=M,t[n+2]=T,t[n+3]=b;return}if(v!==b||m!==_||d!==M||g!==T){let E=1-h;const y=m*_+d*M+g*T+v*b,N=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const z=Math.sqrt(U),F=Math.atan2(z,y*N);E=Math.sin(E*F)/z,h=Math.sin(h*F)/z}const C=h*N;if(m=m*E+_*C,d=d*E+M*C,g=g*E+T*C,v=v*E+b*C,E===1-h){const z=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=z,d*=z,g*=z,v*=z}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,u,c){const h=s[o],m=s[o+1],d=s[o+2],g=s[o+3],v=u[c],_=u[c+1],M=u[c+2],T=u[c+3];return t[n]=h*T+g*v+m*M-d*_,t[n+1]=m*T+g*_+d*v-h*M,t[n+2]=d*T+g*M+h*_-m*v,t[n+3]=g*T-h*v-m*_-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,m=Math.sin,d=h(s/2),g=h(o/2),v=h(u/2),_=m(s/2),M=m(o/2),T=m(u/2);switch(c){case"XYZ":this._x=_*g*v+d*M*T,this._y=d*M*v-_*g*T,this._z=d*g*T+_*M*v,this._w=d*g*v-_*M*T;break;case"YXZ":this._x=_*g*v+d*M*T,this._y=d*M*v-_*g*T,this._z=d*g*T-_*M*v,this._w=d*g*v+_*M*T;break;case"ZXY":this._x=_*g*v-d*M*T,this._y=d*M*v+_*g*T,this._z=d*g*T+_*M*v,this._w=d*g*v-_*M*T;break;case"ZYX":this._x=_*g*v-d*M*T,this._y=d*M*v+_*g*T,this._z=d*g*T-_*M*v,this._w=d*g*v+_*M*T;break;case"YZX":this._x=_*g*v+d*M*T,this._y=d*M*v+_*g*T,this._z=d*g*T-_*M*v,this._w=d*g*v-_*M*T;break;case"XZY":this._x=_*g*v-d*M*T,this._y=d*M*v-_*g*T,this._z=d*g*T+_*M*v,this._w=d*g*v+_*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],u=n[8],c=n[1],h=n[5],m=n[9],d=n[2],g=n[6],v=n[10],_=s+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-d)*M,this._z=(c-o)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+d)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(u-d)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(c-o)/M,this._x=(u+d)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,u=t._z,c=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=s*g+c*h+o*d-u*m,this._y=o*g+c*m+u*h-s*d,this._z=u*g+c*d+s*m-o*h,this._w=c*g-s*h-o*m-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,o=this._y,u=this._z,c=this._w;let h=c*t._w+s*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=s,this._y=o,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(px.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(px.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*s+u[6]*o,this.y=u[1]*n+u[4]*s+u[7]*o,this.z=u[2]*n+u[5]*s+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*s+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*s+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*s+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*s+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,u=t.x,c=t.y,h=t.z,m=t.w,d=2*(c*o-h*s),g=2*(h*n-u*o),v=2*(u*s-c*n);return this.x=n+m*d+c*v-h*g,this.y=s+m*g+h*d-u*v,this.z=o+m*v+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o,this.y=u[1]*n+u[5]*s+u[9]*o,this.z=u[2]*n+u[6]*s+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,u=t.z,c=n.x,h=n.y,m=n.z;return this.x=o*m-u*h,this.y=u*c-s*m,this.z=s*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new rt,px=new Fl;class pe{constructor(t,n,s,o,u,c,h,m,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,u,c,h,m,d)}set(t,n,s,o,u,c,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=s,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,u=this.elements,c=s[0],h=s[3],m=s[6],d=s[1],g=s[4],v=s[7],_=s[2],M=s[5],T=s[8],b=o[0],E=o[3],y=o[6],N=o[1],U=o[4],C=o[7],z=o[2],F=o[5],P=o[8];return u[0]=c*b+h*N+m*z,u[3]=c*E+h*U+m*F,u[6]=c*y+h*C+m*P,u[1]=d*b+g*N+v*z,u[4]=d*E+g*U+v*F,u[7]=d*y+g*C+v*P,u[2]=_*b+M*N+T*z,u[5]=_*E+M*U+T*F,u[8]=_*y+M*C+T*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-s*u*g+s*h*m+o*u*d-o*c*m}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*m-g*u,M=d*u-c*m,T=n*v+s*_+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=v*b,t[1]=(o*d-g*s)*b,t[2]=(h*s-o*c)*b,t[3]=_*b,t[4]=(g*n-o*m)*b,t[5]=(o*u-h*n)*b,t[6]=M*b,t[7]=(s*m-d*n)*b,t[8]=(c*n-s*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,u,c,h){const m=Math.cos(u),d=Math.sin(u);return this.set(s*m,s*d,-s*(m*c+d*h)+c+t,-o*d,o*m,-o*(-d*c+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Nd.makeScale(t,n)),this}rotate(t){return this.premultiply(Nd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Nd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new pe;function QM(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Xc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fw(){const a=Xc("canvas");return a.style.display="block",a}const mx={};function Ll(a){a in mx||(mx[a]=!0,console.warn(a))}function hw(a,t,n){return new Promise(function(s,o){function u(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:s()}}setTimeout(u,n)})}const gx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vx=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dw(){const a={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ge&&(o.r=xa(o.r),o.g=xa(o.g),o.b=xa(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ge&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ss?Gc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[oo]:{primaries:t,whitePoint:s,transfer:Gc,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),a}const Ue=dw();function xa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function eo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Or;class pw{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Or===void 0&&(Or=Xc("canvas")),Or.width=t.width,Or.height=t.height;const o=Or.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Or}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Xc("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=xa(u[c]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(xa(n[s]/255)*255):n[s]=xa(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mw=0;class ag{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=zl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Od(o[c].image)):u.push(Od(o[c]))}else u=Od(o);s.url=u}return n||(t.images[this.uuid]=s),s}}function Od(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?pw.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gw=0;const Pd=new rt;class Hn extends po{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=Bi,o=Bi,u=Zn,c=qs,h=Ti,m=Ta,d=Hn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=zl(),this.name="",this.source=new ag(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==HM)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vp:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Hp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vp:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Hp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=HM;Hn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,s=0,o=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*s+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*s+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*s+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,u;const m=t.elements,d=m[0],g=m[4],v=m[8],_=m[1],M=m[5],T=m[9],b=m[2],E=m[6],y=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(T-E)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(T+E)<.1&&Math.abs(d+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,C=(M+1)/2,z=(y+1)/2,F=(g+_)/4,P=(v+b)/4,k=(T+E)/4;return U>C&&U>z?U<.01?(s=0,o=.707106781,u=.707106781):(s=Math.sqrt(U),o=F/s,u=P/s):C>z?C<.01?(s=.707106781,o=0,u=.707106781):(o=Math.sqrt(C),s=F/o,u=k/o):z<.01?(s=.707106781,o=.707106781,u=0):(u=Math.sqrt(z),s=P/u,o=k/u),this.set(s,o,u,n),this}let N=Math.sqrt((E-T)*(E-T)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(E-T)/N,this.y=(v-b)/N,this.z=(_-g)/N,this.w=Math.acos((d+M+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vw extends po{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const o={width:t,height:n,depth:s.depth},u=new Hn(o);this.textures=[];const c=s.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new ag(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends vw{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class JM extends Hn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _w extends Hn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Di.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Di.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Di.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Di):Di.fromBufferAttribute(u,c),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nc.copy(s.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cl),ic.subVectors(this.max,cl),Pr.subVectors(t.a,cl),Br.subVectors(t.b,cl),zr.subVectors(t.c,cl),Ja.subVectors(Br,Pr),$a.subVectors(zr,Br),Ns.subVectors(Pr,zr);let n=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Ns.z,Ns.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Ns.z,0,-Ns.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Ns.y,Ns.x,0];return!Bd(n,Pr,Br,zr,ic)||(n=[1,0,0,0,1,0,0,0,1],!Bd(n,Pr,Br,zr,ic))?!1:(ac.crossVectors(Ja,$a),n=[ac.x,ac.y,ac.z],Bd(n,Pr,Br,zr,ic))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Di=new rt,nc=new Il,Pr=new rt,Br=new rt,zr=new rt,Ja=new rt,$a=new rt,Ns=new rt,cl=new rt,ic=new rt,ac=new rt,Os=new rt;function Bd(a,t,n,s,o){for(let u=0,c=a.length-3;u<=c;u+=3){Os.fromArray(a,u);const h=o.x*Math.abs(Os.x)+o.y*Math.abs(Os.y)+o.z*Math.abs(Os.z),m=t.dot(Os),d=n.dot(Os),g=s.dot(Os);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const yw=new Il,fl=new rt,zd=new rt;class $c{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):yw.setFromPoints(t).getCenter(s);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fl.subVectors(t,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(fl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fl.copy(t.center).add(zd)),this.expandByPoint(fl.copy(t.center).sub(zd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new rt,Fd=new rt,sc=new rt,ts=new rt,Id=new rt,rc=new rt,Vd=new rt;class $M{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=pa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Fd.copy(t).add(n).multiplyScalar(.5),sc.copy(n).sub(t).normalize(),ts.copy(this.origin).sub(Fd);const u=t.distanceTo(n)*.5,c=-this.direction.dot(sc),h=ts.dot(this.direction),m=-ts.dot(sc),d=ts.lengthSq(),g=Math.abs(1-c*c);let v,_,M,T;if(g>0)if(v=c*m-h,_=c*h-m,T=u*g,v>=0)if(_>=-T)if(_<=T){const b=1/g;v*=b,_*=b,M=v*(v+c*_+2*h)+_*(c*v+_+2*m)+d}else _=u,v=Math.max(0,-(c*_+h)),M=-v*v+_*(_+2*m)+d;else _=-u,v=Math.max(0,-(c*_+h)),M=-v*v+_*(_+2*m)+d;else _<=-T?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+d):_<=T?(v=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),M=-v*v+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Fd).addScaledVector(sc,_),M}intersectSphere(t,n){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),o=pa.dot(pa)-s*s,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=s-c,m=s+c;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,u,c,h,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),s>c||u>o||((u>s||isNaN(s))&&(s=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,n,s,o,u){Id.subVectors(n,t),rc.subVectors(s,t),Vd.crossVectors(Id,rc);let c=this.direction.dot(Vd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;ts.subVectors(this.origin,t);const m=h*this.direction.dot(rc.crossVectors(ts,rc));if(m<0)return null;const d=h*this.direction.dot(Id.cross(ts));if(d<0||m+d>c)return null;const g=-h*ts.dot(Vd);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(t,n,s,o,u,c,h,m,d,g,v,_,M,T,b,E){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,u,c,h,m,d,g,v,_,M,T,b,E)}set(t,n,s,o,u,c,h,m,d,g,v,_,M,T,b,E){const y=this.elements;return y[0]=t,y[4]=n,y[8]=s,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=m,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=M,y[7]=T,y[11]=b,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,o=1/Fr.setFromMatrixColumn(t,0).length(),u=1/Fr.setFromMatrixColumn(t,1).length(),c=1/Fr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*u,n[5]=s[5]*u,n[6]=s[6]*u,n[7]=0,n[8]=s[8]*c,n[9]=s[9]*c,n[10]=s[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,u=t.z,c=Math.cos(s),h=Math.sin(s),m=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=c*g,M=c*v,T=h*g,b=h*v;n[0]=m*g,n[4]=-m*v,n[8]=d,n[1]=M+T*d,n[5]=_-b*d,n[9]=-h*m,n[2]=b-_*d,n[6]=T+M*d,n[10]=c*m}else if(t.order==="YXZ"){const _=m*g,M=m*v,T=d*g,b=d*v;n[0]=_+b*h,n[4]=T*h-M,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=M*h-T,n[6]=b+_*h,n[10]=c*m}else if(t.order==="ZXY"){const _=m*g,M=m*v,T=d*g,b=d*v;n[0]=_-b*h,n[4]=-c*v,n[8]=T+M*h,n[1]=M+T*h,n[5]=c*g,n[9]=b-_*h,n[2]=-c*d,n[6]=h,n[10]=c*m}else if(t.order==="ZYX"){const _=c*g,M=c*v,T=h*g,b=h*v;n[0]=m*g,n[4]=T*d-M,n[8]=_*d+b,n[1]=m*v,n[5]=b*d+_,n[9]=M*d-T,n[2]=-d,n[6]=h*m,n[10]=c*m}else if(t.order==="YZX"){const _=c*m,M=c*d,T=h*m,b=h*d;n[0]=m*g,n[4]=b-_*v,n[8]=T*v+M,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=M*v+T,n[10]=_-b*v}else if(t.order==="XZY"){const _=c*m,M=c*d,T=h*m,b=h*d;n[0]=m*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=c*g,n[9]=M*v-T,n[2]=T*v-M,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xw,t,Sw)}lookAt(t,n,s){const o=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),es.crossVectors(s,oi),es.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),es.crossVectors(s,oi)),es.normalize(),oc.crossVectors(oi,es),o[0]=es.x,o[4]=oc.x,o[8]=oi.x,o[1]=es.y,o[5]=oc.y,o[9]=oi.y,o[2]=es.z,o[6]=oc.z,o[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,u=this.elements,c=s[0],h=s[4],m=s[8],d=s[12],g=s[1],v=s[5],_=s[9],M=s[13],T=s[2],b=s[6],E=s[10],y=s[14],N=s[3],U=s[7],C=s[11],z=s[15],F=o[0],P=o[4],k=o[8],D=o[12],w=o[1],H=o[5],tt=o[9],ut=o[13],ht=o[2],dt=o[6],B=o[10],Y=o[14],W=o[3],vt=o[7],xt=o[11],O=o[15];return u[0]=c*F+h*w+m*ht+d*W,u[4]=c*P+h*H+m*dt+d*vt,u[8]=c*k+h*tt+m*B+d*xt,u[12]=c*D+h*ut+m*Y+d*O,u[1]=g*F+v*w+_*ht+M*W,u[5]=g*P+v*H+_*dt+M*vt,u[9]=g*k+v*tt+_*B+M*xt,u[13]=g*D+v*ut+_*Y+M*O,u[2]=T*F+b*w+E*ht+y*W,u[6]=T*P+b*H+E*dt+y*vt,u[10]=T*k+b*tt+E*B+y*xt,u[14]=T*D+b*ut+E*Y+y*O,u[3]=N*F+U*w+C*ht+z*W,u[7]=N*P+U*H+C*dt+z*vt,u[11]=N*k+U*tt+C*B+z*xt,u[15]=N*D+U*ut+C*Y+z*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],u=t[12],c=t[1],h=t[5],m=t[9],d=t[13],g=t[2],v=t[6],_=t[10],M=t[14],T=t[3],b=t[7],E=t[11],y=t[15];return T*(+u*m*v-o*d*v-u*h*_+s*d*_+o*h*M-s*m*M)+b*(+n*m*M-n*d*_+u*c*_-o*c*M+o*d*g-u*m*g)+E*(+n*d*v-n*h*M-u*c*v+s*c*M+u*h*g-s*d*g)+y*(-o*h*g-n*m*v+n*h*_+o*c*v-s*c*_+s*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=t[9],_=t[10],M=t[11],T=t[12],b=t[13],E=t[14],y=t[15],N=v*E*d-b*_*d+b*m*M-h*E*M-v*m*y+h*_*y,U=T*_*d-g*E*d-T*m*M+c*E*M+g*m*y-c*_*y,C=g*b*d-T*v*d+T*h*M-c*b*M-g*h*y+c*v*y,z=T*v*m-g*b*m-T*h*_+c*b*_+g*h*E-c*v*E,F=n*N+s*U+o*C+u*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return t[0]=N*P,t[1]=(b*_*u-v*E*u-b*o*M+s*E*M+v*o*y-s*_*y)*P,t[2]=(h*E*u-b*m*u+b*o*d-s*E*d-h*o*y+s*m*y)*P,t[3]=(v*m*u-h*_*u-v*o*d+s*_*d+h*o*M-s*m*M)*P,t[4]=U*P,t[5]=(g*E*u-T*_*u+T*o*M-n*E*M-g*o*y+n*_*y)*P,t[6]=(T*m*u-c*E*u-T*o*d+n*E*d+c*o*y-n*m*y)*P,t[7]=(c*_*u-g*m*u+g*o*d-n*_*d-c*o*M+n*m*M)*P,t[8]=C*P,t[9]=(T*v*u-g*b*u-T*s*M+n*b*M+g*s*y-n*v*y)*P,t[10]=(c*b*u-T*h*u+T*s*d-n*b*d-c*s*y+n*h*y)*P,t[11]=(g*h*u-c*v*u-g*s*d+n*v*d+c*s*M-n*h*M)*P,t[12]=z*P,t[13]=(g*b*o-T*v*o+T*s*_-n*b*_-g*s*E+n*v*E)*P,t[14]=(T*h*o-c*b*o-T*s*m+n*b*m+c*s*E-n*h*E)*P,t[15]=(c*v*o-g*h*o+g*s*m-n*v*m-c*s*_+n*h*_)*P,this}scale(t){const n=this.elements,s=t.x,o=t.y,u=t.z;return n[0]*=s,n[4]*=o,n[8]*=u,n[1]*=s,n[5]*=o,n[9]*=u,n[2]*=s,n[6]*=o,n[10]*=u,n[3]*=s,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),u=1-s,c=t.x,h=t.y,m=t.z,d=u*c,g=u*h;return this.set(d*c+s,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+s,g*m-o*c,0,d*m-o*h,g*m+o*c,u*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,u,c){return this.set(1,s,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,u=n._x,c=n._y,h=n._z,m=n._w,d=u+u,g=c+c,v=h+h,_=u*d,M=u*g,T=u*v,b=c*g,E=c*v,y=h*v,N=m*d,U=m*g,C=m*v,z=s.x,F=s.y,P=s.z;return o[0]=(1-(b+y))*z,o[1]=(M+C)*z,o[2]=(T-U)*z,o[3]=0,o[4]=(M-C)*F,o[5]=(1-(_+y))*F,o[6]=(E+N)*F,o[7]=0,o[8]=(T+U)*P,o[9]=(E-N)*P,o[10]=(1-(_+b))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;let u=Fr.set(o[0],o[1],o[2]).length();const c=Fr.set(o[4],o[5],o[6]).length(),h=Fr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],Ui.copy(this);const d=1/u,g=1/c,v=1/h;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,n.setFromRotationMatrix(Ui),s.x=u,s.y=c,s.z=h,this}makePerspective(t,n,s,o,u,c,h=qi,m=!1){const d=this.elements,g=2*u/(n-t),v=2*u/(s-o),_=(n+t)/(n-t),M=(s+o)/(s-o);let T,b;if(m)T=u/(c-u),b=c*u/(c-u);else if(h===qi)T=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(h===kc)T=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,u,c,h=qi,m=!1){const d=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),M=-(s+o)/(s-o);let T,b;if(m)T=1/(c-u),b=c/(c-u);else if(h===qi)T=-2/(c-u),b=-(c+u)/(c-u);else if(h===kc)T=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Fr=new rt,Ui=new gn,xw=new rt(0,0,0),Sw=new rt(1,1,1),es=new rt,oc=new rt,oi=new rt,_x=new gn,yx=new Fl;class ba{constructor(t=0,n=0,s=0,o=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],m=o[1],d=o[5],g=o[9],v=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return _x.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_x,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return yx.setFromEuler(this),this.setFromQuaternion(yx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class tE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mw=0;const xx=new rt,Ir=new Fl,ma=new gn,lc=new rt,hl=new rt,Ew=new rt,Tw=new Fl,Sx=new rt(1,0,0),Mx=new rt(0,1,0),Ex=new rt(0,0,1),Tx={type:"added"},bw={type:"removed"},Vr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Jn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new rt,n=new ba,s=new Fl,o=new rt(1,1,1);function u(){s.setFromEuler(n,!1)}function c(){n.setFromQuaternion(s,void 0,!1)}n._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new gn},normalMatrix:{value:new pe}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(Sx,t)}rotateY(t){return this.rotateOnAxis(Mx,t)}rotateZ(t){return this.rotateOnAxis(Ex,t)}translateOnAxis(t,n){return xx.copy(t).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Sx,t)}translateY(t){return this.translateOnAxis(Mx,t)}translateZ(t){return this.translateOnAxis(Ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?lc.copy(t):lc.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(hl,lc,this.up):ma.lookAt(lc,hl,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Ir.setFromRotationMatrix(ma),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tx),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bw),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tx),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,Ew),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,Tw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(u(t.materials,this.material[m]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(u(t.animations,m))}}if(n){const h=c(t.geometries),m=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),M=c(t.animations),T=c(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=o,s;function c(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new rt(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new rt,ga=new rt,Gd=new rt,va=new rt,Hr=new rt,Gr=new rt,bx=new rt,kd=new rt,Xd=new rt,Wd=new rt,qd=new an,Yd=new an,jd=new an;class Pi{constructor(t=new rt,n=new rt,s=new rt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Li.subVectors(t,n),o.cross(Li);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,s,o,u){Li.subVectors(o,n),ga.subVectors(s,n),Gd.subVectors(t,n);const c=Li.dot(Li),h=Li.dot(ga),m=Li.dot(Gd),d=ga.dot(ga),g=ga.dot(Gd),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,M=(d*m-h*g)*_,T=(c*g-h*m)*_;return u.set(1-M-T,T,M)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,n,s,o,u,c,h,m){return this.getBarycoord(t,n,s,o,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,va.x),m.addScaledVector(c,va.y),m.addScaledVector(h,va.z),m)}static getInterpolatedAttribute(t,n,s,o,u,c){return qd.setScalar(0),Yd.setScalar(0),jd.setScalar(0),qd.fromBufferAttribute(t,n),Yd.fromBufferAttribute(t,s),jd.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(qd,u.x),c.addScaledVector(Yd,u.y),c.addScaledVector(jd,u.z),c}static isFrontFacing(t,n,s,o){return Li.subVectors(s,n),ga.subVectors(t,n),Li.cross(ga).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Li.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,u){return Pi.getInterpolation(t,this.a,this.b,this.c,n,s,o,u)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,u=this.c;let c,h;Hr.subVectors(o,s),Gr.subVectors(u,s),kd.subVectors(t,s);const m=Hr.dot(kd),d=Gr.dot(kd);if(m<=0&&d<=0)return n.copy(s);Xd.subVectors(t,o);const g=Hr.dot(Xd),v=Gr.dot(Xd);if(g>=0&&v<=g)return n.copy(o);const _=m*v-g*d;if(_<=0&&m>=0&&g<=0)return c=m/(m-g),n.copy(s).addScaledVector(Hr,c);Wd.subVectors(t,u);const M=Hr.dot(Wd),T=Gr.dot(Wd);if(T>=0&&M<=T)return n.copy(u);const b=M*d-m*T;if(b<=0&&d>=0&&T<=0)return h=d/(d-T),n.copy(s).addScaledVector(Gr,h);const E=g*T-M*v;if(E<=0&&v-g>=0&&M-T>=0)return bx.subVectors(u,o),h=(v-g)/(v-g+(M-T)),n.copy(o).addScaledVector(bx,h);const y=1/(E+b+_);return c=b*y,h=_*y,n.copy(s).addScaledVector(Hr,c).addScaledVector(Gr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Kd(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class Ne{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ue.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ue.workingColorSpace){if(t=cw(t,1),n=be(n,0,1),s=be(s,0,1),n===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+n):s+n-s*n,c=2*s-u;this.r=Kd(c,u,t+1/3),this.g=Kd(c,u,t),this.b=Kd(c,u,t-1/3)}return Ue.colorSpaceToWorking(this,o),this}setStyle(t,n=Mi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mi){const s=eE[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Ue.workingToColorSpace(On.copy(this),t),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(On.copy(this),n);const s=On.r,o=On.g,u=On.b,c=Math.max(s,o,u),h=Math.min(s,o,u);let m,d;const g=(h+c)/2;if(h===c)m=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case s:m=(o-u)/v+(o<u?6:0);break;case o:m=(u-s)/v+2;break;case u:m=(s-o)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Mi){Ue.workingToColorSpace(On.copy(this),t);const n=On.r,s=On.g,o=On.b;return t!==Mi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+n,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(ns),t.getHSL(uc);const s=Ud(ns.h,uc.h,n),o=Ud(ns.s,uc.s,n),u=Ud(ns.l,uc.l,n);return this.setHSL(s,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*s+u[6]*o,this.g=u[1]*n+u[4]*s+u[7]*o,this.b=u[2]*n+u[5]*s+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ne;Ne.NAMES=eE;let Aw=0;class Vl extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=to,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Dp,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wp&&(s.blendSrc=this.blendSrc),this.blendDst!==Dp&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(u){const c=[];for(const h in u){const m=u[h];delete m.metadata,c.push(m)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let u=0;u!==o;++u)s[u]=n[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nE extends Vl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=VM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new rt,cc=new ce;let Rw=0;class zi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=hx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)cc.fromBufferAttribute(this,n),cc.applyMatrix3(t),this.setXY(n,cc.x,cc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=ul(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ul(n,this.array)),n}setX(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ul(n,this.array)),n}setY(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ul(n,this.array)),n}setZ(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ul(n,this.array)),n}setW(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,u){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array),u=jn(u,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hx&&(t.usage=this.usage),t}}class iE extends zi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class aE extends zi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Sa extends zi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let Cw=0;const xi=new gn,Zd=new Jn,kr=new rt,li=new Il,dl=new Il,En=new rt;class Ra extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(QM(t)?aE:iE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new pe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,s){return xi.makeTranslation(t,n,s),this.applyMatrix4(xi),this}scale(t,n,s){return xi.makeScale(t,n,s),this.applyMatrix4(xi),this}lookAt(t){return Zd.lookAt(t),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Sa(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const u=n[s];li.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(li.min,dl.min),li.expandByPoint(En),En.addVectors(li.max,dl.max),li.expandByPoint(En)):(li.expandByPoint(dl.min),li.expandByPoint(dl.max))}li.getCenter(s);let o=0;for(let u=0,c=t.count;u<c;u++)En.fromBufferAttribute(t,u),o=Math.max(o,s.distanceToSquared(En));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)En.fromBufferAttribute(h,d),m&&(kr.fromBufferAttribute(t,d),En.add(kr)),o=Math.max(o,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<s.count;k++)h[k]=new rt,m[k]=new rt;const d=new rt,g=new rt,v=new rt,_=new ce,M=new ce,T=new ce,b=new rt,E=new rt;function y(k,D,w){d.fromBufferAttribute(s,k),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,w),_.fromBufferAttribute(u,k),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,w),g.sub(d),v.sub(d),M.sub(_),T.sub(_);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(H),E.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(H),h[k].add(b),h[D].add(b),h[w].add(b),m[k].add(E),m[D].add(E),m[w].add(E))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let k=0,D=N.length;k<D;++k){const w=N[k],H=w.start,tt=w.count;for(let ut=H,ht=H+tt;ut<ht;ut+=3)y(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const U=new rt,C=new rt,z=new rt,F=new rt;function P(k){z.fromBufferAttribute(o,k),F.copy(z);const D=h[k];U.copy(D),U.sub(z.multiplyScalar(z.dot(D))).normalize(),C.crossVectors(F,D);const H=C.dot(m[k])<0?-1:1;c.setXYZW(k,U.x,U.y,U.z,H)}for(let k=0,D=N.length;k<D;++k){const w=N[k],H=w.start,tt=w.count;for(let ut=H,ht=H+tt;ut<ht;ut+=3)P(t.getX(ut+0)),P(t.getX(ut+1)),P(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const o=new rt,u=new rt,c=new rt,h=new rt,m=new rt,d=new rt,g=new rt,v=new rt;if(t)for(let _=0,M=t.count;_<M;_+=3){const T=t.getX(_+0),b=t.getX(_+1),E=t.getX(_+2);o.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,b),d.fromBufferAttribute(s,E),h.add(g),m.add(g),d.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(E,d.x,d.y,d.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(m.length*g);let M=0,T=0;for(let b=0,E=m.length;b<E;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*g;for(let y=0;y<g;y++)_[T++]=d[M++]}return new zi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ra,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,s);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const m=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],M=t(_,s);m.push(M)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,m=c.length;h<m;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,_=d.length;v<_;v++){const M=d[v];g.push(M.toJSON(t.data))}g.length>0&&(o[m]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new gn,Ps=new $M,fc=new $c,Rx=new rt,hc=new rt,dc=new rt,pc=new rt,Qd=new rt,mc=new rt,Cx=new rt,gc=new rt;class bi extends Jn{constructor(t=new Ra,n=new nE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){mc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const g=h[m],v=u[m];g!==0&&(Qd.fromBufferAttribute(v,t),c?mc.addScaledVector(Qd,g):mc.addScaledVector(Qd.sub(n),g))}n.add(mc)}return n}raycast(t,n){const s=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(u),Ps.copy(t.ray).recast(t.near),!(fc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(fc,Rx)===null||Ps.origin.distanceToSquared(Rx)>(t.far-t.near)**2))&&(Ax.copy(u).invert(),Ps.copy(t.ray).applyMatrix4(Ax),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Ps)))}_computeIntersections(t,n,s){let o;const u=this.geometry,c=this.material,h=u.index,m=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const E=_[T],y=c[E.materialIndex],N=Math.max(E.start,M.start),U=Math.min(h.count,Math.min(E.start+E.count,M.start+M.count));for(let C=N,z=U;C<z;C+=3){const F=h.getX(C),P=h.getX(C+1),k=h.getX(C+2);o=vc(this,y,t,s,d,g,v,F,P,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let E=T,y=b;E<y;E+=3){const N=h.getX(E),U=h.getX(E+1),C=h.getX(E+2);o=vc(this,c,t,s,d,g,v,N,U,C),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const E=_[T],y=c[E.materialIndex],N=Math.max(E.start,M.start),U=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let C=N,z=U;C<z;C+=3){const F=C,P=C+1,k=C+2;o=vc(this,y,t,s,d,g,v,F,P,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let E=T,y=b;E<y;E+=3){const N=E,U=E+1,C=E+2;o=vc(this,c,t,s,d,g,v,N,U,C),o&&(o.faceIndex=Math.floor(E/3),n.push(o))}}}}function ww(a,t,n,s,o,u,c,h){let m;if(t.side===Qn?m=s.intersectTriangle(c,u,o,!0,h):m=s.intersectTriangle(o,u,c,t.side===cs,h),m===null)return null;gc.copy(h),gc.applyMatrix4(a.matrixWorld);const d=n.ray.origin.distanceTo(gc);return d<n.near||d>n.far?null:{distance:d,point:gc.clone(),object:a}}function vc(a,t,n,s,o,u,c,h,m,d){a.getVertexPosition(h,hc),a.getVertexPosition(m,dc),a.getVertexPosition(d,pc);const g=ww(a,t,n,s,hc,dc,pc,Cx);if(g){const v=new rt;Pi.getBarycoord(Cx,hc,dc,pc,v),o&&(g.uv=Pi.getInterpolatedAttribute(o,h,m,d,v,new ce)),u&&(g.uv1=Pi.getInterpolatedAttribute(u,h,m,d,v,new ce)),c&&(g.normal=Pi.getInterpolatedAttribute(c,h,m,d,v,new rt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:d,normal:new rt,materialIndex:0};Pi.getNormal(hc,dc,pc,_.normal),g.face=_,g.barycoord=v}return g}class Hl extends Ra{constructor(t=1,n=1,s=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],d=[],g=[],v=[];let _=0,M=0;T("z","y","x",-1,-1,s,n,t,c,u,0),T("z","y","x",1,-1,s,n,-t,c,u,1),T("x","z","y",1,1,t,s,n,o,c,2),T("x","z","y",1,-1,t,s,-n,o,c,3),T("x","y","z",1,-1,t,n,s,o,u,4),T("x","y","z",-1,-1,t,n,-s,o,u,5),this.setIndex(m),this.setAttribute("position",new Sa(d,3)),this.setAttribute("normal",new Sa(g,3)),this.setAttribute("uv",new Sa(v,2));function T(b,E,y,N,U,C,z,F,P,k,D){const w=C/P,H=z/k,tt=C/2,ut=z/2,ht=F/2,dt=P+1,B=k+1;let Y=0,W=0;const vt=new rt;for(let xt=0;xt<B;xt++){const O=xt*H-ut;for(let nt=0;nt<dt;nt++){const St=nt*w-tt;vt[b]=St*N,vt[E]=O*U,vt[y]=ht,d.push(vt.x,vt.y,vt.z),vt[b]=0,vt[E]=0,vt[y]=F>0?1:-1,g.push(vt.x,vt.y,vt.z),v.push(nt/P),v.push(1-xt/k),Y+=1}}for(let xt=0;xt<k;xt++)for(let O=0;O<P;O++){const nt=_+O+dt*xt,St=_+O+dt*(xt+1),bt=_+(O+1)+dt*(xt+1),Dt=_+(O+1)+dt*xt;m.push(nt,St,Dt),m.push(St,bt,Dt),W+=6}h.addGroup(M,W,D),M+=W,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lo(a){const t={};for(const n in a){t[n]={};for(const s in a[n]){const o=a[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function In(a){const t={};for(let n=0;n<a.length;n++){const s=lo(a[n]);for(const o in s)t[o]=s[o]}return t}function Dw(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function sE(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const Uw={clone:lo,merge:In};var Lw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Aa extends Vl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lw,this.fragmentShader=Nw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=Dw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Wc extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new rt,wx=new ce,Dx=new ce;class Oi extends Wc{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gm*2*Math.atan(Math.tan(Dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,n){return this.getViewBounds(t,wx,Dx),n.subVectors(Dx,wx)}setViewOffset(t,n,s,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Dd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/m,n-=c.offsetY*s/d,o*=c.width/m,s*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,Wr=1;class Ow extends Jn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Oi(Xr,Wr,t,n);o.layers=this.layers,this.add(o);const u=new Oi(Xr,Wr,t,n);u.layers=this.layers,this.add(u);const c=new Oi(Xr,Wr,t,n);c.layers=this.layers,this.add(c);const h=new Oi(Xr,Wr,t,n);h.layers=this.layers,this.add(h);const m=new Oi(Xr,Wr,t,n);m.layers=this.layers,this.add(m);const d=new Oi(Xr,Wr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,u,c,h,m]=n;for(const d of n)this.remove(d);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,m,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,u),t.setRenderTarget(s,1,o),t.render(n,c),t.setRenderTarget(s,2,o),t.render(n,h),t.setRenderTarget(s,3,o),t.render(n,m),t.setRenderTarget(s,4,o),t.render(n,d),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class rE extends Hn{constructor(t=[],n=so,s,o,u,c,h,m,d,g){super(t,n,s,o,u,c,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pw extends fs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new rE(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hl(5,5,5),u=new Aa({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:rs});u.uniforms.tEquirect.value=n;const c=new bi(o,u),h=n.minFilter;return n.minFilter===qs&&(n.minFilter=Zn),new Ow(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,s,o);t.setRenderTarget(u)}}class _c extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,u=null,c=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const b of t.hand.values()){const E=n.getJointPose(b,s),y=this._getHandJoint(d,b);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,T=.005;d.inputState.pinching&&_>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class Ux extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zw extends Hn{constructor(t=null,n=1,s=1,o,u,c,h,m,d=ui,g=ui,v,_){super(null,c,h,m,d,g,o,u,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $d=new rt,Fw=new rt,Iw=new pe;class Vs{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=$d.subVectors(s,n).cross(Fw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta($d),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||Iw.getNormalMatrix(t),o=this.coplanarPoint($d).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new $c,Vw=new ce(.5,.5),yc=new rt;class oE{constructor(t=new Vs,n=new Vs,s=new Vs,o=new Vs,u=new Vs,c=new Vs){this.planes=[t,n,s,o,u,c]}set(t,n,s,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=qi,s=!1){const o=this.planes,u=t.elements,c=u[0],h=u[1],m=u[2],d=u[3],g=u[4],v=u[5],_=u[6],M=u[7],T=u[8],b=u[9],E=u[10],y=u[11],N=u[12],U=u[13],C=u[14],z=u[15];if(o[0].setComponents(d-c,M-g,y-T,z-N).normalize(),o[1].setComponents(d+c,M+g,y+T,z+N).normalize(),o[2].setComponents(d+h,M+v,y+b,z+U).normalize(),o[3].setComponents(d-h,M-v,y-b,z-U).normalize(),s)o[4].setComponents(m,_,E,C).normalize(),o[5].setComponents(d-m,M-_,y-E,z-C).normalize();else if(o[4].setComponents(d-m,M-_,y-E,z-C).normalize(),n===qi)o[5].setComponents(d+m,M+_,y+E,z+C).normalize();else if(n===kc)o[5].setComponents(m,_,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const n=Vw.distanceTo(t.center);return Bs.radius=.7071067811865476+n,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(yc.x=o.normal.x>0?t.max.x:t.min.x,yc.y=o.normal.y>0?t.max.y:t.min.y,yc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hw extends Vl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qc=new rt,Yc=new rt,Lx=new gn,pl=new $M,xc=new $c,tp=new rt,Nx=new rt;class Gw extends Jn{constructor(t=new Ra,n=new Hw){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let o=1,u=n.count;o<u;o++)qc.fromBufferAttribute(n,o-1),Yc.fromBufferAttribute(n,o),s[o]=s[o-1],s[o]+=qc.distanceTo(Yc);t.setAttribute("lineDistance",new Sa(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(o),xc.radius+=u,t.ray.intersectsSphere(xc)===!1)return;Lx.copy(o).invert(),pl.copy(t.ray).applyMatrix4(Lx);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const M=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let b=M,E=T-1;b<E;b+=d){const y=g.getX(b),N=g.getX(b+1),U=Sc(this,t,pl,m,y,N,b);U&&n.push(U)}if(this.isLineLoop){const b=g.getX(T-1),E=g.getX(M),y=Sc(this,t,pl,m,b,E,T-1);y&&n.push(y)}}else{const M=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let b=M,E=T-1;b<E;b+=d){const y=Sc(this,t,pl,m,b,b+1,b);y&&n.push(y)}if(this.isLineLoop){const b=Sc(this,t,pl,m,T-1,M,T-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Sc(a,t,n,s,o,u,c){const h=a.geometry.attributes.position;if(qc.fromBufferAttribute(h,o),Yc.fromBufferAttribute(h,u),n.distanceSqToSegment(qc,Yc,tp,Nx)>s)return;tp.applyMatrix4(a.matrixWorld);const d=t.ray.origin.distanceTo(tp);if(!(d<t.near||d>t.far))return{distance:d,point:Nx.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const Ox=new rt,Px=new rt;class kw extends Gw{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let o=0,u=n.count;o<u;o+=2)Ox.fromBufferAttribute(n,o),Px.fromBufferAttribute(n,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Ox.distanceTo(Px);t.setAttribute("lineDistance",new Sa(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lE extends Hn{constructor(t,n,s=Zs,o,u,c,h=ui,m=ui,d,g=Dl,v=1){if(g!==Dl&&g!==Ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,u,c,h,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ag(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uE extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ks extends Ra{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(s),m=Math.floor(o),d=h+1,g=m+1,v=t/h,_=n/m,M=[],T=[],b=[],E=[];for(let y=0;y<g;y++){const N=y*_-c;for(let U=0;U<d;U++){const C=U*v-u;T.push(C,-N,0),b.push(0,0,1),E.push(U/h),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let N=0;N<h;N++){const U=N+d*y,C=N+d*(y+1),z=N+1+d*(y+1),F=N+1+d*y;M.push(U,C,F),M.push(C,z,F)}this.setIndex(M),this.setAttribute("position",new Sa(T,3)),this.setAttribute("normal",new Sa(b,3)),this.setAttribute("uv",new Sa(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mc extends Aa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xw extends Vl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ww extends Vl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qw extends Wc{constructor(t=-1,n=1,s=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=s-t,c=s+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Yw extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jw{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Bx(a,t,n,s){const o=Kw(s);switch(n){case qM:return a*t;case jM:return a*t/o.components*o.byteLength;case eg:return a*t/o.components*o.byteLength;case KM:return a*t*2/o.components*o.byteLength;case ng:return a*t*2/o.components*o.byteLength;case YM:return a*t*3/o.components*o.byteLength;case Ti:return a*t*4/o.components*o.byteLength;case ig:return a*t*4/o.components*o.byteLength;case Lc:case Nc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case kp:case Wp:return Math.max(a,16)*Math.max(t,8)/4;case Gp:case Xp:return Math.max(a,8)*Math.max(t,8)/2;case qp:case Yp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case jp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case $p:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case tm:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case em:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case nm:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case im:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case am:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case sm:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case rm:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case om:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case lm:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case um:case cm:case fm:return Math.ceil(a/4)*Math.ceil(t/4)*16;case hm:case dm:return Math.ceil(a/4)*Math.ceil(t/4)*8;case pm:case mm:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Kw(a){switch(a){case Ta:case GM:return{byteLength:1,components:1};case Cl:case kM:case ho:return{byteLength:2,components:1};case $m:case tg:return{byteLength:2,components:4};case Zs:case Jm:case Wi:return{byteLength:4,components:1};case XM:case WM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cE(){let a=null,t=!1,n=null,s=null;function o(u,c){n(u,c),s=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function Zw(a){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,v=d.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,d,g),h.onUploadCallback();let M;if(d instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=a.SHORT;else if(d instanceof Uint32Array)M=a.UNSIGNED_INT;else if(d instanceof Int32Array)M=a.INT;else if(d instanceof Int8Array)M=a.BYTE;else if(d instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,d){const g=m.array,v=m.updateRanges;if(a.bindBuffer(d,h),v.length===0)a.bufferSubData(d,0,g);else{v.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<v.length;M++){const T=v[_],b=v[M];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++_,v[_]=b)}v.length=_+1;for(let M=0,T=v.length;M<T;M++){const b=v[M];a.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(a.deleteBuffer(m.buffer),t.delete(h))}function c(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,m),d.version=h.version}}return{get:o,remove:u,update:c}}var Qw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jw=`#ifdef USE_ALPHAHASH
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
#endif`,$w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iD=`#ifdef USE_AOMAP
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
#endif`,aD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sD=`#ifdef USE_BATCHING
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
#endif`,rD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cD=`#ifdef USE_IRIDESCENCE
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
#endif`,fD=`#ifdef USE_BUMPMAP
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
#endif`,hD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_D=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yD=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xD=`#define PI 3.141592653589793
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
} // validated`,SD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MD=`vec3 transformedNormal = objectNormal;
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
#endif`,ED=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RD="gl_FragColor = linearToOutputTexel( gl_FragColor );",CD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wD=`#ifdef USE_ENVMAP
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
#endif`,DD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UD=`#ifdef USE_ENVMAP
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
#endif`,LD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ND=`#ifdef USE_ENVMAP
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
#endif`,OD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FD=`#ifdef USE_GRADIENTMAP
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
}`,ID=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GD=`uniform bool receiveShadow;
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
#endif`,kD=`#ifdef USE_ENVMAP
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
#endif`,XD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jD=`PhysicalMaterial material;
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
#endif`,KD=`struct PhysicalMaterial {
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
}`,ZD=`
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
#endif`,QD=`#if defined( RE_IndirectDiffuse )
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
#endif`,JD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$D=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r3=`#if defined( USE_POINTS_UV )
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
#endif`,o3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
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
#endif`,d3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y3=`#ifdef USE_NORMALMAP
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
#endif`,x3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,N3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P3=`float getShadowMask() {
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
}`,B3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z3=`#ifdef USE_SKINNING
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
#endif`,F3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I3=`#ifdef USE_SKINNING
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
#endif`,V3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X3=`#ifdef USE_TRANSMISSION
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
#endif`,W3=`#ifdef USE_TRANSMISSION
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
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q3=`uniform sampler2D t2D;
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
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nU=`#include <common>
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
}`,iU=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aU=`#define DISTANCE
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
}`,sU=`#define DISTANCE
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
}`,rU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lU=`uniform float scale;
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
}`,uU=`uniform vec3 diffuse;
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
}`,cU=`#include <common>
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
}`,fU=`uniform vec3 diffuse;
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
}`,hU=`#define LAMBERT
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
}`,dU=`#define LAMBERT
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
}`,pU=`#define MATCAP
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
}`,mU=`#define MATCAP
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
}`,gU=`#define NORMAL
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
}`,vU=`#define NORMAL
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
}`,_U=`#define PHONG
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
}`,yU=`#define PHONG
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
}`,xU=`#define STANDARD
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
}`,SU=`#define STANDARD
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
}`,MU=`#define TOON
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
}`,EU=`#define TOON
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
}`,TU=`uniform float size;
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
}`,bU=`uniform vec3 diffuse;
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
}`,AU=`#include <common>
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
}`,RU=`uniform vec3 color;
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
}`,CU=`uniform float rotation;
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
}`,wU=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Qw,alphahash_pars_fragment:Jw,alphamap_fragment:$w,alphamap_pars_fragment:tD,alphatest_fragment:eD,alphatest_pars_fragment:nD,aomap_fragment:iD,aomap_pars_fragment:aD,batching_pars_vertex:sD,batching_vertex:rD,begin_vertex:oD,beginnormal_vertex:lD,bsdfs:uD,iridescence_fragment:cD,bumpmap_pars_fragment:fD,clipping_planes_fragment:hD,clipping_planes_pars_fragment:dD,clipping_planes_pars_vertex:pD,clipping_planes_vertex:mD,color_fragment:gD,color_pars_fragment:vD,color_pars_vertex:_D,color_vertex:yD,common:xD,cube_uv_reflection_fragment:SD,defaultnormal_vertex:MD,displacementmap_pars_vertex:ED,displacementmap_vertex:TD,emissivemap_fragment:bD,emissivemap_pars_fragment:AD,colorspace_fragment:RD,colorspace_pars_fragment:CD,envmap_fragment:wD,envmap_common_pars_fragment:DD,envmap_pars_fragment:UD,envmap_pars_vertex:LD,envmap_physical_pars_fragment:kD,envmap_vertex:ND,fog_vertex:OD,fog_pars_vertex:PD,fog_fragment:BD,fog_pars_fragment:zD,gradientmap_pars_fragment:FD,lightmap_pars_fragment:ID,lights_lambert_fragment:VD,lights_lambert_pars_fragment:HD,lights_pars_begin:GD,lights_toon_fragment:XD,lights_toon_pars_fragment:WD,lights_phong_fragment:qD,lights_phong_pars_fragment:YD,lights_physical_fragment:jD,lights_physical_pars_fragment:KD,lights_fragment_begin:ZD,lights_fragment_maps:QD,lights_fragment_end:JD,logdepthbuf_fragment:$D,logdepthbuf_pars_fragment:t3,logdepthbuf_pars_vertex:e3,logdepthbuf_vertex:n3,map_fragment:i3,map_pars_fragment:a3,map_particle_fragment:s3,map_particle_pars_fragment:r3,metalnessmap_fragment:o3,metalnessmap_pars_fragment:l3,morphinstance_vertex:u3,morphcolor_vertex:c3,morphnormal_vertex:f3,morphtarget_pars_vertex:h3,morphtarget_vertex:d3,normal_fragment_begin:p3,normal_fragment_maps:m3,normal_pars_fragment:g3,normal_pars_vertex:v3,normal_vertex:_3,normalmap_pars_fragment:y3,clearcoat_normal_fragment_begin:x3,clearcoat_normal_fragment_maps:S3,clearcoat_pars_fragment:M3,iridescence_pars_fragment:E3,opaque_fragment:T3,packing:b3,premultiplied_alpha_fragment:A3,project_vertex:R3,dithering_fragment:C3,dithering_pars_fragment:w3,roughnessmap_fragment:D3,roughnessmap_pars_fragment:U3,shadowmap_pars_fragment:L3,shadowmap_pars_vertex:N3,shadowmap_vertex:O3,shadowmask_pars_fragment:P3,skinbase_vertex:B3,skinning_pars_vertex:z3,skinning_vertex:F3,skinnormal_vertex:I3,specularmap_fragment:V3,specularmap_pars_fragment:H3,tonemapping_fragment:G3,tonemapping_pars_fragment:k3,transmission_fragment:X3,transmission_pars_fragment:W3,uv_pars_fragment:q3,uv_pars_vertex:Y3,uv_vertex:j3,worldpos_vertex:K3,background_vert:Z3,background_frag:Q3,backgroundCube_vert:J3,backgroundCube_frag:$3,cube_vert:tU,cube_frag:eU,depth_vert:nU,depth_frag:iU,distanceRGBA_vert:aU,distanceRGBA_frag:sU,equirect_vert:rU,equirect_frag:oU,linedashed_vert:lU,linedashed_frag:uU,meshbasic_vert:cU,meshbasic_frag:fU,meshlambert_vert:hU,meshlambert_frag:dU,meshmatcap_vert:pU,meshmatcap_frag:mU,meshnormal_vert:gU,meshnormal_frag:vU,meshphong_vert:_U,meshphong_frag:yU,meshphysical_vert:xU,meshphysical_frag:SU,meshtoon_vert:MU,meshtoon_frag:EU,points_vert:TU,points_frag:bU,shadow_vert:AU,shadow_frag:RU,sprite_vert:CU,sprite_frag:wU},Nt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Xi={basic:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:In([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:In([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:In([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:In([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:In([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:In([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:In([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:In([Nt.lights,Nt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Xi.physical={uniforms:In([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Ec={r:0,b:0,g:0},zs=new ba,DU=new gn;function UU(a,t,n,s,o,u,c){const h=new Ne(0);let m=u===!0?0:1,d,g,v=null,_=0,M=null;function T(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function b(U){let C=!1;const z=T(U);z===null?y(h,m):z&&z.isColor&&(y(z,1),C=!0);const F=a.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(a.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function E(U,C){const z=T(C);z&&(z.isCubeTexture||z.mapping===Jc)?(g===void 0&&(g=new bi(new Hl(1,1,1),new Aa({name:"BackgroundCubeMaterial",uniforms:lo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),zs.copy(C.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(DU.makeRotationFromEuler(zs)),g.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ge,(v!==z||_!==z.version||M!==a.toneMapping)&&(g.material.needsUpdate=!0,v=z,_=z.version,M=a.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new bi(new Ks(2,2),new Aa({name:"BackgroundMaterial",uniforms:lo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ue.getTransfer(z.colorSpace)!==Ge,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||_!==z.version||M!==a.toneMapping)&&(d.material.needsUpdate=!0,v=z,_=z.version,M=a.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function y(U,C){U.getRGB(Ec,sE(a)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,C,c)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),m=C,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,y(h,m)},render:b,addToRenderList:E,dispose:N}}function LU(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},o=_(null);let u=o,c=!1;function h(w,H,tt,ut,ht){let dt=!1;const B=v(ut,tt,H);u!==B&&(u=B,d(u.object)),dt=M(w,ut,tt,ht),dt&&T(w,ut,tt,ht),ht!==null&&t.update(ht,a.ELEMENT_ARRAY_BUFFER),(dt||c)&&(c=!1,C(w,H,tt,ut),ht!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return a.createVertexArray()}function d(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function v(w,H,tt){const ut=tt.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let dt=ht[H.id];dt===void 0&&(dt={},ht[H.id]=dt);let B=dt[ut];return B===void 0&&(B=_(m()),dt[ut]=B),B}function _(w){const H=[],tt=[],ut=[];for(let ht=0;ht<n;ht++)H[ht]=0,tt[ht]=0,ut[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:tt,attributeDivisors:ut,object:w,attributes:{},index:null}}function M(w,H,tt,ut){const ht=u.attributes,dt=H.attributes;let B=0;const Y=tt.getAttributes();for(const W in Y)if(Y[W].location>=0){const xt=ht[W];let O=dt[W];if(O===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;B++}return u.attributesNum!==B||u.index!==ut}function T(w,H,tt,ut){const ht={},dt=H.attributes;let B=0;const Y=tt.getAttributes();for(const W in Y)if(Y[W].location>=0){let xt=dt[W];xt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),ht[W]=O,B++}u.attributes=ht,u.attributesNum=B,u.index=ut}function b(){const w=u.newAttributes;for(let H=0,tt=w.length;H<tt;H++)w[H]=0}function E(w){y(w,0)}function y(w,H){const tt=u.newAttributes,ut=u.enabledAttributes,ht=u.attributeDivisors;tt[w]=1,ut[w]===0&&(a.enableVertexAttribArray(w),ut[w]=1),ht[w]!==H&&(a.vertexAttribDivisor(w,H),ht[w]=H)}function N(){const w=u.newAttributes,H=u.enabledAttributes;for(let tt=0,ut=H.length;tt<ut;tt++)H[tt]!==w[tt]&&(a.disableVertexAttribArray(tt),H[tt]=0)}function U(w,H,tt,ut,ht,dt,B){B===!0?a.vertexAttribIPointer(w,H,tt,ht,dt):a.vertexAttribPointer(w,H,tt,ut,ht,dt)}function C(w,H,tt,ut){b();const ht=ut.attributes,dt=tt.getAttributes(),B=H.defaultAttributeValues;for(const Y in dt){const W=dt[Y];if(W.location>=0){let vt=ht[Y];if(vt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const xt=vt.normalized,O=vt.itemSize,nt=t.get(vt);if(nt===void 0)continue;const St=nt.buffer,bt=nt.type,Dt=nt.bytesPerElement,it=bt===a.INT||bt===a.UNSIGNED_INT||vt.gpuType===Jm;if(vt.isInterleavedBufferAttribute){const ct=vt.data,Ct=ct.stride,zt=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)y(W.location+qt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let qt=0;qt<W.locationSize;qt++)E(W.location+qt);a.bindBuffer(a.ARRAY_BUFFER,St);for(let qt=0;qt<W.locationSize;qt++)U(W.location+qt,O/W.locationSize,bt,xt,Ct*Dt,(zt+O/W.locationSize*qt)*Dt,it)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)y(W.location+ct,vt.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<W.locationSize;ct++)E(W.location+ct);a.bindBuffer(a.ARRAY_BUFFER,St);for(let ct=0;ct<W.locationSize;ct++)U(W.location+ct,O/W.locationSize,bt,xt,O*Dt,O/W.locationSize*ct*Dt,it)}}else if(B!==void 0){const xt=B[Y];if(xt!==void 0)switch(xt.length){case 2:a.vertexAttrib2fv(W.location,xt);break;case 3:a.vertexAttrib3fv(W.location,xt);break;case 4:a.vertexAttrib4fv(W.location,xt);break;default:a.vertexAttrib1fv(W.location,xt)}}}}N()}function z(){k();for(const w in s){const H=s[w];for(const tt in H){const ut=H[tt];for(const ht in ut)g(ut[ht].object),delete ut[ht];delete H[tt]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const tt in H){const ut=H[tt];for(const ht in ut)g(ut[ht].object),delete ut[ht];delete H[tt]}delete s[w.id]}function P(w){for(const H in s){const tt=s[H];if(tt[w.id]===void 0)continue;const ut=tt[w.id];for(const ht in ut)g(ut[ht].object),delete ut[ht];delete tt[w.id]}}function k(){D(),c=!0,u!==o&&(u=o,d(u.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:E,disableUnusedAttributes:N}}function NU(a,t,n){let s;function o(d){s=d}function u(d,g){a.drawArrays(s,d,g),n.update(g,s,1)}function c(d,g,v){v!==0&&(a.drawArraysInstanced(s,d,g,v),n.update(g,s,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];n.update(M,s,1)}function m(d,g,v,_){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<d.length;T++)c(d[T],g[T],_[T]);else{M.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,v);let T=0;for(let b=0;b<v;b++)T+=g[b]*_[b];n.update(T,s,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function OU(a,t,n,s){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(P){return!(P!==Ti&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ta&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wi&&!k)}function m(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),E=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=T>0,F=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:z,maxSamples:F}}function PU(a){const t=this;let n=null,s=0,o=!1,u=!1;const c=new Vs,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||s!==0||o;return o=_,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,M){const T=v.clippingPlanes,b=v.clipIntersection,E=v.clipShadows,y=a.get(v);if(!o||T===null||T.length===0||u&&!E)u?g(null):d();else{const N=u?0:s,U=N*4;let C=y.clippingState||null;m.value=C,C=g(T,_,U,M);for(let z=0;z!==U;++z)C[z]=n[z];y.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,M,T){const b=v!==null?v.length:0;let E=null;if(b!==0){if(E=m.value,T!==!0||E===null){const y=M+b*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(E===null||E.length<y)&&(E=new Float32Array(y));for(let U=0,C=M;U!==b;++U,C+=4)c.copy(v[U]).applyMatrix4(N,h),c.normal.toArray(E,C),E[C+3]=c.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,E}}function BU(a){let t=new WeakMap;function n(c,h){return h===Fp?c.mapping=so:h===Ip&&(c.mapping=ro),c}function s(c){if(c&&c.isTexture){const h=c.mapping;if(h===Fp||h===Ip)if(t.has(c)){const m=t.get(c).texture;return n(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const d=new Pw(m.height);return d.fromEquirectangularTexture(a,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Jr=4,zx=[.125,.215,.35,.446,.526,.582],ks=20,ep=new qw,Fx=new Ne;let np=null,ip=0,ap=0,sp=!1;const Hs=(1+Math.sqrt(5))/2,qr=1/Hs,Ix=[new rt(-Hs,qr,0),new rt(Hs,qr,0),new rt(-qr,0,Hs),new rt(qr,0,Hs),new rt(0,Hs,-qr),new rt(0,Hs,qr),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],zU=new rt;class Vx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,o=100,u={}){const{size:c=256,position:h=zU}=u;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=sp,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===so||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ho,format:Ti,colorSpace:oo,depthBuffer:!1},o=Hx(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,n,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FU(u)),this._blurMaterial=IU(u,t,n)}return o}_compileMaterial(t){const n=new bi(this._lodPlanes[0],t);this._renderer.compile(n,ep)}_sceneToCubeUV(t,n,s,o,u){const m=new Oi(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Fx),v.toneMapping=os,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const b=new nE({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),E=new bi(new Hl,b);let y=!1;const N=t.background;N?N.isColor&&(b.color.copy(N),t.background=null,y=!0):(b.color.copy(Fx),y=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):C===1?(m.up.set(0,0,d[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const z=this._cubeSize;Tc(o,C*z,U>2?z:0,z,z),v.setRenderTarget(o),y&&v.render(E,m),v.render(t,m)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=M,v.autoClear=_,t.background=N}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===so||t.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new bi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Tc(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(c,ep)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Ix[(o-u-1)%Ix.length];this._blur(t,u-1,u,c,h)}n.autoClear=s}_blur(t,n,s,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,s,o,"latitudinal",u),this._halfBlur(c,t,s,s,o,"longitudinal",u)}_halfBlur(t,n,s,o,u,c,h){const m=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new bi(this._lodPlanes[o],d),_=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ks-1),b=u/T,E=isFinite(u)?1+Math.floor(g*b):ks;E>ks&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${ks}`);const y=[];let N=0;for(let P=0;P<ks;++P){const k=P/b,D=Math.exp(-k*k/2);y.push(D),P===0?N+=D:P<E&&(N+=2*D)}for(let P=0;P<y.length;P++)y[P]=y[P]/N;_.envMap.value=t.texture,_.samples.value=E,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=T,_.mipInt.value=U-s;const C=this._sizeLods[o],z=3*C*(o>U-Jr?o-U+Jr:0),F=4*(this._cubeSize-C);Tc(n,z,F,3*C,2*C),m.setRenderTarget(n),m.render(v,ep)}}function FU(a){const t=[],n=[],s=[];let o=a;const u=a-Jr+1+zx.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);n.push(h);let m=1/h;c>a-Jr?m=zx[c-a+Jr-1]:c===0&&(m=0),s.push(m);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,b=3,E=2,y=1,N=new Float32Array(b*T*M),U=new Float32Array(E*T*M),C=new Float32Array(y*T*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,k=F>2?0:-1,D=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];N.set(D,b*T*F),U.set(_,E*T*F);const w=[F,F,F,F,F,F];C.set(w,y*T*F)}const z=new Ra;z.setAttribute("position",new zi(N,b)),z.setAttribute("uv",new zi(U,E)),z.setAttribute("faceIndex",new zi(C,y)),t.push(z),o>Jr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function Hx(a,t,n){const s=new fs(a,t,n);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(a,t,n,s,o){a.viewport.set(t,n,s,o),a.scissor.set(t,n,s,o)}function IU(a,t,n){const s=new Float32Array(ks),o=new rt(0,1,0);return new Aa({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sg(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Gx(){return new Aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sg(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function kx(){return new Aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function sg(){return`

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
	`}function VU(a){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,d=m===Fp||m===Ip,g=m===so||m===ro;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Vx(a)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return d&&M&&M.height>0||g&&M&&o(M)?(n===null&&(n=new Vx(a)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function u(h){const m=h.target;m.removeEventListener("dispose",u);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function HU(a){const t={};function n(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(s)}return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Ll("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function GU(a,t,n,s){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const T in _.attributes)t.remove(_.attributes[T]);_.removeEventListener("dispose",c),delete o[_.id];const M=u.get(_);M&&(t.remove(M),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)t.update(_[M],a.ARRAY_BUFFER)}function d(v){const _=[],M=v.index,T=v.attributes.position;let b=0;if(M!==null){const N=M.array;b=M.version;for(let U=0,C=N.length;U<C;U+=3){const z=N[U+0],F=N[U+1],P=N[U+2];_.push(z,F,F,P,P,z)}}else if(T!==void 0){const N=T.array;b=T.version;for(let U=0,C=N.length/3-1;U<C;U+=3){const z=U+0,F=U+1,P=U+2;_.push(z,F,F,P,P,z)}}else return;const E=new(QM(_)?aE:iE)(_,1);E.version=b;const y=u.get(v);y&&t.remove(y),u.set(v,E)}function g(v){const _=u.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function kU(a,t,n){let s;function o(_){s=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function m(_,M){a.drawElements(s,M,u,_*c),n.update(M,s,1)}function d(_,M,T){T!==0&&(a.drawElementsInstanced(s,M,u,_*c,T),n.update(M,s,T))}function g(_,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,_,0,T);let E=0;for(let y=0;y<T;y++)E+=M[y];n.update(E,s,1)}function v(_,M,T,b){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<_.length;y++)d(_[y]/c,M[y],b[y]);else{E.multiDrawElementsInstancedWEBGL(s,M,0,u,_,0,b,0,T);let y=0;for(let N=0;N<T;N++)y+=M[N]*b[N];n.update(y,s,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function XU(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,h){switch(n.calls++,c){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function WU(a,t,n){const s=new WeakMap,o=new an;function u(c,h,m){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let w=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var M=w;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),b===!0&&(C=2),E===!0&&(C=3);let z=h.attributes.position.count*C,F=1;z>t.maxTextureSize&&(F=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*F*4*v),k=new JM(P,z,F,v);k.type=Wi,k.needsUpdate=!0;const D=C*4;for(let H=0;H<v;H++){const tt=y[H],ut=N[H],ht=U[H],dt=z*F*4*H;for(let B=0;B<tt.count;B++){const Y=B*D;T===!0&&(o.fromBufferAttribute(tt,B),P[dt+Y+0]=o.x,P[dt+Y+1]=o.y,P[dt+Y+2]=o.z,P[dt+Y+3]=0),b===!0&&(o.fromBufferAttribute(ut,B),P[dt+Y+4]=o.x,P[dt+Y+5]=o.y,P[dt+Y+6]=o.z,P[dt+Y+7]=0),E===!0&&(o.fromBufferAttribute(ht,B),P[dt+Y+8]=o.x,P[dt+Y+9]=o.y,P[dt+Y+10]=o.z,P[dt+Y+11]=ht.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new ce(z,F)},s.set(h,_),h.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",c.morphTexture,n);else{let T=0;for(let E=0;E<d.length;E++)T+=d[E];const b=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:u}}function qU(a,t,n,s){let o=new WeakMap;function u(m){const d=s.render.frame,g=m.geometry,v=t.get(m,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==d&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,d))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function c(){o=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const fE=new Hn,Xx=new lE(1,1),hE=new JM,dE=new _w,pE=new rE,Wx=[],qx=[],Yx=new Float32Array(16),jx=new Float32Array(9),Kx=new Float32Array(4);function mo(a,t,n){const s=a[0];if(s<=0||s>0)return a;const o=t*n;let u=Wx[o];if(u===void 0&&(u=new Float32Array(o),Wx[o]=u),t!==0){s.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,a[c].toArray(u,h)}return u}function yn(a,t){if(a.length!==t.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==t[n])return!1;return!0}function xn(a,t){for(let n=0,s=t.length;n<s;n++)a[n]=t[n]}function tf(a,t){let n=qx[t];n===void 0&&(n=new Int32Array(t),qx[t]=n);for(let s=0;s!==t;++s)n[s]=a.allocateTextureUnit();return n}function YU(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function jU(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2fv(this.addr,t),xn(n,t)}}function KU(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;a.uniform3fv(this.addr,t),xn(n,t)}}function ZU(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4fv(this.addr,t),xn(n,t)}}function QU(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(yn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,s))return;Kx.set(s),a.uniformMatrix2fv(this.addr,!1,Kx),xn(n,s)}}function JU(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(yn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,s))return;jx.set(s),a.uniformMatrix3fv(this.addr,!1,jx),xn(n,s)}}function $U(a,t){const n=this.cache,s=t.elements;if(s===void 0){if(yn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,s))return;Yx.set(s),a.uniformMatrix4fv(this.addr,!1,Yx),xn(n,s)}}function tL(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function eL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2iv(this.addr,t),xn(n,t)}}function nL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;a.uniform3iv(this.addr,t),xn(n,t)}}function iL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4iv(this.addr,t),xn(n,t)}}function aL(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function sL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;a.uniform2uiv(this.addr,t),xn(n,t)}}function rL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;a.uniform3uiv(this.addr,t),xn(n,t)}}function oL(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;a.uniform4uiv(this.addr,t),xn(n,t)}}function lL(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(Xx.compareFunction=ZM,u=Xx):u=fE,n.setTexture2D(t||u,o)}function uL(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||dE,o)}function cL(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||pE,o)}function fL(a,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||hE,o)}function hL(a){switch(a){case 5126:return YU;case 35664:return jU;case 35665:return KU;case 35666:return ZU;case 35674:return QU;case 35675:return JU;case 35676:return $U;case 5124:case 35670:return tL;case 35667:case 35671:return eL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return aL;case 36294:return sL;case 36295:return rL;case 36296:return oL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return fL}}function dL(a,t){a.uniform1fv(this.addr,t)}function pL(a,t){const n=mo(t,this.size,2);a.uniform2fv(this.addr,n)}function mL(a,t){const n=mo(t,this.size,3);a.uniform3fv(this.addr,n)}function gL(a,t){const n=mo(t,this.size,4);a.uniform4fv(this.addr,n)}function vL(a,t){const n=mo(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function _L(a,t){const n=mo(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function yL(a,t){const n=mo(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function xL(a,t){a.uniform1iv(this.addr,t)}function SL(a,t){a.uniform2iv(this.addr,t)}function ML(a,t){a.uniform3iv(this.addr,t)}function EL(a,t){a.uniform4iv(this.addr,t)}function TL(a,t){a.uniform1uiv(this.addr,t)}function bL(a,t){a.uniform2uiv(this.addr,t)}function AL(a,t){a.uniform3uiv(this.addr,t)}function RL(a,t){a.uniform4uiv(this.addr,t)}function CL(a,t,n){const s=this.cache,o=t.length,u=tf(n,o);yn(s,u)||(a.uniform1iv(this.addr,u),xn(s,u));for(let c=0;c!==o;++c)n.setTexture2D(t[c]||fE,u[c])}function wL(a,t,n){const s=this.cache,o=t.length,u=tf(n,o);yn(s,u)||(a.uniform1iv(this.addr,u),xn(s,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||dE,u[c])}function DL(a,t,n){const s=this.cache,o=t.length,u=tf(n,o);yn(s,u)||(a.uniform1iv(this.addr,u),xn(s,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||pE,u[c])}function UL(a,t,n){const s=this.cache,o=t.length,u=tf(n,o);yn(s,u)||(a.uniform1iv(this.addr,u),xn(s,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||hE,u[c])}function LL(a){switch(a){case 5126:return dL;case 35664:return pL;case 35665:return mL;case 35666:return gL;case 35674:return vL;case 35675:return _L;case 35676:return yL;case 5124:case 35670:return xL;case 35667:case 35671:return SL;case 35668:case 35672:return ML;case 35669:case 35673:return EL;case 5125:return TL;case 36294:return bL;case 36295:return AL;case 36296:return RL;case 35678:case 36198:case 36298:case 36306:case 35682:return CL;case 35679:case 36299:case 36307:return wL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return UL}}class NL{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=hL(n.type)}}class OL{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LL(n.type)}}class PL{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],s)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Zx(a,t){a.seq.push(t),a.map[t.id]=t}function BL(a,t,n){const s=a.name,o=s.length;for(rp.lastIndex=0;;){const u=rp.exec(s),c=rp.lastIndex;let h=u[1];const m=u[2]==="]",d=u[3];if(m&&(h=h|0),d===void 0||d==="["&&c+2===o){Zx(n,d===void 0?new NL(h,a,t):new OL(h,a,t));break}else{let v=n.map[h];v===void 0&&(v=new PL(h),Zx(n,v)),n=v}}}class Bc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const u=t.getActiveUniform(n,o),c=t.getUniformLocation(n,u.name);BL(u,c,this)}}setValue(t,n,s,o){const u=this.map[n];u!==void 0&&u.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&s.push(c)}return s}}function Qx(a,t,n){const s=a.createShader(t);return a.shaderSource(s,n),a.compileShader(s),s}const zL=37297;let FL=0;function IL(a,t){const n=a.split(`
`),s=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;s.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return s.join(`
`)}const Jx=new pe;function VL(a){Ue._getMatrix(Jx,Ue.workingColorSpace,a);const t=`mat3( ${Jx.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(a)){case Gc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function $x(a,t,n){const s=a.getShaderParameter(t,a.COMPILE_STATUS),u=(a.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+IL(a.getShaderSource(t),h)}else return u}function HL(a,t){const n=VL(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GL(a,t){let n;switch(t){case W2:n="Linear";break;case q2:n="Reinhard";break;case Y2:n="Cineon";break;case j2:n="ACESFilmic";break;case Z2:n="AgX";break;case Q2:n="Neutral";break;case K2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bc=new rt;function kL(){Ue.getLuminanceCoefficients(bc);const a=bc.x.toFixed(4),t=bc.y.toFixed(4),n=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XL(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function WL(a){const t=[];for(const n in a){const s=a[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function qL(a,t){const n={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const u=a.getActiveAttrib(t,o),c=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:a.getAttribLocation(t,c),locationSize:h}}return n}function gl(a){return a!==""}function tS(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eS(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YL=/^[ \t]*#include +<([\w\d./]+)>/gm;function vm(a){return a.replace(YL,KL)}const jL=new Map;function KL(a,t){let n=me[t];if(n===void 0){const s=jL.get(t);if(s!==void 0)n=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return vm(n)}const ZL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nS(a){return a.replace(ZL,QL)}function QL(a,t,n,s){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function iS(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JL(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===IM?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===T2?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===_a&&(t="SHADOWMAP_TYPE_VSM"),t}function $L(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case so:case ro:t="ENVMAP_TYPE_CUBE";break;case Jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tN(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ro:t="ENVMAP_MODE_REFRACTION";break}return t}function eN(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case VM:t="ENVMAP_BLENDING_MULTIPLY";break;case k2:t="ENVMAP_BLENDING_MIX";break;case X2:t="ENVMAP_BLENDING_ADD";break}return t}function nN(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function iN(a,t,n,s){const o=a.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const m=JL(n),d=$L(n),g=tN(n),v=eN(n),_=nN(n),M=XL(n),T=WL(u),b=o.createProgram();let E,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(gl).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(gl).join(`
`),y.length>0&&(y+=`
`)):(E=[iS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),y=[iS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==os?"#define TONE_MAPPING":"",n.toneMapping!==os?me.tonemapping_pars_fragment:"",n.toneMapping!==os?GL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,HL("linearToOutputTexel",n.outputColorSpace),kL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gl).join(`
`)),c=vm(c),c=tS(c,n),c=eS(c,n),h=vm(h),h=tS(h,n),h=eS(h,n),c=nS(c),h=nS(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",n.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=N+E+c,C=N+y+h,z=Qx(o,o.VERTEX_SHADER,U),F=Qx(o,o.FRAGMENT_SHADER,C);o.attachShader(b,z),o.attachShader(b,F),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function P(H){if(a.debug.checkShaderErrors){const tt=o.getProgramInfoLog(b)||"",ut=o.getShaderInfoLog(z)||"",ht=o.getShaderInfoLog(F)||"",dt=tt.trim(),B=ut.trim(),Y=ht.trim();let W=!0,vt=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,z,F);else{const xt=$x(o,z,"vertex"),O=$x(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+dt+`
`+xt+`
`+O)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(B===""||Y==="")&&(vt=!1);vt&&(H.diagnostics={runnable:W,programLog:dt,vertexShader:{log:B,prefix:E},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(z),o.deleteShader(F),k=new Bc(o,b),D=qL(o,b)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(b,zL)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FL++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=F,this}let aN=0;class sN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(s),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new rN(t),n.set(t,s)),s}}class rN{constructor(t){this.id=aN++,this.code=t,this.usedTimes=0}}function oN(a,t,n,s,o,u,c){const h=new tE,m=new sN,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return d.add(D),D===0?"uv":`uv${D}`}function E(D,w,H,tt,ut){const ht=tt.fog,dt=ut.geometry,B=D.isMeshStandardMaterial?tt.environment:null,Y=(D.isMeshStandardMaterial?n:t).get(D.envMap||B),W=Y&&Y.mapping===Jc?Y.image.height:null,vt=T[D.type];D.precision!==null&&(M=o.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const xt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,O=xt!==void 0?xt.length:0;let nt=0;dt.morphAttributes.position!==void 0&&(nt=1),dt.morphAttributes.normal!==void 0&&(nt=2),dt.morphAttributes.color!==void 0&&(nt=3);let St,bt,Dt,it;if(vt){const Re=Xi[vt];St=Re.vertexShader,bt=Re.fragmentShader}else St=D.vertexShader,bt=D.fragmentShader,m.update(D),Dt=m.getVertexShaderID(D),it=m.getFragmentShaderID(D);const ct=a.getRenderTarget(),Ct=a.state.buffers.depth.getReversed(),zt=ut.isInstancedMesh===!0,qt=ut.isBatchedMesh===!0,he=!!D.map,$e=!!D.matcap,V=!!Y,Ae=!!D.aoMap,ae=!!D.lightMap,ee=!!D.bumpMap,Yt=!!D.normalMap,Ee=!!D.displacementMap,It=!!D.emissiveMap,re=!!D.metalnessMap,Ye=!!D.roughnessMap,We=D.anisotropy>0,L=D.clearcoat>0,x=D.dispersion>0,G=D.iridescence>0,Q=D.sheen>0,ft=D.transmission>0,at=We&&!!D.anisotropyMap,Pt=L&&!!D.clearcoatMap,At=L&&!!D.clearcoatNormalMap,Vt=L&&!!D.clearcoatRoughnessMap,jt=G&&!!D.iridescenceMap,Et=G&&!!D.iridescenceThicknessMap,Rt=Q&&!!D.sheenColorMap,Zt=Q&&!!D.sheenRoughnessMap,Bt=!!D.specularMap,Ut=!!D.specularColorMap,ue=!!D.specularIntensityMap,q=ft&&!!D.transmissionMap,Tt=ft&&!!D.thicknessMap,wt=!!D.gradientMap,Ft=!!D.alphaMap,Mt=D.alphaTest>0,_t=!!D.alphaHash,Ht=!!D.extensions;let oe=os;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(oe=a.toneMapping);const Be={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:bt,defines:D.defines,customVertexShaderID:Dt,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:qt,batchingColor:qt&&ut._colorsTexture!==null,instancing:zt,instancingColor:zt&&ut.instanceColor!==null,instancingMorph:zt&&ut.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ct===null?a.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:oo,alphaToCoverage:!!D.alphaToCoverage,map:he,matcap:$e,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:ae,bumpMap:ee,normalMap:Yt,displacementMap:_&&Ee,emissiveMap:It,normalMapObjectSpace:Yt&&D.normalMapType===nw,normalMapTangentSpace:Yt&&D.normalMapType===ew,metalnessMap:re,roughnessMap:Ye,anisotropy:We,anisotropyMap:at,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:Vt,dispersion:x,iridescence:G,iridescenceMap:jt,iridescenceThicknessMap:Et,sheen:Q,sheenColorMap:Rt,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Ut,specularIntensityMap:ue,transmission:ft,transmissionMap:q,thicknessMap:Tt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===to&&D.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:_t,combine:D.combine,mapUv:he&&b(D.map.channel),aoMapUv:Ae&&b(D.aoMap.channel),lightMapUv:ae&&b(D.lightMap.channel),bumpMapUv:ee&&b(D.bumpMap.channel),normalMapUv:Yt&&b(D.normalMap.channel),displacementMapUv:Ee&&b(D.displacementMap.channel),emissiveMapUv:It&&b(D.emissiveMap.channel),metalnessMapUv:re&&b(D.metalnessMap.channel),roughnessMapUv:Ye&&b(D.roughnessMap.channel),anisotropyMapUv:at&&b(D.anisotropyMap.channel),clearcoatMapUv:Pt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(D.sheenRoughnessMap.channel),specularMapUv:Bt&&b(D.specularMap.channel),specularColorMapUv:Ut&&b(D.specularColorMap.channel),specularIntensityMapUv:ue&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:Tt&&b(D.thicknessMap.channel),alphaMapUv:Ft&&b(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Yt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!dt.attributes.uv&&(he||Ft),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:ut.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:oe,decodeVideoTexture:he&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ya,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ht&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&D.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Be.vertexUv1s=d.has(1),Be.vertexUv2s=d.has(2),Be.vertexUv3s=d.has(3),d.clear(),Be}function y(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)w.push(H),w.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(N(w,D),U(w,D),w.push(a.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function N(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=T[D.type];let H;if(w){const tt=Xi[w];H=Uw.clone(tt.uniforms)}else H=D.uniforms;return H}function z(D,w){let H;for(let tt=0,ut=g.length;tt<ut;tt++){const ht=g[tt];if(ht.cacheKey===w){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new iN(a,w,D,u),g.push(H)),H}function F(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function k(){m.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:C,acquireProgram:z,releaseProgram:F,releaseShaderCache:P,programs:g,dispose:k}}function lN(){let a=new WeakMap;function t(c){return a.has(c)}function n(c){let h=a.get(c);return h===void 0&&(h={},a.set(c,h)),h}function s(c){a.delete(c)}function o(c,h,m){a.get(c)[h]=m}function u(){a=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:u}}function uN(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function aS(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function sS(){const a=[];let t=0;const n=[],s=[],o=[];function u(){t=0,n.length=0,s.length=0,o.length=0}function c(v,_,M,T,b,E){let y=a[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:M,groupOrder:T,renderOrder:v.renderOrder,z:b,group:E},a[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=M,y.groupOrder=T,y.renderOrder=v.renderOrder,y.z=b,y.group=E),t++,y}function h(v,_,M,T,b,E){const y=c(v,_,M,T,b,E);M.transmission>0?s.push(y):M.transparent===!0?o.push(y):n.push(y)}function m(v,_,M,T,b,E){const y=c(v,_,M,T,b,E);M.transmission>0?s.unshift(y):M.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||uN),s.length>1&&s.sort(_||aS),o.length>1&&o.sort(_||aS)}function g(){for(let v=t,_=a.length;v<_;v++){const M=a[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:u,push:h,unshift:m,finish:g,sort:d}}function cN(){let a=new WeakMap;function t(s,o){const u=a.get(s);let c;return u===void 0?(c=new sS,a.set(s,[c])):o>=u.length?(c=new sS,u.push(c)):c=u[o],c}function n(){a=new WeakMap}return{get:t,dispose:n}}function fN(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new Ne};break;case"SpotLight":n={position:new rt,direction:new rt,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return a[t.id]=n,n}}}function hN(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let dN=0;function pN(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function mN(a){const t=new fN,n=hN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new rt);const o=new rt,u=new gn,c=new gn;function h(d){let g=0,v=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,b=0,E=0,y=0,N=0,U=0,C=0,z=0,F=0,P=0;d.sort(pN);for(let D=0,w=d.length;D<w;D++){const H=d[D],tt=H.color,ut=H.intensity,ht=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=tt.r*ut,v+=tt.g*ut,_+=tt.b*ut;else if(H.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(H.sh.coefficients[B],ut);P++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=dt,s.directionalShadowMatrix[M]=H.shadow.matrix,N++}s.directional[M]=B,M++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(tt).multiplyScalar(ut),B.distance=ht,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,s.spot[b]=B;const Y=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,Y.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[b]=Y.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=dt,C++}b++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(tt).multiplyScalar(ut),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),s.rectArea[E]=B,E++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,s.pointShadow[T]=W,s.pointShadowMap[T]=dt,s.pointShadowMatrix[T]=H.shadow.matrix,U++}s.point[T]=B,T++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(ut),B.groundColor.copy(H.groundColor).multiplyScalar(ut),s.hemi[y]=B,y++}}E>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==M||k.pointLength!==T||k.spotLength!==b||k.rectAreaLength!==E||k.hemiLength!==y||k.numDirectionalShadows!==N||k.numPointShadows!==U||k.numSpotShadows!==C||k.numSpotMaps!==z||k.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=E,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=P,k.directionalLength=M,k.pointLength=T,k.spotLength=b,k.rectAreaLength=E,k.hemiLength=y,k.numDirectionalShadows=N,k.numPointShadows=U,k.numSpotShadows=C,k.numSpotMaps=z,k.numLightProbes=P,s.version=dN++)}function m(d,g){let v=0,_=0,M=0,T=0,b=0;const E=g.matrixWorldInverse;for(let y=0,N=d.length;y<N;y++){const U=d[y];if(U.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),v++}else if(U.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),M++}else if(U.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(E),c.identity(),u.copy(U.matrixWorld),u.premultiply(E),c.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(E),_++}else if(U.isHemisphereLight){const C=s.hemi[b];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(E),b++}}}return{setup:h,setupView:m,state:s}}function rS(a){const t=new mN(a),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function u(g){n.push(g)}function c(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:c}}function gN(a){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new rS(a),t.set(o,[h])):u>=c.length?(h=new rS(a),c.push(h)):h=c[u],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const vN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_N=`uniform sampler2D shadow_pass;
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
}`;function yN(a,t,n){let s=new oE;const o=new ce,u=new ce,c=new an,h=new Xw({depthPacking:tw}),m=new Ww,d={},g=n.maxTextureSize,v={[cs]:Qn,[Qn]:cs,[ya]:ya},_=new Aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:vN,fragmentShader:_N}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ra;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bi(T,_),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=IM;let y=this.type;this.render=function(F,P,k){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||F.length===0)return;const D=a.getRenderTarget(),w=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),tt=a.state;tt.setBlending(rs),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ut=y!==_a&&this.type===_a,ht=y===_a&&this.type!==_a;for(let dt=0,B=F.length;dt<B;dt++){const Y=F[dt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const vt=W.getFrameExtents();if(o.multiply(vt),u.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/vt.x),o.x=u.x*vt.x,W.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/vt.y),o.y=u.y*vt.y,W.mapSize.y=u.y)),W.map===null||ut===!0||ht===!0){const O=this.type!==_a?{minFilter:ui,magFilter:ui}:{};W.map!==null&&W.map.dispose(),W.map=new fs(o.x,o.y,O),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const xt=W.getViewportCount();for(let O=0;O<xt;O++){const nt=W.getViewport(O);c.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),tt.viewport(c),W.updateMatrices(Y,O),s=W.getFrustum(),C(P,k,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===_a&&N(W,k),W.needsUpdate=!1}y=this.type,E.needsUpdate=!1,a.setRenderTarget(D,w,H)};function N(F,P){const k=t.update(b);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new fs(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(P,null,k,_,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(P,null,k,M,b,null)}function U(F,P,k,D){let w=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)w=H;else if(w=k.isPointLight===!0?m:h,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const tt=w.uuid,ut=P.uuid;let ht=d[tt];ht===void 0&&(ht={},d[tt]=ht);let dt=ht[ut];dt===void 0&&(dt=w.clone(),ht[ut]=dt,P.addEventListener("dispose",z)),w=dt}if(w.visible=P.visible,w.wireframe=P.wireframe,D===_a?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:v[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const tt=a.properties.get(w);tt.light=k}return w}function C(F,P,k,D,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===_a)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ut=t.update(F),ht=F.material;if(Array.isArray(ht)){const dt=ut.groups;for(let B=0,Y=dt.length;B<Y;B++){const W=dt[B],vt=ht[W.materialIndex];if(vt&&vt.visible){const xt=U(F,vt,D,w);F.onBeforeShadow(a,F,P,k,ut,xt,W),a.renderBufferDirect(k,null,ut,xt,F,W),F.onAfterShadow(a,F,P,k,ut,xt,W)}}}else if(ht.visible){const dt=U(F,ht,D,w);F.onBeforeShadow(a,F,P,k,ut,dt,null),a.renderBufferDirect(k,null,ut,dt,F,null),F.onAfterShadow(a,F,P,k,ut,dt,null)}}const tt=F.children;for(let ut=0,ht=tt.length;ut<ht;ut++)C(tt[ut],P,k,D,w)}function z(F){F.target.removeEventListener("dispose",z);for(const k in d){const D=d[k],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const xN={[Up]:Lp,[Np]:Bp,[Op]:zp,[ao]:Pp,[Lp]:Up,[Bp]:Np,[zp]:Op,[Pp]:ao};function SN(a,t){function n(){let q=!1;const Tt=new an;let wt=null;const Ft=new an(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!q&&(a.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,_t,Ht,oe,Be){Be===!0&&(Mt*=oe,_t*=oe,Ht*=oe),Tt.set(Mt,_t,Ht,oe),Ft.equals(Tt)===!1&&(a.clearColor(Mt,_t,Ht,oe),Ft.copy(Tt))},reset:function(){q=!1,wt=null,Ft.set(-1,0,0,0)}}}function s(){let q=!1,Tt=!1,wt=null,Ft=null,Mt=null;return{setReversed:function(_t){if(Tt!==_t){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const oe=Mt;Mt=null,this.setClear(oe)}},getReversed:function(){return Tt},setTest:function(_t){_t?ct(a.DEPTH_TEST):Ct(a.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!q&&(a.depthMask(_t),wt=_t)},setFunc:function(_t){if(Tt&&(_t=xN[_t]),Ft!==_t){switch(_t){case Up:a.depthFunc(a.NEVER);break;case Lp:a.depthFunc(a.ALWAYS);break;case Np:a.depthFunc(a.LESS);break;case ao:a.depthFunc(a.LEQUAL);break;case Op:a.depthFunc(a.EQUAL);break;case Pp:a.depthFunc(a.GEQUAL);break;case Bp:a.depthFunc(a.GREATER);break;case zp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ft=_t}},setLocked:function(_t){q=_t},setClear:function(_t){Mt!==_t&&(Tt&&(_t=1-_t),a.clearDepth(_t),Mt=_t)},reset:function(){q=!1,wt=null,Ft=null,Mt=null,Tt=!1}}}function o(){let q=!1,Tt=null,wt=null,Ft=null,Mt=null,_t=null,Ht=null,oe=null,Be=null;return{setTest:function(Re){q||(Re?ct(a.STENCIL_TEST):Ct(a.STENCIL_TEST))},setMask:function(Re){Tt!==Re&&!q&&(a.stencilMask(Re),Tt=Re)},setFunc:function(Re,Bn,ci){(wt!==Re||Ft!==Bn||Mt!==ci)&&(a.stencilFunc(Re,Bn,ci),wt=Re,Ft=Bn,Mt=ci)},setOp:function(Re,Bn,ci){(_t!==Re||Ht!==Bn||oe!==ci)&&(a.stencilOp(Re,Bn,ci),_t=Re,Ht=Bn,oe=ci)},setLocked:function(Re){q=Re},setClear:function(Re){Be!==Re&&(a.clearStencil(Re),Be=Re)},reset:function(){q=!1,Tt=null,wt=null,Ft=null,Mt=null,_t=null,Ht=null,oe=null,Be=null}}}const u=new n,c=new s,h=new o,m=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,M=[],T=null,b=!1,E=null,y=null,N=null,U=null,C=null,z=null,F=null,P=new Ne(0,0,0),k=0,D=!1,w=null,H=null,tt=null,ut=null,ht=null;const dt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let vt=null,xt={};const O=a.getParameter(a.SCISSOR_BOX),nt=a.getParameter(a.VIEWPORT),St=new an().fromArray(O),bt=new an().fromArray(nt);function Dt(q,Tt,wt,Ft){const Mt=new Uint8Array(4),_t=a.createTexture();a.bindTexture(q,_t),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ht=0;Ht<wt;Ht++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Tt,0,a.RGBA,1,1,Ft,0,a.RGBA,a.UNSIGNED_BYTE,Mt):a.texImage2D(Tt+Ht,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Mt);return _t}const it={};it[a.TEXTURE_2D]=Dt(a.TEXTURE_2D,a.TEXTURE_2D,1),it[a.TEXTURE_CUBE_MAP]=Dt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[a.TEXTURE_2D_ARRAY]=Dt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),it[a.TEXTURE_3D]=Dt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ct(a.DEPTH_TEST),c.setFunc(ao),ee(!1),Yt(lx),ct(a.CULL_FACE),Ae(rs);function ct(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Ct(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function zt(q,Tt){return v[q]!==Tt?(a.bindFramebuffer(q,Tt),v[q]=Tt,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Tt),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Tt),!0):!1}function qt(q,Tt){let wt=M,Ft=!1;if(q){wt=_.get(Tt),wt===void 0&&(wt=[],_.set(Tt,wt));const Mt=q.textures;if(wt.length!==Mt.length||wt[0]!==a.COLOR_ATTACHMENT0){for(let _t=0,Ht=Mt.length;_t<Ht;_t++)wt[_t]=a.COLOR_ATTACHMENT0+_t;wt.length=Mt.length,Ft=!0}}else wt[0]!==a.BACK&&(wt[0]=a.BACK,Ft=!0);Ft&&a.drawBuffers(wt)}function he(q){return T!==q?(a.useProgram(q),T=q,!0):!1}const $e={[Gs]:a.FUNC_ADD,[A2]:a.FUNC_SUBTRACT,[R2]:a.FUNC_REVERSE_SUBTRACT};$e[C2]=a.MIN,$e[w2]=a.MAX;const V={[D2]:a.ZERO,[U2]:a.ONE,[L2]:a.SRC_COLOR,[wp]:a.SRC_ALPHA,[F2]:a.SRC_ALPHA_SATURATE,[B2]:a.DST_COLOR,[O2]:a.DST_ALPHA,[N2]:a.ONE_MINUS_SRC_COLOR,[Dp]:a.ONE_MINUS_SRC_ALPHA,[z2]:a.ONE_MINUS_DST_COLOR,[P2]:a.ONE_MINUS_DST_ALPHA,[I2]:a.CONSTANT_COLOR,[V2]:a.ONE_MINUS_CONSTANT_COLOR,[H2]:a.CONSTANT_ALPHA,[G2]:a.ONE_MINUS_CONSTANT_ALPHA};function Ae(q,Tt,wt,Ft,Mt,_t,Ht,oe,Be,Re){if(q===rs){b===!0&&(Ct(a.BLEND),b=!1);return}if(b===!1&&(ct(a.BLEND),b=!0),q!==b2){if(q!==E||Re!==D){if((y!==Gs||C!==Gs)&&(a.blendEquation(a.FUNC_ADD),y=Gs,C=Gs),Re)switch(q){case to:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Cp:a.blendFunc(a.ONE,a.ONE);break;case ux:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case cx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case to:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Cp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ux:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,U=null,z=null,F=null,P.set(0,0,0),k=0,E=q,D=Re}return}Mt=Mt||Tt,_t=_t||wt,Ht=Ht||Ft,(Tt!==y||Mt!==C)&&(a.blendEquationSeparate($e[Tt],$e[Mt]),y=Tt,C=Mt),(wt!==N||Ft!==U||_t!==z||Ht!==F)&&(a.blendFuncSeparate(V[wt],V[Ft],V[_t],V[Ht]),N=wt,U=Ft,z=_t,F=Ht),(oe.equals(P)===!1||Be!==k)&&(a.blendColor(oe.r,oe.g,oe.b,Be),P.copy(oe),k=Be),E=q,D=!1}function ae(q,Tt){q.side===ya?Ct(a.CULL_FACE):ct(a.CULL_FACE);let wt=q.side===Qn;Tt&&(wt=!wt),ee(wt),q.blending===to&&q.transparent===!1?Ae(rs):Ae(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),u.setMask(q.colorWrite);const Ft=q.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),It(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ct(a.SAMPLE_ALPHA_TO_COVERAGE):Ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function ee(q){w!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),w=q)}function Yt(q){q!==M2?(ct(a.CULL_FACE),q!==H&&(q===lx?a.cullFace(a.BACK):q===E2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ct(a.CULL_FACE),H=q}function Ee(q){q!==tt&&(B&&a.lineWidth(q),tt=q)}function It(q,Tt,wt){q?(ct(a.POLYGON_OFFSET_FILL),(ut!==Tt||ht!==wt)&&(a.polygonOffset(Tt,wt),ut=Tt,ht=wt)):Ct(a.POLYGON_OFFSET_FILL)}function re(q){q?ct(a.SCISSOR_TEST):Ct(a.SCISSOR_TEST)}function Ye(q){q===void 0&&(q=a.TEXTURE0+dt-1),vt!==q&&(a.activeTexture(q),vt=q)}function We(q,Tt,wt){wt===void 0&&(vt===null?wt=a.TEXTURE0+dt-1:wt=vt);let Ft=xt[wt];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[wt]=Ft),(Ft.type!==q||Ft.texture!==Tt)&&(vt!==wt&&(a.activeTexture(wt),vt=wt),a.bindTexture(q,Tt||it[q]),Ft.type=q,Ft.texture=Tt)}function L(){const q=xt[vt];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function x(){try{a.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function G(){try{a.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{a.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{a.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{a.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(){try{a.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{a.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{a.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{a.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{a.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(q){St.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),St.copy(q))}function Zt(q){bt.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),bt.copy(q))}function Bt(q,Tt){let wt=d.get(Tt);wt===void 0&&(wt=new WeakMap,d.set(Tt,wt));let Ft=wt.get(q);Ft===void 0&&(Ft=a.getUniformBlockIndex(Tt,q.name),wt.set(q,Ft))}function Ut(q,Tt){const Ft=d.get(Tt).get(q);m.get(Tt)!==Ft&&(a.uniformBlockBinding(Tt,Ft,q.__bindingPointIndex),m.set(Tt,Ft))}function ue(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},vt=null,xt={},v={},_=new WeakMap,M=[],T=null,b=!1,E=null,y=null,N=null,U=null,C=null,z=null,F=null,P=new Ne(0,0,0),k=0,D=!1,w=null,H=null,tt=null,ut=null,ht=null,St.set(0,0,a.canvas.width,a.canvas.height),bt.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:ct,disable:Ct,bindFramebuffer:zt,drawBuffers:qt,useProgram:he,setBlending:Ae,setMaterial:ae,setFlipSided:ee,setCullFace:Yt,setLineWidth:Ee,setPolygonOffset:It,setScissorTest:re,activeTexture:Ye,bindTexture:We,unbindTexture:L,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:jt,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:Vt,texSubImage2D:Q,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:Pt,scissor:Rt,viewport:Zt,reset:ue}}function MN(a,t,n,s,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,x){return M?new OffscreenCanvas(L,x):Xc("canvas")}function b(L,x,G){let Q=1;const ft=We(L);if((ft.width>G||ft.height>G)&&(Q=G/Math.max(ft.width,ft.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(Q*ft.width),Pt=Math.floor(Q*ft.height);v===void 0&&(v=T(at,Pt));const At=x?T(at,Pt):v;return At.width=at,At.height=Pt,At.getContext("2d").drawImage(L,0,0,at,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+at+"x"+Pt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),L;return L}function E(L){return L.generateMipmaps}function y(L){a.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,x,G,Q,ft=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=x;if(x===a.RED&&(G===a.FLOAT&&(at=a.R32F),G===a.HALF_FLOAT&&(at=a.R16F),G===a.UNSIGNED_BYTE&&(at=a.R8)),x===a.RED_INTEGER&&(G===a.UNSIGNED_BYTE&&(at=a.R8UI),G===a.UNSIGNED_SHORT&&(at=a.R16UI),G===a.UNSIGNED_INT&&(at=a.R32UI),G===a.BYTE&&(at=a.R8I),G===a.SHORT&&(at=a.R16I),G===a.INT&&(at=a.R32I)),x===a.RG&&(G===a.FLOAT&&(at=a.RG32F),G===a.HALF_FLOAT&&(at=a.RG16F),G===a.UNSIGNED_BYTE&&(at=a.RG8)),x===a.RG_INTEGER&&(G===a.UNSIGNED_BYTE&&(at=a.RG8UI),G===a.UNSIGNED_SHORT&&(at=a.RG16UI),G===a.UNSIGNED_INT&&(at=a.RG32UI),G===a.BYTE&&(at=a.RG8I),G===a.SHORT&&(at=a.RG16I),G===a.INT&&(at=a.RG32I)),x===a.RGB_INTEGER&&(G===a.UNSIGNED_BYTE&&(at=a.RGB8UI),G===a.UNSIGNED_SHORT&&(at=a.RGB16UI),G===a.UNSIGNED_INT&&(at=a.RGB32UI),G===a.BYTE&&(at=a.RGB8I),G===a.SHORT&&(at=a.RGB16I),G===a.INT&&(at=a.RGB32I)),x===a.RGBA_INTEGER&&(G===a.UNSIGNED_BYTE&&(at=a.RGBA8UI),G===a.UNSIGNED_SHORT&&(at=a.RGBA16UI),G===a.UNSIGNED_INT&&(at=a.RGBA32UI),G===a.BYTE&&(at=a.RGBA8I),G===a.SHORT&&(at=a.RGBA16I),G===a.INT&&(at=a.RGBA32I)),x===a.RGB&&(G===a.UNSIGNED_INT_5_9_9_9_REV&&(at=a.RGB9_E5),G===a.UNSIGNED_INT_10F_11F_11F_REV&&(at=a.R11F_G11F_B10F)),x===a.RGBA){const Pt=ft?Gc:Ue.getTransfer(Q);G===a.FLOAT&&(at=a.RGBA32F),G===a.HALF_FLOAT&&(at=a.RGBA16F),G===a.UNSIGNED_BYTE&&(at=Pt===Ge?a.SRGB8_ALPHA8:a.RGBA8),G===a.UNSIGNED_SHORT_4_4_4_4&&(at=a.RGBA4),G===a.UNSIGNED_SHORT_5_5_5_1&&(at=a.RGB5_A1)}return(at===a.R16F||at===a.R32F||at===a.RG16F||at===a.RG32F||at===a.RGBA16F||at===a.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function C(L,x){let G;return L?x===null||x===Zs||x===wl?G=a.DEPTH24_STENCIL8:x===Wi?G=a.DEPTH32F_STENCIL8:x===Cl&&(G=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zs||x===wl?G=a.DEPTH_COMPONENT24:x===Wi?G=a.DEPTH_COMPONENT32F:x===Cl&&(G=a.DEPTH_COMPONENT16),G}function z(L,x){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==Zn?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function F(L){const x=L.target;x.removeEventListener("dispose",F),k(x),x.isVideoTexture&&g.delete(x)}function P(L){const x=L.target;x.removeEventListener("dispose",P),w(x)}function k(L){const x=s.get(L);if(x.__webglInit===void 0)return;const G=L.source,Q=_.get(G);if(Q){const ft=Q[x.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&D(L),Object.keys(Q).length===0&&_.delete(G)}s.remove(L)}function D(L){const x=s.get(L);a.deleteTexture(x.__webglTexture);const G=L.source,Q=_.get(G);delete Q[x.__cacheKey],c.memory.textures--}function w(L){const x=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let ft=0;ft<x.__webglFramebuffer[Q].length;ft++)a.deleteFramebuffer(x.__webglFramebuffer[Q][ft]);else a.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)a.deleteFramebuffer(x.__webglFramebuffer[Q]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=L.textures;for(let Q=0,ft=G.length;Q<ft;Q++){const at=s.get(G[Q]);at.__webglTexture&&(a.deleteTexture(at.__webglTexture),c.memory.textures--),s.remove(G[Q])}s.remove(L)}let H=0;function tt(){H=0}function ut(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function ht(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function dt(L,x){const G=s.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,L,x);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,G.__webglTexture,a.TEXTURE0+x)}function B(L,x){const G=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){it(G,L,x);return}n.bindTexture(a.TEXTURE_2D_ARRAY,G.__webglTexture,a.TEXTURE0+x)}function Y(L,x){const G=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){it(G,L,x);return}n.bindTexture(a.TEXTURE_3D,G.__webglTexture,a.TEXTURE0+x)}function W(L,x){const G=s.get(L);if(L.version>0&&G.__version!==L.version){ct(G,L,x);return}n.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+x)}const vt={[Vp]:a.REPEAT,[Bi]:a.CLAMP_TO_EDGE,[Hp]:a.MIRRORED_REPEAT},xt={[ui]:a.NEAREST,[J2]:a.NEAREST_MIPMAP_NEAREST,[ec]:a.NEAREST_MIPMAP_LINEAR,[Zn]:a.LINEAR,[wd]:a.LINEAR_MIPMAP_NEAREST,[qs]:a.LINEAR_MIPMAP_LINEAR},O={[iw]:a.NEVER,[uw]:a.ALWAYS,[aw]:a.LESS,[ZM]:a.LEQUAL,[sw]:a.EQUAL,[lw]:a.GEQUAL,[rw]:a.GREATER,[ow]:a.NOTEQUAL};function nt(L,x){if(x.type===Wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Zn||x.magFilter===wd||x.magFilter===ec||x.magFilter===qs||x.minFilter===Zn||x.minFilter===wd||x.minFilter===ec||x.minFilter===qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,vt[x.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,vt[x.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,vt[x.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,xt[x.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,O[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ui||x.minFilter!==ec&&x.minFilter!==qs||x.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");a.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,o.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function St(L,x){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",F));const Q=x.source;let ft=_.get(Q);ft===void 0&&(ft={},_.set(Q,ft));const at=ht(x);if(at!==L.__cacheKey){ft[at]===void 0&&(ft[at]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,G=!0),ft[at].usedTimes++;const Pt=ft[L.__cacheKey];Pt!==void 0&&(ft[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(x)),L.__cacheKey=at,L.__webglTexture=ft[at].texture}return G}function bt(L,x,G){return Math.floor(Math.floor(L/G)/x)}function Dt(L,x,G,Q){const at=L.updateRanges;if(at.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,G,Q,x.data);else{at.sort((Et,Rt)=>Et.start-Rt.start);let Pt=0;for(let Et=1;Et<at.length;Et++){const Rt=at[Pt],Zt=at[Et],Bt=Rt.start+Rt.count,Ut=bt(Zt.start,x.width,4),ue=bt(Rt.start,x.width,4);Zt.start<=Bt+1&&Ut===ue&&bt(Zt.start+Zt.count-1,x.width,4)===Ut?Rt.count=Math.max(Rt.count,Zt.start+Zt.count-Rt.start):(++Pt,at[Pt]=Zt)}at.length=Pt+1;const At=a.getParameter(a.UNPACK_ROW_LENGTH),Vt=a.getParameter(a.UNPACK_SKIP_PIXELS),jt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let Et=0,Rt=at.length;Et<Rt;Et++){const Zt=at[Et],Bt=Math.floor(Zt.start/4),Ut=Math.ceil(Zt.count/4),ue=Bt%x.width,q=Math.floor(Bt/x.width),Tt=Ut,wt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ue),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,ue,q,Tt,wt,G,Q,x.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,At),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Vt),a.pixelStorei(a.UNPACK_SKIP_ROWS,jt)}}function it(L,x,G){let Q=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=a.TEXTURE_3D);const ft=St(L,x),at=x.source;n.bindTexture(Q,L.__webglTexture,a.TEXTURE0+G);const Pt=s.get(at);if(at.version!==Pt.__version||ft===!0){n.activeTexture(a.TEXTURE0+G);const At=Ue.getPrimaries(Ue.workingColorSpace),Vt=x.colorSpace===ss?null:Ue.getPrimaries(x.colorSpace),jt=x.colorSpace===ss||At===Vt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Et=b(x.image,!1,o.maxTextureSize);Et=Ye(x,Et);const Rt=u.convert(x.format,x.colorSpace),Zt=u.convert(x.type);let Bt=U(x.internalFormat,Rt,Zt,x.colorSpace,x.isVideoTexture);nt(Q,x);let Ut;const ue=x.mipmaps,q=x.isVideoTexture!==!0,Tt=Pt.__version===void 0||ft===!0,wt=at.dataReady,Ft=z(x,Et);if(x.isDepthTexture)Bt=C(x.format===Ul,x.type),Tt&&(q?n.texStorage2D(a.TEXTURE_2D,1,Bt,Et.width,Et.height):n.texImage2D(a.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Rt,Zt,null));else if(x.isDataTexture)if(ue.length>0){q&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let Mt=0,_t=ue.length;Mt<_t;Mt++)Ut=ue[Mt],q?wt&&n.texSubImage2D(a.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Zt,Ut.data):n.texImage2D(a.TEXTURE_2D,Mt,Bt,Ut.width,Ut.height,0,Rt,Zt,Ut.data);x.generateMipmaps=!1}else q?(Tt&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Et.width,Et.height),wt&&Dt(x,Et,Rt,Zt)):n.texImage2D(a.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Rt,Zt,Et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q&&Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Bt,ue[0].width,ue[0].height,Et.depth);for(let Mt=0,_t=ue.length;Mt<_t;Mt++)if(Ut=ue[Mt],x.format!==Ti)if(Rt!==null)if(q){if(wt)if(x.layerUpdates.size>0){const Ht=Bx(Ut.width,Ut.height,x.format,x.type);for(const oe of x.layerUpdates){const Be=Ut.data.subarray(oe*Ht/Ut.data.BYTES_PER_ELEMENT,(oe+1)*Ht/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Mt,0,0,oe,Ut.width,Ut.height,1,Rt,Be)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,Rt,Ut.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Mt,Bt,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?wt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,Rt,Zt,Ut.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Mt,Bt,Ut.width,Ut.height,Et.depth,0,Rt,Zt,Ut.data)}else{q&&Tt&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let Mt=0,_t=ue.length;Mt<_t;Mt++)Ut=ue[Mt],x.format!==Ti?Rt!==null?q?wt&&n.compressedTexSubImage2D(a.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Ut.data):n.compressedTexImage2D(a.TEXTURE_2D,Mt,Bt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?wt&&n.texSubImage2D(a.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Zt,Ut.data):n.texImage2D(a.TEXTURE_2D,Mt,Bt,Ut.width,Ut.height,0,Rt,Zt,Ut.data)}else if(x.isDataArrayTexture)if(q){if(Tt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Bt,Et.width,Et.height,Et.depth),wt)if(x.layerUpdates.size>0){const Mt=Bx(Et.width,Et.height,x.format,x.type);for(const _t of x.layerUpdates){const Ht=Et.data.subarray(_t*Mt/Et.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Rt,Zt,Ht)}x.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Zt,Et.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,Rt,Zt,Et.data);else if(x.isData3DTexture)q?(Tt&&n.texStorage3D(a.TEXTURE_3D,Ft,Bt,Et.width,Et.height,Et.depth),wt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Zt,Et.data)):n.texImage3D(a.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,Rt,Zt,Et.data);else if(x.isFramebufferTexture){if(Tt)if(q)n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Et.width,Et.height);else{let Mt=Et.width,_t=Et.height;for(let Ht=0;Ht<Ft;Ht++)n.texImage2D(a.TEXTURE_2D,Ht,Bt,Mt,_t,0,Rt,Zt,null),Mt>>=1,_t>>=1}}else if(ue.length>0){if(q&&Tt){const Mt=We(ue[0]);n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Mt.width,Mt.height)}for(let Mt=0,_t=ue.length;Mt<_t;Mt++)Ut=ue[Mt],q?wt&&n.texSubImage2D(a.TEXTURE_2D,Mt,0,0,Rt,Zt,Ut):n.texImage2D(a.TEXTURE_2D,Mt,Bt,Rt,Zt,Ut);x.generateMipmaps=!1}else if(q){if(Tt){const Mt=We(Et);n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Mt.width,Mt.height)}wt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Rt,Zt,Et)}else n.texImage2D(a.TEXTURE_2D,0,Bt,Rt,Zt,Et);E(x)&&y(Q),Pt.__version=at.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function ct(L,x,G){if(x.image.length!==6)return;const Q=St(L,x),ft=x.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+G);const at=s.get(ft);if(ft.version!==at.__version||Q===!0){n.activeTexture(a.TEXTURE0+G);const Pt=Ue.getPrimaries(Ue.workingColorSpace),At=x.colorSpace===ss?null:Ue.getPrimaries(x.colorSpace),Vt=x.colorSpace===ss||Pt===At?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const jt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,Rt=[];for(let _t=0;_t<6;_t++)!jt&&!Et?Rt[_t]=b(x.image[_t],!0,o.maxCubemapSize):Rt[_t]=Et?x.image[_t].image:x.image[_t],Rt[_t]=Ye(x,Rt[_t]);const Zt=Rt[0],Bt=u.convert(x.format,x.colorSpace),Ut=u.convert(x.type),ue=U(x.internalFormat,Bt,Ut,x.colorSpace),q=x.isVideoTexture!==!0,Tt=at.__version===void 0||Q===!0,wt=ft.dataReady;let Ft=z(x,Zt);nt(a.TEXTURE_CUBE_MAP,x);let Mt;if(jt){q&&Tt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ue,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){Mt=Rt[_t].mipmaps;for(let Ht=0;Ht<Mt.length;Ht++){const oe=Mt[Ht];x.format!==Ti?Bt!==null?q?wt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,oe.width,oe.height,Bt,oe.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?wt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,oe.width,oe.height,Bt,Ut,oe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ue,oe.width,oe.height,0,Bt,Ut,oe.data)}}}else{if(Mt=x.mipmaps,q&&Tt){Mt.length>0&&Ft++;const _t=We(Rt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){q?wt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Rt[_t].width,Rt[_t].height,Bt,Ut,Rt[_t].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Rt[_t].width,Rt[_t].height,0,Bt,Ut,Rt[_t].data);for(let Ht=0;Ht<Mt.length;Ht++){const Be=Mt[Ht].image[_t].image;q?wt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Be.width,Be.height,Bt,Ut,Be.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ue,Be.width,Be.height,0,Bt,Ut,Be.data)}}else{q?wt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt,Ut,Rt[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Bt,Ut,Rt[_t]);for(let Ht=0;Ht<Mt.length;Ht++){const oe=Mt[Ht];q?wt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Bt,Ut,oe.image[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ue,Bt,Ut,oe.image[_t])}}}E(x)&&y(a.TEXTURE_CUBE_MAP),at.__version=ft.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function Ct(L,x,G,Q,ft,at){const Pt=u.convert(G.format,G.colorSpace),At=u.convert(G.type),Vt=U(G.internalFormat,Pt,At,G.colorSpace),jt=s.get(x),Et=s.get(G);if(Et.__renderTarget=x,!jt.__hasExternalTextures){const Rt=Math.max(1,x.width>>at),Zt=Math.max(1,x.height>>at);ft===a.TEXTURE_3D||ft===a.TEXTURE_2D_ARRAY?n.texImage3D(ft,at,Vt,Rt,Zt,x.depth,0,Pt,At,null):n.texImage2D(ft,at,Vt,Rt,Zt,0,Pt,At,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),It(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Q,ft,Et.__webglTexture,0,Ee(x)):(ft===a.TEXTURE_2D||ft>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Q,ft,Et.__webglTexture,at),n.bindFramebuffer(a.FRAMEBUFFER,null)}function zt(L,x,G){if(a.bindRenderbuffer(a.RENDERBUFFER,L),x.depthBuffer){const Q=x.depthTexture,ft=Q&&Q.isDepthTexture?Q.type:null,at=C(x.stencilBuffer,ft),Pt=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,At=Ee(x);It(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,At,at,x.width,x.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,At,at,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,at,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pt,a.RENDERBUFFER,L)}else{const Q=x.textures;for(let ft=0;ft<Q.length;ft++){const at=Q[ft],Pt=u.convert(at.format,at.colorSpace),At=u.convert(at.type),Vt=U(at.internalFormat,Pt,At,at.colorSpace),jt=Ee(x);G&&It(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,jt,Vt,x.width,x.height):It(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,jt,Vt,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,Vt,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function qt(L,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),dt(x.depthTexture,0);const ft=Q.__webglTexture,at=Ee(x);if(x.depthTexture.format===Dl)It(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ft,0,at):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ft,0);else if(x.depthTexture.format===Ul)It(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ft,0,at):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function he(L){const x=s.get(L),G=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const ft=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",ft)};Q.addEventListener("dispose",ft),x.__depthDisposeCallback=ft}x.__boundDepthTexture=Q}if(L.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Q=L.texture.mipmaps;Q&&Q.length>0?qt(x.__webglFramebuffer[0],L):qt(x.__webglFramebuffer,L)}else if(G){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=a.createRenderbuffer(),zt(x.__webglDepthbuffer[Q],L,!1);else{const ft=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[Q];a.bindRenderbuffer(a.RENDERBUFFER,at),a.framebufferRenderbuffer(a.FRAMEBUFFER,ft,a.RENDERBUFFER,at)}}else{const Q=L.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),zt(x.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,at),a.framebufferRenderbuffer(a.FRAMEBUFFER,ft,a.RENDERBUFFER,at)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function $e(L,x,G){const Q=s.get(L);x!==void 0&&Ct(Q.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),G!==void 0&&he(L)}function V(L){const x=L.texture,G=s.get(L),Q=s.get(x);L.addEventListener("dispose",P);const ft=L.textures,at=L.isWebGLCubeRenderTarget===!0,Pt=ft.length>1;if(Pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=x.version,c.memory.textures++),at){G.__webglFramebuffer=[];for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[At]=[];for(let Vt=0;Vt<x.mipmaps.length;Vt++)G.__webglFramebuffer[At][Vt]=a.createFramebuffer()}else G.__webglFramebuffer[At]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let At=0;At<x.mipmaps.length;At++)G.__webglFramebuffer[At]=a.createFramebuffer()}else G.__webglFramebuffer=a.createFramebuffer();if(Pt)for(let At=0,Vt=ft.length;At<Vt;At++){const jt=s.get(ft[At]);jt.__webglTexture===void 0&&(jt.__webglTexture=a.createTexture(),c.memory.textures++)}if(L.samples>0&&It(L)===!1){G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let At=0;At<ft.length;At++){const Vt=ft[At];G.__webglColorRenderbuffer[At]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,G.__webglColorRenderbuffer[At]);const jt=u.convert(Vt.format,Vt.colorSpace),Et=u.convert(Vt.type),Rt=U(Vt.internalFormat,jt,Et,Vt.colorSpace,L.isXRRenderTarget===!0),Zt=Ee(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Zt,Rt,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+At,a.RENDERBUFFER,G.__webglColorRenderbuffer[At])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),zt(G.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(at){n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(a.TEXTURE_CUBE_MAP,x);for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0)for(let Vt=0;Vt<x.mipmaps.length;Vt++)Ct(G.__webglFramebuffer[At][Vt],L,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+At,Vt);else Ct(G.__webglFramebuffer[At],L,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);E(x)&&y(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let At=0,Vt=ft.length;At<Vt;At++){const jt=ft[At],Et=s.get(jt);let Rt=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Et.__webglTexture),nt(Rt,jt),Ct(G.__webglFramebuffer,L,jt,a.COLOR_ATTACHMENT0+At,Rt,0),E(jt)&&y(Rt)}n.unbindTexture()}else{let At=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(At,Q.__webglTexture),nt(At,x),x.mipmaps&&x.mipmaps.length>0)for(let Vt=0;Vt<x.mipmaps.length;Vt++)Ct(G.__webglFramebuffer[Vt],L,x,a.COLOR_ATTACHMENT0,At,Vt);else Ct(G.__webglFramebuffer,L,x,a.COLOR_ATTACHMENT0,At,0);E(x)&&y(At),n.unbindTexture()}L.depthBuffer&&he(L)}function Ae(L){const x=L.textures;for(let G=0,Q=x.length;G<Q;G++){const ft=x[G];if(E(ft)){const at=N(L),Pt=s.get(ft).__webglTexture;n.bindTexture(at,Pt),y(at),n.unbindTexture()}}}const ae=[],ee=[];function Yt(L){if(L.samples>0){if(It(L)===!1){const x=L.textures,G=L.width,Q=L.height;let ft=a.COLOR_BUFFER_BIT;const at=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pt=s.get(L),At=x.length>1;if(At)for(let jt=0;jt<x.length;jt++)n.bindFramebuffer(a.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+jt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+jt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Vt=L.texture.mipmaps;Vt&&Vt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let jt=0;jt<x.length;jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ft|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ft|=a.STENCIL_BUFFER_BIT)),At){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pt.__webglColorRenderbuffer[jt]);const Et=s.get(x[jt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Et,0)}a.blitFramebuffer(0,0,G,Q,0,0,G,Q,ft,a.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(a.COLOR_ATTACHMENT0+jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(at),ee.push(at),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ee)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ae))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),At)for(let jt=0;jt<x.length;jt++){n.bindFramebuffer(a.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+jt,a.RENDERBUFFER,Pt.__webglColorRenderbuffer[jt]);const Et=s.get(x[jt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+jt,a.TEXTURE_2D,Et,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const x=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function Ee(L){return Math.min(o.maxSamples,L.samples)}function It(L){const x=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(L){const x=c.render.frame;g.get(L)!==x&&(g.set(L,x),L.update())}function Ye(L,x){const G=L.colorSpace,Q=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==oo&&G!==ss&&(Ue.getTransfer(G)===Ge?(Q!==Ti||ft!==Ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ut,this.resetTextureUnits=tt,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=It}function EN(a,t){function n(s,o=ss){let u;const c=Ue.getTransfer(o);if(s===Ta)return a.UNSIGNED_BYTE;if(s===$m)return a.UNSIGNED_SHORT_4_4_4_4;if(s===tg)return a.UNSIGNED_SHORT_5_5_5_1;if(s===XM)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===WM)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===GM)return a.BYTE;if(s===kM)return a.SHORT;if(s===Cl)return a.UNSIGNED_SHORT;if(s===Jm)return a.INT;if(s===Zs)return a.UNSIGNED_INT;if(s===Wi)return a.FLOAT;if(s===ho)return a.HALF_FLOAT;if(s===qM)return a.ALPHA;if(s===YM)return a.RGB;if(s===Ti)return a.RGBA;if(s===Dl)return a.DEPTH_COMPONENT;if(s===Ul)return a.DEPTH_STENCIL;if(s===jM)return a.RED;if(s===eg)return a.RED_INTEGER;if(s===KM)return a.RG;if(s===ng)return a.RG_INTEGER;if(s===ig)return a.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(c===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gp||s===kp||s===Xp||s===Wp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Gp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qp||s===Yp||s===jp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===qp||s===Yp)return c===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===jp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kp||s===Zp||s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===em)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===im)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===am)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===om)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lm)return c===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===um||s===cm||s===fm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===um)return c===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hm||s===dm||s===pm||s===mm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===hm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===dm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wl?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}const TN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
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

}`;class AN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new uE(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Aa({vertexShader:TN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new Ks(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RN extends po{constructor(t,n){super();const s=this;let o=null,u=1,c=null,h="local-floor",m=1,d=null,g=null,v=null,_=null,M=null,T=null;const b=typeof XRWebGLBinding<"u",E=new AN,y={},N=n.getContextAttributes();let U=null,C=null;const z=[],F=[],P=new ce;let k=null;const D=new Oi;D.viewport=new an;const w=new Oi;w.viewport=new an;const H=[D,w],tt=new Yw;let ut=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=z[it];return ct===void 0&&(ct=new Jd,z[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=z[it];return ct===void 0&&(ct=new Jd,z[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=z[it];return ct===void 0&&(ct=new Jd,z[it]=ct),ct.getHandSpace()};function dt(it){const ct=F.indexOf(it.inputSource);if(ct===-1)return;const Ct=z[ct];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,d||c),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){o.removeEventListener("select",dt),o.removeEventListener("selectstart",dt),o.removeEventListener("selectend",dt),o.removeEventListener("squeeze",dt),o.removeEventListener("squeezestart",dt),o.removeEventListener("squeezeend",dt),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",Y);for(let it=0;it<z.length;it++){const ct=F[it];ct!==null&&(F[it]=null,z[it].disconnect(ct))}ut=null,ht=null,E.reset();for(const it in y)delete y[it];t.setRenderTarget(U),M=null,_=null,v=null,o=null,C=null,Dt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",dt),o.addEventListener("selectstart",dt),o.addEventListener("selectend",dt),o.addEventListener("squeeze",dt),o.addEventListener("squeezestart",dt),o.addEventListener("squeezeend",dt),o.addEventListener("end",B),o.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,zt=null,qt=null;N.depth&&(qt=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=N.stencil?Ul:Dl,zt=N.stencil?wl:Zs);const he={colorFormat:n.RGBA8,depthFormat:qt,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer(he),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new fs(_.textureWidth,_.textureHeight,{format:Ti,type:Ta,depthTexture:new lE(_.textureWidth,_.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ct={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,Ct),o.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new fs(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Ta,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,c=await o.requestReferenceSpace(h),Dt.setContext(o),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Y(it){for(let ct=0;ct<it.removed.length;ct++){const Ct=it.removed[ct],zt=F.indexOf(Ct);zt>=0&&(F[zt]=null,z[zt].disconnect(Ct))}for(let ct=0;ct<it.added.length;ct++){const Ct=it.added[ct];let zt=F.indexOf(Ct);if(zt===-1){for(let he=0;he<z.length;he++)if(he>=F.length){F.push(Ct),zt=he;break}else if(F[he]===null){F[he]=Ct,zt=he;break}if(zt===-1)break}const qt=z[zt];qt&&qt.connect(Ct)}}const W=new rt,vt=new rt;function xt(it,ct,Ct){W.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(Ct.matrixWorld);const zt=W.distanceTo(vt),qt=ct.projectionMatrix.elements,he=Ct.projectionMatrix.elements,$e=qt[14]/(qt[10]-1),V=qt[14]/(qt[10]+1),Ae=(qt[9]+1)/qt[5],ae=(qt[9]-1)/qt[5],ee=(qt[8]-1)/qt[0],Yt=(he[8]+1)/he[0],Ee=$e*ee,It=$e*Yt,re=zt/(-ee+Yt),Ye=re*-ee;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ye),it.translateZ(re),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),qt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const We=$e+re,L=V+re,x=Ee-Ye,G=It+(zt-Ye),Q=Ae*V/L*We,ft=ae*V/L*We;it.projectionMatrix.makePerspective(x,G,Q,ft,We,L),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let ct=it.near,Ct=it.far;E.texture!==null&&(E.depthNear>0&&(ct=E.depthNear),E.depthFar>0&&(Ct=E.depthFar)),tt.near=w.near=D.near=ct,tt.far=w.far=D.far=Ct,(ut!==tt.near||ht!==tt.far)&&(o.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ut=tt.near,ht=tt.far),tt.layers.mask=it.layers.mask|6,D.layers.mask=tt.layers.mask&3,w.layers.mask=tt.layers.mask&5;const zt=it.parent,qt=tt.cameras;O(tt,zt);for(let he=0;he<qt.length;he++)O(qt[he],zt);qt.length===2?xt(tt,D,w):tt.projectionMatrix.copy(D.projectionMatrix),nt(it,tt,zt)};function nt(it,ct,Ct){Ct===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=gm*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(it){m=it,_!==null&&(_.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(tt)},this.getCameraTexture=function(it){return y[it]};let St=null;function bt(it,ct){if(g=ct.getViewerPose(d||c),T=ct,g!==null){const Ct=g.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let zt=!1;Ct.length!==tt.cameras.length&&(tt.cameras.length=0,zt=!0);for(let V=0;V<Ct.length;V++){const Ae=Ct[V];let ae=null;if(M!==null)ae=M.getViewport(Ae);else{const Yt=v.getViewSubImage(_,Ae);ae=Yt.viewport,V===0&&(t.setRenderTargetTextures(C,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(C))}let ee=H[V];ee===void 0&&(ee=new Oi,ee.layers.enable(V),ee.viewport=new an,H[V]=ee),ee.matrix.fromArray(Ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),V===0&&(tt.matrix.copy(ee.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),zt===!0&&tt.cameras.push(ee)}const qt=o.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=s.getBinding();const V=v.getDepthInformation(Ct[0]);V&&V.isValid&&V.texture&&E.init(V,o.renderState)}if(qt&&qt.includes("camera-access")&&b){t.state.unbindTexture(),v=s.getBinding();for(let V=0;V<Ct.length;V++){const Ae=Ct[V].camera;if(Ae){let ae=y[Ae];ae||(ae=new uE,y[Ae]=ae);const ee=v.getCameraImage(Ae);ae.sourceTexture=ee}}}}for(let Ct=0;Ct<z.length;Ct++){const zt=F[Ct],qt=z[Ct];zt!==null&&qt!==void 0&&qt.update(zt,ct,d||c)}St&&St(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),T=null}const Dt=new cE;Dt.setAnimationLoop(bt),this.setAnimationLoop=function(it){St=it},this.dispose=function(){}}}const Fs=new ba,CN=new gn;function wN(a,t){function n(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function s(E,y){y.color.getRGB(E.fogColor.value,sE(a)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function o(E,y,N,U,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(E,y):y.isMeshToonMaterial?(u(E,y),v(E,y)):y.isMeshPhongMaterial?(u(E,y),g(E,y)):y.isMeshStandardMaterial?(u(E,y),_(E,y),y.isMeshPhysicalMaterial&&M(E,y,C)):y.isMeshMatcapMaterial?(u(E,y),T(E,y)):y.isMeshDepthMaterial?u(E,y):y.isMeshDistanceMaterial?(u(E,y),b(E,y)):y.isMeshNormalMaterial?u(E,y):y.isLineBasicMaterial?(c(E,y),y.isLineDashedMaterial&&h(E,y)):y.isPointsMaterial?m(E,y,N,U):y.isSpriteMaterial?d(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,n(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Qn&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,n(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Qn&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,n(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,n(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const N=t.get(y),U=N.envMap,C=N.envMapRotation;U&&(E.envMap.value=U,Fs.copy(C),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),E.envMapRotation.value.setFromMatrix4(CN.makeRotationFromEuler(Fs)),E.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,E.aoMapTransform))}function c(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform))}function h(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,N,U){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*N,E.scale.value=U*.5,y.map&&(E.map.value=y.map,n(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function d(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,n(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,n(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function g(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function v(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function _(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function M(E,y,N){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=N.texture,E.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,y){y.matcap&&(E.matcap.value=y.matcap)}function b(E,y){const N=t.get(y).light;E.referencePosition.value.setFromMatrixPosition(N.matrixWorld),E.nearDistance.value=N.shadow.camera.near,E.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function DN(a,t,n,s){let o={},u={},c=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const C=U.program;s.uniformBlockBinding(N,C)}function d(N,U){let C=o[N.id];C===void 0&&(T(N),C=g(N),o[N.id]=C,N.addEventListener("dispose",E));const z=U.program;s.updateUBOMapping(N,z);const F=t.render.frame;u[N.id]!==F&&(_(N),u[N.id]=F)}function g(N){const U=v();N.__bindingPointIndex=U;const C=a.createBuffer(),z=N.__size,F=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,z,F),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,C),C}function v(){for(let N=0;N<h;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=o[N.id],C=N.uniforms,z=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let F=0,P=C.length;F<P;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let D=0,w=k.length;D<w;D++){const H=k[D];if(M(H,F,D,z)===!0){const tt=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let dt=0;dt<ut.length;dt++){const B=ut[dt],Y=b(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,tt+ht,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ht),ht+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,tt,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(N,U,C,z){const F=N.value,P=U+"_"+C;if(z[P]===void 0)return typeof F=="number"||typeof F=="boolean"?z[P]=F:z[P]=F.clone(),!0;{const k=z[P];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return z[P]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function T(N){const U=N.uniforms;let C=0;const z=16;for(let P=0,k=U.length;P<k;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let w=0,H=D.length;w<H;w++){const tt=D[w],ut=Array.isArray(tt.value)?tt.value:[tt.value];for(let ht=0,dt=ut.length;ht<dt;ht++){const B=ut[ht],Y=b(B),W=C%z,vt=W%Y.boundary,xt=W+vt;C+=vt,xt!==0&&z-xt<Y.storage&&(C+=z-xt),tt.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=C,C+=Y.storage}}}const F=C%z;return F>0&&(C+=z-F),N.__size=C,N.__cache={},this}function b(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function E(N){const U=N.target;U.removeEventListener("dispose",E);const C=c.indexOf(U.__bindingPointIndex);c.splice(C,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete u[U.id]}function y(){for(const N in o)a.deleteBuffer(o[N]);c=[],o={},u={}}return{bind:m,update:d,dispose:y}}class UN{constructor(t={}){const{canvas:n=fw(),context:s=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=c;const T=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let z=!1;this._outputColorSpace=Mi;let F=0,P=0,k=null,D=-1,w=null;const H=new an,tt=new an;let ut=null;const ht=new Ne(0);let dt=0,B=n.width,Y=n.height,W=1,vt=null,xt=null;const O=new an(0,0,B,Y),nt=new an(0,0,B,Y);let St=!1;const bt=new oE;let Dt=!1,it=!1;const ct=new gn,Ct=new rt,zt=new an,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function $e(){return k===null?W:1}let V=s;function Ae(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qm}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const j="webgl2";if(V=Ae(j,R),V===null)throw Ae(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,ee,Yt,Ee,It,re,Ye,We,L,x,G,Q,ft,at,Pt,At,Vt,jt,Et,Rt,Zt,Bt,Ut,ue;function q(){ae=new HU(V),ae.init(),Bt=new EN(V,ae),ee=new OU(V,ae,t,Bt),Yt=new SN(V,ae),ee.reversedDepthBuffer&&_&&Yt.buffers.depth.setReversed(!0),Ee=new XU(V),It=new lN,re=new MN(V,ae,Yt,It,ee,Bt,Ee),Ye=new BU(C),We=new VU(C),L=new Zw(V),Ut=new LU(V,L),x=new GU(V,L,Ee,Ut),G=new qU(V,x,L,Ee),Et=new WU(V,ee,re),At=new PU(It),Q=new oN(C,Ye,We,ae,ee,Ut,At),ft=new wN(C,It),at=new cN,Pt=new gN(ae),jt=new UU(C,Ye,We,Yt,G,M,m),Vt=new yN(C,G,ee),ue=new DN(V,Ee,ee,Yt),Rt=new NU(V,ae,Ee),Zt=new kU(V,ae,Ee),Ee.programs=Q.programs,C.capabilities=ee,C.extensions=ae,C.properties=It,C.renderLists=at,C.shadowMap=Vt,C.state=Yt,C.info=Ee}q();const Tt=new RN(C,V);this.xr=Tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,Y,!1))},this.getSize=function(R){return R.set(B,Y)},this.setSize=function(R,j,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Y=j,n.width=Math.floor(R*W),n.height=Math.floor(j*W),st===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(R,j,st){B=R,Y=j,W=st,n.width=Math.floor(R*st),n.height=Math.floor(j*st),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,j,st,ot){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,j,st,ot),Yt.viewport(H.copy(O).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,j,st,ot){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,j,st,ot),Yt.scissor(tt.copy(nt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Yt.setScissorTest(St=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,st=!0){let ot=0;if(R){let Z=!1;if(k!==null){const yt=k.texture.format;Z=yt===ig||yt===ng||yt===eg}if(Z){const yt=k.texture.type,Lt=yt===Ta||yt===Zs||yt===Cl||yt===wl||yt===$m||yt===tg,Xt=jt.getClearColor(),Ot=jt.getClearAlpha(),Jt=Xt.r,ie=Xt.g,$t=Xt.b;Lt?(T[0]=Jt,T[1]=ie,T[2]=$t,T[3]=Ot,V.clearBufferuiv(V.COLOR,0,T)):(b[0]=Jt,b[1]=ie,b[2]=$t,b[3]=Ot,V.clearBufferiv(V.COLOR,0,b))}else ot|=V.COLOR_BUFFER_BIT}j&&(ot|=V.DEPTH_BUFFER_BIT),st&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),jt.dispose(),at.dispose(),Pt.dispose(),It.dispose(),Ye.dispose(),We.dispose(),G.dispose(),Ut.dispose(),ue.dispose(),Q.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ci),Tt.removeEventListener("sessionend",go),Fi.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=Ee.autoReset,j=Vt.enabled,st=Vt.autoUpdate,ot=Vt.needsUpdate,Z=Vt.type;q(),Ee.autoReset=R,Vt.enabled=j,Vt.autoUpdate=st,Vt.needsUpdate=ot,Vt.type=Z}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const j=R.target;j.removeEventListener("dispose",_t),Ht(j)}function Ht(R){oe(R),It.remove(R)}function oe(R){const j=It.get(R).programs;j!==void 0&&(j.forEach(function(st){Q.releaseProgram(st)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,st,ot,Z,yt){j===null&&(j=qt);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Xt=Ca(R,j,st,ot,Z);Yt.setMaterial(ot,Lt);let Ot=st.index,Jt=1;if(ot.wireframe===!0){if(Ot=x.getWireframeAttribute(st),Ot===void 0)return;Jt=2}const ie=st.drawRange,$t=st.attributes.position;let ge=ie.start*Jt,Oe=(ie.start+ie.count)*Jt;yt!==null&&(ge=Math.max(ge,yt.start*Jt),Oe=Math.min(Oe,(yt.start+yt.count)*Jt)),Ot!==null?(ge=Math.max(ge,0),Oe=Math.min(Oe,Ot.count)):$t!=null&&(ge=Math.max(ge,0),Oe=Math.min(Oe,$t.count));const ke=Oe-ge;if(ke<0||ke===1/0)return;Ut.setup(Z,ot,Xt,st,Ot);let Pe,ve=Rt;if(Ot!==null&&(Pe=L.get(Ot),ve=Zt,ve.setIndex(Pe)),Z.isMesh)ot.wireframe===!0?(Yt.setLineWidth(ot.wireframeLinewidth*$e()),ve.setMode(V.LINES)):ve.setMode(V.TRIANGLES);else if(Z.isLine){let Wt=ot.linewidth;Wt===void 0&&(Wt=1),Yt.setLineWidth(Wt*$e()),Z.isLineSegments?ve.setMode(V.LINES):Z.isLineLoop?ve.setMode(V.LINE_LOOP):ve.setMode(V.LINE_STRIP)}else Z.isPoints?ve.setMode(V.POINTS):Z.isSprite&&ve.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Wt=Z._multiDrawStarts,qe=Z._multiDrawCounts,Ce=Z._multiDrawCount,bn=Ot?L.get(Ot).bytesPerElement:1,Ki=It.get(ot).currentProgram.getUniforms();for(let Sn=0;Sn<Ce;Sn++)Ki.setValue(V,"_gl_DrawID",Sn),ve.render(Wt[Sn]/bn,qe[Sn])}else if(Z.isInstancedMesh)ve.renderInstances(ge,ke,Z.count);else if(st.isInstancedBufferGeometry){const Wt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,qe=Math.min(st.instanceCount,Wt);ve.renderInstances(ge,ke,qe)}else ve.render(ge,ke)};function Be(R,j,st){R.transparent===!0&&R.side===ya&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,$n(R,j,st),R.side=cs,R.needsUpdate=!0,$n(R,j,st),R.side=ya):$n(R,j,st)}this.compile=function(R,j,st=null){st===null&&(st=R),y=Pt.get(st),y.init(j),U.push(y),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Xt=yt[Lt];Be(Xt,st,Z),ot.add(Xt)}else Be(yt,st,Z),ot.add(yt)}),y=U.pop(),ot},this.compileAsync=function(R,j,st=null){const ot=this.compile(R,j,st);return new Promise(Z=>{function yt(){if(ot.forEach(function(Lt){It.get(Lt).currentProgram.isReady()&&ot.delete(Lt)}),ot.size===0){Z(R);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Re=null;function Bn(R){Re&&Re(R)}function ci(){Fi.stop()}function go(){Fi.start()}const Fi=new cE;Fi.setAnimationLoop(Bn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Re=R,Tt.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},Tt.addEventListener("sessionstart",ci),Tt.addEventListener("sessionend",go),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(j),j=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,k),y=Pt.get(R,U.length),y.init(j),U.push(y),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),bt.setFromProjectionMatrix(ct,qi,j.reversedDepth),it=this.localClippingEnabled,Dt=At.init(this.clippingPlanes,it),E=at.get(R,N.length),E.init(),N.push(E),Tt.enabled===!0&&Tt.isPresenting===!0){const yt=C.xr.getDepthSensingMesh();yt!==null&&Qs(yt,j,-1/0,C.sortObjects)}Qs(R,j,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(vt,xt),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&jt.addToRenderList(E,R),this.info.render.frame++,Dt===!0&&At.beginShadows();const st=y.state.shadowsArray;Vt.render(st,R,j),Dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=E.opaque,Z=E.transmissive;if(y.setupLights(),j.isArrayCamera){const yt=j.cameras;if(Z.length>0)for(let Lt=0,Xt=yt.length;Lt<Xt;Lt++){const Ot=yt[Lt];$s(ot,Z,R,Ot)}he&&jt.render(R);for(let Lt=0,Xt=yt.length;Lt<Xt;Lt++){const Ot=yt[Lt];Js(E,R,Ot,Ot.viewport)}}else Z.length>0&&$s(ot,Z,R,j),he&&jt.render(R),Js(E,R,j);k!==null&&P===0&&(re.updateMultisampleRenderTarget(k),re.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(C,R,j),Ut.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(y=U[U.length-1],Dt===!0&&At.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?E=N[N.length-1]:E=null};function Qs(R,j,st,ot){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||bt.intersectsSprite(R)){ot&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const Lt=G.update(R),Xt=R.material;Xt.visible&&E.push(R,Lt,Xt,st,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||bt.intersectsObject(R))){const Lt=G.update(R),Xt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Xt)){const Ot=Lt.groups;for(let Jt=0,ie=Ot.length;Jt<ie;Jt++){const $t=Ot[Jt],ge=Xt[$t.materialIndex];ge&&ge.visible&&E.push(R,Lt,ge,st,zt.z,$t)}}else Xt.visible&&E.push(R,Lt,Xt,st,zt.z,null)}}const yt=R.children;for(let Lt=0,Xt=yt.length;Lt<Xt;Lt++)Qs(yt[Lt],j,st,ot)}function Js(R,j,st,ot){const Z=R.opaque,yt=R.transmissive,Lt=R.transparent;y.setupLightsView(st),Dt===!0&&At.setGlobalState(C.clippingPlanes,st),ot&&Yt.viewport(H.copy(ot)),Z.length>0&&ds(Z,j,st),yt.length>0&&ds(yt,j,st),Lt.length>0&&ds(Lt,j,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function $s(R,j,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new fs(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ho:Ta,minFilter:qs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const yt=y.state.transmissionRenderTarget[ot.id],Lt=ot.viewport||H;yt.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);const Xt=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(ht),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),he&&jt.render(st);const ie=C.toneMapping;C.toneMapping=os;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),Dt===!0&&At.setGlobalState(C.clippingPlanes,ot),ds(R,st,ot),re.updateMultisampleRenderTarget(yt),re.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Oe=0,ke=j.length;Oe<ke;Oe++){const Pe=j[Oe],ve=Pe.object,Wt=Pe.geometry,qe=Pe.material,Ce=Pe.group;if(qe.side===ya&&ve.layers.test(ot.layers)){const bn=qe.side;qe.side=Qn,qe.needsUpdate=!0,vo(ve,st,ot,Wt,qe,Ce),qe.side=bn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(re.updateMultisampleRenderTarget(yt),re.updateRenderTargetMipmap(yt))}C.setRenderTarget(Xt,Ot,Jt),C.setClearColor(ht,dt),$t!==void 0&&(ot.viewport=$t),C.toneMapping=ie}function ds(R,j,st){const ot=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,yt=R.length;Z<yt;Z++){const Lt=R[Z],Xt=Lt.object,Ot=Lt.geometry,Jt=Lt.group;let ie=Lt.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),Xt.layers.test(st.layers)&&vo(Xt,j,st,Ot,ie,Jt)}}function vo(R,j,st,ot,Z,yt){R.onBeforeRender(C,j,st,ot,Z,yt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,j,st,ot,R,yt),Z.transparent===!0&&Z.side===ya&&Z.forceSinglePass===!1?(Z.side=Qn,Z.needsUpdate=!0,C.renderBufferDirect(st,j,ot,Z,R,yt),Z.side=cs,Z.needsUpdate=!0,C.renderBufferDirect(st,j,ot,Z,R,yt),Z.side=ya):C.renderBufferDirect(st,j,ot,Z,R,yt),R.onAfterRender(C,j,st,ot,Z,yt)}function $n(R,j,st){j.isScene!==!0&&(j=qt);const ot=It.get(R),Z=y.state.lights,yt=y.state.shadowsArray,Lt=Z.state.version,Xt=Q.getParameters(R,Z.state,yt,j,st),Ot=Q.getProgramCacheKey(Xt);let Jt=ot.programs;ot.environment=R.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(R.isMeshStandardMaterial?We:Ye).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",_t),Jt=new Map,ot.programs=Jt);let ie=Jt.get(Ot);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===Lt)return Tn(R,Xt),ie}else Xt.uniforms=Q.getUniforms(R),R.onBeforeCompile(Xt,C),ie=Q.acquireProgram(Xt,Ot),Jt.set(Ot,ie),ot.uniforms=Xt.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=At.uniform),Tn(R,Xt),ot.needsLights=ef(R),ot.lightsStateVersion=Lt,ot.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function un(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Bc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Tn(R,j){const st=It.get(R);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function Ca(R,j,st,ot,Z){j.isScene!==!0&&(j=qt),re.resetTextureUnits();const yt=j.fog,Lt=ot.isMeshStandardMaterial?j.environment:null,Xt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:oo,Ot=(ot.isMeshStandardMaterial?We:Ye).get(ot.envMap||Lt),Jt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ie=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!st.morphAttributes.position,ge=!!st.morphAttributes.normal,Oe=!!st.morphAttributes.color;let ke=os;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=C.toneMapping);const Pe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ve=Pe!==void 0?Pe.length:0,Wt=It.get(ot),qe=y.state.lights;if(Dt===!0&&(it===!0||R!==w)){const vn=R===w&&ot.id===D;At.setState(ot,R,vn)}let Ce=!1;ot.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==qe.state.version||Wt.outputColorSpace!==Xt||Z.isBatchedMesh&&Wt.batching===!1||!Z.isBatchedMesh&&Wt.batching===!0||Z.isBatchedMesh&&Wt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Wt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Z.isInstancedMesh&&Wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Wt.instancingMorph===!1&&Z.morphTexture!==null||Wt.envMap!==Ot||ot.fog===!0&&Wt.fog!==yt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==At.numPlanes||Wt.numIntersection!==At.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==ie||Wt.morphTargets!==$t||Wt.morphNormals!==ge||Wt.morphColors!==Oe||Wt.toneMapping!==ke||Wt.morphTargetsCount!==ve)&&(Ce=!0):(Ce=!0,Wt.__version=ot.version);let bn=Wt.currentProgram;Ce===!0&&(bn=$n(ot,j,Z));let Ki=!1,Sn=!1,ms=!1;const xe=bn.getUniforms(),Un=Wt.uniforms;if(Yt.useProgram(bn.program)&&(Ki=!0,Sn=!0,ms=!0),ot.id!==D&&(D=ot.id,Sn=!0),Ki||w!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",R.projectionMatrix),xe.setValue(V,"viewMatrix",R.matrixWorldInverse);const sn=xe.map.cameraPosition;sn!==void 0&&sn.setValue(V,Ct.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&xe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Sn=!0,ms=!0)}if(Z.isSkinnedMesh){xe.setOptional(V,Z,"bindMatrix"),xe.setOptional(V,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),xe.setValue(V,"boneTexture",vn.boneTexture,re))}Z.isBatchedMesh&&(xe.setOptional(V,Z,"batchingTexture"),xe.setValue(V,"batchingTexture",Z._matricesTexture,re),xe.setOptional(V,Z,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",Z._indirectTexture,re),xe.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",Z._colorsTexture,re));const zn=st.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Et.update(Z,st,bn),(Sn||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,xe.setValue(V,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Un.envMap.value=Ot,Un.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),Sn&&(xe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Wt.needsLights&&_o(Un,ms),yt&&ot.fog===!0&&ft.refreshFogUniforms(Un,yt),ft.refreshMaterialUniforms(Un,ot,W,Y,y.state.transmissionRenderTarget[R.id]),Bc.upload(V,un(Wt),Un,re)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Bc.upload(V,un(Wt),Un,re),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&xe.setValue(V,"center",Z.center),xe.setValue(V,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(V,"normalMatrix",Z.normalMatrix),xe.setValue(V,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const vn=ot.uniformsGroups;for(let sn=0,tr=vn.length;sn<tr;sn++){const Ii=vn[sn];ue.update(Ii,bn),ue.bind(Ii,bn)}}return bn}function _o(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ef(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,j,st){const ot=It.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=j,It.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const st=It.get(R);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const nf=V.createFramebuffer();this.setRenderTarget=function(R,j=0,st=0){k=R,F=j,P=st;let ot=!0,Z=null,yt=!1,Lt=!1;if(R){const Ot=It.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ot.__hasExternalTextures)re.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Ot.__boundDepthTexture!==$t){if($t!==null&&It.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const ie=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[j])?Z=ie[j][st]:Z=ie[j],yt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Z=It.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[st]:Z=ie,H.copy(R.viewport),tt.copy(R.scissor),ut=R.scissorTest}else H.copy(O).multiplyScalar(W).floor(),tt.copy(nt).multiplyScalar(W).floor(),ut=St;if(st!==0&&(Z=nf),Yt.bindFramebuffer(V.FRAMEBUFFER,Z)&&ot&&Yt.drawBuffers(R,Z),Yt.viewport(H),Yt.scissor(tt),Yt.setScissorTest(ut),yt){const Ot=It.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,st)}else if(Lt){const Ot=j;for(let Jt=0;Jt<R.textures.length;Jt++){const ie=It.get(R.textures[Jt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,st,Ot)}}else if(R!==null&&st!==0){const Ot=It.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ot.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,j,st,ot,Z,yt,Lt,Xt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Yt.bindFramebuffer(V.FRAMEBUFFER,Ot);try{const Jt=R.textures[Xt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ot&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Xt),V.readPixels(j,st,ot,Z,Bt.convert(ie),Bt.convert($t),yt))}finally{const Jt=k!==null?It.get(k).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,j,st,ot,Z,yt,Lt,Xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(j>=0&&j<=R.width-ot&&st>=0&&st<=R.height-Z){Yt.bindFramebuffer(V.FRAMEBUFFER,Ot);const Jt=R.textures[Xt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.bufferData(V.PIXEL_PACK_BUFFER,yt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Xt),V.readPixels(j,st,ot,Z,Bt.convert(ie),Bt.convert($t),0);const Oe=k!==null?It.get(k).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Oe);const ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hw(V,ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,yt),V.deleteBuffer(ge),V.deleteSync(ke),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,st=0){const ot=Math.pow(2,-st),Z=Math.floor(R.image.width*ot),yt=Math.floor(R.image.height*ot),Lt=j!==null?j.x:0,Xt=j!==null?j.y:0;re.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Lt,Xt,Z,yt),Yt.unbindTexture()};const Gl=V.createFramebuffer(),ps=V.createFramebuffer();this.copyTextureToTexture=function(R,j,st=null,ot=null,Z=0,yt=null){yt===null&&(Z!==0?(Ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Z,Z=0):yt=0);let Lt,Xt,Ot,Jt,ie,$t,ge,Oe,ke;const Pe=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(st!==null)Lt=st.max.x-st.min.x,Xt=st.max.y-st.min.y,Ot=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,ie=st.min.y,$t=st.isBox3?st.min.z:0;else{const zn=Math.pow(2,-Z);Lt=Math.floor(Pe.width*zn),Xt=Math.floor(Pe.height*zn),R.isDataArrayTexture?Ot=Pe.depth:R.isData3DTexture?Ot=Math.floor(Pe.depth*zn):Ot=1,Jt=0,ie=0,$t=0}ot!==null?(ge=ot.x,Oe=ot.y,ke=ot.z):(ge=0,Oe=0,ke=0);const ve=Bt.convert(j.format),Wt=Bt.convert(j.type);let qe;j.isData3DTexture?(re.setTexture3D(j,0),qe=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),qe=V.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ce=V.getParameter(V.UNPACK_ROW_LENGTH),bn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ki=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ms=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Pe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t);const xe=R.isDataArrayTexture||R.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const zn=It.get(R),vn=It.get(j),sn=It.get(zn.__renderTarget),tr=It.get(vn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,sn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Ii=0;Ii<Ot;Ii++)xe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Z,$t+Ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(j).__webglTexture,yt,ke+Ii)),V.blitFramebuffer(Jt,ie,Lt,Xt,ge,Oe,Lt,Xt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||It.has(R)){const zn=It.get(R),vn=It.get(j);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Gl),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ps);for(let sn=0;sn<Ot;sn++)xe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,Z,$t+sn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,Z),Un?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,yt,ke+sn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,yt),Z!==0?V.blitFramebuffer(Jt,ie,Lt,Xt,ge,Oe,Lt,Xt,V.COLOR_BUFFER_BIT,V.NEAREST):Un?V.copyTexSubImage3D(qe,yt,ge,Oe,ke+sn,Jt,ie,Lt,Xt):V.copyTexSubImage2D(qe,yt,ge,Oe,Jt,ie,Lt,Xt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(qe,yt,ge,Oe,ke,Lt,Xt,Ot,ve,Wt,Pe.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,yt,ge,Oe,ke,Lt,Xt,Ot,ve,Pe.data):V.texSubImage3D(qe,yt,ge,Oe,ke,Lt,Xt,Ot,ve,Wt,Pe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,yt,ge,Oe,Lt,Xt,ve,Wt,Pe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,yt,ge,Oe,Pe.width,Pe.height,ve,Pe.data):V.texSubImage2D(V.TEXTURE_2D,yt,ge,Oe,Lt,Xt,ve,Wt,Pe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ce),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ki),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ms),yt===0&&j.generateMipmaps&&V.generateMipmap(qe),Yt.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){F=0,P=0,k=null,Yt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}function LN({mouseForce:a=20,cursorSize:t=100,isViscous:n=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:u=32,dt:c=.014,BFECC:h=!0,resolution:m=.5,isBounce:d=!1,colors:g=["#5227FF","#3b1ea4","#3c1e9f"],style:v={},className:_="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:E=.25,autoResumeDelay:y=1e3,autoRampDuration:N=.6}){const U=Qt.useRef(null),C=Qt.useRef(null),z=Qt.useRef(null),F=Qt.useRef(null),P=Qt.useRef(null),k=Qt.useRef(!0),D=Qt.useRef(null);return Qt.useEffect(()=>{if(!U.current)return;function w(L){let x;Array.isArray(L)&&L.length>0?L.length===1?x=[L[0],L[0]]:x=L:x=["#ffffff","#ffffff"];const G=x.length,Q=new Uint8Array(G*4);for(let at=0;at<G;at++){const Pt=new Ne(x[at]);Q[at*4+0]=Math.round(Pt.r*255),Q[at*4+1]=Math.round(Pt.g*255),Q[at*4+2]=Math.round(Pt.b*255),Q[at*4+3]=255}const ft=new zw(Q,G,1,Ti);return ft.magFilter=Zn,ft.minFilter=Zn,ft.wrapS=Bi,ft.wrapT=Bi,ft.generateMipmaps=!1,ft.needsUpdate=!0,ft}const H=w(g),tt=new an(0,0,0,0);class ut{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new UN({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ne(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new jw,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ht=new ut;class dt{constructor(){this.mouseMoved=!1,this.coords=new ce,this.coords_old=new ce,this.diff=new ce,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ce,this.takeoverTo=new ce,this.onInteract=null}init(x){this.container=x,x.addEventListener("mousemove",this._onMouseMove,!1),x.addEventListener("touchstart",this._onTouchStart,!1),x.addEventListener("touchmove",this._onTouchMove,!1),x.addEventListener("mouseenter",this._onMouseEnter,!1),x.addEventListener("mouseleave",this._onMouseLeave,!1),x.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(x,G){if(!this.container)return;this.timer&&clearTimeout(this.timer);const Q=this.container.getBoundingClientRect(),ft=(x-Q.left)/Q.width,at=(G-Q.top)/Q.height;this.coords.set(ft*2-1,-(at*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,G){this.coords.set(x,G),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const G=this.container.getBoundingClientRect(),Q=(x.clientX-G.left)/G.width,ft=(x.clientY-G.top)/G.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(ft*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}onDocumentTouchStart(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY),this.hasUserControl=!0}}onDocumentTouchMove(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const G=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,G)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new dt;class Y{constructor(x,G,Q){this.mouse=x,this.manager=G,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new ce(0,0),this.target=new ce,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ce,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let Q=(x-this.lastTime)/1e3;this.lastTime=x,Q>.2&&(Q=.016);const ft=this._tmpDir.subVectors(this.target,this.current),at=ft.length();if(at<.01){this.pickNewTarget();return}ft.normalize();let Pt=1;if(this.rampDurationMs>0){const jt=Math.min(1,(x-this.activationTime)/this.rampDurationMs);Pt=jt*jt*(3-2*jt)}const At=this.speed*Q*Pt,Vt=Math.min(At,at);this.current.addScaledVector(ft,Vt),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,vt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,xt=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,O=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,nt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,St=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,bt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Dt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,it=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ct=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ct{constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ux,this.camera=new Wc,this.uniforms&&(this.material=new Mc(this.props.material),this.geometry=new Ks(2,2),this.plane=new bi(this.geometry,this.material),this.scene.add(this.plane))}update(){ht.renderer.setRenderTarget(this.props.output||null),ht.renderer.render(this.scene,this.camera),ht.renderer.setRenderTarget(null)}}class zt extends Ct{constructor(x){super({material:{vertexShader:W,fragmentShader:O,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new Ra,G=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new zi(G,3));const Q=new Mc({vertexShader:vt,fragmentShader:O,uniforms:this.uniforms});this.line=new kw(x,Q),this.scene.add(this.line)}update({dt:x,isBounce:G,BFECC:Q}){this.uniforms.dt.value=x,this.line.visible=G,this.uniforms.isBFECC.value=Q,super.update()}}class qt extends Ct{constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const G=new Ks(1,1),Q=new Mc({vertexShader:xt,fragmentShader:bt,blending:Cp,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new ce(0,0)},center:{value:new ce(0,0)},scale:{value:new ce(x.cursor_size,x.cursor_size)}}});this.mouse=new bi(G,Q),this.scene.add(this.mouse)}update(x){const G=B.diff.x/2*x.mouse_force,Q=B.diff.y/2*x.mouse_force,ft=x.cursor_size*x.cellScale.x,at=x.cursor_size*x.cellScale.y,Pt=Math.min(Math.max(B.coords.x,-1+ft+x.cellScale.x*2),1-ft-x.cellScale.x*2),At=Math.min(Math.max(B.coords.y,-1+at+x.cellScale.y*2),1-at-x.cellScale.y*2),Vt=this.mouse.material.uniforms;Vt.force.value.set(G,Q),Vt.center.value.set(Pt,At),Vt.scale.value.set(x.cursor_size,x.cursor_size),super.update()}}class he extends Ct{constructor(x){super({material:{vertexShader:W,fragmentShader:ct,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({viscous:x,iterations:G,dt:Q}){let ft,at;this.uniforms.v.value=x;for(let Pt=0;Pt<G;Pt++)Pt%2===0?(ft=this.props.output0,at=this.props.output1):(ft=this.props.output1,at=this.props.output0),this.uniforms.velocity_new.value=ft.texture,this.props.output=at,this.uniforms.dt.value=Q,super.update();return at}}class $e extends Ct{constructor(x){super({material:{vertexShader:W,fragmentShader:St,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x}){this.uniforms.velocity.value=x.texture,super.update()}}class V extends Ct{constructor(x){super({material:{vertexShader:W,fragmentShader:Dt,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({iterations:x}){let G,Q;for(let ft=0;ft<x;ft++)ft%2===0?(G=this.props.output0,Q=this.props.output1):(G=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=G.texture,this.props.output=Q,super.update();return Q}}class Ae extends Ct{constructor(x){super({material:{vertexShader:W,fragmentShader:it,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x,pressure:G}){this.uniforms.velocity.value=x.texture,this.uniforms.pressure.value=G.texture,super.update()}}class ae{constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ce,this.cellScale=new ce,this.boundarySpace=new ce,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ho:Wi}createAllFBO(){const G={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Zn,magFilter:Zn,wrapS:Bi,wrapT:Bi};for(let Q in this.fbos)this.fbos[Q]=new fs(this.fboSize.x,this.fboSize.y,G)}createShaderPass(){this.advection=new zt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new he({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new $e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new V({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ae({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*ht.width)),G=Math.max(1,Math.round(this.options.resolution*ht.height)),Q=1/x,ft=1/G;this.cellScale.set(Q,ft),this.fboSize.set(x,G)}resize(){this.calcSize();for(let x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const G=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:G})}}class ee{constructor(){this.init()}init(){this.simulation=new ae,this.scene=new Ux,this.camera=new Wc,this.output=new bi(new Ks(2,2),new Mc({vertexShader:W,fragmentShader:nt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ce},palette:{value:H},bgColor:{value:tt}}})),this.scene.add(this.output)}addScene(x){this.scene.add(x)}resize(){this.simulation.resize()}render(){ht.renderer.setRenderTarget(null),ht.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Yt{constructor(x){this.props=x,ht.init(x.$wrapper),B.init(x.$wrapper),B.autoIntensity=x.autoIntensity,B.takeoverDuration=x.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Y(B,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():k.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ht.renderer.domElement),this.output=new ee}resize(){ht.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),ht.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),ht.renderer){const x=ht.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),ht.renderer.dispose()}}catch{}}}const Ee=U.current;Ee.style.position=Ee.style.position||"relative",Ee.style.overflow=Ee.style.overflow||"hidden";const It=new Yt({$wrapper:Ee,autoDemo:M,autoSpeed:T,autoIntensity:b,takeoverDuration:E,autoResumeDelay:y,autoRampDuration:N});C.current=It,(()=>{if(!C.current)return;const L=C.current.output?.simulation;if(!L)return;const x=L.options.resolution;Object.assign(L.options,{mouse_force:a,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:u,dt:c,BFECC:h,resolution:m,isBounce:d}),m!==x&&L.resize()})(),It.start();const Ye=new IntersectionObserver(L=>{const x=L[0],G=x.isIntersecting&&x.intersectionRatio>0;k.current=G,C.current&&(G&&!document.hidden?C.current.start():C.current.pause())},{threshold:[0,.01,.1]});Ye.observe(Ee),P.current=Ye;const We=new ResizeObserver(()=>{C.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{C.current&&C.current.resize()}))});return We.observe(Ee),z.current=We,()=>{if(F.current&&cancelAnimationFrame(F.current),z.current)try{z.current.disconnect()}catch{}if(P.current)try{P.current.disconnect()}catch{}C.current&&C.current.dispose(),C.current=null}},[h,t,c,d,n,u,o,a,m,s,g,M,T,b,E,y,N]),Qt.useEffect(()=>{const w=C.current;if(!w)return;const H=w.output?.simulation;if(!H)return;const tt=H.options.resolution;Object.assign(H.options,{mouse_force:a,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:u,dt:c,BFECC:h,resolution:m,isBounce:d}),w.autoDriver&&(w.autoDriver.enabled=M,w.autoDriver.speed=T,w.autoDriver.resumeDelay=y,w.autoDriver.rampDurationMs=N*1e3,w.autoDriver.mouse&&(w.autoDriver.mouse.autoIntensity=b,w.autoDriver.mouse.takeoverDuration=E)),m!==tt&&H.resize()},[a,t,n,s,o,u,c,h,m,d,M,T,b,E,y,N]),Gt.jsx("div",{ref:U,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${_||""}`,style:v})}function NN({title:a,description:t,link:n,image:s,tags:o}){return Gt.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"block",children:Gt.jsxs("div",{className:"flex flex-col md:flex-row items-center cursor-pointer border border-gray-800 rounded-2xl p-6 mb-6 backdrop-blur-3xl hover:bg-[#11224031] transition-colors",children:[s&&Gt.jsx("img",{src:s,alt:a,className:"w-full md:w-1/3 h-35 object-cover rounded-lg mb-4 md:mb-0 mx-auto"}),Gt.jsxs("div",{className:"w-full md:w-2/3 md:pl-12 text-center md:text-left",children:[Gt.jsx("h3",{className:"text-xl font-semibold text-white",children:a}),Gt.jsx("p",{className:"text-gray-400 mt-2 mb-2",children:t}),o&&o.length>0&&Gt.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:o.map((u,c)=>Gt.jsx("span",{className:"px-4 py-1 text-xs font-medium bg-[#0f2520de] rounded-full text-[#64ffda]",children:u},c))})]})]})})}function Ac({id:a,title:t,subtitle:n,children:s}){return Gt.jsxs(l2.section,{id:a,className:"max-w-3xl",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[Gt.jsx("h2",{className:"text-2xl font-bold text-[#64ffda] mb-4",children:t}),Gt.jsx("div",{className:"text-gray-400 leading-relaxed",children:s}),Gt.jsx("div",{className:"my-8",children:n&&typeof n=="object"&&n.url?Gt.jsxs("a",{href:n.url,className:"font-bold text-[#64ffda] inline-flex items-center group",target:"_blank",rel:"noopener noreferrer",children:[n.text,Gt.jsx("span",{className:"ml-2 transition-transform duration-300 group-hover:translate-x-2",children:"→"})]}):Gt.jsx("span",{className:"font-bold",children:n})})]})}const ON=[{id:"about",label:"About"},{id:"experiences",label:"Experiences"},{id:"projects",label:"Projects"}],PN=[{platform:"Github",url:"https://github.com/abouvry",icon:"Github"},{platform:"Linkedin",url:"https://linkedin.com/in/alexis-bouvry-967a0a6b",icon:"Linkedin"},{platform:"Email",url:"bouvryalexis@email.com",icon:"Mail"}],BN=[{title:"Frontend Developer",date:"2023 – Present",company:"Freelance",description:"Designed and developed responsive user interfaces using React. Created custom graphics and interactive prototypes to improve user engagement. Delivered projects aligned with client brand identity and UX best practices.",tags:["React","Redux","API","Express","Jest","Figma"]},{title:"Frontend Developer",date:"2021 – 2022",company:"Fafco",description:"Developed and maintained the company’s main WordPress website and a standalone HTML5/CSS3/Javascript landing page. Improved website performance and accessibility across devices.",tags:["Wordpress","Elementor","JavaScript","HTML","CSS","Materialize"]},{title:"Junior IT",date:"2017 – 2020",company:"Kramer Levin Naftalis & Frankell LLP",description:"Managed IT equipment, user support, and system maintenance. Created visual assets for internal and marketing communications.",tags:["Figma","Photoshop","Illustrator","Prototyping"]},{title:"Frontend Developer",date:"2016 – 2016",company:"Samifi",description:"Designed and implemented a documentation platform in HTML/CSS/PHP. Created visuals and graphic content for trade show materials.",tags:["HTML","CSS","PHP"]}],zN=[{title:"alexisbouvry.com",description:"Personal portfolio site built with React, Tailwind CSS, Vite and ThreeJS.",link:"#",image:"/src/assets/portfolio-preview.png",tags:["React","TailwindCSS","ThreeJS"]},{title:"TaskMananager",description:"Local task manager app created with React and React Redux",link:"#",image:"/src/assets/dashboard-preview.png",tags:["React","Redux","React-dnd","SCSS"]},{title:"Kasa",description:"A responsive web app for real estate rentals built with React, showcasing properties with dynamic routing and styled components. Build with Vite and React.",link:"https://abouvry.github.io/Kasa/",image:"img/kasa.jpg",tags:["React","JavaScript","SCSS","Vite"]},{title:"Sportsee",description:"Web app for tracking physical activity and visualizing sports performance data. Built with React and Recharts.",link:"https://abouvry.github.io/Sportsee/",image:"img/sportsee.png",tags:["React","Recharts","JavaScript","API"]}],Rc={navItems:ON,socialLinks:PN,experiences:BN,projects:zN};function FN(){const a=Rc.navItems,t=Rc.experiences,n=Rc.projects,s=Rc.socialLinks.map(u=>{let c;switch(u.icon){case"Github":c=Gt.jsx(v2,{size:25});break;case"Linkedin":c=Gt.jsx(y2,{size:25});break;case"Mail":c=Gt.jsx(S2,{size:25});break;default:c=Gt.jsx(m2,{size:25})}return{icon:c,url:u.url}});Qt.useEffect(()=>{let u=!1,c=window.scrollY;const h=()=>{const m=window.scrollY;(Math.abs(m-c)>10||!u)&&(u||(window.requestAnimationFrame(()=>{const d=a.map(v=>document.getElementById(v.id)),g=m+100;for(let v=d.length-1;v>=0;v--){const _=d[v];if(_&&_.offsetTop<=g){document.querySelectorAll(".nav-item").forEach(T=>{T.classList.remove("active")});const M=document.querySelector(`[data-nav-item="${_.id}"]`);M&&M.classList.add("active");break}}u=!1,c=m}),u=!0))};return window.addEventListener("scroll",h),h(),()=>{window.removeEventListener("scroll",h)}},[a]);const o=u=>{const c=document.getElementById(u);c&&window.scrollTo({top:c.offsetTop-80,behavior:"smooth"})};return Gt.jsxs("div",{className:"relative min-h-screen text-gray-200 bg-[#020010]",children:[Gt.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},children:Gt.jsx(LN,{colors:["#6229ff","#c09eff","#a3a5f0"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:0,autoRampDuration:.6})}),Gt.jsxs("div",{className:"relative z-20 flex flex-col md:flex-row min-h-screen pointer-events-auto",children:[Gt.jsxs("aside",{className:"lg:pl-30 md:fixed md:pt-25 pt-8 md:w-1/2 w-full md:h-screen flex flex-col p-6 items-center md:items-start text-center md:text-left",children:[Gt.jsxs("header",{className:"lg:ml-[50px]",children:[Gt.jsx("h1",{className:"text-6xl font-extrabold text-slate-200 mb-2 m-50px",children:"Alexis Bouvry"}),Gt.jsx("h2",{className:"md:text-2xl font-bold text-slate-200 mb-10 lg:mb-20",children:"Front End Developer"}),Gt.jsx("nav",{className:"hidden md:flex flex-col gap-6",children:a.map(u=>Gt.jsxs("a",{"data-nav-item":u.id,href:`#${u.id}`,onClick:c=>{c.preventDefault(),o(u.id)},className:"nav-item group flex items-center uppercase font-bold tracking-wide text-sm transition-colors text-slate-200 hover:text-[#64ffda]",children:[Gt.jsx("span",{className:"inline-block mr-3 h-px w-4 bg-[#64ffda] transition-all duration-200 ease-in-out group-hover:w-16"}),u.label]},u.id))})]}),Gt.jsx("div",{className:"md:flex flex gap-6 lg:ml-[50px] md:mt-20 lg:mt-20",children:s.map((u,c)=>Gt.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"text-slate-200 hover:text-[#64ffda] transition-colors",children:u.icon},c))})]}),Gt.jsxs("main",{className:"md:ml-[50%] flex-1 p-8 space-y-32 md:pt-25",children:[Gt.jsxs(Ac,{id:"about",title:"About Me",children:[Gt.jsxs("p",{className:"mb-4 text-slate-200",children:["Creative Front-End Developer with a focus on"," ",Gt.jsx("span",{className:"font-bold",children:"React"}),",",Gt.jsx("span",{className:"font-bold",children:"TypeScript"}),", and"," ",Gt.jsx("span",{className:"font-bold",children:"modern UI/UX design"}),". Experienced in building responsive, accessible, and visually appealing interfaces through freelance projects."]}),Gt.jsxs("p",{className:"mb-4 text-slate-200",children:["In the past, I have worked as a"," ",Gt.jsx("span",{className:"font-bold",children:"Graphic Designer"}),", which has given me a strong foundation in visual communication and user experience."]}),Gt.jsx("p",{className:"mb-4 text-slate-200",children:"Combines technical expertise with my background in graphic design to deliver user-centered web experiences."}),Gt.jsx("p",{className:"text-slate-200",children:"In my spare time, I enjoy working on side projects like developing bots and applications that integrate popular APIs. I’m also passionate about traveling, photo editing, and drawing."})]}),Gt.jsx(Ac,{id:"experiences",title:"Experiences",subtitle:{text:"View my full résumé",url:"https://github.com/abouvry"},children:t.map((u,c)=>Gt.jsxs("div",{className:"mb-10 flex flex-col md:flex-row md:items-start",children:[Gt.jsx("div",{className:"md:w-1/6 md:text-left mb-2 pt-1 md:mb-0 flex-shrink-0",children:Gt.jsx("span",{className:"text-[#64ffda] text-sm md:block",children:u.date})}),Gt.jsxs("div",{className:"md:w-5/6",children:[Gt.jsxs("h3",{className:"text-xl text-[#ffffff]",children:[Gt.jsx("strong",{children:u.title})," — ",u.company]}),Gt.jsx("p",{className:"mt-3 text-gray-400",children:u.description}),Gt.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:u.tags.map((h,m)=>Gt.jsx("span",{className:"px-4 py-1 text-xs font-medium bg-[#0f2520de] rounded-full text-[#64ffda]",children:h},m))})]})]},c))}),Gt.jsx(Ac,{id:"projects",title:"Projects",subtitle:{text:"View more on my GitHub",url:"https://github.com/abouvry"},children:n.map((u,c)=>Gt.jsx(NN,{title:u.title,description:u.description,link:u.link,image:u.image,tags:u.tags},c))}),Gt.jsx(Ac,{id:"contact",children:Gt.jsxs("p",{children:["Built with ",Gt.jsx("span",{className:"text-[#64ffda]",children:"React"}),",",Gt.jsx("span",{className:"text-[#64ffda]",children:"TailwindCSS"})," and",Gt.jsx("span",{className:"text-[#64ffda]",children:" ThreeJS"})]})})]})]})]})}function IN(){return Gt.jsx(FN,{})}wb.createRoot(document.getElementById("root")).render(Gt.jsx(Qt.StrictMode,{children:Gt.jsx(IN,{})}));
