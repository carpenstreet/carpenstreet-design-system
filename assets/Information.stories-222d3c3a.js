import{a as p,j as o}from"./jsx-runtime-29545a09.js";import{a as S}from"./ThemeMui-9d263c2a.js";import{I as _}from"./InformationOutlineIcon-65831ee5.js";import{u as v}from"./useTheme-a1ad4bb0.js";import{B as l}from"./Box-d8b18064.js";import{T as I}from"./Typography-d79cf371.js";function a(n){const{variant:r,iconBoxSx:d,sx:m,contents:f,icon:i,iconToTop:x}=n,e=v(),g=(()=>{switch(r){case"default":return e.palette["color/gray/100"];case"info":return e.palette["color/skyblue/100"];case"attention":return e.palette["color/orange/100"]}})(),y=(()=>{switch(r){case"default":return e.palette["color/gray/800"];case"info":return e.palette["color/skyblue/600"];case"attention":return e.palette["color/orange/500"]}})(),h=(()=>{switch(r){case"default":return e.palette["color/gray/600"];case"info":return e.palette["color/skyblue/500"];case"attention":return e.palette["color/orange/500"]}})(),T={display:"flex",width:"32px",height:"32px",justifyContent:"center",alignItems:"center",flexShrink:0,borderRadius:"100px",...x&&{alignSelf:"start"},backgroundColor:h,...d},b={width:"100%",borderRadius:"8px",padding:"16px 24px",display:"flex",gap:"16px",backgroundColor:g,alignItems:"center","& span":{color:y},...m};return p(l,{sx:b,children:[o(l,{sx:T,children:i||o(_,{color:"color/white",width:24,height:24})}),f]})}try{a.displayName="Information",a.__docgenInfo={description:"",displayName:"Information",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"attention"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},iconBoxSx:{defaultValue:null,description:"",name:"iconBoxSx",required:!1,type:{name:"SxProps<Theme>"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconToTop:{defaultValue:null,description:"",name:"iconToTop",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"Component/Information",component:a,decorators:[n=>o(S,{children:o(n,{})})]},C=p(I,{variant:"typography/body/small/medium",children:["내일은 없다 -윤동주",o("br",{}),"내일 내일 하기에 물었더니 밤을 자고 동틀 때 내일이라고",o("br",{}),"새 날을 찾던 나는 잠을 자고 돌아보니 그 때는 내일이 아니라 오늘이더라",o("br",{}),"무리여! 동무여! 내일은 없나니"]}),t={args:{variant:"default",contents:C,iconToTop:!1,sx:{},iconBoxSx:{}}};var s,c,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    contents: Contents,
    iconToTop: false,
    sx: {},
    iconBoxSx: {}
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{t as D,R as I};
