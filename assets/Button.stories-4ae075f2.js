import{j as e,a as Nc}from"./jsx-runtime-9dc53467.js";import{r as ra,R as jc}from"./index-76fb7be0.js";import{T as qc}from"./Typography-5bc94f84.js";import{b as Fc,g as Hc,c as l,k as na,o as Ac,e as Jc,h as Kc,i as pa,j as Qc,T as Yc}from"./ThemeMui-758068f8.js";import{_ as c}from"./extends-15b115a7.js";import{s as ia,r as Zc}from"./styled-4da9efe7.js";import{B as eu}from"./IconButton-83ba64d2.js";import"./ProfileFilledIcon-5aecc4cc.js";import"./SearchIcon-d8cbe155.js";import"./CategoryIcon-b3a5da4d.js";import"./StarIcon-8189692e.js";import"./ImageIcon-7f918f6d.js";import"./DownloadIcon-72085bf8.js";import"./MinusIcon-43103623.js";import"./CloseIcon-6c9f8c22.js";import"./VVIPIcon-07002d43.js";import"./FilterIcon-84b42f18.js";import"./ViewIcon-2b73d0d0.js";import"./CopyIcon-040480fa.js";import"./WritingIcon-0d505899.js";import"./BoxIcon-4d88e186.js";import"./EarningIcon-06b53358.js";import"./NoticeOutlineIcon-6adc2bc1.js";import"./NoticeIcon-b848b4e3.js";import"./InformationOutlineIcon-6683d1a9.js";import"./InformationIcon-fbbf4a17.js";import"./RemoveIcon-9074b96f.js";import{C as a}from"./ChevronLeftIcon-691bdf69.js";import{C as n}from"./ChevronRightIcon-c08d127a.js";import"./ChevronDownIcon-3df49d43.js";import"./ChevronUpIcon-6e13439f.js";import"./CaretUpIcon-340a3f93.js";import"./CaretDownIcon-b894064e.js";import"./ArrowDownIcon-4a756cc9.js";import"./ArrowUpIcon-36f98d3c.js";import"./ArrowRightIcon-352267d7.js";import"./ArrowLeftIcon-2e5cd2a2.js";import"./SecurityIcon-a1fc3d8a.js";import"./BubbleIcon-8ba08101.js";import"./Grid-451d26b0.js";function ru(r){return Hc("MuiButton",r)}const au=Fc("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),oa=au,nu=ra.createContext({}),ou=nu,tu=ra.createContext(void 0),su=tu,iu=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],du=r=>{const{color:o,disableElevation:s,fullWidth:u,size:i,variant:t,classes:d}=r,g={root:["root",t,`${t}${l(o)}`,`size${l(i)}`,`${t}Size${l(i)}`,`color${l(o)}`,s&&"disableElevation",u&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${l(i)}`],endIcon:["icon","endIcon",`iconSize${l(i)}`]},ta=Qc(g,ru,d);return c({},d,ta)},Rc=r=>c({},r.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},r.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},r.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),lu=ia(eu,{shouldForwardProp:r=>Zc(r)||r==="classes",name:"MuiButton",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:s}=r;return[o.root,o[s.variant],o[`${s.variant}${l(s.color)}`],o[`size${l(s.size)}`],o[`${s.variant}Size${l(s.size)}`],s.color==="inherit"&&o.colorInherit,s.disableElevation&&o.disableElevation,s.fullWidth&&o.fullWidth]}})(({theme:r,ownerState:o})=>{var s,u;const i=r.palette.mode==="light"?r.palette.grey[300]:r.palette.grey[800],t=r.palette.mode==="light"?r.palette.grey.A100:r.palette.grey[700];return c({},r.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":c({textDecoration:"none",backgroundColor:r.vars?`rgba(${r.vars.palette.text.primaryChannel} / ${r.vars.palette.action.hoverOpacity})`:na(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:r.vars?`rgba(${r.vars.palette[o.color].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:na(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(r.vars||r).palette[o.color].main}`,backgroundColor:r.vars?`rgba(${r.vars.palette[o.color].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:na(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:t,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(r.vars||r).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[o.color].main}}),"&:active":c({},o.variant==="contained"&&{boxShadow:(r.vars||r).shadows[8]}),[`&.${oa.focusVisible}`]:c({},o.variant==="contained"&&{boxShadow:(r.vars||r).shadows[6]}),[`&.${oa.disabled}`]:c({color:(r.vars||r).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(r.vars||r).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(r.vars||r).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(r.vars||r).palette[o.color].main,border:r.vars?`1px solid rgba(${r.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${na(r.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:r.vars?r.vars.palette.text.primary:(s=(u=r.palette).getContrastText)==null?void 0:s.call(u,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:i,boxShadow:(r.vars||r).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(r.vars||r).palette[o.color].contrastText,backgroundColor:(r.vars||r).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:r})=>r.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${oa.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${oa.disabled}`]:{boxShadow:"none"}}),cu=ia("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(r,o)=>{const{ownerState:s}=r;return[o.startIcon,o[`iconSize${l(s.size)}`]]}})(({ownerState:r})=>c({display:"inherit",marginRight:8,marginLeft:-4},r.size==="small"&&{marginLeft:-2},Rc(r))),uu=ia("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(r,o)=>{const{ownerState:s}=r;return[o.endIcon,o[`iconSize${l(s.size)}`]]}})(({ownerState:r})=>c({display:"inherit",marginRight:-4,marginLeft:8},r.size==="small"&&{marginRight:-2},Rc(r))),gu=ra.forwardRef(function(o,s){const u=ra.useContext(ou),i=ra.useContext(su),t=Ac(u,o),d=Jc({props:t,name:"MuiButton"}),{children:g,color:ta="primary",component:da="button",className:Pc,disabled:la=!1,disableElevation:Gc=!1,disableFocusRipple:ca=!1,endIcon:ua,focusVisibleClassName:Ec,fullWidth:Oc=!1,size:Xc="medium",startIcon:ga,type:ma,variant:$c="text"}=d,kc=Kc(d,iu),aa=c({},d,{color:ta,component:da,disabled:la,disableElevation:Gc,disableFocusRipple:ca,fullWidth:Oc,size:Xc,type:ma,variant:$c}),m=du(aa),_c=ga&&e(cu,{className:m.startIcon,ownerState:aa,children:ga}),Vc=ua&&e(uu,{className:m.endIcon,ownerState:aa,children:ua}),Wc=i||"";return Nc(lu,c({ownerState:aa,className:pa(u.className,m.root,Pc,Wc),component:da,disabled:la,focusRipple:!ca,focusVisibleClassName:pa(m.focusVisible,Ec),ref:s,type:ma},kc,{classes:m,children:[_c,g,Vc]}))}),mu=gu;function sa(r){const{children:o,color:s="default",...u}=r,{variant:i,size:t,weight:d}=u,g=(()=>{if(i==="contained"){if(t==="L"||t==="XL")return"typography/body/medium/bold";if(t==="M")return"typography/body/small/bold";if(t==="S")return"typography/label/large/bold"}if(i==="outlined"){if(t==="L"||t==="XL")return"typography/body/medium/bold";if(t==="M")return"typography/body/small/bold";if(t==="S")return"typography/label/large/bold"}if(i==="text"){if(d==="regular"){if(t==="XL")return"typography/title/medium/regular";if(t==="L")return"typography/body/medium/regular";if(t==="M")return"typography/body/small/regular";if(t==="S")return"typography/label/large/regular"}if(d==="bold"){if(t==="XL")return"typography/title/medium/bold";if(t==="L")return"typography/body/medium/bold";if(t==="M")return"typography/body/small/bold";if(t==="S")return"typography/label/large/bold"}}if(i==="underlined"){if(d==="regular"){if(t==="L"||t==="XL")return"typography/body/medium/regular";if(t==="M")return"typography/body/small/regular";if(t==="S")return"typography/label/large/regular"}if(d==="bold"){if(t==="L"||t==="XL")return"typography/body/medium/bold";if(t==="M")return"typography/body/small/bold";if(t==="S")return"typography/label/large/bold"}}})();return jc.useEffect(()=>{i==="contained"&&(t==="XL"&&console.error("Design system Button props error: size - contained variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)"),s==="gray"&&console.error("Design system Button props error: color - contained variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)"),d==="bold"&&console.error("Design system Button props error: weight - contained variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)")),i==="outlined"&&(t==="XL"&&console.error("Design system Button props error: size - outlined variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)"),s==="gray"&&console.error("Design system Button props error: color - outlined variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)"),d==="bold"&&console.error("Design system Button props error: weight - outlined variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)")),i==="underlined"&&t==="XL"&&console.error("Design system Button props error: size - underlined variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)")},[i,t,s,d]),e(mu,{color:s,...u,children:e(qc,{variant:g,children:o})})}try{sa.displayName="Button",sa.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'},{value:'"underlined"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"XL"'},{value:'"L"'},{value:'"M"'},{value:'"S"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"primary"'},{value:'"default"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}}}catch{}const pu={title:"Component/Button",component:sa,decorators:[r=>e(Yc,{children:e(r,{})})]},p={args:{children:"button",variant:"contained",color:"default",size:"L",weight:"regular",disabled:!1,sx:{}}},b={args:{children:"button",variant:"contained",color:"default",size:"L",weight:"regular",disabled:!1}},h={args:{children:"button",variant:"contained",color:"default",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},f={args:{children:"button",variant:"contained",color:"default",size:"M",weight:"regular",disabled:!1}},I={args:{children:"button",variant:"contained",color:"default",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},v={args:{children:"button",variant:"contained",color:"default",size:"S",weight:"regular",disabled:!1}},y={args:{children:"button",variant:"contained",color:"default",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},x={args:{children:"button",variant:"contained",color:"primary",size:"L",weight:"regular",disabled:!1}},z={args:{children:"button",variant:"contained",color:"primary",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},L={args:{children:"button",variant:"contained",color:"primary",size:"M",weight:"regular",disabled:!1}},S={args:{children:"button",variant:"contained",color:"primary",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},w={args:{children:"button",variant:"contained",color:"primary",size:"S",weight:"regular",disabled:!1}},C={args:{children:"button",variant:"contained",color:"primary",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},M={args:{children:"button",variant:"contained",color:"default",size:"L",weight:"regular",disabled:!0}},D={args:{children:"button",variant:"contained",color:"default",size:"L",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},B={args:{children:"button",variant:"contained",color:"default",size:"M",weight:"regular",disabled:!0}},T={args:{children:"button",variant:"contained",color:"default",size:"M",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},U={args:{children:"button",variant:"contained",color:"default",size:"S",weight:"regular",disabled:!0}},R={args:{children:"button",variant:"contained",color:"default",size:"S",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},P={args:{children:"button",variant:"outlined",color:"default",size:"L",weight:"regular",disabled:!1}},G={args:{children:"button",variant:"outlined",color:"default",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},E={args:{children:"button",variant:"outlined",color:"default",size:"M",weight:"regular",disabled:!1}},O={args:{children:"button",variant:"outlined",color:"default",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},X={args:{children:"button",variant:"outlined",color:"default",size:"S",weight:"regular",disabled:!1}},$={args:{children:"button",variant:"outlined",color:"default",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},k={args:{children:"button",variant:"outlined",color:"primary",size:"L",weight:"regular",disabled:!1}},_={args:{children:"button",variant:"outlined",color:"primary",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},V={args:{children:"button",variant:"outlined",color:"primary",size:"M",weight:"regular",disabled:!1}},W={args:{children:"button",variant:"outlined",color:"primary",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},N={args:{children:"button",variant:"outlined",color:"primary",size:"S",weight:"regular",disabled:!1}},j={args:{children:"button",variant:"outlined",color:"primary",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},q={args:{children:"button",variant:"outlined",color:"default",size:"L",weight:"regular",disabled:!0}},F={args:{children:"button",variant:"outlined",color:"default",size:"L",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},H={args:{children:"button",variant:"outlined",color:"default",size:"M",weight:"regular",disabled:!0}},A={args:{children:"button",variant:"outlined",color:"default",size:"M",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},J={args:{children:"button",variant:"outlined",color:"default",size:"S",weight:"regular",disabled:!0}},K={args:{children:"button",variant:"outlined",color:"default",size:"S",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Q={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"regular",disabled:!1}},Y={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"bold",disabled:!1}},Z={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},ee={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},re={args:{children:"button",variant:"text",color:"default",size:"L",weight:"regular",disabled:!1}},ae={args:{children:"button",variant:"text",color:"default",size:"L",weight:"bold",disabled:!1}},ne={args:{children:"button",variant:"text",color:"default",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},oe={args:{children:"button",variant:"text",color:"default",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},te={args:{children:"button",variant:"text",color:"default",size:"M",weight:"regular",disabled:!1}},se={args:{children:"button",variant:"text",color:"default",size:"M",weight:"bold",disabled:!1}},ie={args:{children:"button",variant:"text",color:"default",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},de={args:{children:"button",variant:"text",color:"default",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},le={args:{children:"button",variant:"text",color:"default",size:"S",weight:"regular",disabled:!1}},ce={args:{children:"button",variant:"text",color:"default",size:"S",weight:"bold",disabled:!1}},ue={args:{children:"button",variant:"text",color:"default",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},ge={args:{children:"button",variant:"text",color:"default",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},me={args:{children:"button",variant:"text",color:"primary",size:"XL",weight:"regular",disabled:!1}},pe={args:{children:"button",variant:"text",color:"primary",size:"XL",weight:"bold",disabled:!1}},be={args:{children:"button",variant:"text",color:"primary",size:"XL",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},he={args:{children:"button",variant:"text",color:"primary",size:"XL",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},fe={args:{children:"button",variant:"text",color:"primary",size:"L",weight:"regular",disabled:!1}},Ie={args:{children:"button",variant:"text",color:"primary",size:"L",weight:"bold",disabled:!1}},ve={args:{children:"button",variant:"text",color:"primary",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},ye={args:{children:"button",variant:"text",color:"primary",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},xe={args:{children:"button",variant:"text",color:"primary",size:"M",weight:"regular",disabled:!1}},ze={args:{children:"button",variant:"text",color:"primary",size:"M",weight:"bold",disabled:!1}},Le={args:{children:"button",variant:"text",color:"primary",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Se={args:{children:"button",variant:"text",color:"primary",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},we={args:{children:"button",variant:"text",color:"primary",size:"S",weight:"regular",disabled:!1}},Ce={args:{children:"button",variant:"text",color:"primary",size:"S",weight:"bold",disabled:!1}},Me={args:{children:"button",variant:"text",color:"primary",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},De={args:{children:"button",variant:"text",color:"primary",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Be={args:{children:"button",variant:"text",color:"gray",size:"XL",weight:"regular",disabled:!1}},Te={args:{children:"button",variant:"text",color:"gray",size:"XL",weight:"bold",disabled:!1}},Ue={args:{children:"button",variant:"text",color:"gray",size:"XL",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Re={args:{children:"button",variant:"text",color:"gray",size:"XL",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Pe={args:{children:"button",variant:"text",color:"gray",size:"L",weight:"regular",disabled:!1}},Ge={args:{children:"button",variant:"text",color:"gray",size:"L",weight:"bold",disabled:!1}},Ee={args:{children:"button",variant:"text",color:"gray",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Oe={args:{children:"button",variant:"text",color:"gray",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Xe={args:{children:"button",variant:"text",color:"gray",size:"M",weight:"regular",disabled:!1}},$e={args:{children:"button",variant:"text",color:"gray",size:"M",weight:"bold",disabled:!1}},ke={args:{children:"button",variant:"text",color:"gray",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},_e={args:{children:"button",variant:"text",color:"gray",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Ve={args:{children:"button",variant:"text",color:"gray",size:"S",weight:"regular",disabled:!1}},We={args:{children:"button",variant:"text",color:"gray",size:"S",weight:"bold",disabled:!1}},Ne={args:{children:"button",variant:"text",color:"gray",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},je={args:{children:"button",variant:"text",color:"gray",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},qe={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"regular",disabled:!0}},Fe={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"bold",disabled:!0}},He={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Ae={args:{children:"button",variant:"text",color:"default",size:"XL",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Je={args:{children:"button",variant:"text",color:"default",size:"L",weight:"regular",disabled:!0}},Ke={args:{children:"button",variant:"text",color:"default",size:"L",weight:"bold",disabled:!0}},Qe={args:{children:"button",variant:"text",color:"default",size:"L",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Ye={args:{children:"button",variant:"text",color:"default",size:"L",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Ze={args:{children:"button",variant:"text",color:"default",size:"M",weight:"regular",disabled:!0}},er={args:{children:"button",variant:"text",color:"default",size:"M",weight:"bold",disabled:!0}},rr={args:{children:"button",variant:"text",color:"default",size:"M",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},ar={args:{children:"button",variant:"text",color:"default",size:"M",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},nr={args:{children:"button",variant:"text",color:"default",size:"S",weight:"regular",disabled:!0}},or={args:{children:"button",variant:"text",color:"default",size:"S",weight:"bold",disabled:!0}},tr={args:{children:"button",variant:"text",color:"default",size:"S",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},sr={args:{children:"button",variant:"text",color:"default",size:"S",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},ir={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"regular",disabled:!1}},dr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"bold",disabled:!1}},lr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},cr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},ur={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"regular",disabled:!1}},gr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"bold",disabled:!1}},mr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},pr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},br={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"regular",disabled:!1}},hr={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"bold",disabled:!1}},fr={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Ir={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},vr={args:{children:"button",variant:"underlined",color:"primary",size:"L",weight:"regular",disabled:!1}},yr={args:{children:"button",variant:"underlined",color:"primary",size:"L",weight:"bold",disabled:!1}},xr={args:{children:"button",variant:"underlined",color:"primary",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},zr={args:{children:"button",variant:"underlined",color:"primary",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Lr={args:{children:"button",variant:"underlined",color:"primary",size:"M",weight:"regular",disabled:!1}},Sr={args:{children:"button",variant:"underlined",color:"primary",size:"M",weight:"bold",disabled:!1}},wr={args:{children:"button",variant:"underlined",color:"primary",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Cr={args:{children:"button",variant:"underlined",color:"primary",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Mr={args:{children:"button",variant:"underlined",color:"primary",size:"S",weight:"regular",disabled:!1}},Dr={args:{children:"button",variant:"underlined",color:"primary",size:"S",weight:"bold",disabled:!1}},Br={args:{children:"button",variant:"underlined",color:"primary",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Tr={args:{children:"button",variant:"underlined",color:"primary",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Ur={args:{children:"button",variant:"underlined",color:"gray",size:"L",weight:"regular",disabled:!1}},Rr={args:{children:"button",variant:"underlined",color:"gray",size:"L",weight:"bold",disabled:!1}},Pr={args:{children:"button",variant:"underlined",color:"gray",size:"L",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Gr={args:{children:"button",variant:"underlined",color:"gray",size:"L",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Er={args:{children:"button",variant:"underlined",color:"gray",size:"M",weight:"regular",disabled:!1}},Or={args:{children:"button",variant:"underlined",color:"gray",size:"M",weight:"bold",disabled:!1}},Xr={args:{children:"button",variant:"underlined",color:"gray",size:"M",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},$r={args:{children:"button",variant:"underlined",color:"gray",size:"M",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},kr={args:{children:"button",variant:"underlined",color:"gray",size:"S",weight:"regular",disabled:!1}},_r={args:{children:"button",variant:"underlined",color:"gray",size:"S",weight:"bold",disabled:!1}},Vr={args:{children:"button",variant:"underlined",color:"gray",size:"S",weight:"regular",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Wr={args:{children:"button",variant:"underlined",color:"gray",size:"S",weight:"bold",disabled:!1,startIcon:e(a,{}),endIcon:e(n,{})}},Nr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"regular",disabled:!0}},jr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"bold",disabled:!0}},qr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Fr={args:{children:"button",variant:"underlined",color:"default",size:"L",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Hr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"regular",disabled:!0}},Ar={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"bold",disabled:!0}},Jr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Kr={args:{children:"button",variant:"underlined",color:"default",size:"M",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},Qr={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"regular",disabled:!0}},Yr={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"bold",disabled:!0}},Zr={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"regular",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}},ea={args:{children:"button",variant:"underlined",color:"default",size:"S",weight:"bold",disabled:!0,startIcon:e(a,{}),endIcon:e(n,{})}};var ba,ha,fa;p.parameters={...p.parameters,docs:{...(ba=p.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    sx: {}
  }
}`,...(fa=(ha=p.parameters)==null?void 0:ha.docs)==null?void 0:fa.source}}};var Ia,va,ya;b.parameters={...b.parameters,docs:{...(Ia=b.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(ya=(va=b.parameters)==null?void 0:va.docs)==null?void 0:ya.source}}};var xa,za,La;h.parameters={...h.parameters,docs:{...(xa=h.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(La=(za=h.parameters)==null?void 0:za.docs)==null?void 0:La.source}}};var Sa,wa,Ca;f.parameters={...f.parameters,docs:{...(Sa=f.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Ca=(wa=f.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Ma,Da,Ba;I.parameters={...I.parameters,docs:{...(Ma=I.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ba=(Da=I.parameters)==null?void 0:Da.docs)==null?void 0:Ba.source}}};var Ta,Ua,Ra;v.parameters={...v.parameters,docs:{...(Ta=v.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Ra=(Ua=v.parameters)==null?void 0:Ua.docs)==null?void 0:Ra.source}}};var Pa,Ga,Ea;y.parameters={...y.parameters,docs:{...(Pa=y.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ea=(Ga=y.parameters)==null?void 0:Ga.docs)==null?void 0:Ea.source}}};var Oa,Xa,$a;x.parameters={...x.parameters,docs:{...(Oa=x.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...($a=(Xa=x.parameters)==null?void 0:Xa.docs)==null?void 0:$a.source}}};var ka,_a,Va;z.parameters={...z.parameters,docs:{...(ka=z.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Va=(_a=z.parameters)==null?void 0:_a.docs)==null?void 0:Va.source}}};var Wa,Na,ja;L.parameters={...L.parameters,docs:{...(Wa=L.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(ja=(Na=L.parameters)==null?void 0:Na.docs)==null?void 0:ja.source}}};var qa,Fa,Ha;S.parameters={...S.parameters,docs:{...(qa=S.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ha=(Fa=S.parameters)==null?void 0:Fa.docs)==null?void 0:Ha.source}}};var Aa,Ja,Ka;w.parameters={...w.parameters,docs:{...(Aa=w.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Ka=(Ja=w.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Ya,Za;C.parameters={...C.parameters,docs:{...(Qa=C.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Za=(Ya=C.parameters)==null?void 0:Ya.docs)==null?void 0:Za.source}}};var en,rn,an;M.parameters={...M.parameters,docs:{...(en=M.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true
  }
}`,...(an=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var nn,on,tn;D.parameters={...D.parameters,docs:{...(nn=D.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(tn=(on=D.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};var sn,dn,ln;B.parameters={...B.parameters,docs:{...(sn=B.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true
  }
}`,...(ln=(dn=B.parameters)==null?void 0:dn.docs)==null?void 0:ln.source}}};var cn,un,gn;T.parameters={...T.parameters,docs:{...(cn=T.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(gn=(un=T.parameters)==null?void 0:un.docs)==null?void 0:gn.source}}};var mn,pn,bn;U.parameters={...U.parameters,docs:{...(mn=U.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true
  }
}`,...(bn=(pn=U.parameters)==null?void 0:pn.docs)==null?void 0:bn.source}}};var hn,fn,In;R.parameters={...R.parameters,docs:{...(hn=R.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(In=(fn=R.parameters)==null?void 0:fn.docs)==null?void 0:In.source}}};var vn,yn,xn;P.parameters={...P.parameters,docs:{...(vn=P.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(xn=(yn=P.parameters)==null?void 0:yn.docs)==null?void 0:xn.source}}};var zn,Ln,Sn;G.parameters={...G.parameters,docs:{...(zn=G.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Sn=(Ln=G.parameters)==null?void 0:Ln.docs)==null?void 0:Sn.source}}};var wn,Cn,Mn;E.parameters={...E.parameters,docs:{...(wn=E.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Mn=(Cn=E.parameters)==null?void 0:Cn.docs)==null?void 0:Mn.source}}};var Dn,Bn,Tn;O.parameters={...O.parameters,docs:{...(Dn=O.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Tn=(Bn=O.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source}}};var Un,Rn,Pn;X.parameters={...X.parameters,docs:{...(Un=X.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Pn=(Rn=X.parameters)==null?void 0:Rn.docs)==null?void 0:Pn.source}}};var Gn,En,On;$.parameters={...$.parameters,docs:{...(Gn=$.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(On=(En=$.parameters)==null?void 0:En.docs)==null?void 0:On.source}}};var Xn,$n,kn;k.parameters={...k.parameters,docs:{...(Xn=k.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(kn=($n=k.parameters)==null?void 0:$n.docs)==null?void 0:kn.source}}};var _n,Vn,Wn;_.parameters={..._.parameters,docs:{...(_n=_.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Wn=(Vn=_.parameters)==null?void 0:Vn.docs)==null?void 0:Wn.source}}};var Nn,jn,qn;V.parameters={...V.parameters,docs:{...(Nn=V.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(qn=(jn=V.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Fn,Hn,An;W.parameters={...W.parameters,docs:{...(Fn=W.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(An=(Hn=W.parameters)==null?void 0:Hn.docs)==null?void 0:An.source}}};var Jn,Kn,Qn;N.parameters={...N.parameters,docs:{...(Jn=N.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Qn=(Kn=N.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};var Yn,Zn,eo;j.parameters={...j.parameters,docs:{...(Yn=j.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(eo=(Zn=j.parameters)==null?void 0:Zn.docs)==null?void 0:eo.source}}};var ro,ao,no;q.parameters={...q.parameters,docs:{...(ro=q.parameters)==null?void 0:ro.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true
  }
}`,...(no=(ao=q.parameters)==null?void 0:ao.docs)==null?void 0:no.source}}};var oo,to,so;F.parameters={...F.parameters,docs:{...(oo=F.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(so=(to=F.parameters)==null?void 0:to.docs)==null?void 0:so.source}}};var io,lo,co;H.parameters={...H.parameters,docs:{...(io=H.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true
  }
}`,...(co=(lo=H.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};var uo,go,mo;A.parameters={...A.parameters,docs:{...(uo=A.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(mo=(go=A.parameters)==null?void 0:go.docs)==null?void 0:mo.source}}};var po,bo,ho;J.parameters={...J.parameters,docs:{...(po=J.parameters)==null?void 0:po.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true
  }
}`,...(ho=(bo=J.parameters)==null?void 0:bo.docs)==null?void 0:ho.source}}};var fo,Io,vo;K.parameters={...K.parameters,docs:{...(fo=K.parameters)==null?void 0:fo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(vo=(Io=K.parameters)==null?void 0:Io.docs)==null?void 0:vo.source}}};var yo,xo,zo;Q.parameters={...Q.parameters,docs:{...(yo=Q.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: false
  }
}`,...(zo=(xo=Q.parameters)==null?void 0:xo.docs)==null?void 0:zo.source}}};var Lo,So,wo;Y.parameters={...Y.parameters,docs:{...(Lo=Y.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: false
  }
}`,...(wo=(So=Y.parameters)==null?void 0:So.docs)==null?void 0:wo.source}}};var Co,Mo,Do;Z.parameters={...Z.parameters,docs:{...(Co=Z.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Do=(Mo=Z.parameters)==null?void 0:Mo.docs)==null?void 0:Do.source}}};var Bo,To,Uo;ee.parameters={...ee.parameters,docs:{...(Bo=ee.parameters)==null?void 0:Bo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Uo=(To=ee.parameters)==null?void 0:To.docs)==null?void 0:Uo.source}}};var Ro,Po,Go;re.parameters={...re.parameters,docs:{...(Ro=re.parameters)==null?void 0:Ro.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(Go=(Po=re.parameters)==null?void 0:Po.docs)==null?void 0:Go.source}}};var Eo,Oo,Xo;ae.parameters={...ae.parameters,docs:{...(Eo=ae.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(Xo=(Oo=ae.parameters)==null?void 0:Oo.docs)==null?void 0:Xo.source}}};var $o,ko,_o;ne.parameters={...ne.parameters,docs:{...($o=ne.parameters)==null?void 0:$o.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(_o=(ko=ne.parameters)==null?void 0:ko.docs)==null?void 0:_o.source}}};var Vo,Wo,No;oe.parameters={...oe.parameters,docs:{...(Vo=oe.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(No=(Wo=oe.parameters)==null?void 0:Wo.docs)==null?void 0:No.source}}};var jo,qo,Fo;te.parameters={...te.parameters,docs:{...(jo=te.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Fo=(qo=te.parameters)==null?void 0:qo.docs)==null?void 0:Fo.source}}};var Ho,Ao,Jo;se.parameters={...se.parameters,docs:{...(Ho=se.parameters)==null?void 0:Ho.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(Jo=(Ao=se.parameters)==null?void 0:Ao.docs)==null?void 0:Jo.source}}};var Ko,Qo,Yo;ie.parameters={...ie.parameters,docs:{...(Ko=ie.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Yo=(Qo=ie.parameters)==null?void 0:Qo.docs)==null?void 0:Yo.source}}};var Zo,et,rt;de.parameters={...de.parameters,docs:{...(Zo=de.parameters)==null?void 0:Zo.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(rt=(et=de.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var at,nt,ot;le.parameters={...le.parameters,docs:{...(at=le.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(ot=(nt=le.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var tt,st,it;ce.parameters={...ce.parameters,docs:{...(tt=ce.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(it=(st=ce.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var dt,lt,ct;ue.parameters={...ue.parameters,docs:{...(dt=ue.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(ct=(lt=ue.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var ut,gt,mt;ge.parameters={...ge.parameters,docs:{...(ut=ge.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(mt=(gt=ge.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};var pt,bt,ht;me.parameters={...me.parameters,docs:{...(pt=me.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'regular',
    disabled: false
  }
}`,...(ht=(bt=me.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var ft,It,vt;pe.parameters={...pe.parameters,docs:{...(ft=pe.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'bold',
    disabled: false
  }
}`,...(vt=(It=pe.parameters)==null?void 0:It.docs)==null?void 0:vt.source}}};var yt,xt,zt;be.parameters={...be.parameters,docs:{...(yt=be.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(zt=(xt=be.parameters)==null?void 0:xt.docs)==null?void 0:zt.source}}};var Lt,St,wt;he.parameters={...he.parameters,docs:{...(Lt=he.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(wt=(St=he.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var Ct,Mt,Dt;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(Dt=(Mt=fe.parameters)==null?void 0:Mt.docs)==null?void 0:Dt.source}}};var Bt,Tt,Ut;Ie.parameters={...Ie.parameters,docs:{...(Bt=Ie.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(Ut=(Tt=Ie.parameters)==null?void 0:Tt.docs)==null?void 0:Ut.source}}};var Rt,Pt,Gt;ve.parameters={...ve.parameters,docs:{...(Rt=ve.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Gt=(Pt=ve.parameters)==null?void 0:Pt.docs)==null?void 0:Gt.source}}};var Et,Ot,Xt;ye.parameters={...ye.parameters,docs:{...(Et=ye.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Xt=(Ot=ye.parameters)==null?void 0:Ot.docs)==null?void 0:Xt.source}}};var $t,kt,_t;xe.parameters={...xe.parameters,docs:{...($t=xe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(_t=(kt=xe.parameters)==null?void 0:kt.docs)==null?void 0:_t.source}}};var Vt,Wt,Nt;ze.parameters={...ze.parameters,docs:{...(Vt=ze.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(Nt=(Wt=ze.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.source}}};var jt,qt,Ft;Le.parameters={...Le.parameters,docs:{...(jt=Le.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ft=(qt=Le.parameters)==null?void 0:qt.docs)==null?void 0:Ft.source}}};var Ht,At,Jt;Se.parameters={...Se.parameters,docs:{...(Ht=Se.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Jt=(At=Se.parameters)==null?void 0:At.docs)==null?void 0:Jt.source}}};var Kt,Qt,Yt;we.parameters={...we.parameters,docs:{...(Kt=we.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Yt=(Qt=we.parameters)==null?void 0:Qt.docs)==null?void 0:Yt.source}}};var Zt,es,rs;Ce.parameters={...Ce.parameters,docs:{...(Zt=Ce.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(rs=(es=Ce.parameters)==null?void 0:es.docs)==null?void 0:rs.source}}};var as,ns,os;Me.parameters={...Me.parameters,docs:{...(as=Me.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(os=(ns=Me.parameters)==null?void 0:ns.docs)==null?void 0:os.source}}};var ts,ss,is;De.parameters={...De.parameters,docs:{...(ts=De.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(is=(ss=De.parameters)==null?void 0:ss.docs)==null?void 0:is.source}}};var ds,ls,cs;Be.parameters={...Be.parameters,docs:{...(ds=Be.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'regular',
    disabled: false
  }
}`,...(cs=(ls=Be.parameters)==null?void 0:ls.docs)==null?void 0:cs.source}}};var us,gs,ms;Te.parameters={...Te.parameters,docs:{...(us=Te.parameters)==null?void 0:us.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'bold',
    disabled: false
  }
}`,...(ms=(gs=Te.parameters)==null?void 0:gs.docs)==null?void 0:ms.source}}};var ps,bs,hs;Ue.parameters={...Ue.parameters,docs:{...(ps=Ue.parameters)==null?void 0:ps.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(hs=(bs=Ue.parameters)==null?void 0:bs.docs)==null?void 0:hs.source}}};var fs,Is,vs;Re.parameters={...Re.parameters,docs:{...(fs=Re.parameters)==null?void 0:fs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(vs=(Is=Re.parameters)==null?void 0:Is.docs)==null?void 0:vs.source}}};var ys,xs,zs;Pe.parameters={...Pe.parameters,docs:{...(ys=Pe.parameters)==null?void 0:ys.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(zs=(xs=Pe.parameters)==null?void 0:xs.docs)==null?void 0:zs.source}}};var Ls,Ss,ws;Ge.parameters={...Ge.parameters,docs:{...(Ls=Ge.parameters)==null?void 0:Ls.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(ws=(Ss=Ge.parameters)==null?void 0:Ss.docs)==null?void 0:ws.source}}};var Cs,Ms,Ds;Ee.parameters={...Ee.parameters,docs:{...(Cs=Ee.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ds=(Ms=Ee.parameters)==null?void 0:Ms.docs)==null?void 0:Ds.source}}};var Bs,Ts,Us;Oe.parameters={...Oe.parameters,docs:{...(Bs=Oe.parameters)==null?void 0:Bs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Us=(Ts=Oe.parameters)==null?void 0:Ts.docs)==null?void 0:Us.source}}};var Rs,Ps,Gs;Xe.parameters={...Xe.parameters,docs:{...(Rs=Xe.parameters)==null?void 0:Rs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Gs=(Ps=Xe.parameters)==null?void 0:Ps.docs)==null?void 0:Gs.source}}};var Es,Os,Xs;$e.parameters={...$e.parameters,docs:{...(Es=$e.parameters)==null?void 0:Es.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(Xs=(Os=$e.parameters)==null?void 0:Os.docs)==null?void 0:Xs.source}}};var $s,ks,_s;ke.parameters={...ke.parameters,docs:{...($s=ke.parameters)==null?void 0:$s.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(_s=(ks=ke.parameters)==null?void 0:ks.docs)==null?void 0:_s.source}}};var Vs,Ws,Ns;_e.parameters={..._e.parameters,docs:{...(Vs=_e.parameters)==null?void 0:Vs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ns=(Ws=_e.parameters)==null?void 0:Ws.docs)==null?void 0:Ns.source}}};var js,qs,Fs;Ve.parameters={...Ve.parameters,docs:{...(js=Ve.parameters)==null?void 0:js.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(Fs=(qs=Ve.parameters)==null?void 0:qs.docs)==null?void 0:Fs.source}}};var Hs,As,Js;We.parameters={...We.parameters,docs:{...(Hs=We.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(Js=(As=We.parameters)==null?void 0:As.docs)==null?void 0:Js.source}}};var Ks,Qs,Ys;Ne.parameters={...Ne.parameters,docs:{...(Ks=Ne.parameters)==null?void 0:Ks.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ys=(Qs=Ne.parameters)==null?void 0:Qs.docs)==null?void 0:Ys.source}}};var Zs,ei,ri;je.parameters={...je.parameters,docs:{...(Zs=je.parameters)==null?void 0:Zs.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(ri=(ei=je.parameters)==null?void 0:ei.docs)==null?void 0:ri.source}}};var ai,ni,oi;qe.parameters={...qe.parameters,docs:{...(ai=qe.parameters)==null?void 0:ai.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: true
  }
}`,...(oi=(ni=qe.parameters)==null?void 0:ni.docs)==null?void 0:oi.source}}};var ti,si,ii;Fe.parameters={...Fe.parameters,docs:{...(ti=Fe.parameters)==null?void 0:ti.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: true
  }
}`,...(ii=(si=Fe.parameters)==null?void 0:si.docs)==null?void 0:ii.source}}};var di,li,ci;He.parameters={...He.parameters,docs:{...(di=He.parameters)==null?void 0:di.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(ci=(li=He.parameters)==null?void 0:li.docs)==null?void 0:ci.source}}};var ui,gi,mi;Ae.parameters={...Ae.parameters,docs:{...(ui=Ae.parameters)==null?void 0:ui.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(mi=(gi=Ae.parameters)==null?void 0:gi.docs)==null?void 0:mi.source}}};var pi,bi,hi;Je.parameters={...Je.parameters,docs:{...(pi=Je.parameters)==null?void 0:pi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true
  }
}`,...(hi=(bi=Je.parameters)==null?void 0:bi.docs)==null?void 0:hi.source}}};var fi,Ii,vi;Ke.parameters={...Ke.parameters,docs:{...(fi=Ke.parameters)==null?void 0:fi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true
  }
}`,...(vi=(Ii=Ke.parameters)==null?void 0:Ii.docs)==null?void 0:vi.source}}};var yi,xi,zi;Qe.parameters={...Qe.parameters,docs:{...(yi=Qe.parameters)==null?void 0:yi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(zi=(xi=Qe.parameters)==null?void 0:xi.docs)==null?void 0:zi.source}}};var Li,Si,wi;Ye.parameters={...Ye.parameters,docs:{...(Li=Ye.parameters)==null?void 0:Li.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(wi=(Si=Ye.parameters)==null?void 0:Si.docs)==null?void 0:wi.source}}};var Ci,Mi,Di;Ze.parameters={...Ze.parameters,docs:{...(Ci=Ze.parameters)==null?void 0:Ci.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true
  }
}`,...(Di=(Mi=Ze.parameters)==null?void 0:Mi.docs)==null?void 0:Di.source}}};var Bi,Ti,Ui;er.parameters={...er.parameters,docs:{...(Bi=er.parameters)==null?void 0:Bi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true
  }
}`,...(Ui=(Ti=er.parameters)==null?void 0:Ti.docs)==null?void 0:Ui.source}}};var Ri,Pi,Gi;rr.parameters={...rr.parameters,docs:{...(Ri=rr.parameters)==null?void 0:Ri.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Gi=(Pi=rr.parameters)==null?void 0:Pi.docs)==null?void 0:Gi.source}}};var Ei,Oi,Xi;ar.parameters={...ar.parameters,docs:{...(Ei=ar.parameters)==null?void 0:Ei.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Xi=(Oi=ar.parameters)==null?void 0:Oi.docs)==null?void 0:Xi.source}}};var $i,ki,_i;nr.parameters={...nr.parameters,docs:{...($i=nr.parameters)==null?void 0:$i.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true
  }
}`,...(_i=(ki=nr.parameters)==null?void 0:ki.docs)==null?void 0:_i.source}}};var Vi,Wi,Ni;or.parameters={...or.parameters,docs:{...(Vi=or.parameters)==null?void 0:Vi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true
  }
}`,...(Ni=(Wi=or.parameters)==null?void 0:Wi.docs)==null?void 0:Ni.source}}};var ji,qi,Fi;tr.parameters={...tr.parameters,docs:{...(ji=tr.parameters)==null?void 0:ji.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Fi=(qi=tr.parameters)==null?void 0:qi.docs)==null?void 0:Fi.source}}};var Hi,Ai,Ji;sr.parameters={...sr.parameters,docs:{...(Hi=sr.parameters)==null?void 0:Hi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ji=(Ai=sr.parameters)==null?void 0:Ai.docs)==null?void 0:Ji.source}}};var Ki,Qi,Yi;ir.parameters={...ir.parameters,docs:{...(Ki=ir.parameters)==null?void 0:Ki.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(Yi=(Qi=ir.parameters)==null?void 0:Qi.docs)==null?void 0:Yi.source}}};var Zi,ed,rd;dr.parameters={...dr.parameters,docs:{...(Zi=dr.parameters)==null?void 0:Zi.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(rd=(ed=dr.parameters)==null?void 0:ed.docs)==null?void 0:rd.source}}};var ad,nd,od;lr.parameters={...lr.parameters,docs:{...(ad=lr.parameters)==null?void 0:ad.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(od=(nd=lr.parameters)==null?void 0:nd.docs)==null?void 0:od.source}}};var td,sd,id;cr.parameters={...cr.parameters,docs:{...(td=cr.parameters)==null?void 0:td.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(id=(sd=cr.parameters)==null?void 0:sd.docs)==null?void 0:id.source}}};var dd,ld,cd;ur.parameters={...ur.parameters,docs:{...(dd=ur.parameters)==null?void 0:dd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(cd=(ld=ur.parameters)==null?void 0:ld.docs)==null?void 0:cd.source}}};var ud,gd,md;gr.parameters={...gr.parameters,docs:{...(ud=gr.parameters)==null?void 0:ud.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(md=(gd=gr.parameters)==null?void 0:gd.docs)==null?void 0:md.source}}};var pd,bd,hd;mr.parameters={...mr.parameters,docs:{...(pd=mr.parameters)==null?void 0:pd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(hd=(bd=mr.parameters)==null?void 0:bd.docs)==null?void 0:hd.source}}};var fd,Id,vd;pr.parameters={...pr.parameters,docs:{...(fd=pr.parameters)==null?void 0:fd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(vd=(Id=pr.parameters)==null?void 0:Id.docs)==null?void 0:vd.source}}};var yd,xd,zd;br.parameters={...br.parameters,docs:{...(yd=br.parameters)==null?void 0:yd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(zd=(xd=br.parameters)==null?void 0:xd.docs)==null?void 0:zd.source}}};var Ld,Sd,wd;hr.parameters={...hr.parameters,docs:{...(Ld=hr.parameters)==null?void 0:Ld.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(wd=(Sd=hr.parameters)==null?void 0:Sd.docs)==null?void 0:wd.source}}};var Cd,Md,Dd;fr.parameters={...fr.parameters,docs:{...(Cd=fr.parameters)==null?void 0:Cd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Dd=(Md=fr.parameters)==null?void 0:Md.docs)==null?void 0:Dd.source}}};var Bd,Td,Ud;Ir.parameters={...Ir.parameters,docs:{...(Bd=Ir.parameters)==null?void 0:Bd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Ud=(Td=Ir.parameters)==null?void 0:Td.docs)==null?void 0:Ud.source}}};var Rd,Pd,Gd;vr.parameters={...vr.parameters,docs:{...(Rd=vr.parameters)==null?void 0:Rd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(Gd=(Pd=vr.parameters)==null?void 0:Pd.docs)==null?void 0:Gd.source}}};var Ed,Od,Xd;yr.parameters={...yr.parameters,docs:{...(Ed=yr.parameters)==null?void 0:Ed.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(Xd=(Od=yr.parameters)==null?void 0:Od.docs)==null?void 0:Xd.source}}};var $d,kd,_d;xr.parameters={...xr.parameters,docs:{...($d=xr.parameters)==null?void 0:$d.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(_d=(kd=xr.parameters)==null?void 0:kd.docs)==null?void 0:_d.source}}};var Vd,Wd,Nd;zr.parameters={...zr.parameters,docs:{...(Vd=zr.parameters)==null?void 0:Vd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Nd=(Wd=zr.parameters)==null?void 0:Wd.docs)==null?void 0:Nd.source}}};var jd,qd,Fd;Lr.parameters={...Lr.parameters,docs:{...(jd=Lr.parameters)==null?void 0:jd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Fd=(qd=Lr.parameters)==null?void 0:qd.docs)==null?void 0:Fd.source}}};var Hd,Ad,Jd;Sr.parameters={...Sr.parameters,docs:{...(Hd=Sr.parameters)==null?void 0:Hd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(Jd=(Ad=Sr.parameters)==null?void 0:Ad.docs)==null?void 0:Jd.source}}};var Kd,Qd,Yd;wr.parameters={...wr.parameters,docs:{...(Kd=wr.parameters)==null?void 0:Kd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Yd=(Qd=wr.parameters)==null?void 0:Qd.docs)==null?void 0:Yd.source}}};var Zd,el,rl;Cr.parameters={...Cr.parameters,docs:{...(Zd=Cr.parameters)==null?void 0:Zd.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(rl=(el=Cr.parameters)==null?void 0:el.docs)==null?void 0:rl.source}}};var al,nl,ol;Mr.parameters={...Mr.parameters,docs:{...(al=Mr.parameters)==null?void 0:al.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(ol=(nl=Mr.parameters)==null?void 0:nl.docs)==null?void 0:ol.source}}};var tl,sl,il;Dr.parameters={...Dr.parameters,docs:{...(tl=Dr.parameters)==null?void 0:tl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(il=(sl=Dr.parameters)==null?void 0:sl.docs)==null?void 0:il.source}}};var dl,ll,cl;Br.parameters={...Br.parameters,docs:{...(dl=Br.parameters)==null?void 0:dl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(cl=(ll=Br.parameters)==null?void 0:ll.docs)==null?void 0:cl.source}}};var ul,gl,ml;Tr.parameters={...Tr.parameters,docs:{...(ul=Tr.parameters)==null?void 0:ul.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(ml=(gl=Tr.parameters)==null?void 0:gl.docs)==null?void 0:ml.source}}};var pl,bl,hl;Ur.parameters={...Ur.parameters,docs:{...(pl=Ur.parameters)==null?void 0:pl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false
  }
}`,...(hl=(bl=Ur.parameters)==null?void 0:bl.docs)==null?void 0:hl.source}}};var fl,Il,vl;Rr.parameters={...Rr.parameters,docs:{...(fl=Rr.parameters)==null?void 0:fl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false
  }
}`,...(vl=(Il=Rr.parameters)==null?void 0:Il.docs)==null?void 0:vl.source}}};var yl,xl,zl;Pr.parameters={...Pr.parameters,docs:{...(yl=Pr.parameters)==null?void 0:yl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(zl=(xl=Pr.parameters)==null?void 0:xl.docs)==null?void 0:zl.source}}};var Ll,Sl,wl;Gr.parameters={...Gr.parameters,docs:{...(Ll=Gr.parameters)==null?void 0:Ll.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(wl=(Sl=Gr.parameters)==null?void 0:Sl.docs)==null?void 0:wl.source}}};var Cl,Ml,Dl;Er.parameters={...Er.parameters,docs:{...(Cl=Er.parameters)==null?void 0:Cl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false
  }
}`,...(Dl=(Ml=Er.parameters)==null?void 0:Ml.docs)==null?void 0:Dl.source}}};var Bl,Tl,Ul;Or.parameters={...Or.parameters,docs:{...(Bl=Or.parameters)==null?void 0:Bl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false
  }
}`,...(Ul=(Tl=Or.parameters)==null?void 0:Tl.docs)==null?void 0:Ul.source}}};var Rl,Pl,Gl;Xr.parameters={...Xr.parameters,docs:{...(Rl=Xr.parameters)==null?void 0:Rl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Gl=(Pl=Xr.parameters)==null?void 0:Pl.docs)==null?void 0:Gl.source}}};var El,Ol,Xl;$r.parameters={...$r.parameters,docs:{...(El=$r.parameters)==null?void 0:El.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Xl=(Ol=$r.parameters)==null?void 0:Ol.docs)==null?void 0:Xl.source}}};var $l,kl,_l;kr.parameters={...kr.parameters,docs:{...($l=kr.parameters)==null?void 0:$l.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false
  }
}`,...(_l=(kl=kr.parameters)==null?void 0:kl.docs)==null?void 0:_l.source}}};var Vl,Wl,Nl;_r.parameters={..._r.parameters,docs:{...(Vl=_r.parameters)==null?void 0:Vl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false
  }
}`,...(Nl=(Wl=_r.parameters)==null?void 0:Wl.docs)==null?void 0:Nl.source}}};var jl,ql,Fl;Vr.parameters={...Vr.parameters,docs:{...(jl=Vr.parameters)==null?void 0:jl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Fl=(ql=Vr.parameters)==null?void 0:ql.docs)==null?void 0:Fl.source}}};var Hl,Al,Jl;Wr.parameters={...Wr.parameters,docs:{...(Hl=Wr.parameters)==null?void 0:Hl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Jl=(Al=Wr.parameters)==null?void 0:Al.docs)==null?void 0:Jl.source}}};var Kl,Ql,Yl;Nr.parameters={...Nr.parameters,docs:{...(Kl=Nr.parameters)==null?void 0:Kl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true
  }
}`,...(Yl=(Ql=Nr.parameters)==null?void 0:Ql.docs)==null?void 0:Yl.source}}};var Zl,ec,rc;jr.parameters={...jr.parameters,docs:{...(Zl=jr.parameters)==null?void 0:Zl.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true
  }
}`,...(rc=(ec=jr.parameters)==null?void 0:ec.docs)==null?void 0:rc.source}}};var ac,nc,oc;qr.parameters={...qr.parameters,docs:{...(ac=qr.parameters)==null?void 0:ac.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(oc=(nc=qr.parameters)==null?void 0:nc.docs)==null?void 0:oc.source}}};var tc,sc,ic;Fr.parameters={...Fr.parameters,docs:{...(tc=Fr.parameters)==null?void 0:tc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(ic=(sc=Fr.parameters)==null?void 0:sc.docs)==null?void 0:ic.source}}};var dc,lc,cc;Hr.parameters={...Hr.parameters,docs:{...(dc=Hr.parameters)==null?void 0:dc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true
  }
}`,...(cc=(lc=Hr.parameters)==null?void 0:lc.docs)==null?void 0:cc.source}}};var uc,gc,mc;Ar.parameters={...Ar.parameters,docs:{...(uc=Ar.parameters)==null?void 0:uc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true
  }
}`,...(mc=(gc=Ar.parameters)==null?void 0:gc.docs)==null?void 0:mc.source}}};var pc,bc,hc;Jr.parameters={...Jr.parameters,docs:{...(pc=Jr.parameters)==null?void 0:pc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(hc=(bc=Jr.parameters)==null?void 0:bc.docs)==null?void 0:hc.source}}};var fc,Ic,vc;Kr.parameters={...Kr.parameters,docs:{...(fc=Kr.parameters)==null?void 0:fc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(vc=(Ic=Kr.parameters)==null?void 0:Ic.docs)==null?void 0:vc.source}}};var yc,xc,zc;Qr.parameters={...Qr.parameters,docs:{...(yc=Qr.parameters)==null?void 0:yc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true
  }
}`,...(zc=(xc=Qr.parameters)==null?void 0:xc.docs)==null?void 0:zc.source}}};var Lc,Sc,wc;Yr.parameters={...Yr.parameters,docs:{...(Lc=Yr.parameters)==null?void 0:Lc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true
  }
}`,...(wc=(Sc=Yr.parameters)==null?void 0:Sc.docs)==null?void 0:wc.source}}};var Cc,Mc,Dc;Zr.parameters={...Zr.parameters,docs:{...(Cc=Zr.parameters)==null?void 0:Cc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Dc=(Mc=Zr.parameters)==null?void 0:Mc.docs)==null?void 0:Dc.source}}};var Bc,Tc,Uc;ea.parameters={...ea.parameters,docs:{...(Bc=ea.parameters)==null?void 0:Bc.docs,source:{originalSource:`{
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />
  }
}`,...(Uc=(Tc=ea.parameters)==null?void 0:Tc.docs)==null?void 0:Uc.source}}};const bu=["Default","ContainedDefaultLarge","ContainedDefaultLargeIcon","ContainedDefaultMedium","ContainedDefaultMediumIcon","ContainedDefaultSmall","ContainedDefaultSmallIcon","ContainedPrimaryLarge","ContainedPrimaryLargeIcon","ContainedPrimaryMedium","ContainedPrimaryMediumIcon","ContainedPrimarySmall","ContainedPrimarySmallIcon","ContainedLargeDisabled","ContainedLargeDisabledIcon","ContainedMediumDisabled","ContainedMediumDisabledIcon","ContainedSmallDisabled","ContainedSmallDisabledIcon","OutlinedDefaultLarge","OutlinedDefaultLargeIcon","OutlinedDefaultMedium","OutlinedDefaultMediumIcon","OutlinedDefaultSmall","OutlinedDefaultSmallIcon","OutlinedPrimaryLarge","OutlinedPrimaryLargeIcon","OutlinedPrimaryMedium","OutlinedPrimaryMediumIcon","OutlinedPrimarySmall","OutlinedPrimarySmallIcon","OutlinedLargeDisabled","OutlinedLargeDisabledIcon","OutlinedMediumDisabled","OutlinedMediumDisabledIcon","OutlinedSmallDisabled","OutlinedSmallDisabledIcon","TextDefaultExtraLarge","TextDefaultExtraLargeBold","TextDefaultExtraLargeIcon","TextDefaultExtraLargeIconBold","TextDefaultLarge","TextDefaultLargeBold","TextDefaultLargeIcon","TextDefaultLargeIconBold","TextDefaultMedium","TextDefaultMediumBold","TextDefaultMediumIcon","TextDefaultMediumIconBold","TextDefaultSmall","TextDefaultSmallBold","TextDefaultSmallIcon","TextDefaultSmallIconBold","TextPrimaryExtraLarge","TextPrimaryExtraLargeBold","TextPrimaryExtraLargeIcon","TextPrimaryExtraLargeIconBold","TextPrimaryLarge","TextPrimaryLargeBold","TextPrimaryLargeIcon","TextPrimaryLargeIconBold","TextPrimaryMedium","TextPrimaryMediumBold","TextPrimaryMediumIcon","TextPrimaryMediumIconBold","TextPrimarySmall","TextPrimarySmallBold","TextPrimarySmallIcon","TextPrimarySmallIconBold","TextGrayExtraLarge","TextGrayExtraLargeBold","TextGrayExtraLargeIcon","TextGrayExtraLargeIconBold","TextGrayLarge","TextGrayLargeBold","TextGrayLargeIcon","TextGrayLargeIconBold","TextGrayMedium","TextGrayMediumBold","TextGrayMediumIcon","TextGrayMediumIconBold","TextGraySmall","TextGraySmallBold","TextGraySmallIcon","TextGraySmallIconBold","TextExtraLargeDisabled","TextExtraLargeDisabledBold","TextExtraLargeDisabledIcon","TextExtraLargeDisabledIconBold","TextLargeDisabled","TextLargeDisabledBold","TextLargeDisabledIcon","TextLargeDisabledIconBold","TextMediumDisabled","TextMediumDisabledBold","TextMediumDisabledIcon","TextMediumDisabledIconBold","TextSmallDisabled","TextSmallDisabledBold","TextSmallDisabledIcon","TextSmallDisabledIconBold","UnderlinedDefaultLarge","UnderlinedDefaultLargeBold","UnderlinedDefaultLargeIcon","UnderlinedDefaultLargeIconBold","UnderlinedDefaultMedium","UnderlinedDefaultMediumBold","UnderlinedDefaultMediumIcon","UnderlinedDefaultMediumIconBold","UnderlinedDefaultSmall","UnderlinedDefaultSmallBold","UnderlinedDefaultSmallIcon","UnderlinedDefaultSmallIconBold","UnderlinedPrimaryLarge","UnderlinedPrimaryLargeBold","UnderlinedPrimaryLargeIcon","UnderlinedPrimaryLargeIconBold","UnderlinedPrimaryMedium","UnderlinedPrimaryMediumBold","UnderlinedPrimaryMediumIcon","UnderlinedPrimaryMediumIconBold","UnderlinedPrimarySmall","UnderlinedPrimarySmallBold","UnderlinedPrimarySmallIcon","UnderlinedPrimarySmallIconBold","UnderlinedGrayLarge","UnderlinedGrayLargeBold","UnderlinedGrayLargeIcon","UnderlinedGrayLargeIconBold","UnderlinedGrayMedium","UnderlinedGrayMediumBold","UnderlinedGrayMediumIcon","UnderlinedGrayMediumIconBold","UnderlinedGraySmall","UnderlinedGraySmallBold","UnderlinedGraySmallIcon","UnderlinedGraySmallIconBold","UnderlinedLargeDisabled","UnderlinedLargeDisabledBold","UnderlinedLargeDisabledIcon","UnderlinedLargeDisabledIconBold","UnderlinedMediumDisabled","UnderlinedMediumDisabledBold","UnderlinedMediumDisabledIcon","UnderlinedMediumDisabledIconBold","UnderlinedSmallDisabled","UnderlinedSmallDisabledBold","UnderlinedSmallDisabledIcon","UnderlinedSmallDisabledIconBold"],ag=Object.freeze(Object.defineProperty({__proto__:null,ContainedDefaultLarge:b,ContainedDefaultLargeIcon:h,ContainedDefaultMedium:f,ContainedDefaultMediumIcon:I,ContainedDefaultSmall:v,ContainedDefaultSmallIcon:y,ContainedLargeDisabled:M,ContainedLargeDisabledIcon:D,ContainedMediumDisabled:B,ContainedMediumDisabledIcon:T,ContainedPrimaryLarge:x,ContainedPrimaryLargeIcon:z,ContainedPrimaryMedium:L,ContainedPrimaryMediumIcon:S,ContainedPrimarySmall:w,ContainedPrimarySmallIcon:C,ContainedSmallDisabled:U,ContainedSmallDisabledIcon:R,Default:p,OutlinedDefaultLarge:P,OutlinedDefaultLargeIcon:G,OutlinedDefaultMedium:E,OutlinedDefaultMediumIcon:O,OutlinedDefaultSmall:X,OutlinedDefaultSmallIcon:$,OutlinedLargeDisabled:q,OutlinedLargeDisabledIcon:F,OutlinedMediumDisabled:H,OutlinedMediumDisabledIcon:A,OutlinedPrimaryLarge:k,OutlinedPrimaryLargeIcon:_,OutlinedPrimaryMedium:V,OutlinedPrimaryMediumIcon:W,OutlinedPrimarySmall:N,OutlinedPrimarySmallIcon:j,OutlinedSmallDisabled:J,OutlinedSmallDisabledIcon:K,TextDefaultExtraLarge:Q,TextDefaultExtraLargeBold:Y,TextDefaultExtraLargeIcon:Z,TextDefaultExtraLargeIconBold:ee,TextDefaultLarge:re,TextDefaultLargeBold:ae,TextDefaultLargeIcon:ne,TextDefaultLargeIconBold:oe,TextDefaultMedium:te,TextDefaultMediumBold:se,TextDefaultMediumIcon:ie,TextDefaultMediumIconBold:de,TextDefaultSmall:le,TextDefaultSmallBold:ce,TextDefaultSmallIcon:ue,TextDefaultSmallIconBold:ge,TextExtraLargeDisabled:qe,TextExtraLargeDisabledBold:Fe,TextExtraLargeDisabledIcon:He,TextExtraLargeDisabledIconBold:Ae,TextGrayExtraLarge:Be,TextGrayExtraLargeBold:Te,TextGrayExtraLargeIcon:Ue,TextGrayExtraLargeIconBold:Re,TextGrayLarge:Pe,TextGrayLargeBold:Ge,TextGrayLargeIcon:Ee,TextGrayLargeIconBold:Oe,TextGrayMedium:Xe,TextGrayMediumBold:$e,TextGrayMediumIcon:ke,TextGrayMediumIconBold:_e,TextGraySmall:Ve,TextGraySmallBold:We,TextGraySmallIcon:Ne,TextGraySmallIconBold:je,TextLargeDisabled:Je,TextLargeDisabledBold:Ke,TextLargeDisabledIcon:Qe,TextLargeDisabledIconBold:Ye,TextMediumDisabled:Ze,TextMediumDisabledBold:er,TextMediumDisabledIcon:rr,TextMediumDisabledIconBold:ar,TextPrimaryExtraLarge:me,TextPrimaryExtraLargeBold:pe,TextPrimaryExtraLargeIcon:be,TextPrimaryExtraLargeIconBold:he,TextPrimaryLarge:fe,TextPrimaryLargeBold:Ie,TextPrimaryLargeIcon:ve,TextPrimaryLargeIconBold:ye,TextPrimaryMedium:xe,TextPrimaryMediumBold:ze,TextPrimaryMediumIcon:Le,TextPrimaryMediumIconBold:Se,TextPrimarySmall:we,TextPrimarySmallBold:Ce,TextPrimarySmallIcon:Me,TextPrimarySmallIconBold:De,TextSmallDisabled:nr,TextSmallDisabledBold:or,TextSmallDisabledIcon:tr,TextSmallDisabledIconBold:sr,UnderlinedDefaultLarge:ir,UnderlinedDefaultLargeBold:dr,UnderlinedDefaultLargeIcon:lr,UnderlinedDefaultLargeIconBold:cr,UnderlinedDefaultMedium:ur,UnderlinedDefaultMediumBold:gr,UnderlinedDefaultMediumIcon:mr,UnderlinedDefaultMediumIconBold:pr,UnderlinedDefaultSmall:br,UnderlinedDefaultSmallBold:hr,UnderlinedDefaultSmallIcon:fr,UnderlinedDefaultSmallIconBold:Ir,UnderlinedGrayLarge:Ur,UnderlinedGrayLargeBold:Rr,UnderlinedGrayLargeIcon:Pr,UnderlinedGrayLargeIconBold:Gr,UnderlinedGrayMedium:Er,UnderlinedGrayMediumBold:Or,UnderlinedGrayMediumIcon:Xr,UnderlinedGrayMediumIconBold:$r,UnderlinedGraySmall:kr,UnderlinedGraySmallBold:_r,UnderlinedGraySmallIcon:Vr,UnderlinedGraySmallIconBold:Wr,UnderlinedLargeDisabled:Nr,UnderlinedLargeDisabledBold:jr,UnderlinedLargeDisabledIcon:qr,UnderlinedLargeDisabledIconBold:Fr,UnderlinedMediumDisabled:Hr,UnderlinedMediumDisabledBold:Ar,UnderlinedMediumDisabledIcon:Jr,UnderlinedMediumDisabledIconBold:Kr,UnderlinedPrimaryLarge:vr,UnderlinedPrimaryLargeBold:yr,UnderlinedPrimaryLargeIcon:xr,UnderlinedPrimaryLargeIconBold:zr,UnderlinedPrimaryMedium:Lr,UnderlinedPrimaryMediumBold:Sr,UnderlinedPrimaryMediumIcon:wr,UnderlinedPrimaryMediumIconBold:Cr,UnderlinedPrimarySmall:Mr,UnderlinedPrimarySmallBold:Dr,UnderlinedPrimarySmallIcon:Br,UnderlinedPrimarySmallIconBold:Tr,UnderlinedSmallDisabled:Qr,UnderlinedSmallDisabledBold:Yr,UnderlinedSmallDisabledIcon:Zr,UnderlinedSmallDisabledIconBold:ea,__namedExportsOrder:bu,default:pu},Symbol.toStringTag,{value:"Module"}));export{ge as $,N as A,ag as B,b as C,p as D,j as E,q as F,F as G,H,A as I,J,K,Y as L,Z as M,ee as N,P as O,re as P,ae as Q,ne as R,oe as S,Q as T,te as U,se as V,ie as W,de as X,le as Y,ce as Z,ue as _,h as a,zr as a$,me as a0,pe as a1,be as a2,he as a3,fe as a4,Ie as a5,ve as a6,ye as a7,xe as a8,ze as a9,Je as aA,Ke as aB,Qe as aC,Ye as aD,Ze as aE,er as aF,rr as aG,ar as aH,nr as aI,or as aJ,tr as aK,sr as aL,ir as aM,dr as aN,lr as aO,cr as aP,ur as aQ,gr as aR,mr as aS,pr as aT,br as aU,hr as aV,fr as aW,Ir as aX,vr as aY,yr as aZ,xr as a_,Le as aa,Se as ab,we as ac,Ce as ad,Me as ae,De as af,Be as ag,Te as ah,Ue as ai,Re as aj,Pe as ak,Ge as al,Ee as am,Oe as an,Xe as ao,$e as ap,ke as aq,_e as ar,Ve as as,We as at,Ne as au,je as av,qe as aw,Fe as ax,He as ay,Ae as az,f as b,Lr as b0,Sr as b1,wr as b2,Cr as b3,Mr as b4,Dr as b5,Br as b6,Tr as b7,Ur as b8,Rr as b9,Pr as ba,Gr as bb,Er as bc,Or as bd,Xr as be,$r as bf,kr as bg,_r as bh,Vr as bi,Wr as bj,Nr as bk,jr as bl,qr as bm,Fr as bn,Hr as bo,Ar as bp,Jr as bq,Kr as br,Qr as bs,Yr as bt,Zr as bu,ea as bv,I as c,v as d,y as e,x as f,z as g,L as h,S as i,w as j,C as k,M as l,D as m,B as n,T as o,U as p,R as q,G as r,E as s,O as t,X as u,$ as v,k as w,_ as x,V as y,W as z};
