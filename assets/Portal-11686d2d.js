import{r as t}from"./index-76fb7be0.js";import{r as d}from"./index-d3ea75b5.js";import{j as a}from"./jsx-runtime-29545a09.js";import{u as E,s as i}from"./useForkRef-2c2f4318.js";import{u}from"./TransitionGroupContext-e86cc34f.js";function P(o){return typeof o=="function"?o():o}const j=t.forwardRef(function(f,s){const{children:e,container:l,disablePortal:n=!1}=f,[r,m]=t.useState(null),c=E(t.isValidElement(e)?e.ref:null,s);if(u(()=>{n||m(P(l)||document.body)},[l,n]),u(()=>{if(r&&!n)return i(s,r),()=>{i(s,null)}},[s,r,n]),n){if(t.isValidElement(e)){const p={ref:c};return t.cloneElement(e,p)}return a(t.Fragment,{children:e})}return a(t.Fragment,{children:r&&d.createPortal(e,r)})});export{j as P};
