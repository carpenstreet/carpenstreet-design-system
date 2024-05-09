import{a as N,j as i}from"./jsx-runtime-29545a09.js";import{a as k}from"./ThemeMui-f7db1558.js";import{V as E}from"./VVIPIcon-10c3cacf.js";import{T as R}from"./Typography-d7c49750.js";import{u as $}from"./useTheme-566570f0.js";import{B as A}from"./Box-16550ea9.js";function m(p){const{partnership:c,size:l="M",sx:O}=p,B=$(),C={...(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",borderRadius:"100px",gap:"2px",padding:l==="M"?"4px 12px":"2px 8px",background:B.palette[`color/partnership/${c}`]}))(),...O},u=l==="M"?20:16;return N(A,{sx:C,children:[i(E,{color:"color/white",width:u,height:u}),i(R,{variant:l==="M"?"typography/body/small/bold":"typography/label/large/bold",color:"color/white",children:c==="vvip"?"VVIP":c==="vip"?"VIP":"Partner"})]})}try{m.displayName="LabelPartnership",m.__docgenInfo={description:"",displayName:"LabelPartnership",props:{partnership:{defaultValue:null,description:"",name:"partnership",required:!0,type:{name:"enum",value:[{value:'"vvip"'},{value:'"vip"'},{value:'"partner"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const F={title:"Component/LabelPartnership",component:m,argTypes:{size:{table:{defaultValue:{summary:"M"}}}},decorators:[p=>i(k,{children:i(p,{})})]},e={args:{partnership:"vvip",size:"M",sx:{}}},r={args:{partnership:"vvip",size:"M"}},a={args:{partnership:"vvip",size:"S"}},s={args:{partnership:"vip",size:"M"}},t={args:{partnership:"vip",size:"S"}},n={args:{partnership:"partner",size:"M"}},o={args:{partnership:"partner",size:"S"}};var d,h,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    partnership: 'vvip',
    size: 'M',
    sx: {}
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,S,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    partnership: 'vvip',
    size: 'M'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var V,y,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    partnership: 'vvip',
    size: 'S'
  }
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var M,b,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    partnership: 'vip',
    size: 'M'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var z,I,_;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    partnership: 'vip',
    size: 'S'
  }
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var T,j,L;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    partnership: 'partner',
    size: 'M'
  }
}`,...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var w,q,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    partnership: 'partner',
    size: 'S'
  }
}`,...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const G=["Default","VVIPMedium","VVIPSmall","VIPMedium","VIPSmall","PartnerMedium","PartnerSmall"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:e,PartnerMedium:n,PartnerSmall:o,VIPMedium:s,VIPSmall:t,VVIPMedium:r,VVIPSmall:a,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{e as D,ee as L,n as P,r as V,a,s as b,t as c,o as d};
