import{j as t,a as j}from"./jsx-runtime-29545a09.js";import{a as v}from"./ThemeMui-1bfad6a5.js";import{R as y}from"./index-76fb7be0.js";import{M as D}from"./Menu-ddfb5a4a.js";import{M as H}from"./MenuItem-6688ed52.js";import{B as L}from"./Button-30f491b1.js";import{B as N}from"./Box-c9e52334.js";function M({width:e,fullWidth:c,children:p,anchorEl:r,sx:i,paperSx:m,...f}){const u={"& .MuiPaper-root":{...e&&{width:e},...c&&{width:`${r&&r instanceof Element&&r.clientWidth}px`},...m},...i};return t(D,{anchorEl:r,sx:u,...f,children:p})}try{M.displayName="Menu",M.__docgenInfo={description:"",displayName:"Menu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},paperSx:{defaultValue:null,description:"",name:"paperSx",required:!1,type:{name:"CSSProperties"}}}}}catch{}function x({...e}){const[c,p]=y.useState(null),[r,i]=y.useState(null),m=!!r,f=d=>i(d.currentTarget),u=()=>i(null),R=d=>()=>{p(d),u()};return j(N,{sx:{display:"flex",gap:"10px",width:"250px",marginBottom:"100px"},children:[t(L,{color:"primary",variant:"contained",size:"M",sx:{width:"100%"},onClick:f,children:"Click"}),t(M,{anchorEl:r,open:m,onClose:u,...e,children:new Array(10).fill(null).map((d,h)=>t(H,{selected:c===h,onClick:R(h),children:"Menu Item Menu Item!"},h))})]})}try{x.displayName="ExampleMenu",x.__docgenInfo={description:"",displayName:"ExampleMenu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},paperSx:{defaultValue:null,description:"",name:"paperSx",required:!1,type:{name:"CSSProperties"}}}}}catch{}const P={title:"Component/Menu",component:x,decorators:[e=>t(v,{children:t(e,{})})]},n={args:{fullWidth:!1,width:void 0,paperSx:{},sx:{}}},a={args:{width:300}},l={args:{width:100}},o={args:{}},s={args:{fullWidth:!0}};var g,S,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fullWidth: false,
    width: undefined,
    paperSx: {},
    sx: {}
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var W,w,I;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    width: 300
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var q,C,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    width: 100
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var V,b,k;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var F,T,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const O=["Default","FixedMenuWithScrollLeft","FixedMenuWithScrollRight","HugMenuWithScroll","FullWidthMenu"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,FixedMenuWithScrollLeft:a,FixedMenuWithScrollRight:l,FullWidthMenu:s,HugMenuWithScroll:o,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));export{n as D,a as F,o as H,Q as M,l as a,s as b};
