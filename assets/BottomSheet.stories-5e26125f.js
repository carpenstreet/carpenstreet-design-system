import{j as i,a as R}from"./jsx-runtime-29545a09.js";import{_ as te,a as ne}from"./ThemeMui-c8622a6c.js";import{r as g,R as _}from"./index-76fb7be0.js";import{B as w}from"./Button-da6c66b1.js";import{_ as x}from"./extends-623938b0.js";import{u as re}from"./useTheme-f807ec51.js";import{T as oe,r as ie,g as $}from"./Portal-d3755330.js";import{u as ae}from"./useForkRef-2c2f4318.js";import{o as W}from"./ownerWindow-a657dbb3.js";import{d as se}from"./debounce-517eeb3c.js";import{s as le}from"./styled-edafd4c4.js";import{M as de,S as k}from"./Stack-57d3acd2.js";import{C as ce}from"./CloseIcon-fa014c6f.js";import{B as C}from"./Box-2c208943.js";import{T as z}from"./Typography-e64b70c3.js";const ue=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function pe(n,o,s){const t=o.getBoundingClientRect(),r=s&&s.getBoundingClientRect(),m=W(o);let d;if(o.fakeTransform)d=o.fakeTransform;else{const l=m.getComputedStyle(o);d=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let c=0,p=0;if(d&&d!=="none"&&typeof d=="string"){const l=d.split("(")[1].split(")")[0].split(",");c=parseInt(l[4],10),p=parseInt(l[5],10)}return n==="left"?r?`translateX(${r.right+c-t.left}px)`:`translateX(${m.innerWidth+c-t.left}px)`:n==="right"?r?`translateX(-${t.right-r.left-c}px)`:`translateX(-${t.left+t.width-c}px)`:n==="up"?r?`translateY(${r.bottom+p-t.top}px)`:`translateY(${m.innerHeight+p-t.top}px)`:r?`translateY(-${t.top-r.top+t.height-p}px)`:`translateY(-${t.top+t.height-p}px)`}function me(n){return typeof n=="function"?n():n}function S(n,o,s){const t=me(s),r=pe(n,o,t);r&&(o.style.webkitTransform=r,o.style.transform=r)}const fe=g.forwardRef(function(o,s){const t=re(),r={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},m={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:d,appear:c=!0,children:p,container:l,direction:f="down",easing:V=r,in:h,onEnter:I,onEntered:X,onEntering:N,onExit:q,onExited:D,onExiting:Y,style:T,timeout:b=m,TransitionComponent:O=oe}=o,H=te(o,ue),u=g.useRef(null),F=ae(p.ref,u,s),y=e=>a=>{e&&(a===void 0?e(u.current):e(u.current,a))},U=y((e,a)=>{S(f,e,l),ie(e),I&&I(e,a)}),G=y((e,a)=>{const M=$({timeout:b,style:T,easing:V},{mode:"enter"});e.style.webkitTransition=t.transitions.create("-webkit-transform",x({},M)),e.style.transition=t.transitions.create("transform",x({},M)),e.style.webkitTransform="none",e.style.transform="none",N&&N(e,a)}),J=y(X),K=y(Y),Q=y(e=>{const a=$({timeout:b,style:T,easing:V},{mode:"exit"});e.style.webkitTransition=t.transitions.create("-webkit-transform",a),e.style.transition=t.transitions.create("transform",a),S(f,e,l),q&&q(e)}),Z=y(e=>{e.style.webkitTransition="",e.style.transition="",D&&D(e)}),ee=e=>{d&&d(u.current,e)},L=g.useCallback(()=>{u.current&&S(f,u.current,l)},[f,l]);return g.useEffect(()=>{if(h||f==="down"||f==="right")return;const e=se(()=>{u.current&&S(f,u.current,l)}),a=W(u.current);return a.addEventListener("resize",e),()=>{e.clear(),a.removeEventListener("resize",e)}},[f,h,l]),g.useEffect(()=>{h||L()},[h,L]),i(O,x({nodeRef:u,onEnter:U,onEntered:J,onEntering:G,onExit:Q,onExited:Z,onExiting:K,addEndListener:ee,appear:c,in:h,timeout:b},H,{children:(e,a)=>g.cloneElement(p,x({ref:F,style:x({visibility:e==="exited"&&!h?"hidden":void 0},T,p.props.style)},a))}))}),he=fe,ye=_.forwardRef((n,o)=>i(he,{direction:"up",ref:o,...n}));try{SlideTransition.displayName="SlideTransition",SlideTransition.__docgenInfo={description:"",displayName:"SlideTransition",props:{}}}catch{}const ge=le(de)`
  & > .MuiDialog-container {
    align-items: end;

    & > .MuiPaper-root {
      width: 100%;
      height: ${n=>n.height==="full"?"90%":"auto"};
      border-radius: 16px 16px 0 0;
      padding: 8px 0 12px 0;
      
      & > .bottomSheet-header {
        display: flex;
        flex-direction: row;
        padding: 0 16px;
        justify-content: flex-end;

        & > .bottomSheet-closeIcon {
          display: flex;
          padding: 6px;
          cursor: pointer;
        }
      }
      
      & > .bottomSheet-title {
        padding: 8px 16px;
      }
      
      & > .bottomSheet-content {
        padding: 8px 16px;
        ${n=>n.height==="full"?"flex: 1;":""}
      }
      
      & > .bottomSheet-actions {
        padding: 24px 16px;
      }
    },
  }
`;function B({height:n,showCloseIcon:o=!0,renderTitle:s,renderContent:t,renderActions:r,onClose:m,...d}){const c=()=>m&&m({},"backdropClick");return R(ge,{height:n,TransitionComponent:ye,...d,onClose:c,children:[o&&i(k,{className:"bottomSheet-header",children:i(C,{onClick:c,className:"bottomSheet-closeIcon",children:i(ce,{width:24,height:24})})}),s&&i(C,{className:"bottomSheet-title",children:s}),t&&i(C,{className:"bottomSheet-content",children:t}),r&&i(C,{className:"bottomSheet-actions",children:r})]})}try{B.displayName="BottomSheet",B.__docgenInfo={description:"",displayName:"BottomSheet",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"enum",value:[{value:'"full"'},{value:'"hug"'}]}},showCloseIcon:{defaultValue:{value:"true"},description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}},renderTitle:{defaultValue:null,description:"",name:"renderTitle",required:!1,type:{name:"ReactNode"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},renderActions:{defaultValue:null,description:"",name:"renderActions",required:!1,type:{name:"ReactNode"}}}}}catch{}function v(n){const[o,s]=_.useState(!1),t=()=>{s(!0)},r=()=>{s(!1)};return R(_.Fragment,{children:[i(w,{variant:"contained",size:"M",onClick:t,children:"Click Me"}),i(B,{open:o,onClose:r,...n})]})}try{v.displayName="ExampleBottomSheet",v.__docgenInfo={description:"",displayName:"ExampleBottomSheet",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"enum",value:[{value:'"full"'},{value:'"hug"'}]}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}},renderTitle:{defaultValue:null,description:"",name:"renderTitle",required:!1,type:{name:"ReactNode"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},renderActions:{defaultValue:null,description:"",name:"renderActions",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe={title:"Component/BottomSheet",component:v,decorators:[n=>i(ne,{children:i(n,{})})]},E={args:{height:"full",showCloseIcon:!0,renderTitle:i(k,{justifyContent:"start",flexDirection:"row",children:i(z,{variant:"typography/body/medium/bold",children:"title 영역입니다."})}),renderContent:i(z,{variant:"typography/body/medium/regular",display:"block",children:"content 영역입니다."}),renderActions:R(k,{gap:"8px",children:[i(w,{color:"primary",size:"L",variant:"contained",children:"취소"}),i(w,{color:"default",size:"L",variant:"outlined",children:"확인"})]}),sx:{}}};var j,P,A;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    height: 'full',
    showCloseIcon: true,
    renderTitle: <Stack justifyContent={'start'} flexDirection={'row'}>
        <Typography variant={'typography/body/medium/bold'}>title 영역입니다.</Typography>
      </Stack>,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'}>
        content 영역입니다.
      </Typography>,
    renderActions: <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          취소
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          확인
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(A=(P=E.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const Ee=["Default"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:E,__namedExportsOrder:Ee,default:xe},Symbol.toStringTag,{value:"Module"}));export{Le as B,E as D};
