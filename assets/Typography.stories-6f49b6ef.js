import{j as Le}from"./Color-443384d2.js";import{w as ut,b as Qo,g as dt,s as pt,r as mt,i as yt,C as gt,c as ht,G as vt,e as bt,k as ft,f as St,h as Xo,j as Ze,l as _t,m as kt,n as Mt,_ as Yo,o as Zo,p as Bt,q as Pt,t as Tt,v as xt,T as Ht,d as wt,x as $t,a as Ot}from"./ThemeMui-c0a43527.js";import{_ as T,u as Lt}from"./extends-623938b0.js";import{r as L}from"./index-76fb7be0.js";import{a as R}from"./_commonjsHelpers-de833af9.js";import{i as Rt}from"./emotion-is-prop-valid.esm-267deda1.js";var Ct=Rt,jt=function(r){return r!=="theme"},ar=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Ct:jt},or=function(r,a,o){var t;if(a){var l=a.shouldForwardProp;t=r.__emotion_forwardProp&&l?function(n){return r.__emotion_forwardProp(n)&&l(n)}:l}return typeof t!="function"&&o&&(t=r.__emotion_forwardProp),t},Dt=function(r){var a=r.cache,o=r.serialized,t=r.isStringTag;return mt(a,o,t),Lt(function(){return yt(a,o,t)}),null},Ft=function e(r,a){var o=r.__emotion_real===r,t=o&&r.__emotion_base||r,l,n;a!==void 0&&(l=a.label,n=a.target);var i=or(r,a,o),c=i||ar(t),p=!c("as");return function(){var m=arguments,g=o&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(l!==void 0&&g.push("label:"+l+";"),m[0]==null||m[0].raw===void 0)g.push.apply(g,m);else{g.push(m[0][0]);for(var M=m.length,_=1;_<M;_++)g.push(m[_],m[0][_])}var y=ut(function(u,f,B){var x=p&&u.as||t,P="",j=[],d=u;if(u.theme==null){d={};for(var h in u)d[h]=u[h];d.theme=L.useContext(Qo)}typeof u.className=="string"?P=dt(f.registered,j,u.className):u.className!=null&&(P=u.className+" ");var O=pt(g.concat(j),f.registered,d);P+=f.key+"-"+O.name,n!==void 0&&(P+=" "+n);var H=p&&i===void 0?ar(x):c,w={};for(var $ in u)p&&$==="as"||H($)&&(w[$]=u[$]);return w.className=P,w.ref=B,L.createElement(L.Fragment,null,L.createElement(Dt,{cache:f,serialized:O,isStringTag:typeof x=="string"}),L.createElement(x,w))});return y.displayName=l!==void 0?l:"Styled("+(typeof t=="string"?t:t.displayName||t.name||"Component")+")",y.defaultProps=r.defaultProps,y.__emotion_real=y,y.__emotion_base=t,y.__emotion_styles=g,y.__emotion_forwardProp=i,Object.defineProperty(y,"toString",{value:function(){return"."+n}}),y.withComponent=function(u,f){return e(u,T({},a,f,{shouldForwardProp:or(y,f,!0)})).apply(void 0,g)},y}},Nt=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ke=Ft.bind();Nt.forEach(function(e){Ke[e]=Ke(e)});let Qe;typeof document=="object"&&(Qe=ht({key:"css",prepend:!0}));function Et(e){const{injectFirst:r,children:a}=e;return r&&Qe?Le(gt,{value:Qe,children:a}):a}/**
 * @mui/styled-engine v5.15.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function qt(e,r){return Ke(e,r)}const Wt=(e,r)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=r(e.__emotion_styles))},At=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:vt,StyledEngineProvider:Et,ThemeContext:Qo,css:bt,default:qt,internal_processStyles:Wt,keyframes:ft},Symbol.toStringTag,{value:"Module"})),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:St,isPlainObject:Xo},Symbol.toStringTag,{value:"Module"})),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),It=Object.freeze(Object.defineProperty({__proto__:null,default:_t,private_createBreakpoints:kt,unstable_applyStyles:Mt},Symbol.toStringTag,{value:"Module"})),Gt=["sx"],Ut=e=>{var r,a;const o={systemProps:{},otherProps:{}},t=(r=e==null||(a=e.theme)==null?void 0:a.unstable_sxConfig)!=null?r:Zo;return Object.keys(e).forEach(l=>{t[l]?o.systemProps[l]=e[l]:o.otherProps[l]=e[l]}),o};function et(e){const{sx:r}=e,a=Yo(e,Gt),{systemProps:o,otherProps:t}=Ut(a);let l;return Array.isArray(r)?l=[o,...r]:typeof r=="function"?l=(...n)=>{const i=r(...n);return Xo(i)?T({},o,i):o}:l=T({},o,r),T({},t,{sx:l})}const Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt,extendSxProp:et,unstable_createStyleFunctionSx:Pt,unstable_defaultSxConfig:Zo},Symbol.toStringTag,{value:"Module"})),tr=e=>e,Kt=()=>{let e=tr;return{configure(r){e=r},generate(r){return e(r)},reset(){e=tr}}},Qt=Kt(),Xt=Qt;function rt(e){var r,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(r=0;r<t;r++)e[r]&&(a=rt(e[r]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Yt(){for(var e,r,a=0,o="",t=arguments.length;a<t;a++)(e=arguments[a])&&(r=rt(e))&&(o&&(o+=" "),o+=r);return o}const Zt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function at(e,r,a="Mui"){const o=Zt[r];return o?`${a}-${o}`:`${Xt.generate(e)}-${r}`}function el(e,r,a="Mui"){const o={};return r.forEach(t=>{o[t]=at(e,t,a)}),o}var ot={exports:{}},s={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),rr=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),We=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),rl=Symbol.for("react.server_context"),Ve=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),al=Symbol.for("react.offscreen"),tt;tt=Symbol.for("react.module.reference");function b(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case er:switch(e=e.type,e){case Ne:case qe:case Ee:case ze:case Ie:return e;default:switch(e=e&&e.$$typeof,e){case rl:case Ae:case Ve:case Ue:case Ge:case We:return e;default:return r}}case rr:return r}}}s.ContextConsumer=Ae;s.ContextProvider=We;s.Element=er;s.ForwardRef=Ve;s.Fragment=Ne;s.Lazy=Ue;s.Memo=Ge;s.Portal=rr;s.Profiler=qe;s.StrictMode=Ee;s.Suspense=ze;s.SuspenseList=Ie;s.isAsyncMode=function(){return!1};s.isConcurrentMode=function(){return!1};s.isContextConsumer=function(e){return b(e)===Ae};s.isContextProvider=function(e){return b(e)===We};s.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===er};s.isForwardRef=function(e){return b(e)===Ve};s.isFragment=function(e){return b(e)===Ne};s.isLazy=function(e){return b(e)===Ue};s.isMemo=function(e){return b(e)===Ge};s.isPortal=function(e){return b(e)===rr};s.isProfiler=function(e){return b(e)===qe};s.isStrictMode=function(e){return b(e)===Ee};s.isSuspense=function(e){return b(e)===ze};s.isSuspenseList=function(e){return b(e)===Ie};s.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ne||e===qe||e===Ee||e===ze||e===Ie||e===al||typeof e=="object"&&e!==null&&(e.$$typeof===Ue||e.$$typeof===Ge||e.$$typeof===We||e.$$typeof===Ae||e.$$typeof===Ve||e.$$typeof===tt||e.getModuleId!==void 0)};s.typeOf=b;ot.exports=s;var lr=ot.exports;const ol=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function lt(e){const r=`${e}`.match(ol);return r&&r[1]||""}function nt(e,r=""){return e.displayName||e.name||lt(e)||r}function nr(e,r,a){const o=nt(r);return e.displayName||(o!==""?`${a}(${o})`:a)}function tl(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return nt(e,"Component");if(typeof e=="object")switch(e.$$typeof){case lr.ForwardRef:return nr(e,e.render,"ForwardRef");case lr.Memo:return nr(e,e.type,"memo");default:return}}}const ll=Object.freeze(Object.defineProperty({__proto__:null,default:tl,getFunctionName:lt},Symbol.toStringTag,{value:"Module"}));function nl(e,r,a=void 0){const o={};return Object.keys(e).forEach(t=>{o[t]=e[t].reduce((l,n)=>{if(n){const i=r(n);i!==""&&l.push(i),a&&a[n]&&l.push(a[n])}return l},[]).join(" ")}),o}var Re={},Je={exports:{}},sr;function sl(){return sr||(sr=1,function(e){function r(a,o){if(a==null)return{};var t={},l=Object.keys(a),n,i;for(i=0;i<l.length;i++)n=l[i],!(o.indexOf(n)>=0)&&(t[n]=a[n]);return t}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(Je)),Je.exports}const il=R(At),cl=R(Vt),ul=R(zt),dl=R(ll),pl=R(It),ml=R(Jt);var C=xt;Object.defineProperty(Re,"__esModule",{value:!0});var yl=Re.default=Hl,gl=Re.shouldForwardProp=De;Re.systemDefaultTheme=void 0;var v=C(Tt()),Xe=C(sl()),ir=kl(il),hl=cl;C(ul);C(dl);var vl=C(pl),bl=C(ml);const fl=["ownerState"],Sl=["variants"],_l=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function st(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,a=new WeakMap;return(st=function(o){return o?a:r})(e)}function kl(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=st(r);if(a&&a.has(e))return a.get(e);var o={__proto__:null},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var n=t?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(o,l,n):o[l]=e[l]}return o.default=e,a&&a.set(e,o),o}function Ml(e){return Object.keys(e).length===0}function Bl(e){return typeof e=="string"&&e.charCodeAt(0)>96}function De(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Pl=Re.systemDefaultTheme=(0,vl.default)(),Tl=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function je({defaultTheme:e,theme:r,themeId:a}){return Ml(r)?e:r[a]||r}function xl(e){return e?(r,a)=>a[e]:null}function Fe(e,r){let{ownerState:a}=r,o=(0,Xe.default)(r,fl);const t=typeof e=="function"?e((0,v.default)({ownerState:a},o)):e;if(Array.isArray(t))return t.flatMap(l=>Fe(l,(0,v.default)({ownerState:a},o)));if(t&&typeof t=="object"&&Array.isArray(t.variants)){const{variants:l=[]}=t;let i=(0,Xe.default)(t,Sl);return l.forEach(c=>{let p=!0;typeof c.props=="function"?p=c.props((0,v.default)({ownerState:a},o,a)):Object.keys(c.props).forEach(m=>{(a==null?void 0:a[m])!==c.props[m]&&o[m]!==c.props[m]&&(p=!1)}),p&&(Array.isArray(i)||(i=[i]),i.push(typeof c.style=="function"?c.style((0,v.default)({ownerState:a},o,a)):c.style))}),i}return t}function Hl(e={}){const{themeId:r,defaultTheme:a=Pl,rootShouldForwardProp:o=De,slotShouldForwardProp:t=De}=e,l=n=>(0,bl.default)((0,v.default)({},n,{theme:je((0,v.default)({},n,{defaultTheme:a,themeId:r}))}));return l.__mui_systemSx=!0,(n,i={})=>{(0,ir.internal_processStyles)(n,d=>d.filter(h=>!(h!=null&&h.__mui_systemSx)));const{name:c,slot:p,skipVariantsResolver:m,skipSx:g,overridesResolver:M=xl(Tl(p))}=i,_=(0,Xe.default)(i,_l),y=m!==void 0?m:p&&p!=="Root"&&p!=="root"||!1,u=g||!1;let f,B=De;p==="Root"||p==="root"?B=o:p?B=t:Bl(n)&&(B=void 0);const x=(0,ir.default)(n,(0,v.default)({shouldForwardProp:B,label:f},_)),P=d=>typeof d=="function"&&d.__emotion_real!==d||(0,hl.isPlainObject)(d)?h=>Fe(d,(0,v.default)({},h,{theme:je({theme:h.theme,defaultTheme:a,themeId:r})})):d,j=(d,...h)=>{let O=P(d);const H=h?h.map(P):[];c&&M&&H.push(k=>{const S=je((0,v.default)({},k,{defaultTheme:a,themeId:r}));if(!S.components||!S.components[c]||!S.components[c].styleOverrides)return null;const D=S.components[c].styleOverrides,Ce={};return Object.entries(D).forEach(([it,ct])=>{Ce[it]=Fe(ct,(0,v.default)({},k,{theme:S}))}),M(k,Ce)}),c&&!y&&H.push(k=>{var S;const D=je((0,v.default)({},k,{defaultTheme:a,themeId:r})),Ce=D==null||(S=D.components)==null||(S=S[c])==null?void 0:S.variants;return Fe({variants:Ce},(0,v.default)({},k,{theme:D}))}),u||H.push(l);const w=H.length-h.length;if(Array.isArray(d)&&w>0){const k=new Array(w).fill("");O=[...d,...k],O.raw=[...d.raw,...k]}const $=x(O,...H);return n.muiName&&($.muiName=n.muiName),$};return x.withConfig&&(j.withConfig=x.withConfig),j}}const wl=e=>gl(e)&&e!=="classes",$l=yl({themeId:Ht,defaultTheme:wt,rootShouldForwardProp:wl}),Ol=$l;function Ll(e){return at("MuiTypography",e)}el("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Rl=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Cl=e=>{const{align:r,gutterBottom:a,noWrap:o,paragraph:t,variant:l,classes:n}=e,i={root:["root",l,e.align!=="inherit"&&`align${Ze(r)}`,a&&"gutterBottom",o&&"noWrap",t&&"paragraph"]};return nl(i,Ll,n)},jl=Ol("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.variant&&r[a.variant],a.align!=="inherit"&&r[`align${Ze(a.align)}`],a.noWrap&&r.noWrap,a.gutterBottom&&r.gutterBottom,a.paragraph&&r.paragraph]}})(({theme:e,ownerState:r})=>T({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&e.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),cr={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Dl={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Fl=e=>Dl[e]||e,Nl=L.forwardRef(function(r,a){const o=$t({props:r,name:"MuiTypography"}),t=Fl(o.color),l=et(T({},o,{color:t})),{align:n="inherit",className:i,component:c,gutterBottom:p=!1,noWrap:m=!1,paragraph:g=!1,variant:M="body1",variantMapping:_=cr}=l,y=Yo(l,Rl),u=T({},l,{align:n,color:t,className:i,component:c,gutterBottom:p,noWrap:m,paragraph:g,variant:M,variantMapping:_}),f=c||(g?"p":_[M]||cr[M])||"span",B=Cl(u);return Le(jl,T({as:f,ref:a,ownerState:u,className:Yt(B.root,i)},y))}),El=Nl,Ye=({variant:e,color:r="color/gray/800",children:a})=>Le(El,{variant:e,color:r,children:a});try{Ye.displayName="Typography",Ye.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"typography/headline/h1/black"'},{value:'"typography/headline/h1/bold"'},{value:'"typography/headline/h1/medium"'},{value:'"typography/headline/h1/regular"'},{value:'"typography/headline/h2/black"'},{value:'"typography/headline/h2/bold"'},{value:'"typography/headline/h2/medium"'},{value:'"typography/headline/h2/regular"'},{value:'"typography/headline/h3/black"'},{value:'"typography/headline/h3/bold"'},{value:'"typography/headline/h3/medium"'},{value:'"typography/headline/h3/regular"'},{value:'"typography/headline/h4/black"'},{value:'"typography/headline/h4/bold"'},{value:'"typography/headline/h4/medium"'},{value:'"typography/headline/h4/regular"'},{value:'"typography/title/large/black"'},{value:'"typography/title/large/bold"'},{value:'"typography/title/large/medium"'},{value:'"typography/title/large/regular"'},{value:'"typography/title/medium/black"'},{value:'"typography/title/medium/bold"'},{value:'"typography/title/medium/medium"'},{value:'"typography/title/medium/regular"'},{value:'"typography/title/small/black"'},{value:'"typography/title/small/bold"'},{value:'"typography/title/small/medium"'},{value:'"typography/title/small/regular"'},{value:'"typography/body/medium/black"'},{value:'"typography/body/medium/bold"'},{value:'"typography/body/medium/medium"'},{value:'"typography/body/medium/regular"'},{value:'"typography/body/small/black"'},{value:'"typography/body/small/bold"'},{value:'"typography/body/small/medium"'},{value:'"typography/body/small/regular"'},{value:'"typography/label/large/black"'},{value:'"typography/label/large/bold"'},{value:'"typography/label/large/medium"'},{value:'"typography/label/large/regular"'},{value:'"typography/label/medium/black"'},{value:'"typography/label/medium/bold"'},{value:'"typography/label/medium/medium"'},{value:'"typography/label/medium/regular"'},{value:'"typography/label/small/black"'},{value:'"typography/label/small/bold"'},{value:'"typography/label/small/medium"'},{value:'"typography/label/small/regular"'}]}},color:{defaultValue:{value:"color/gray/800"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"color/background/1"'},{value:'"color/background/2"'},{value:'"color/background/3"'},{value:'"color/background/4"'},{value:'"color/background/5"'},{value:'"color/background/6"'},{value:'"color/background/7"'},{value:'"color/background/8"'},{value:'"color/background/9"'},{value:'"color/gradient/primary1"'},{value:'"color/partnership/vvip"'},{value:'"color/partnership/vip"'},{value:'"color/partnership/partner"'},{value:'"color/state/saleDim/100"'},{value:'"color/state/saleDim/200"'},{value:'"color/state/saleDim/300"'},{value:'"color/state/saleDim/400"'},{value:'"color/state/saleDim/500"'},{value:'"color/state/errorDim/100"'},{value:'"color/state/errorDim/200"'},{value:'"color/state/errorDim/300"'},{value:'"color/state/errorDim/400"'},{value:'"color/state/errorDim/500"'},{value:'"color/state/warningDim/100"'},{value:'"color/state/warningDim/200"'},{value:'"color/state/warningDim/300"'},{value:'"color/state/warningDim/400"'},{value:'"color/state/warningDim/500"'},{value:'"color/state/successDim/100"'},{value:'"color/state/successDim/200"'},{value:'"color/state/successDim/300"'},{value:'"color/state/successDim/400"'},{value:'"color/state/successDim/500"'},{value:'"color/state/infoDim/100"'},{value:'"color/state/infoDim/200"'},{value:'"color/state/infoDim/300"'},{value:'"color/state/infoDim/400"'},{value:'"color/state/infoDim/500"'},{value:'"color/state/info"'},{value:'"color/state/success"'},{value:'"color/state/warning"'},{value:'"color/state/error"'},{value:'"color/state/sale"'},{value:'"color/skyblue/100"'},{value:'"color/skyblue/200"'},{value:'"color/skyblue/300"'},{value:'"color/skyblue/400"'},{value:'"color/skyblue/500"'},{value:'"color/skyblue/600"'},{value:'"color/skyblue/700"'},{value:'"color/skyblue/800"'},{value:'"color/skyblue/900"'},{value:'"color/green/100"'},{value:'"color/green/200"'},{value:'"color/green/300"'},{value:'"color/green/400"'},{value:'"color/green/500"'},{value:'"color/green/600"'},{value:'"color/green/700"'},{value:'"color/green/800"'},{value:'"color/green/900"'},{value:'"color/orange/100"'},{value:'"color/orange/200"'},{value:'"color/orange/300"'},{value:'"color/orange/400"'},{value:'"color/orange/500"'},{value:'"color/orange/600"'},{value:'"color/orange/700"'},{value:'"color/orange/800"'},{value:'"color/orange/900"'},{value:'"color/grayishViolet/100"'},{value:'"color/grayishViolet/200"'},{value:'"color/grayishViolet/300"'},{value:'"color/grayishViolet/400"'},{value:'"color/grayishViolet/500"'},{value:'"color/grayishViolet/600"'},{value:'"color/grayishViolet/700"'},{value:'"color/grayishViolet/800"'},{value:'"color/primary/dim/100"'},{value:'"color/primary/dim/200"'},{value:'"color/primary/dim/300"'},{value:'"color/primary/dim/400"'},{value:'"color/primary/dim/500"'},{value:'"color/primary/dim/600"'},{value:'"color/primary/100"'},{value:'"color/primary/200"'},{value:'"color/primary/300"'},{value:'"color/primary/400"'},{value:'"color/primary/500"'},{value:'"color/primary/600"'},{value:'"color/primary/700"'},{value:'"color/primary/800"'},{value:'"color/primary/900"'},{value:'"color/gray/dim/100"'},{value:'"color/gray/dim/200"'},{value:'"color/gray/dim/300"'},{value:'"color/gray/dim/400"'},{value:'"color/gray/dim/500"'},{value:'"color/gray/dim/600"'},{value:'"color/gray/dim/700"'},{value:'"color/gray/dim/800"'},{value:'"color/gray/50"'},{value:'"color/gray/100"'},{value:'"color/gray/200"'},{value:'"color/gray/300"'},{value:'"color/gray/400"'},{value:'"color/gray/500"'},{value:'"color/gray/600"'},{value:'"color/gray/700"'},{value:'"color/gray/800"'},{value:'"color/gray/900"'},{value:'"color/white"'},{value:'"color/black"'}]}}}}}catch{}const ql={title:"Foundation/Typography",component:Ye,decorators:[e=>Le(Ot,{children:Le(e,{})})]},F={args:{variant:"typography/headline/h1/regular",children:"내 인생의 전환점은 타이포그래피 수업이었다."}},N={args:{variant:"typography/headline/h1/black",children:"typography/headline/h1/black"}},E={args:{variant:"typography/headline/h1/bold",children:"typography/headline/h1/bold"}},q={args:{variant:"typography/headline/h1/medium",children:"typography/headline/h1/medium"}},W={args:{variant:"typography/headline/h1/regular",children:"typography/headline/h1/regular"}},A={args:{variant:"typography/headline/h2/black",children:"typography/headline/h2/black"}},V={args:{variant:"typography/headline/h2/bold",children:"typography/headline/h2/bold"}},z={args:{variant:"typography/headline/h2/medium",children:"typography/headline/h2/medium"}},I={args:{variant:"typography/headline/h2/regular",children:"typography/headline/h2/regular"}},G={args:{variant:"typography/headline/h3/black",children:"typography/headline/h3/black"}},U={args:{variant:"typography/headline/h3/bold",children:"typography/headline/h3/bold"}},J={args:{variant:"typography/headline/h3/medium",children:"typography/headline/h3/medium"}},K={args:{variant:"typography/headline/h3/regular",children:"typography/headline/h3/regular"}},Q={args:{variant:"typography/headline/h4/black",children:"typography/headline/h4/black"}},X={args:{variant:"typography/headline/h4/bold",children:"typography/headline/h4/bold"}},Y={args:{variant:"typography/headline/h4/medium",children:"typography/headline/h4/medium"}},Z={args:{variant:"typography/headline/h4/regular",children:"typography/headline/h4/regular"}},ee={args:{variant:"typography/title/large/black",children:"typography/title/large/black"}},re={args:{variant:"typography/title/large/bold",children:"typography/title/large/bold"}},ae={args:{variant:"typography/title/large/medium",children:"typography/title/large/medium"}},oe={args:{variant:"typography/title/large/regular",children:"typography/title/large/regular"}},te={args:{variant:"typography/title/medium/black",children:"typography/title/medium/black"}},le={args:{variant:"typography/title/medium/bold",children:"typography/title/medium/bold"}},ne={args:{variant:"typography/title/medium/medium",children:"typography/title/medium/medium"}},se={args:{variant:"typography/title/medium/regular",children:"typography/title/medium/regular"}},ie={args:{variant:"typography/title/small/black",children:"typography/title/small/black"}},ce={args:{variant:"typography/title/small/bold",children:"typography/title/small/bold"}},ue={args:{variant:"typography/title/small/medium",children:"typography/title/small/medium"}},de={args:{variant:"typography/title/small/regular",children:"typography/title/small/regular"}},pe={args:{variant:"typography/body/medium/black",children:"typography/body/medium/black"}},me={args:{variant:"typography/body/medium/bold",children:"typography/body/medium/bold"}},ye={args:{variant:"typography/body/medium/medium",children:"typography/body/medium/medium"}},ge={args:{variant:"typography/body/medium/regular",children:"typography/body/medium/regular"}},he={args:{variant:"typography/body/small/black",children:"typography/body/small/black"}},ve={args:{variant:"typography/body/small/bold",children:"typography/body/small/bold"}},be={args:{variant:"typography/body/small/medium",children:"typography/body/small/medium"}},fe={args:{variant:"typography/body/small/regular",children:"typography/body/small/regular"}},Se={args:{variant:"typography/label/large/black",children:"typography/label/large/black"}},_e={args:{variant:"typography/label/large/bold",children:"typography/label/large/bold"}},ke={args:{variant:"typography/label/large/medium",children:"typography/label/large/medium"}},Me={args:{variant:"typography/label/large/regular",children:"typography/label/large/regular"}},Be={args:{variant:"typography/label/medium/black",children:"typography/label/medium/black"}},Pe={args:{variant:"typography/label/medium/bold",children:"typography/label/medium/bold"}},Te={args:{variant:"typography/label/medium/medium",children:"typography/label/medium/medium"}},xe={args:{variant:"typography/label/medium/regular",children:"typography/label/medium/regular"}},He={args:{variant:"typography/label/small/black",children:"typography/label/small/black"}},we={args:{variant:"typography/label/small/bold",children:"typography/label/small/bold"}},$e={args:{variant:"typography/label/small/medium",children:"typography/label/small/medium"}},Oe={args:{variant:"typography/label/small/regular",children:"typography/label/small/regular"}};var ur,dr,pr;F.parameters={...F.parameters,docs:{...(ur=F.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h1/regular',
    children: '내 인생의 전환점은 타이포그래피 수업이었다.'
  }
}`,...(pr=(dr=F.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var mr,yr,gr;N.parameters={...N.parameters,docs:{...(mr=N.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h1/black',
    children: 'typography/headline/h1/black'
  }
}`,...(gr=(yr=N.parameters)==null?void 0:yr.docs)==null?void 0:gr.source}}};var hr,vr,br;E.parameters={...E.parameters,docs:{...(hr=E.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h1/bold',
    children: 'typography/headline/h1/bold'
  }
}`,...(br=(vr=E.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var fr,Sr,_r;q.parameters={...q.parameters,docs:{...(fr=q.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h1/medium',
    children: 'typography/headline/h1/medium'
  }
}`,...(_r=(Sr=q.parameters)==null?void 0:Sr.docs)==null?void 0:_r.source}}};var kr,Mr,Br;W.parameters={...W.parameters,docs:{...(kr=W.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h1/regular',
    children: 'typography/headline/h1/regular'
  }
}`,...(Br=(Mr=W.parameters)==null?void 0:Mr.docs)==null?void 0:Br.source}}};var Pr,Tr,xr;A.parameters={...A.parameters,docs:{...(Pr=A.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h2/black',
    children: 'typography/headline/h2/black'
  }
}`,...(xr=(Tr=A.parameters)==null?void 0:Tr.docs)==null?void 0:xr.source}}};var Hr,wr,$r;V.parameters={...V.parameters,docs:{...(Hr=V.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h2/bold',
    children: 'typography/headline/h2/bold'
  }
}`,...($r=(wr=V.parameters)==null?void 0:wr.docs)==null?void 0:$r.source}}};var Or,Lr,Rr;z.parameters={...z.parameters,docs:{...(Or=z.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h2/medium',
    children: 'typography/headline/h2/medium'
  }
}`,...(Rr=(Lr=z.parameters)==null?void 0:Lr.docs)==null?void 0:Rr.source}}};var Cr,jr,Dr;I.parameters={...I.parameters,docs:{...(Cr=I.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h2/regular',
    children: 'typography/headline/h2/regular'
  }
}`,...(Dr=(jr=I.parameters)==null?void 0:jr.docs)==null?void 0:Dr.source}}};var Fr,Nr,Er;G.parameters={...G.parameters,docs:{...(Fr=G.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h3/black',
    children: 'typography/headline/h3/black'
  }
}`,...(Er=(Nr=G.parameters)==null?void 0:Nr.docs)==null?void 0:Er.source}}};var qr,Wr,Ar;U.parameters={...U.parameters,docs:{...(qr=U.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h3/bold',
    children: 'typography/headline/h3/bold'
  }
}`,...(Ar=(Wr=U.parameters)==null?void 0:Wr.docs)==null?void 0:Ar.source}}};var Vr,zr,Ir;J.parameters={...J.parameters,docs:{...(Vr=J.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h3/medium',
    children: 'typography/headline/h3/medium'
  }
}`,...(Ir=(zr=J.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var Gr,Ur,Jr;K.parameters={...K.parameters,docs:{...(Gr=K.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h3/regular',
    children: 'typography/headline/h3/regular'
  }
}`,...(Jr=(Ur=K.parameters)==null?void 0:Ur.docs)==null?void 0:Jr.source}}};var Kr,Qr,Xr;Q.parameters={...Q.parameters,docs:{...(Kr=Q.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h4/black',
    children: 'typography/headline/h4/black'
  }
}`,...(Xr=(Qr=Q.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Yr,Zr,ea;X.parameters={...X.parameters,docs:{...(Yr=X.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h4/bold',
    children: 'typography/headline/h4/bold'
  }
}`,...(ea=(Zr=X.parameters)==null?void 0:Zr.docs)==null?void 0:ea.source}}};var ra,aa,oa;Y.parameters={...Y.parameters,docs:{...(ra=Y.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h4/medium',
    children: 'typography/headline/h4/medium'
  }
}`,...(oa=(aa=Y.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var ta,la,na;Z.parameters={...Z.parameters,docs:{...(ta=Z.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    variant: 'typography/headline/h4/regular',
    children: 'typography/headline/h4/regular'
  }
}`,...(na=(la=Z.parameters)==null?void 0:la.docs)==null?void 0:na.source}}};var sa,ia,ca;ee.parameters={...ee.parameters,docs:{...(sa=ee.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/large/black',
    children: 'typography/title/large/black'
  }
}`,...(ca=(ia=ee.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ua,da,pa;re.parameters={...re.parameters,docs:{...(ua=re.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/large/bold',
    children: 'typography/title/large/bold'
  }
}`,...(pa=(da=re.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,ya,ga;ae.parameters={...ae.parameters,docs:{...(ma=ae.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/large/medium',
    children: 'typography/title/large/medium'
  }
}`,...(ga=(ya=ae.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var ha,va,ba;oe.parameters={...oe.parameters,docs:{...(ha=oe.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/large/regular',
    children: 'typography/title/large/regular'
  }
}`,...(ba=(va=oe.parameters)==null?void 0:va.docs)==null?void 0:ba.source}}};var fa,Sa,_a;te.parameters={...te.parameters,docs:{...(fa=te.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/medium/black',
    children: 'typography/title/medium/black'
  }
}`,...(_a=(Sa=te.parameters)==null?void 0:Sa.docs)==null?void 0:_a.source}}};var ka,Ma,Ba;le.parameters={...le.parameters,docs:{...(ka=le.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/medium/bold',
    children: 'typography/title/medium/bold'
  }
}`,...(Ba=(Ma=le.parameters)==null?void 0:Ma.docs)==null?void 0:Ba.source}}};var Pa,Ta,xa;ne.parameters={...ne.parameters,docs:{...(Pa=ne.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/medium/medium',
    children: 'typography/title/medium/medium'
  }
}`,...(xa=(Ta=ne.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var Ha,wa,$a;se.parameters={...se.parameters,docs:{...(Ha=se.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/medium/regular',
    children: 'typography/title/medium/regular'
  }
}`,...($a=(wa=se.parameters)==null?void 0:wa.docs)==null?void 0:$a.source}}};var Oa,La,Ra;ie.parameters={...ie.parameters,docs:{...(Oa=ie.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/small/black',
    children: 'typography/title/small/black'
  }
}`,...(Ra=(La=ie.parameters)==null?void 0:La.docs)==null?void 0:Ra.source}}};var Ca,ja,Da;ce.parameters={...ce.parameters,docs:{...(Ca=ce.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/small/bold',
    children: 'typography/title/small/bold'
  }
}`,...(Da=(ja=ce.parameters)==null?void 0:ja.docs)==null?void 0:Da.source}}};var Fa,Na,Ea;ue.parameters={...ue.parameters,docs:{...(Fa=ue.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/small/medium',
    children: 'typography/title/small/medium'
  }
}`,...(Ea=(Na=ue.parameters)==null?void 0:Na.docs)==null?void 0:Ea.source}}};var qa,Wa,Aa;de.parameters={...de.parameters,docs:{...(qa=de.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    variant: 'typography/title/small/regular',
    children: 'typography/title/small/regular'
  }
}`,...(Aa=(Wa=de.parameters)==null?void 0:Wa.docs)==null?void 0:Aa.source}}};var Va,za,Ia;pe.parameters={...pe.parameters,docs:{...(Va=pe.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/medium/black',
    children: 'typography/body/medium/black'
  }
}`,...(Ia=(za=pe.parameters)==null?void 0:za.docs)==null?void 0:Ia.source}}};var Ga,Ua,Ja;me.parameters={...me.parameters,docs:{...(Ga=me.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/medium/bold',
    children: 'typography/body/medium/bold'
  }
}`,...(Ja=(Ua=me.parameters)==null?void 0:Ua.docs)==null?void 0:Ja.source}}};var Ka,Qa,Xa;ye.parameters={...ye.parameters,docs:{...(Ka=ye.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/medium/medium',
    children: 'typography/body/medium/medium'
  }
}`,...(Xa=(Qa=ye.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var Ya,Za,eo;ge.parameters={...ge.parameters,docs:{...(Ya=ge.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/medium/regular',
    children: 'typography/body/medium/regular'
  }
}`,...(eo=(Za=ge.parameters)==null?void 0:Za.docs)==null?void 0:eo.source}}};var ro,ao,oo;he.parameters={...he.parameters,docs:{...(ro=he.parameters)==null?void 0:ro.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/small/black',
    children: 'typography/body/small/black'
  }
}`,...(oo=(ao=he.parameters)==null?void 0:ao.docs)==null?void 0:oo.source}}};var to,lo,no;ve.parameters={...ve.parameters,docs:{...(to=ve.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/small/bold',
    children: 'typography/body/small/bold'
  }
}`,...(no=(lo=ve.parameters)==null?void 0:lo.docs)==null?void 0:no.source}}};var so,io,co;be.parameters={...be.parameters,docs:{...(so=be.parameters)==null?void 0:so.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/small/medium',
    children: 'typography/body/small/medium'
  }
}`,...(co=(io=be.parameters)==null?void 0:io.docs)==null?void 0:co.source}}};var uo,po,mo;fe.parameters={...fe.parameters,docs:{...(uo=fe.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/body/small/regular',
    children: 'typography/body/small/regular'
  }
}`,...(mo=(po=fe.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var yo,go,ho;Se.parameters={...Se.parameters,docs:{...(yo=Se.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/large/black',
    children: 'typography/label/large/black'
  }
}`,...(ho=(go=Se.parameters)==null?void 0:go.docs)==null?void 0:ho.source}}};var vo,bo,fo;_e.parameters={..._e.parameters,docs:{...(vo=_e.parameters)==null?void 0:vo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/large/bold',
    children: 'typography/label/large/bold'
  }
}`,...(fo=(bo=_e.parameters)==null?void 0:bo.docs)==null?void 0:fo.source}}};var So,_o,ko;ke.parameters={...ke.parameters,docs:{...(So=ke.parameters)==null?void 0:So.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/large/medium',
    children: 'typography/label/large/medium'
  }
}`,...(ko=(_o=ke.parameters)==null?void 0:_o.docs)==null?void 0:ko.source}}};var Mo,Bo,Po;Me.parameters={...Me.parameters,docs:{...(Mo=Me.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/large/regular',
    children: 'typography/label/large/regular'
  }
}`,...(Po=(Bo=Me.parameters)==null?void 0:Bo.docs)==null?void 0:Po.source}}};var To,xo,Ho;Be.parameters={...Be.parameters,docs:{...(To=Be.parameters)==null?void 0:To.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/medium/black',
    children: 'typography/label/medium/black'
  }
}`,...(Ho=(xo=Be.parameters)==null?void 0:xo.docs)==null?void 0:Ho.source}}};var wo,$o,Oo;Pe.parameters={...Pe.parameters,docs:{...(wo=Pe.parameters)==null?void 0:wo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/medium/bold',
    children: 'typography/label/medium/bold'
  }
}`,...(Oo=($o=Pe.parameters)==null?void 0:$o.docs)==null?void 0:Oo.source}}};var Lo,Ro,Co;Te.parameters={...Te.parameters,docs:{...(Lo=Te.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/medium/medium',
    children: 'typography/label/medium/medium'
  }
}`,...(Co=(Ro=Te.parameters)==null?void 0:Ro.docs)==null?void 0:Co.source}}};var jo,Do,Fo;xe.parameters={...xe.parameters,docs:{...(jo=xe.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/medium/regular',
    children: 'typography/label/medium/regular'
  }
}`,...(Fo=(Do=xe.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};var No,Eo,qo;He.parameters={...He.parameters,docs:{...(No=He.parameters)==null?void 0:No.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/small/black',
    children: 'typography/label/small/black'
  }
}`,...(qo=(Eo=He.parameters)==null?void 0:Eo.docs)==null?void 0:qo.source}}};var Wo,Ao,Vo;we.parameters={...we.parameters,docs:{...(Wo=we.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/small/bold',
    children: 'typography/label/small/bold'
  }
}`,...(Vo=(Ao=we.parameters)==null?void 0:Ao.docs)==null?void 0:Vo.source}}};var zo,Io,Go;$e.parameters={...$e.parameters,docs:{...(zo=$e.parameters)==null?void 0:zo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/small/medium',
    children: 'typography/label/small/medium'
  }
}`,...(Go=(Io=$e.parameters)==null?void 0:Io.docs)==null?void 0:Go.source}}};var Uo,Jo,Ko;Oe.parameters={...Oe.parameters,docs:{...(Uo=Oe.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
  args: {
    variant: 'typography/label/small/regular',
    children: 'typography/label/small/regular'
  }
}`,...(Ko=(Jo=Oe.parameters)==null?void 0:Jo.docs)==null?void 0:Ko.source}}};const Wl=["Default","HeadlineH1Black","HeadlineH1Bold","HeadlineH1Medium","HeadlineH1Regular","HeadlineH2Black","HeadlineH2Bold","HeadlineH2Medium","HeadlineH2Regular","HeadlineH3Black","HeadlineH3Bold","HeadlineH3Medium","HeadlineH3Regular","HeadlineH4Black","HeadlineH4Bold","HeadlineH4Medium","HeadlineH4Regular","TitleLargeBlack","TitleLargeBold","TitleLargeMedium","TitleLargeRegular","TitleMediumBlack","TitleMediumBold","TitleMediumMedium","TitleMediumRegular","TitleSmallBlack","TitleSmallBold","TitleSmallMedium","TitleSmallRegular","BodyMediumBlack","BodyMediumBold","BodyMediumMedium","BodyMediumRegular","BodySmallBlack","BodySmallBold","BodySmallMedium","BodySmallRegular","LabelLargeBlack","LabelLargeBold","LabelLargeMedium","LabelLargeRegular","LabelMediumBlack","LabelMediumBold","LabelMediumMedium","LabelMediumRegular","LabelSmallBlack","LabelSmallBold","LabelSmallMedium","LabelSmallRegular"],Jl=Object.freeze(Object.defineProperty({__proto__:null,BodyMediumBlack:pe,BodyMediumBold:me,BodyMediumMedium:ye,BodyMediumRegular:ge,BodySmallBlack:he,BodySmallBold:ve,BodySmallMedium:be,BodySmallRegular:fe,Default:F,HeadlineH1Black:N,HeadlineH1Bold:E,HeadlineH1Medium:q,HeadlineH1Regular:W,HeadlineH2Black:A,HeadlineH2Bold:V,HeadlineH2Medium:z,HeadlineH2Regular:I,HeadlineH3Black:G,HeadlineH3Bold:U,HeadlineH3Medium:J,HeadlineH3Regular:K,HeadlineH4Black:Q,HeadlineH4Bold:X,HeadlineH4Medium:Y,HeadlineH4Regular:Z,LabelLargeBlack:Se,LabelLargeBold:_e,LabelLargeMedium:ke,LabelLargeRegular:Me,LabelMediumBlack:Be,LabelMediumBold:Pe,LabelMediumMedium:Te,LabelMediumRegular:xe,LabelSmallBlack:He,LabelSmallBold:we,LabelSmallMedium:$e,LabelSmallRegular:Oe,TitleLargeBlack:ee,TitleLargeBold:re,TitleLargeMedium:ae,TitleLargeRegular:oe,TitleMediumBlack:te,TitleMediumBold:le,TitleMediumMedium:ne,TitleMediumRegular:se,TitleSmallBlack:ie,TitleSmallBold:ce,TitleSmallMedium:ue,TitleSmallRegular:de,__namedExportsOrder:Wl,default:ql},Symbol.toStringTag,{value:"Module"}));export{de as A,pe as B,me as C,F as D,ye as E,ge as F,he as G,N as H,ve as I,be as J,fe as K,Se as L,_e as M,ke as N,Me as O,Be as P,Pe as Q,Te as R,xe as S,Jl as T,He as U,we as V,$e as W,Oe as X,E as a,q as b,W as c,A as d,V as e,z as f,I as g,G as h,U as i,J as j,K as k,Q as l,X as m,Y as n,Z as o,ee as p,re as q,ae as r,oe as s,te as t,le as u,ne as v,se as w,ie as x,ce as y,ue as z};
