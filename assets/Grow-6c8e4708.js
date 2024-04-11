import{_ as g}from"./extends-623938b0.js";import{_ as B}from"./ThemeMui-44883e70.js";import{r as c}from"./index-76fb7be0.js";import{u as J}from"./useTheme-68cd05f8.js";import{T as M,r as N,g as _}from"./Portal-5cbc1d72.js";import{j as O}from"./jsx-runtime-29545a09.js";import{u as Q}from"./TransitionGroupContext-319db280.js";import{u as U}from"./useForkRef-2c2f4318.js";const V=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function h(l){return`scale(${l}, ${l**2})`}const X={entering:{opacity:1,transform:h(1)},entered:{opacity:1,transform:"none"}},p=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),j=c.forwardRef(function(y,w){const{addEndListener:x,appear:v=!0,children:f,easing:T,in:R,onEnter:A,onEntered:D,onEntering:G,onExit:L,onExited:H,onExiting:C,style:m,timeout:o="auto",TransitionComponent:F=M}=y,P=B(y,V),$=Q(),E=c.useRef(),r=J(),d=c.useRef(null),b=U(d,f.ref,w),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},S=s(G),W=s((t,e)=>{N(t);const{duration:i,delay:u,easing:n}=_({style:m,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:u}),r.transitions.create("transform",{duration:p?a:a*.666,delay:u,easing:n})].join(","),A&&A(t,e)}),z=s(D),K=s(C),k=s(t=>{const{duration:e,delay:i,easing:u}=_({style:m,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),E.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:p?n:n*.666,delay:p?i:i||n*.333,easing:u})].join(","),t.style.opacity=0,t.style.transform=h(.75),L&&L(t)}),q=s(H);return O(F,g({appear:v,in:R,nodeRef:d,onEnter:W,onEntered:z,onEntering:S,onExit:k,onExited:q,onExiting:K,addEndListener:t=>{o==="auto"&&$.start(E.current||0,t),x&&x(d.current,t)},timeout:o==="auto"?null:o},P,{children:(t,e)=>c.cloneElement(f,g({style:g({opacity:0,transform:h(.75),visibility:t==="exited"&&!R?"hidden":void 0},X[t],m,f.props.style),ref:b},e))}))});j.muiSupportAuto=!0;const st=j;export{st as G};
