import{r as n,R as u}from"./index-76fb7be0.js";const o=typeof window<"u"?n.useLayoutEffect:n.useEffect,f=o;function E(t){const r=n.useRef(t);return f(()=>{r.current=t}),n.useRef((...e)=>(0,r.current)(...e)).current}const c={};function i(t,r){const e=n.useRef(c);return e.current===c&&(e.current=t(r)),e}const a=[];function l(t){n.useEffect(t,a)}class s{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new s}start(r,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},r)}}function h(){const t=i(s.create).current;return l(t.disposeEffect),t}const I=u.createContext(null);export{s as T,I as a,f as b,E as c,h as u};
