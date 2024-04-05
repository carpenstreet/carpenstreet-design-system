import{j as u}from"./jsx-runtime-29545a09.js";import{T as N}from"./Typography-f7d62cc6.js";import{f as p,e as h,_ as E}from"./ThemeMui-15d3b0e5.js";import{_ as d}from"./extends-623938b0.js";import{r as c}from"./index-76fb7be0.js";import{g as m,a as F,c as x}from"./generateUtilityClasses-5ee99248.js";import{s as P,r as G,c as S}from"./styled-1061f0b7.js";import{B as U}from"./ButtonBase-c3b99651.js";import{u as j}from"./useEnhancedEffect-92a32ebf.js";import{u as H}from"./useForkRef-2c2f4318.js";const D=m("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),$=D,W=c.createContext({}),M=W,q=m("MuiListItemIcon",["root","alignItemsFlexStart"]),_=q,z=m("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),O=z;function A(e){return F("MuiMenuItem",e)}const J=m("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),l=J,K=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Q=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},X=e=>{const{disabled:t,dense:a,divider:s,disableGutters:o,selected:r,classes:n}=e,i=S({root:["root",a&&"dense",t&&"disabled",!o&&"gutters",s&&"divider",r&&"selected"]},A,n);return d({},n,i)},Y=P(U,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Q})(({theme:e,ownerState:t})=>d({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:p(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${l.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:p(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${l.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:p(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:p(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${l.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${l.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${_.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&d({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_.root} svg`]:{fontSize:"1.25rem"}}))),Z=c.forwardRef(function(t,a){const s=h({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:r="li",dense:n=!1,divider:y=!1,disableGutters:i=!1,focusVisibleClassName:T,role:V="menuitem",tabIndex:b,className:k}=s,R=E(s,K),v=c.useContext(M),C=c.useMemo(()=>({dense:n||v.dense||!1,disableGutters:i}),[v.dense,n,i]),f=c.useRef(null);j(()=>{o&&f.current&&f.current.focus()},[o]);const w=d({},s,{dense:C.dense,divider:y,disableGutters:i}),g=X(s),B=H(f,a);let I;return s.disabled||(I=b!==void 0?b:-1),u(M.Provider,{value:C,children:u(Y,d({ref:B,role:V,tabIndex:I,component:r,focusVisibleClassName:x(g.focusVisible,T),className:x(g.root,k)},R,{ownerState:w,classes:g}))})}),ee=Z;function L({children:e,selected:t,disabled:a,...s}){const o=(()=>t?"typography/body/small/medium":"typography/body/small/regular")(),r=(()=>a?"color/gray/200":"color/gray/800")();return u(ee,{selected:t,disabled:a,...s,children:u(N,{variant:o,color:r,children:e})})}try{L.displayName="MenuItem",L.__docgenInfo={description:"",displayName:"MenuItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}export{M as L,L as M};
