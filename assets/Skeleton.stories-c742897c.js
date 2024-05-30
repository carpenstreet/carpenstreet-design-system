import{j as h}from"./jsx-runtime-29545a09.js";import{t as y,v as K,o as X,p as k,b as L,_ as z,a as G}from"./ThemeMui-50822afc.js";import{_ as p}from"./extends-623938b0.js";import{r as J}from"./index-76fb7be0.js";import{a as Q,g as Y,c as Z}from"./generateUtilityClasses-9f81b694.js";import{s as ee}from"./styled-97de0f75.js";import{c as te}from"./composeClasses-b42b2e69.js";function ae(e,t=0,r=1){return K(e,t,r)}function re(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(a=>a+a)),r?`rgb${r.length===4?"a":""}(${r.map((a,n)=>n<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function D(e){if(e.type)return e;if(e.charAt(0)==="#")return D(re(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(y(9,e));let a=e.substring(t+1,e.length-1),n;if(r==="color"){if(a=a.split(" "),n=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n)===-1)throw new Error(y(10,n))}else a=a.split(",");return a=a.map(i=>parseFloat(i)),{type:r,values:a,colorSpace:n}}function ne(e){const{type:t,colorSpace:r}=e;let{values:a}=e;return t.indexOf("rgb")!==-1?a=a.map((n,i)=>i<3?parseInt(n,10):n):t.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),t.indexOf("color")!==-1?a=`${r} ${a.join(" ")}`:a=`${a.join(", ")}`,`${t}(${a})`}function ie(e,t){return e=D(e),t=ae(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ne(e)}function se(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function oe(e){return parseFloat(e)}function le(e){return Q("MuiSkeleton",e)}Y("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ue=["animation","className","component","height","style","variant","width"];let m=e=>e,w,S,x,C;const ce=e=>{const{classes:t,variant:r,animation:a,hasChildren:n,width:i,height:d}=e;return te({root:["root",r,a,n&&"withChildren",n&&!i&&"fitContent",n&&!d&&"heightAuto"]},le,t)},de=X(w||(w=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),pe=X(S||(S=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),he=ee("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=se(e.shape.borderRadius)||"px",a=oe(e.shape.borderRadius);return p({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:ie(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&k(x||(x=m`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),de),({ownerState:e,theme:t})=>e.animation==="wave"&&k(C||(C=m`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),pe,(t.vars||t).palette.action.hover)),me=J.forwardRef(function(t,r){const a=L({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:i,component:d="span",height:f,style:F,variant:H="text",width:W}=a,v=z(a,ue),b=p({},a,{animation:n,component:d,variant:H,hasChildren:!!v.children}),B=ce(b);return h(he,p({as:d,ref:r,className:Z(B.root,i),ownerState:b},v,{style:p({width:W,height:f},F)}))}),ge=me;function g(e){const{width:t,height:r,variant:a="text",...n}=e;return h(ge,{width:t,height:a==="circular"?t:r,variant:a,...n})}try{g.displayName="Skeleton",g.__docgenInfo={description:"",displayName:"Skeleton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rounded"'},{value:'"rectangular"'}]}}}}}catch{}const fe={title:"Component/Skeleton",component:g,decorators:[e=>h(G,{children:h(e,{})})],argTypes:{variant:{default:"text",table:{defaultValue:{summary:"text"}}}}},s={args:{width:210,height:16,variant:"text"}},o={args:{width:210,variant:"text"}},l={args:{width:40,height:40,variant:"circular"}},u={args:{width:210,height:60,variant:"rectangular"}},c={args:{width:210,height:80,variant:"rounded"}};var _,$,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: 210,
    height: 16,
    variant: 'text'
  }
}`,...(R=($=s.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var M,T,O;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    width: 210,
    variant: 'text'
  }
}`,...(O=(T=o.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,j,U;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    width: 40,
    height: 40,
    variant: 'circular'
  }
}`,...(U=(j=l.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var V,A,I;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    width: 210,
    height: 60,
    variant: 'rectangular'
  }
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var q,N,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    width: 210,
    height: 80,
    variant: 'rounded'
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const ve=["Default","TextSkeleton","CircularSkeleton","RectangularSkeleton","RoundedSkeleton"],_e=Object.freeze(Object.defineProperty({__proto__:null,CircularSkeleton:l,Default:s,RectangularSkeleton:u,RoundedSkeleton:c,TextSkeleton:o,__namedExportsOrder:ve,default:fe},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,u as R,_e as S,o as T,c as a};
