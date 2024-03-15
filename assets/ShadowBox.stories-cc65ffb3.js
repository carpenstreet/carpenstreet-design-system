import{j as d}from"./Color-443384d2.js";import{s as F,u as I,_ as v,f as H,a as R,T as $}from"./ThemeMui-1eab459c.js";import{s as z,e as A,c as D,a as G,C as L}from"./generateUtilityClasses-7bb6736c.js";import{_ as O}from"./extends-623938b0.js";import{r as U}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const W=["className","component"];function k(t={}){const{themeId:m,defaultTheme:T,defaultClassName:h="MuiBox-root",generateClassName:x}=t,X=z("div",{shouldForwardProp:o=>o!=="theme"&&o!=="sx"&&o!=="as"})(F);return U.forwardRef(function(E,M){const c=I(T),i=A(E),{className:P,component:j="div"}=i,y=v(i,W);return d(X,O({as:j,ref:M,className:D(P,x?x(h):h),theme:m&&c[m]||c},y))})}const q=G("MuiBox",["root"]),J=q,K=H(),Q=k({themeId:R,defaultTheme:K,defaultClassName:J.root,generateClassName:L.generate}),V=Q,no={title:"Foundation/Shadow",component:V,decorators:[t=>d($,{children:d(t,{})})]},n={width:100,height:100,textAlign:"center",lineHeight:"100px",fontSize:"12px"},e={args:{children:"Shadow 1",sx:{...n,boxShadow:1}}},s={args:{children:"Shadow 2",sx:{...n,boxShadow:2}}},a={args:{children:"Shadow 3",sx:{...n,boxShadow:3}}},r={args:{children:"Shadow 4",sx:{...n,boxShadow:4}}};var l,S,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Shadow 1',
    sx: {
      ...CommonSX,
      boxShadow: 1
    }
  }
}`,...(u=(S=e.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var p,w,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Shadow 2',
    sx: {
      ...CommonSX,
      boxShadow: 2
    }
  }
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var f,B,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Shadow 3',
    sx: {
      ...CommonSX,
      boxShadow: 3
    }
  }
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,_,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Shadow 4',
    sx: {
      ...CommonSX,
      boxShadow: 4
    }
  }
}`,...(N=(_=r.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const to=["ShadowBox1","ShadowBox2","ShadowBox3","ShadowBox4"];export{e as ShadowBox1,s as ShadowBox2,a as ShadowBox3,r as ShadowBox4,to as __namedExportsOrder,no as default};
