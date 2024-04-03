import{j as P}from"./jsx-runtime-29545a09.js";import{T as Ar}from"./Typography-d683936d.js";import{u as Gr}from"./useTheme-34a1d272.js";import{B as Hr}from"./Box-6c7de64c.js";import{T as Jr}from"./ThemeMui-39d8adf7.js";function O(I){const{children:E,color:r="default",variant:o,sx:qr}=I,e=Gr(),Vr={...(()=>{const a={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"22px",padding:"4px 8px",borderRadius:"4px"};if(o==="filled"){if(r==="default")return{...a,backgroundColor:e.palette["color/gray/600"]};if(r==="primary")return{...a,backgroundColor:e.palette["color/primary/600"]};if(r==="info")return{...a,backgroundColor:e.palette["color/state/info"]};if(r==="success")return{...a,backgroundColor:e.palette["color/state/success"]};if(r==="error")return{...a,backgroundColor:e.palette["color/state/error"]}}if(o==="soft"){if(r==="default")return{...a,backgroundColor:e.palette["color/gray/100"]};if(r==="primary")return{...a,backgroundColor:e.palette["color/primary/dim/300"]};if(r==="info")return{...a,backgroundColor:e.palette["color/state/infoDim/300"]};if(r==="success")return{...a,backgroundColor:e.palette["color/state/successDim/300"]};if(r==="error")return{...a,backgroundColor:e.palette["color/state/errorDim/300"]}}if(o==="outlined"){if(r==="default")return{...a,backgroundColor:"transparent",boxShadow:`0 0 0 1px ${e.palette["color/gray/600"]} inset`};if(r==="primary")return{...a,backgroundColor:"transparent",boxShadow:`0 0 0 1px ${e.palette["color/primary/600"]} inset`};if(r==="info")return{...a,backgroundColor:"transparent",boxShadow:`0 0 0 1px ${e.palette["color/state/info"]} inset`};if(r==="success")return{...a,backgroundColor:"transparent",boxShadow:`0 0 0 1px ${e.palette["color/state/success"]} inset`};if(r==="error")return{...a,backgroundColor:"transparent",boxShadow:`0 0 0 1px ${e.palette["color/state/error"]} inset`}}if(o==="small"){if(r==="default")return{...a,width:"16px",height:"16px",borderRadius:"100px",backgroundColor:e.palette["color/gray/100"]};if(r==="primary")return{...a,width:"16px",height:"16px",borderRadius:"100px",backgroundColor:e.palette["color/primary/600"]};if(r==="info")return{...a,width:"16px",height:"16px",borderRadius:"100px",backgroundColor:e.palette["color/state/info"]};if(r==="success")return{...a,width:"16px",height:"16px",borderRadius:"100px",backgroundColor:e.palette["color/state/success"]};if(r==="error")return{...a,width:"16px",height:"16px",borderRadius:"100px",backgroundColor:e.palette["color/state/error"]}}})(),...qr},Br=o==="small"?"typography/label/small/bold":"typography/label/medium/bold",Mr=(()=>{if(o==="filled")return"color/white";if(o==="soft"){if(r==="default")return"color/gray/800";if(r==="primary")return"color/primary/600";if(r==="info")return"color/state/info";if(r==="success")return"color/state/success";if(r==="error")return"color/state/error"}if(o==="outlined"){if(r==="default")return"color/gray/600";if(r==="primary")return"color/primary/600";if(r==="info")return"color/state/info";if(r==="success")return"color/state/success";if(r==="error")return"color/state/error"}if(o==="small")return r==="default"?"color/gray/800":"color/white"})(),zr=o==="small"&&typeof E=="string"?E.slice(0,1):E;return P(Hr,{sx:Vr,children:P(Ar,{variant:Br,color:Mr,children:zr})})}try{O.displayName="Label",O.__docgenInfo={description:"",displayName:"Label",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"error"'},{value:'"info"'},{value:'"success"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"outlined"'},{value:'"filled"'},{value:'"soft"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const Kr={title:"Component/Label",component:O,decorators:[I=>P(Jr,{children:P(I,{})})]},s={args:{children:"Label",variant:"filled",color:"default",sx:{}}},n={args:{children:"Default",variant:"filled",color:"default"}},t={args:{children:"Primary",variant:"filled",color:"primary"}},l={args:{children:"Info",variant:"filled",color:"info"}},c={args:{children:"Success",variant:"filled",color:"success"}},i={args:{children:"Error",variant:"filled",color:"error"}},u={args:{children:"Default",variant:"soft",color:"default"}},d={args:{children:"Primary",variant:"soft",color:"primary"}},p={args:{children:"Info",variant:"soft",color:"info"}},m={args:{children:"Success",variant:"soft",color:"success"}},f={args:{children:"Error",variant:"soft",color:"error"}},g={args:{children:"Default",variant:"outlined",color:"default"}},h={args:{children:"Primary",variant:"outlined",color:"primary"}},S={args:{children:"Info",variant:"outlined",color:"info"}},y={args:{children:"Success",variant:"outlined",color:"success"}},v={args:{children:"Error",variant:"outlined",color:"error"}},b={args:{children:"N",variant:"small",color:"default"}},x={args:{children:"N",variant:"small",color:"primary"}},C={args:{children:"N",variant:"small",color:"info"}},k={args:{children:"N",variant:"small",color:"success"}},D={args:{children:"N",variant:"small",color:"error"}};var _,w,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'default',
    sx: {}
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var F,L,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'filled',
    color: 'default'
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var R,j,$;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'filled',
    color: 'primary'
  }
}`,...($=(j=t.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var q,V,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    variant: 'filled',
    color: 'info'
  }
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var M,z,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    variant: 'filled',
    color: 'success'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,H,J;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'filled',
    color: 'error'
  }
}`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'soft',
    color: 'default'
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'soft',
    color: 'primary'
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    variant: 'soft',
    color: 'info'
  }
}`,...(er=(rr=p.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,sr;m.parameters={...m.parameters,docs:{...(ar=m.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    variant: 'soft',
    color: 'success'
  }
}`,...(sr=(or=m.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var nr,tr,lr;f.parameters={...f.parameters,docs:{...(nr=f.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'soft',
    color: 'error'
  }
}`,...(lr=(tr=f.parameters)==null?void 0:tr.docs)==null?void 0:lr.source}}};var cr,ir,ur;g.parameters={...g.parameters,docs:{...(cr=g.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'outlined',
    color: 'default'
  }
}`,...(ur=(ir=g.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var dr,pr,mr;h.parameters={...h.parameters,docs:{...(dr=h.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'outlined',
    color: 'primary'
  }
}`,...(mr=(pr=h.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var fr,gr,hr;S.parameters={...S.parameters,docs:{...(fr=S.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    variant: 'outlined',
    color: 'info'
  }
}`,...(hr=(gr=S.parameters)==null?void 0:gr.docs)==null?void 0:hr.source}}};var Sr,yr,vr;y.parameters={...y.parameters,docs:{...(Sr=y.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    variant: 'outlined',
    color: 'success'
  }
}`,...(vr=(yr=y.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var br,xr,Cr;v.parameters={...v.parameters,docs:{...(br=v.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'outlined',
    color: 'error'
  }
}`,...(Cr=(xr=v.parameters)==null?void 0:xr.docs)==null?void 0:Cr.source}}};var kr,Dr,Ir;b.parameters={...b.parameters,docs:{...(kr=b.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    children: 'N',
    variant: 'small',
    color: 'default'
  }
}`,...(Ir=(Dr=b.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.source}}};var Pr,Er,Or;x.parameters={...x.parameters,docs:{...(Pr=x.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    children: 'N',
    variant: 'small',
    color: 'primary'
  }
}`,...(Or=(Er=x.parameters)==null?void 0:Er.docs)==null?void 0:Or.source}}};var _r,wr,Nr;C.parameters={...C.parameters,docs:{...(_r=C.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    children: 'N',
    variant: 'small',
    color: 'info'
  }
}`,...(Nr=(wr=C.parameters)==null?void 0:wr.docs)==null?void 0:Nr.source}}};var Fr,Lr,Tr;k.parameters={...k.parameters,docs:{...(Fr=k.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  args: {
    children: 'N',
    variant: 'small',
    color: 'success'
  }
}`,...(Tr=(Lr=k.parameters)==null?void 0:Lr.docs)==null?void 0:Tr.source}}};var Rr,jr,$r;D.parameters={...D.parameters,docs:{...(Rr=D.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  args: {
    children: 'N',
    variant: 'small',
    color: 'error'
  }
}`,...($r=(jr=D.parameters)==null?void 0:jr.docs)==null?void 0:$r.source}}};const Qr=["Default","FilledDefault","FilledPrimary","FilledInfo","FilledSuccess","FilledError","SoftDefault","SoftPrimary","SoftInfo","SoftSuccess","SoftError","OutlinedDefault","OutlinedPrimary","OutlinedInfo","OutlinedSuccess","OutlinedError","SmallDefault","SmallPrimary","SmallInfo","SmallSuccess","SmallError"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FilledDefault:n,FilledError:i,FilledInfo:l,FilledPrimary:t,FilledSuccess:c,OutlinedDefault:g,OutlinedError:v,OutlinedInfo:S,OutlinedPrimary:h,OutlinedSuccess:y,SmallDefault:b,SmallError:D,SmallInfo:C,SmallPrimary:x,SmallSuccess:k,SoftDefault:u,SoftError:f,SoftInfo:p,SoftPrimary:d,SoftSuccess:m,__namedExportsOrder:Qr,default:Kr},Symbol.toStringTag,{value:"Module"}));export{s as D,n as F,ee as L,g as O,u as S,t as a,l as b,c,i as d,d as e,p as f,m as g,f as h,h as i,S as j,y as k,v as l,b as m,x as n,C as o,k as p,D as q};
