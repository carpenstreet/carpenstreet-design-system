import{j as n}from"./jsx-runtime-29545a09.js";import{a as h}from"./ThemeMui-f112b92e.js";import{M as _}from"./MenuItem-b04d5883.js";import{B as y}from"./Box-cfbd86d2.js";function l({children:t,...I}){return n(y,{sx:{borderWidth:"1px",borderColor:"color/gray/100",borderStyle:"solid",borderRadius:"4px",width:"fit-content"},children:n(_,{...I,children:t})})}try{l.displayName="ExampleMenuItem",l.__docgenInfo={description:"",displayName:"ExampleMenuItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const S={title:"Component/MenuItem",component:l,decorators:[t=>n(h,{children:n(t,{})})]},e={args:{selected:!1,disabled:!1,children:"Menu Item",sx:{}}},r={args:{selected:!1,disabled:!1,children:"Default",sx:{}}},s={args:{selected:!0,disabled:!1,children:"Selected",sx:{}}},a={args:{selected:!1,disabled:!0,children:"Disabled",sx:{}}};var o,d,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: 'Menu Item',
    sx: {}
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: 'Default',
    sx: {}
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    children: 'Selected',
    sx: {}
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var M,x,g;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: true,
    children: 'Disabled',
    sx: {}
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const D=["Default","DefaultMenuItem","SelectedMenuItem","DisabledMenuItem"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DefaultMenuItem:r,DisabledMenuItem:a,SelectedMenuItem:s,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,q as M,s as S,r as a,a as b};
