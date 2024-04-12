import{a as Y,j as m}from"./jsx-runtime-29545a09.js";import{b as Ae,e as ve,_ as ae,a as st}from"./ThemeMui-ea0543e5.js";import{T as at}from"./Typography-ec53c883.js";import{r as d,R as it}from"./index-76fb7be0.js";import{_ as p}from"./extends-623938b0.js";import{g as Se,a as ye,c as W}from"./generateUtilityClasses-75070e10.js";import{s as A,c as ge}from"./styled-59a9458f.js";import{B as Fe}from"./ButtonBase-6f94b71f.js";import"./react-is.production.min-a192e302.js";import{u as He}from"./useTheme-9256e830.js";import{b as ct,c as be}from"./TransitionGroupContext-0066119d.js";import{d as De}from"./debounce-517eeb3c.js";import{o as Xe}from"./ownerWindow-6e2dfaa8.js";import{u as se,o as dt}from"./useSlotProps-073ffa63.js";import{c as Ve}from"./createSvgIcon-a841fa5a.js";let U;function Ue(){if(U)return U;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),U="reverse",e.scrollLeft>0?U="default":(e.scrollLeft=1,e.scrollLeft===0&&(U="negative")),document.body.removeChild(e),U}function ut(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ue()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function pt(e){return ye("MuiTab",e)}const ft=Se("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),O=ft,bt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ht=e=>{const{classes:t,textColor:r,fullWidth:s,wrapped:n,icon:i,label:h,selected:b,disabled:u}=e,S={root:["root",i&&h&&"labelIcon",`textColor${Ae(r)}`,s&&"fullWidth",n&&"wrapped",b&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return ge(S,pt,t)},mt=A(Fe,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Ae(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>p({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${O.iconWrapper}`]:p({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${O.selected}`]:{opacity:1},[`&.${O.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${O.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${O.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${O.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${O.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),vt=d.forwardRef(function(t,r){const s=ve({props:t,name:"MuiTab"}),{className:n,disabled:i=!1,disableFocusRipple:h=!1,fullWidth:b,icon:u,iconPosition:S="top",indicator:T,label:w,onChange:x,onClick:y,onFocus:F,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:C,wrapped:ie=!1}=s,D=ae(s,bt),q=p({},s,{disabled:i,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:S,label:!!w,fullWidth:b,textColor:H,wrapped:ie}),X=ht(q),_=u&&w&&d.isValidElement(u)?d.cloneElement(u,{className:W(X.iconWrapper,u.props.className)}):u,ee=z=>{!I&&x&&x(z,C),y&&y(z)},V=z=>{g&&!I&&x&&x(z,C),F&&F(z)};return Y(mt,p({focusRipple:!h,className:W(X.root,n),ref:r,role:"tab","aria-selected":I,disabled:i,onClick:ee,onFocus:V,ownerState:q,tabIndex:I?0:-1},D,{children:[S==="top"||S==="start"?Y(d.Fragment,{children:[_,w]}):Y(d.Fragment,{children:[w,_]}),T]}))}),St=vt,yt=Ve(m("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),gt=Ve(m("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function xt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Ct(e,t,r,s={},n=()=>{}){const{ease:i=xt,duration:h=300}=s;let b=null;const u=t[e];let S=!1;const T=()=>{S=!0},w=x=>{if(S){n(new Error("Animation cancelled"));return}b===null&&(b=x);const y=Math.min(1,(x-b)/h);if(t[e]=i(y)*(r-u)+u,y>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),T):(requestAnimationFrame(w),T)}const Bt=["onChange"],Tt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function wt(e){const{onChange:t}=e,r=ae(e,Bt),s=d.useRef(),n=d.useRef(null),i=()=>{s.current=n.current.offsetHeight-n.current.clientHeight};return ct(()=>{const h=De(()=>{const u=s.current;i(),u!==s.current&&t(s.current)}),b=Xe(n.current);return b.addEventListener("resize",h),()=>{h.clear(),b.removeEventListener("resize",h)}},[t]),d.useEffect(()=>{i(),t(s.current)},[t]),m("div",p({style:Tt,ref:n},r))}function It(e){return ye("MuiTabScrollButton",e)}const Et=Se("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Mt=Et,zt=["className","slots","slotProps","direction","orientation","disabled"],Rt=e=>{const{classes:t,orientation:r,disabled:s}=e;return ge({root:["root",r,s&&"disabled"]},It,t)},Lt=A(Fe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>p({width:40,flexShrink:0,opacity:.8,[`&.${Mt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Pt=d.forwardRef(function(t,r){var s,n;const i=ve({props:t,name:"MuiTabScrollButton"}),{className:h,slots:b={},slotProps:u={},direction:S}=i,T=ae(i,zt),x=He().direction==="rtl",y=p({isRtl:x},i),F=Rt(y),I=(s=b.StartScrollButtonIcon)!=null?s:yt,g=(n=b.EndScrollButtonIcon)!=null?n:gt,H=se({elementType:I,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:y}),C=se({elementType:g,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:y});return m(Lt,p({component:"div",className:W(F.root,h),ref:r,role:null,ownerState:y,tabIndex:null},T,{children:S==="left"?m(I,p({},H)):m(g,p({},C))}))}),Wt=Pt;function _t(e){return ye("MuiTabs",e)}const Nt=Se("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),he=Nt,kt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],We=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,_e=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,ne=(e,t,r)=>{let s=!1,n=r(e,t);for(;n;){if(n===e.firstChild){if(s)return;s=!0}const i=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||i)n=r(e,n);else{n.focus();return}}},$t=e=>{const{vertical:t,fixed:r,hideScrollbar:s,scrollableX:n,scrollableY:i,centered:h,scrollButtonsHideMobile:b,classes:u}=e;return ge({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",s&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},_t,u)},Ot=A("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${he.scrollButtons}`]:t.scrollButtons},{[`& .${he.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>p({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${he.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),At=A("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>p({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ft=A("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>p({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Ht=A("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>p({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Dt=A(wt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Ne={},Xt=d.forwardRef(function(t,r){const s=ve({props:t,name:"MuiTabs"}),n=He(),i=n.direction==="rtl",{"aria-label":h,"aria-labelledby":b,action:u,centered:S=!1,children:T,className:w,component:x="div",allowScrollButtonsMobile:y=!1,indicatorColor:F="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=Wt,scrollButtons:C="auto",selectionFollowsFocus:ie,slots:D={},slotProps:q={},TabIndicatorProps:X={},TabScrollButtonProps:_={},textColor:ee="primary",value:V,variant:z="standard",visibleScrollbar:ce=!1}=s,Ye=ae(s,kt),E=z==="scrollable",B=g==="vertical",K=B?"scrollTop":"scrollLeft",te=B?"top":"left",oe=B?"bottom":"right",de=B?"clientHeight":"clientWidth",j=B?"height":"width",N=p({},s,{component:x,allowScrollButtonsMobile:y,indicatorColor:F,orientation:g,vertical:B,scrollButtons:C,textColor:ee,variant:z,visibleScrollbar:ce,fixed:!E,hideScrollbar:E&&!ce,scrollableX:E&&!B,scrollableY:E&&B,centered:S&&!E,scrollButtonsHideMobile:!y}),L=$t(N),qe=se({elementType:D.StartScrollButtonIcon,externalSlotProps:q.startScrollButtonIcon,ownerState:N}),Ke=se({elementType:D.EndScrollButtonIcon,externalSlotProps:q.endScrollButtonIcon,ownerState:N}),[xe,je]=d.useState(!1),[k,Ce]=d.useState(Ne),[Be,Ge]=d.useState(!1),[Te,Je]=d.useState(!1),[we,Qe]=d.useState(!1),[Ie,Ze]=d.useState({overflow:"hidden",scrollbarWidth:0}),Ee=new Map,R=d.useRef(null),$=d.useRef(null),Me=()=>{const o=R.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ut(o,n.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let c;if(o&&V!==!1){const a=$.current.children;if(a.length>0){const f=a[Ee.get(V)];c=f?f.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:c}},G=be(()=>{const{tabsMeta:o,tabMeta:l}=Me();let c=0,a;if(B)a="top",l&&o&&(c=l.top-o.top+o.scrollTop);else if(a=i?"right":"left",l&&o){const v=i?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;c=(i?-1:1)*(l[a]-o[a]+v)}const f={[a]:c,[j]:l?l[j]:0};if(isNaN(k[a])||isNaN(k[j]))Ce(f);else{const v=Math.abs(k[a]-f[a]),M=Math.abs(k[j]-f[j]);(v>=1||M>=1)&&Ce(f)}}),ue=(o,{animation:l=!0}={})=>{l?Ct(K,R.current,o,{duration:n.transitions.duration.standard}):R.current[K]=o},ze=o=>{let l=R.current[K];B?l+=o:(l+=o*(i?-1:1),l*=i&&Ue()==="reverse"?-1:1),ue(l)},Re=()=>{const o=R.current[de];let l=0;const c=Array.from($.current.children);for(let a=0;a<c.length;a+=1){const f=c[a];if(l+f[de]>o){a===0&&(l=o);break}l+=f[de]}return l},et=()=>{ze(-1*Re())},tt=()=>{ze(Re())},ot=d.useCallback(o=>{Ze({overflow:null,scrollbarWidth:o})},[]),lt=()=>{const o={};o.scrollbarSizeListener=E?m(Dt,{onChange:ot,className:W(L.scrollableX,L.hideScrollbar)}):null;const c=E&&(C==="auto"&&(Be||Te)||C===!0);return o.scrollButtonStart=c?m(H,p({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:qe},orientation:g,direction:i?"right":"left",onClick:et,disabled:!Be},_,{className:W(L.scrollButtons,_.className)})):null,o.scrollButtonEnd=c?m(H,p({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ke},orientation:g,direction:i?"left":"right",onClick:tt,disabled:!Te},_,{className:W(L.scrollButtons,_.className)})):null,o},Le=be(o=>{const{tabsMeta:l,tabMeta:c}=Me();if(!(!c||!l)){if(c[te]<l[te]){const a=l[K]+(c[te]-l[te]);ue(a,{animation:o})}else if(c[oe]>l[oe]){const a=l[K]+(c[oe]-l[oe]);ue(a,{animation:o})}}}),le=be(()=>{E&&C!==!1&&Qe(!we)});d.useEffect(()=>{const o=De(()=>{R.current&&G()});let l;const c=v=>{v.forEach(M=>{M.removedNodes.forEach(J=>{var P;(P=l)==null||P.unobserve(J)}),M.addedNodes.forEach(J=>{var P;(P=l)==null||P.observe(J)})}),o(),le()},a=Xe(R.current);a.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from($.current.children).forEach(v=>{l.observe(v)})),typeof MutationObserver<"u"&&(f=new MutationObserver(c),f.observe($.current,{childList:!0})),()=>{var v,M;o.clear(),a.removeEventListener("resize",o),(v=f)==null||v.disconnect(),(M=l)==null||M.disconnect()}},[G,le]),d.useEffect(()=>{const o=Array.from($.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&E&&C!==!1){const c=o[0],a=o[l-1],f={root:R.current,threshold:.99},v=fe=>{Ge(!fe[0].isIntersecting)},M=new IntersectionObserver(v,f);M.observe(c);const J=fe=>{Je(!fe[0].isIntersecting)},P=new IntersectionObserver(J,f);return P.observe(a),()=>{M.disconnect(),P.disconnect()}}},[E,C,we,T==null?void 0:T.length]),d.useEffect(()=>{je(!0)},[]),d.useEffect(()=>{G()}),d.useEffect(()=>{Le(Ne!==k)},[Le,k]),d.useImperativeHandle(u,()=>({updateIndicator:G,updateScrollButtons:le}),[G,le]);const Pe=m(Ht,p({},X,{className:W(L.indicator,X.className),ownerState:N,style:p({},k,X.style)}));let re=0;const rt=d.Children.map(T,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?re:o.props.value;Ee.set(l,re);const c=l===V;return re+=1,d.cloneElement(o,p({fullWidth:z==="fullWidth",indicator:c&&!xe&&Pe,selected:c,selectionFollowsFocus:ie,onChange:I,textColor:ee,value:l},re===1&&V===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),nt=o=>{const l=$.current,c=dt(l).activeElement;if(c.getAttribute("role")!=="tab")return;let f=g==="horizontal"?"ArrowLeft":"ArrowUp",v=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&i&&(f="ArrowRight",v="ArrowLeft"),o.key){case f:o.preventDefault(),ne(l,c,_e);break;case v:o.preventDefault(),ne(l,c,We);break;case"Home":o.preventDefault(),ne(l,null,We);break;case"End":o.preventDefault(),ne(l,null,_e);break}},pe=lt();return Y(Ot,p({className:W(L.root,w),ownerState:N,ref:r,as:x},Ye,{children:[pe.scrollButtonStart,pe.scrollbarSizeListener,Y(At,{className:L.scroller,ownerState:N,style:{overflow:Ie.overflow,[B?`margin${i?"Left":"Right"}`:"marginBottom"]:ce?void 0:-Ie.scrollbarWidth},ref:R,children:[m(Ft,{"aria-label":h,"aria-labelledby":b,"aria-orientation":g==="vertical"?"vertical":null,className:L.flexContainer,ownerState:N,onKeyDown:nt,ref:$,role:"tablist",children:rt}),xe&&Pe]}),pe.scrollButtonEnd]}))}),Vt=Xt,Z=it.forwardRef((e,t)=>{const{label:r,size:s,sx:n,...i}=e,h=m(at,{variant:"typography/body/small/regular",color:"color/gray/800",children:r}),b={padding:s==="L"?"0 16px 0":"0 6px 0",height:s==="L"?"64px":"46px",...n};return m(St,{...i,label:h,sx:b,ref:t})});try{Z.displayName="Tab",Z.__docgenInfo={description:"",displayName:"Tab",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'}]}}}}}catch{}function me(e){const{label:t,disabled:r,sx:s,...n}=e;return Y(Vt,{children:[m(Z,{...e}),m(Z,{label:"Tab Two",...n}),m(Z,{label:"Tab Three",...n})]})}try{me.displayName="ExampleTabs",me.__docgenInfo={description:"",displayName:"ExampleTabs",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"L"'},{value:'"M"'}]}}}}}catch{}const Ut={title:"Component/Tab",component:me,decorators:[e=>m(st,{children:m(e,{})})]},Q={args:{label:"Look At Me!",size:"L",disabled:!1,sx:{}}};var ke,$e,Oe;Q.parameters={...Q.parameters,docs:{...(ke=Q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'Look At Me!',
    size: 'L',
    disabled: false,
    sx: {}
  }
}`,...(Oe=($e=Q.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};const Yt=["Default"],io=Object.freeze(Object.defineProperty({__proto__:null,Default:Q,__namedExportsOrder:Yt,default:Ut},Symbol.toStringTag,{value:"Module"}));export{Q as D,io as T};
