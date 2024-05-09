import{j as a}from"./jsx-runtime-29545a09.js";import{k as N,f as d,g as j,c as E,_ as O,a as T}from"./ThemeMui-f7db1558.js";import{_ as n}from"./extends-623938b0.js";import{r as F}from"./index-76fb7be0.js";import{a as K,g as V,c as W}from"./generateUtilityClasses-33c3c131.js";import{s as y}from"./styled-0a9fac8a.js";import{c as q}from"./composeClasses-b42b2e69.js";function B(r){return K("MuiCircularProgress",r)}V("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const G=["className","color","disableShrink","size","style","thickness","value","variant"];let m=r=>r,S,b,D,M;const t=44,L=N(S||(S=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=N(b||(b=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=r=>{const{classes:e,variant:s,color:o,disableShrink:u}=r,p={root:["root",s,`color${d(o)}`],svg:["svg"],circle:["circle",`circle${d(s)}`,u&&"circleDisableShrink"]};return q(p,B,e)},H=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${d(s.color)}`]]}})(({ownerState:r,theme:e})=>n({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&j(D||(D=m`
      animation: ${0} 1.4s linear infinite;
    `),L)),J=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Q=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${d(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>n({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&j(M||(M=m`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),X=F.forwardRef(function(e,s){const o=E({props:e,name:"MuiCircularProgress"}),{className:u,color:p="primary",disableShrink:I=!1,size:f=40,style:U,thickness:c=3.6,value:g=0,variant:P="indeterminate"}=o,z=O(o,G),l=n({},o,{color:p,disableShrink:I,size:f,thickness:c,value:g,variant:P}),h=A(l),k={},_={},x={};if(P==="determinate"){const C=2*Math.PI*((t-c)/2);k.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(g),k.strokeDashoffset=`${((100-g)/100*C).toFixed(3)}px`,_.transform="rotate(-90deg)"}return a(H,n({className:W(h.root,u),style:n({width:f,height:f},_,U),ownerState:l,ref:s,role:"progressbar"},x,z,{children:a(J,{className:h.svg,ownerState:l,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a(Q,{className:h.circle,style:k,ownerState:l,cx:t,cy:t,r:(t-c)/2,fill:"none",strokeWidth:c})})}))}),Y=X;function v(r){const{thickness:e=6,disableShrink:s=!0,...o}=r;return a(Y,{thickness:e,disableShrink:s,...o})}try{v.displayName="Progress",v.__docgenInfo={description:"",displayName:"Progress",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const rr={title:"Component/Progress",component:v,decorators:[r=>a(T,{children:a(r,{})})]},i={args:{thickness:6}};var $,R,w;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    thickness: 6
  }
}`,...(w=(R=i.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const er=["Default"],lr=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:er,default:rr},Symbol.toStringTag,{value:"Module"}));export{i as D,lr as P};
