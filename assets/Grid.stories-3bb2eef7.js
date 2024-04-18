import{j as p}from"./jsx-runtime-29545a09.js";import{r as x,R as _}from"./index-76fb7be0.js";import{e as O,_ as j,g as v,h as q,a as H}from"./ThemeMui-6ffe4516.js";import{_ as h}from"./extends-623938b0.js";import{a as D,g as K,e as J,c as U}from"./generateUtilityClasses-fecf7b75.js";import{s as X,c as Y}from"./styled-05d1fbf3.js";import{u as Z}from"./useTheme-5b3456cd.js";import{P as Q}from"./Paper-be8d119b.js";const ee=x.createContext(),k=ee;function ne(e){return D("MuiGrid",e)}const le=[0,1,2,3,4,5,6,7,8,9,10],ae=["column-reverse","column","row-reverse","row"],te=["nowrap","wrap-reverse","wrap"],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ie=K("MuiGrid",["root","container","item","zeroMinWidth",...le.map(e=>`spacing-xs-${e}`),...ae.map(e=>`direction-xs-${e}`),...te.map(e=>`wrap-xs-${e}`),...c.map(e=>`grid-xs-${e}`),...c.map(e=>`grid-sm-${e}`),...c.map(e=>`grid-md-${e}`),...c.map(e=>`grid-lg-${e}`),...c.map(e=>`grid-xl-${e}`)]),b=ie,re=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function f(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function se({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce((a,l)=>{let i={};if(n[l]&&(t=n[l]),!t)return a;if(t===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(t==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=v({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof s=="object"?s[l]:s;if(u==null)return a;const d=`${Math.round(t/u*1e8)/1e6}%`;let o={};if(n.container&&n.item&&n.columnSpacing!==0){const r=e.spacing(n.columnSpacing);if(r!=="0px"){const m=`calc(${d} + ${f(r)})`;o={flexBasis:m,maxWidth:m}}}i=h({flexBasis:d,flexGrow:0,maxWidth:d},o)}return e.breakpoints.values[l]===0?Object.assign(a,i):a[e.breakpoints.up(l)]=i,a},{})}function oe({theme:e,ownerState:n}){const t=v({values:n.direction,breakpoints:e.breakpoints.values});return q({theme:e},t,a=>{const l={flexDirection:a};return a.indexOf("column")===0&&(l[`& > .${b.item}`]={maxWidth:"none"}),l})}function F({breakpoints:e,values:n}){let t="";Object.keys(n).forEach(l=>{t===""&&n[l]!==0&&(t=l)});const a=Object.keys(e).sort((l,i)=>e[l]-e[i]);return a.slice(0,a.indexOf(t))}function ue({theme:e,ownerState:n}){const{container:t,rowSpacing:a}=n;let l={};if(t&&a!==0){const i=v({values:a,breakpoints:e.breakpoints.values});let s;typeof i=="object"&&(s=F({breakpoints:e.breakpoints.values,values:i})),l=q({theme:e},i,(u,d)=>{var o;const r=e.spacing(u);return r!=="0px"?{marginTop:`-${f(r)}`,[`& > .${b.item}`]:{paddingTop:f(r)}}:(o=s)!=null&&o.includes(d)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return l}function de({theme:e,ownerState:n}){const{container:t,columnSpacing:a}=n;let l={};if(t&&a!==0){const i=v({values:a,breakpoints:e.breakpoints.values});let s;typeof i=="object"&&(s=F({breakpoints:e.breakpoints.values,values:i})),l=q({theme:e},i,(u,d)=>{var o;const r=e.spacing(u);return r!=="0px"?{width:`calc(100% + ${f(r)})`,marginLeft:`-${f(r)}`,[`& > .${b.item}`]:{paddingLeft:f(r)}}:(o=s)!=null&&o.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return l}function me(e,n,t={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[t[`spacing-xs-${String(e)}`]];const a=[];return n.forEach(l=>{const i=e[l];Number(i)>0&&a.push(t[`spacing-${l}-${String(i)}`])}),a}const pe=X("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:a,direction:l,item:i,spacing:s,wrap:u,zeroMinWidth:d,breakpoints:o}=t;let r=[];a&&(r=me(s,o,n));const m=[];return o.forEach(y=>{const g=t[y];g&&m.push(n[`grid-${y}-${String(g)}`])}),[n.root,a&&n.container,i&&n.item,d&&n.zeroMinWidth,...r,l!=="row"&&n[`direction-xs-${String(l)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...m]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),oe,ue,de,se);function ye(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const t=[];return n.forEach(a=>{const l=e[a];if(Number(l)>0){const i=`spacing-${a}-${String(l)}`;t.push(i)}}),t}const ge=e=>{const{classes:n,container:t,direction:a,item:l,spacing:i,wrap:s,zeroMinWidth:u,breakpoints:d}=e;let o=[];t&&(o=ye(i,d));const r=[];d.forEach(y=>{const g=e[y];g&&r.push(`grid-${y}-${String(g)}`)});const m={root:["root",t&&"container",l&&"item",u&&"zeroMinWidth",...o,a!=="row"&&`direction-xs-${String(a)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...r]};return Y(m,ne,n)},fe=x.forwardRef(function(n,t){const a=O({props:n,name:"MuiGrid"}),{breakpoints:l}=Z(),i=J(a),{className:s,columns:u,columnSpacing:d,component:o="div",container:r=!1,direction:m="row",item:y=!1,rowSpacing:g,spacing:N=0,wrap:W="wrap",zeroMinWidth:$=!1}=i,T=j(i,re),L=g||N,A=d||N,E=x.useContext(k),B=r?u||12:E,w={},G=h({},T);l.keys.forEach(S=>{T[S]!=null&&(w[S]=T[S],delete G[S])});const M=h({},i,{columns:B,container:r,direction:m,item:y,rowSpacing:L,columnSpacing:A,wrap:W,zeroMinWidth:$,spacing:N},w,{breakpoints:l.keys}),z=ge(M);return p(k.Provider,{value:B,children:p(pe,h({ownerState:M,className:U(z.root,s),as:o,ref:t},G))})}),ce=fe;function R(e){const{children:n,...t}=e,{sx:a,container:l}=t,i={...t,...l&&{container:!0,columns:{mobile:4,desktop:12},spacing:12,sx:{maxWidth:"1360px",padding:{mobile:"0 16px",desktop:"0 40px"},...a}}};return p(ce,{...i,children:n})}try{R.displayName="Grid",R.__docgenInfo={description:"",displayName:"Grid",props:{p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Color>)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "hidden" | (string & {}) | "inset" | "inherit" | "none" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "medium" | "thick" | "thin" | "dashed" | ... 183 more ... | "currentcolor"> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | readonly NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | readonly NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | readonly NonNullable<...>[]>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | readonly NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | readonly NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | readonly NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | readonly NonNullable<...>[]>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | readonly NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | readonly NonNullable<...>[]>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | readonly NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | readonly NonNullable<...>[]>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | readonly NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | readonly NonNullable<...>[]>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | readonly NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | readonly NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | readonly NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | readonly NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | readonly NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | readonly NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | readonly NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | readonly NonNullable<...>[]>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | readonly NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | readonly NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockEnd:{defaultValue:null,description:"",name:"marginBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockEnd<string | number> | readonly NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockStart:{defaultValue:null,description:"",name:"marginBlockStart",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockStart<string | number> | readonly NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineEnd:{defaultValue:null,description:"",name:"marginInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineEnd<string | number> | readonly NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineStart:{defaultValue:null,description:"",name:"marginInlineStart",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineStart<string | number> | readonly NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | readonly NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | readonly NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | readonly NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | readonly NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | readonly NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | readonly NonNullable<Order>[]>)"}},paddingBlockEnd:{defaultValue:null,description:"",name:"paddingBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockEnd<string | number> | readonly NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlockStart:{defaultValue:null,description:"",name:"paddingBlockStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockStart<string | number> | readonly NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineEnd<string | number> | readonly NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineStart<string | number> | readonly NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | readonly NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | readonly NonNullable<...>[]>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | readonly NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | readonly NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | readonly NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | readonly NonNullable<...>[]>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | readonly NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | readonly NonNullable<...>[]>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | readonly NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | readonly NonNullable<...>[]>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | readonly NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | readonly NonNullable<...>[]>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | WhiteSpace> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | WhiteSpace>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | readonly NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | readonly NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | readonly NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | readonly NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | readonly NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | readonly NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | readonly NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | readonly NonNullable<...>[]>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<...>[]>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | readonly NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | readonly NonNullable<...>[]>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | readonly NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | readonly NonNullable<...>[]>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlock:{defaultValue:null,description:"",name:"marginBlock",required:!1,type:{name:"ResponsiveStyleValue<MarginBlock<string | number> | readonly NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInline:{defaultValue:null,description:"",name:"marginInline",required:!1,type:{name:"ResponsiveStyleValue<MarginInline<string | number> | readonly NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlock:{defaultValue:null,description:"",name:"paddingBlock",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlock<string | number> | readonly NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInline:{defaultValue:null,description:"",name:"paddingInline",required:!1,type:{name:"ResponsiveStyleValue<PaddingInline<string | number> | readonly NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const Ve={title:"Foundation/Grid",component:R,decorators:[e=>p(H,{children:p(e,{})})]},V={args:{direction:"row",container:!0,sx:{},children:p(_.Fragment,{children:new Array(12).fill(null).map((e,n)=>p(R,{item:!0,mobile:1,desktop:1,children:p(Q,{elevation:0,sx:{height:"100px",backgroundColor:"#FFE5E5",padding:0}})},n))})}};var P,C,I;V.parameters={...V.parameters,docs:{...(P=V.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    container: true,
    sx: {},
    children: <React.Fragment>
        {new Array(12).fill(null).map((_, idx) => <Grid item key={idx} mobile={1} desktop={1}>
            <Paper elevation={0} sx={{
          height: '100px',
          backgroundColor: '#FFE5E5',
          padding: 0
        }} />
          </Grid>)}
      </React.Fragment>
  }
}`,...(I=(C=V.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const he=["GridExample"],Be=Object.freeze(Object.defineProperty({__proto__:null,GridExample:V,__namedExportsOrder:he,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Be as G,V as a};
