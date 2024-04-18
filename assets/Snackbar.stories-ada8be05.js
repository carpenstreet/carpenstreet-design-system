import{j as t,a as S,F as ve}from"./jsx-runtime-29545a09.js";import{q as Ce,e as ne,_ as P,b as M,a as be}from"./ThemeMui-3b86b45a.js";import{r as g,R as ye}from"./index-76fb7be0.js";import{B as T}from"./Button-e2b6def3.js";import{T as ke}from"./Typography-f885e26e.js";import{I as xe}from"./InformationIcon-89fa5c3f.js";import{C as Te}from"./CheckIcon-f841d134.js";import{A as we}from"./AlertIcon-7c360f38.js";import{N as Se}from"./NoticeIcon-810fb5ed.js";import{I as Ee}from"./IconButton-009b5edf.js";import{C as Ie}from"./CloseIcon-a14c8a17.js";import{u as te}from"./useTheme-bd492949.js";import{B as k}from"./Box-97aeddc2.js";import{_ as y}from"./extends-623938b0.js";import{s as L,c as re}from"./styled-9d4e9ca6.js";import{a as ae,g as ie,c as ze}from"./generateUtilityClasses-1d062184.js";import{e as W}from"./mergeSlotProps-4025e82c.js";import{c as q,a as Re}from"./TransitionGroupContext-e86cc34f.js";import{o as _,u as Me}from"./useSlotProps-1978f0c5.js";import{P as Le}from"./Paper-8a2218c3.js";import{G as Oe}from"./Grow-00d806ec.js";import{u as Be}from"./useForkRef-2c2f4318.js";function V(o){return o.substring(2).toLowerCase()}function _e(o,e){return e.documentElement.clientWidth<o.clientX||e.documentElement.clientHeight<o.clientY}function Pe(o){const{children:e,disableReactTree:a=!1,mouseEvent:n="onClick",onClickAway:d,touchEvent:p="onTouchEnd"}=o,c=g.useRef(!1),m=g.useRef(null),f=g.useRef(!1),h=g.useRef(!1);g.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);const v=Be(e.ref,m),s=q(l=>{const u=h.current;h.current=!1;const C=_(m.current);if(!f.current||!m.current||"clientX"in l&&_e(l,C))return;if(c.current){c.current=!1;return}let r;l.composedPath?r=l.composedPath().indexOf(m.current)>-1:r=!C.documentElement.contains(l.target)||m.current.contains(l.target),!r&&(a||!u)&&d(l)}),w=l=>u=>{h.current=!0;const C=e.props[l];C&&C(u)},x={ref:v};return p!==!1&&(x[p]=w(p)),g.useEffect(()=>{if(p!==!1){const l=V(p),u=_(m.current),C=()=>{c.current=!0};return u.addEventListener(l,s),u.addEventListener("touchmove",C),()=>{u.removeEventListener(l,s),u.removeEventListener("touchmove",C)}}},[s,p]),n!==!1&&(x[n]=w(n)),g.useEffect(()=>{if(n!==!1){const l=V(n),u=_(m.current);return u.addEventListener(l,s),()=>{u.removeEventListener(l,s)}}},[s,n]),t(g.Fragment,{children:g.cloneElement(e,x)})}function qe(o={}){const{autoHideDuration:e=null,disableWindowBlurListener:a=!1,onClose:n,open:d,resumeHideDuration:p}=o,c=Re();g.useEffect(()=>{if(!d)return;function r(i){i.defaultPrevented||(i.key==="Escape"||i.key==="Esc")&&(n==null||n(i,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[d,n]);const m=q((r,i)=>{n==null||n(r,i)}),f=q(r=>{!n||r==null||c.start(r,()=>{m(null,"timeout")})});g.useEffect(()=>(d&&f(e),c.clear),[d,e,f,c]);const h=r=>{n==null||n(r,"clickaway")},v=c.clear,s=g.useCallback(()=>{e!=null&&f(p??e*.5)},[e,p,f]),w=r=>i=>{const b=r.onBlur;b==null||b(i),s()},x=r=>i=>{const b=r.onFocus;b==null||b(i),v()},l=r=>i=>{const b=r.onMouseEnter;b==null||b(i),v()},u=r=>i=>{const b=r.onMouseLeave;b==null||b(i),s()};return g.useEffect(()=>{if(!a&&d)return window.addEventListener("focus",s),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",s),window.removeEventListener("blur",v)}},[a,d,s,v]),{getRootProps:(r={})=>{const i=y({},W(o),W(r));return y({role:"presentation"},r,i,{onBlur:w(i),onFocus:x(i),onMouseEnter:l(i),onMouseLeave:u(i)})},onClickAway:h}}function De(o){return ae("MuiSnackbarContent",o)}ie("MuiSnackbarContent",["root","message","action"]);const He=["action","className","message","role"],Ae=o=>{const{classes:e}=o;return re({root:["root"],action:["action"],message:["message"]},De,e)},Ne=L(Le,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>{const e=o.palette.mode==="light"?.8:.98,a=Ce(o.palette.background.default,e);return y({},o.typography.body2,{color:o.vars?o.vars.palette.SnackbarContent.color:o.palette.getContrastText(a),backgroundColor:o.vars?o.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,flexGrow:1,[o.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),We=L("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(o,e)=>e.message})({padding:"8px 0"}),Ve=L("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(o,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),je=g.forwardRef(function(e,a){const n=ne({props:e,name:"MuiSnackbarContent"}),{action:d,className:p,message:c,role:m="alert"}=n,f=P(n,He),h=n,v=Ae(h);return S(Ne,y({role:m,square:!0,elevation:6,className:ze(v.root,p),ownerState:h,ref:a},f,{children:[t(We,{className:v.message,ownerState:h,children:c}),d?t(Ve,{className:v.action,ownerState:h,children:d}):null]}))}),Ue=je;function Fe(o){return ae("MuiSnackbar",o)}ie("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const $e=["onEnter","onExited"],Ge=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Xe=o=>{const{classes:e,anchorOrigin:a}=o,n={root:["root",`anchorOrigin${M(a.vertical)}${M(a.horizontal)}`]};return re(n,Fe,e)},j=L("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,e[`anchorOrigin${M(a.anchorOrigin.vertical)}${M(a.anchorOrigin.horizontal)}`]]}})(({theme:o,ownerState:e})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return y({zIndex:(o.vars||o).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[o.breakpoints.up("sm")]:y({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&a,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Ke=g.forwardRef(function(e,a){const n=ne({props:e,name:"MuiSnackbar"}),d=te(),p={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:m,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:h=null,children:v,className:s,ClickAwayListenerProps:w,ContentProps:x,disableWindowBlurListener:l=!1,message:u,open:C,TransitionComponent:r=Oe,transitionDuration:i=p,TransitionProps:{onEnter:b,onExited:A}={}}=n,se=P(n.TransitionProps,$e),le=P(n,Ge),O=y({},n,{anchorOrigin:{vertical:m,horizontal:f},autoHideDuration:h,disableWindowBlurListener:l,TransitionComponent:r,transitionDuration:i}),ce=Xe(O),{getRootProps:ue,onClickAway:de}=qe(y({},O)),[pe,N]=g.useState(!0),me=Me({elementType:j,getSlotProps:ue,externalForwardedProps:le,ownerState:O,additionalProps:{ref:a},className:[ce.root,s]}),fe=B=>{N(!0),A&&A(B)},he=(B,ge)=>{N(!1),b&&b(B,ge)};return!C&&pe?null:t(Pe,y({onClickAway:de},w,{children:t(j,y({},me,{children:t(r,y({appear:!0,in:C,timeout:i,direction:m==="top"?"down":"up",onEnter:he,onExited:fe},se,{children:v||t(Ue,y({message:u,action:c},x))}))}))}))}),Ze=Ke;function D(o){const{variant:e="default",showCloseIcon:a=!1,align:n="horizontal",iconToTop:d,onCloseIconClick:p,...c}=o,{message:m,action:f,sx:h,...v}=c,s=te(),w={...d&&{"& .MuiPaper-root":{alignItems:"start",...e==="default"&&{backgroundColor:s.palette["color/gray/700"]}}},...e==="default"&&{"& .MuiPaper-root":{backgroundColor:s.palette["color/gray/700"]}},...h},x=e==="default"?"color/white":"color/gray/800",l={width:16,height:16},u={width:"32px",height:"32px",borderRadius:"12px",display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,...d&&{alignSelf:"start"}},C=e==="info"?t(k,{sx:{...u,backgroundColor:s.palette["color/state/infoDim/300"]},children:t(xe,{...l,color:"color/state/info"})}):e==="success"?t(k,{sx:{...u,backgroundColor:s.palette["color/state/successDim/300"]},children:t(Te,{...l,color:"color/state/success"})}):e==="warning"?t(k,{sx:{...u,backgroundColor:s.palette["color/state/warningDim/300"]},children:t(we,{...l,color:"color/state/warning"})}):t(k,{sx:{...u,backgroundColor:s.palette["color/state/errorDim/300"]},children:t(Se,{...l,color:"color/state/error"})}),r=S(k,{sx:{display:"flex",alignItems:"center",gap:"16px"},children:[e!=="default"&&e!=="white"&&C,S(k,{sx:{...n==="vertical"&&{display:"flex",flexDirection:"column",gap:"8px",alignItems:"start"}},children:[t(ke,{variant:"typography/body/small/medium",color:x,children:m}),n==="vertical"&&f]})]}),i=f||a?S(k,{sx:{display:"flex",alignItems:"center",gap:"4px"},children:[n==="horizontal"&&f,a&&t(Ee,{size:"S",color:"default",onClick:p,sx:{...e==="default"&&{"&:hover":{backgroundColor:s.palette["color/gray/800"],"& path":{fill:s.palette["color/gray/100"]}},"& path":{fill:s.palette["color/gray/100"]}}},children:t(Ie,{})})]}):null;return t(Ze,{...v,sx:w,message:r,action:i})}try{D.displayName="Snackbar",D.__docgenInfo={description:"",displayName:"Snackbar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"default"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},iconToTop:{defaultValue:null,description:"",name:"iconToTop",required:!1,type:{name:"boolean"}},onCloseIconClick:{defaultValue:null,description:"",name:"onCloseIconClick",required:!1,type:{name:"() => void"}}}}}catch{}function H(o){const[e,a]=ye.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:n,horizontal:d,open:p}=e,c=h=>()=>{a({...h,open:!0})},m=()=>{a({...e,open:!1})},f=S(k,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"24px",width:"100%",height:"500px"},children:[S(k,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"top",horizontal:"left"}),children:"Top-Left"}),t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"top",horizontal:"center"}),children:"Top-Center"}),t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"top",horizontal:"right"}),children:"Top-Right"})]}),S(k,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"}),t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"}),t(T,{variant:"contained",size:"M",color:"primary",onClick:c({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"})]})]});return S(ve,{children:[f,t(D,{...o,anchorOrigin:{vertical:n,horizontal:d},open:p,onClose:m})]})}try{H.displayName="ExampleSnackbar",H.__docgenInfo={description:"",displayName:"ExampleSnackbar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"default"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},iconToTop:{defaultValue:null,description:"",name:"iconToTop",required:!1,type:{name:"boolean"}},onCloseIconClick:{defaultValue:null,description:"",name:"onCloseIconClick",required:!1,type:{name:"() => void"}}}}}catch{}const Ye={title:"Component/Snackbar",component:H,decorators:[o=>t(be,{children:t(o,{})})]},E={args:{variant:"default",message:"Snackbar Message",showCloseIcon:!1,align:"horizontal",iconToTop:!1}},I={args:{variant:"success",message:"WITH BUTTON HORIZONTAL",showCloseIcon:!0,align:"horizontal",iconToTop:!1,action:t(T,{variant:"outlined",color:"primary",size:"S",children:"button"})}},z={args:{variant:"success",message:"WITH BUTTON VERTICAL",showCloseIcon:!0,align:"vertical",iconToTop:!1,action:t(T,{variant:"outlined",color:"primary",size:"S",children:"button"})}},R={args:{variant:"success",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",showCloseIcon:!0,align:"horizontal",iconToTop:!0,sx:{maxWidth:"300px"},action:t(T,{variant:"outlined",color:"primary",size:"S",children:"button"})}};var U,F,$;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    message: 'Snackbar Message',
    showCloseIcon: false,
    align: 'horizontal',
    iconToTop: false
  }
}`,...($=(F=E.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var G,X,K;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'WITH BUTTON HORIZONTAL',
    showCloseIcon: true,
    align: 'horizontal',
    iconToTop: false,
    action: <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
  }
}`,...(K=(X=I.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Z,Y,J;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'WITH BUTTON VERTICAL',
    showCloseIcon: true,
    align: 'vertical',
    iconToTop: false,
    action: <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
  }
}`,...(J=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,ee,oe;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    showCloseIcon: true,
    align: 'horizontal',
    iconToTop: true,
    sx: {
      maxWidth: '300px'
    },
    action: <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
  }
}`,...(oe=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const Je=["Default","WithButtonHorizontal","WithButtonVertical","IconToTop"],xo=Object.freeze(Object.defineProperty({__proto__:null,Default:E,IconToTop:R,WithButtonHorizontal:I,WithButtonVertical:z,__namedExportsOrder:Je,default:Ye},Symbol.toStringTag,{value:"Module"}));export{E as D,R as I,xo as S,I as W,z as a};
