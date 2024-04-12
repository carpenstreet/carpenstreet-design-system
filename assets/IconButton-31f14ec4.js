import{j as m}from"./jsx-runtime-29545a09.js";import{b as n,f as p,e as z,_ as B}from"./ThemeMui-ea0543e5.js";import{_ as t}from"./extends-623938b0.js";import{r as I}from"./index-76fb7be0.js";import{g as R,a as _,c as C}from"./generateUtilityClasses-75070e10.js";import{s as $,c as h}from"./styled-59a9458f.js";import{B as x}from"./ButtonBase-6f94b71f.js";function M(o){return _("MuiIconButton",o)}const k=R("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),E=k,T=["edge","children","className","color","disabled","disableFocusRipple","size"],N=o=>{const{classes:e,disabled:a,color:r,edge:s,size:l}=o,i={root:["root",a&&"disabled",r!=="default"&&`color${n(r)}`,s&&`edge${n(s)}`,`size${n(l)}`]};return h(i,M,e)},U=$(x,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.color!=="default"&&e[`color${n(a.color)}`],a.edge&&e[`edge${n(a.edge)}`],e[`size${n(a.size)}`]]}})(({theme:o,ownerState:e})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var a;const r=(a=(o.vars||o).palette)==null?void 0:a[e.color];return t({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&t({color:r==null?void 0:r.main},!e.disableRipple&&{"&:hover":t({},r&&{backgroundColor:o.vars?`rgba(${r.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(r.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${E.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),q=I.forwardRef(function(e,a){const r=z({props:e,name:"MuiIconButton"}),{edge:s=!1,children:l,className:i,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=r,y=B(r,T),u=t({},r,{edge:s,color:g,disabled:c,disableFocusRipple:d,size:v}),b=N(u);return m(U,t({className:C(b.root,i),centerRipple:!0,focusRipple:!d,disabled:c,ref:a},y,{ownerState:u,children:l}))}),L=q;function f(o){const{children:e,color:a="default",...r}=o;return m(L,{color:a,...r,children:e})}try{f.displayName="IconButton",f.__docgenInfo={description:"",displayName:"IconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'}]}}}}}catch{}export{f as I};