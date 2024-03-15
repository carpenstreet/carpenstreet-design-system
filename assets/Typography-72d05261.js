import{j as h}from"./jsx-runtime-29545a09.js";import{c as d,b as x,_}from"./ThemeMui-9ef6b4e0.js";import{_ as i}from"./extends-623938b0.js";import{r as V}from"./index-76fb7be0.js";import{g as B,a as W,e as C,c as M}from"./generateUtilityClasses-2a595dd1.js";import{s as w,c as N}from"./styled-808a008e.js";function P(o){return B("MuiTypography",o)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const R=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],U=o=>{const{align:a,gutterBottom:e,noWrap:r,paragraph:t,variant:l,classes:p}=o,u={root:["root",l,o.align!=="inherit"&&`align${d(a)}`,e&&"gutterBottom",r&&"noWrap",t&&"paragraph"]};return N(u,P,p)},j=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.variant&&a[e.variant],e.align!=="inherit"&&a[`align${d(e.align)}`],e.noWrap&&a.noWrap,e.gutterBottom&&a.gutterBottom,e.paragraph&&a.paragraph]}})(({theme:o,ownerState:a})=>i({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&o.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=o=>$[o]||o,I=V.forwardRef(function(a,e){const r=x({props:a,name:"MuiTypography"}),t=q(r.color),l=C(i({},r,{color:t})),{align:p="inherit",className:u,component:y,gutterBottom:b=!1,noWrap:f=!1,paragraph:g=!1,variant:c="body1",variantMapping:n=s}=l,k=_(l,R),v=i({},l,{align:p,color:t,className:u,component:y,gutterBottom:b,noWrap:f,paragraph:g,variant:c,variantMapping:n}),D=y||(g?"p":n[c]||s[c])||"span",T=U(v);return h(j,i({as:D,ref:e,ownerState:v,className:M(T.root,u)},k))}),L=I,m=({variant:o,color:a="color/gray/800",children:e})=>h(L,{variant:o,color:a,children:e});try{m.displayName="Typography",m.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"typography/headline/h1/black"'},{value:'"typography/headline/h1/bold"'},{value:'"typography/headline/h1/medium"'},{value:'"typography/headline/h1/regular"'},{value:'"typography/headline/h2/black"'},{value:'"typography/headline/h2/bold"'},{value:'"typography/headline/h2/medium"'},{value:'"typography/headline/h2/regular"'},{value:'"typography/headline/h3/black"'},{value:'"typography/headline/h3/bold"'},{value:'"typography/headline/h3/medium"'},{value:'"typography/headline/h3/regular"'},{value:'"typography/headline/h4/black"'},{value:'"typography/headline/h4/bold"'},{value:'"typography/headline/h4/medium"'},{value:'"typography/headline/h4/regular"'},{value:'"typography/title/large/black"'},{value:'"typography/title/large/bold"'},{value:'"typography/title/large/medium"'},{value:'"typography/title/large/regular"'},{value:'"typography/title/medium/black"'},{value:'"typography/title/medium/bold"'},{value:'"typography/title/medium/medium"'},{value:'"typography/title/medium/regular"'},{value:'"typography/title/small/black"'},{value:'"typography/title/small/bold"'},{value:'"typography/title/small/medium"'},{value:'"typography/title/small/regular"'},{value:'"typography/body/medium/black"'},{value:'"typography/body/medium/bold"'},{value:'"typography/body/medium/medium"'},{value:'"typography/body/medium/regular"'},{value:'"typography/body/small/black"'},{value:'"typography/body/small/bold"'},{value:'"typography/body/small/medium"'},{value:'"typography/body/small/regular"'},{value:'"typography/label/large/black"'},{value:'"typography/label/large/bold"'},{value:'"typography/label/large/medium"'},{value:'"typography/label/large/regular"'},{value:'"typography/label/medium/black"'},{value:'"typography/label/medium/bold"'},{value:'"typography/label/medium/medium"'},{value:'"typography/label/medium/regular"'},{value:'"typography/label/small/black"'},{value:'"typography/label/small/bold"'},{value:'"typography/label/small/medium"'},{value:'"typography/label/small/regular"'}]}},color:{defaultValue:{value:"color/gray/800"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"color/background/1"'},{value:'"color/background/2"'},{value:'"color/background/3"'},{value:'"color/background/4"'},{value:'"color/background/5"'},{value:'"color/background/6"'},{value:'"color/background/7"'},{value:'"color/background/8"'},{value:'"color/background/9"'},{value:'"color/gradient/primary1"'},{value:'"color/partnership/vvip"'},{value:'"color/partnership/vip"'},{value:'"color/partnership/partner"'},{value:'"color/state/saleDim/100"'},{value:'"color/state/saleDim/200"'},{value:'"color/state/saleDim/300"'},{value:'"color/state/saleDim/400"'},{value:'"color/state/saleDim/500"'},{value:'"color/state/errorDim/100"'},{value:'"color/state/errorDim/200"'},{value:'"color/state/errorDim/300"'},{value:'"color/state/errorDim/400"'},{value:'"color/state/errorDim/500"'},{value:'"color/state/warningDim/100"'},{value:'"color/state/warningDim/200"'},{value:'"color/state/warningDim/300"'},{value:'"color/state/warningDim/400"'},{value:'"color/state/warningDim/500"'},{value:'"color/state/successDim/100"'},{value:'"color/state/successDim/200"'},{value:'"color/state/successDim/300"'},{value:'"color/state/successDim/400"'},{value:'"color/state/successDim/500"'},{value:'"color/state/infoDim/100"'},{value:'"color/state/infoDim/200"'},{value:'"color/state/infoDim/300"'},{value:'"color/state/infoDim/400"'},{value:'"color/state/infoDim/500"'},{value:'"color/state/info"'},{value:'"color/state/success"'},{value:'"color/state/warning"'},{value:'"color/state/error"'},{value:'"color/state/sale"'},{value:'"color/skyblue/100"'},{value:'"color/skyblue/200"'},{value:'"color/skyblue/300"'},{value:'"color/skyblue/400"'},{value:'"color/skyblue/500"'},{value:'"color/skyblue/600"'},{value:'"color/skyblue/700"'},{value:'"color/skyblue/800"'},{value:'"color/skyblue/900"'},{value:'"color/green/100"'},{value:'"color/green/200"'},{value:'"color/green/300"'},{value:'"color/green/400"'},{value:'"color/green/500"'},{value:'"color/green/600"'},{value:'"color/green/700"'},{value:'"color/green/800"'},{value:'"color/green/900"'},{value:'"color/orange/100"'},{value:'"color/orange/200"'},{value:'"color/orange/300"'},{value:'"color/orange/400"'},{value:'"color/orange/500"'},{value:'"color/orange/600"'},{value:'"color/orange/700"'},{value:'"color/orange/800"'},{value:'"color/orange/900"'},{value:'"color/grayishViolet/100"'},{value:'"color/grayishViolet/200"'},{value:'"color/grayishViolet/300"'},{value:'"color/grayishViolet/400"'},{value:'"color/grayishViolet/500"'},{value:'"color/grayishViolet/600"'},{value:'"color/grayishViolet/700"'},{value:'"color/grayishViolet/800"'},{value:'"color/primary/dim/100"'},{value:'"color/primary/dim/200"'},{value:'"color/primary/dim/300"'},{value:'"color/primary/dim/400"'},{value:'"color/primary/dim/500"'},{value:'"color/primary/dim/600"'},{value:'"color/primary/100"'},{value:'"color/primary/200"'},{value:'"color/primary/300"'},{value:'"color/primary/400"'},{value:'"color/primary/500"'},{value:'"color/primary/600"'},{value:'"color/primary/700"'},{value:'"color/primary/800"'},{value:'"color/primary/900"'},{value:'"color/gray/dim/100"'},{value:'"color/gray/dim/200"'},{value:'"color/gray/dim/300"'},{value:'"color/gray/dim/400"'},{value:'"color/gray/dim/500"'},{value:'"color/gray/dim/600"'},{value:'"color/gray/dim/700"'},{value:'"color/gray/dim/800"'},{value:'"color/gray/50"'},{value:'"color/gray/100"'},{value:'"color/gray/200"'},{value:'"color/gray/300"'},{value:'"color/gray/400"'},{value:'"color/gray/500"'},{value:'"color/gray/600"'},{value:'"color/gray/700"'},{value:'"color/gray/800"'},{value:'"color/gray/900"'},{value:'"color/white"'},{value:'"color/black"'}]}}}}}catch{}export{m as T};
