import{j as n,a as j}from"./jsx-runtime-29545a09.js";import{a as v}from"./ThemeMui-50822afc.js";import{R as S}from"./index-76fb7be0.js";import{M as D}from"./Menu-500ef630.js";import{M as H}from"./MenuItem-401246d6.js";import{B as L}from"./Button-e18ec3e8.js";import{B as N}from"./Box-eb1ef63e.js";function x({width:e,fullWidth:d,children:c,anchorEl:r,sx:i,paperSx:m,...h}){const p={"& .MuiPaper-root":{...e&&{width:e},...d&&{width:`${r&&r instanceof Element&&r.clientWidth}px`},...m},...i};return n(D,{anchorEl:r,sx:p,...h,children:c})}try{x.displayName="Menu",x.__docgenInfo={description:"",displayName:"Menu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},paperSx:{defaultValue:null,description:"",name:"paperSx",required:!1,type:{name:"CSSProperties"}}}}}catch{}function g({...e}){const[d,c]=S.useState(null),[r,i]=S.useState(null),m=!!r,h=u=>i(u.currentTarget),p=()=>i(null),R=u=>()=>{c(u),p()};return j(N,{sx:{display:"flex",gap:"10px",width:"250px",marginBottom:"100px"},children:[n(L,{color:"primary",variant:"contained",size:"M",sx:{width:"100%"},onClick:h,children:"Click"}),n(x,{anchorEl:r,open:m,onClose:p,...e,children:new Array(10).fill(null).map((u,f)=>n(H,{selected:d===f,onClick:R(f),children:"Menu Item Menu Item!"},f))})]})}try{g.displayName="ExampleMenu",g.__docgenInfo={description:"",displayName:"ExampleMenu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},paperSx:{defaultValue:null,description:"",name:"paperSx",required:!1,type:{name:"CSSProperties"}}}}}catch{}const P={title:"Component/Menu",component:g,decorators:[e=>n(v,{children:n(e,{})})]},t={args:{fullWidth:!1,width:void 0,paperSx:{height:"160px"},sx:{}}},a={args:{width:300,paperSx:{height:"160px"}}},l={args:{width:100,paperSx:{height:"160px"}}},o={args:{paperSx:{height:"160px"}}},s={args:{fullWidth:!0,paperSx:{height:"160px"}}};var M,y,_;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fullWidth: false,
    width: undefined,
    paperSx: {
      height: '160px'
    },
    sx: {}
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var W,w,I;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    width: 300,
    paperSx: {
      height: '160px'
    }
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var q,C,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    width: 100,
    paperSx: {
      height: '160px'
    }
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var V,b,k;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    paperSx: {
      height: '160px'
    }
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var F,T,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    paperSx: {
      height: '160px'
    }
  }
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const O=["Default","FixedMenuWithScrollLeft","FixedMenuWithScrollRight","HugMenuWithScroll","FullWidthMenu"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FixedMenuWithScrollLeft:a,FixedMenuWithScrollRight:l,FullWidthMenu:s,HugMenuWithScroll:o,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));export{t as D,a as F,o as H,Q as M,l as a,s as b};
