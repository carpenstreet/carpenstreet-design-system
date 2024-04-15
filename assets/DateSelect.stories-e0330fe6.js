import{a as j,j as a}from"./jsx-runtime-29545a09.js";import{a as M}from"./ThemeMui-fd6666b2.js";import{C as T}from"./CalendarIcon-a8bfe93e.js";import{T as k}from"./Typography-1cd3387c.js";import{d as h}from"./YearPicker-7a3e02dd.js";import{R as t}from"./index-76fb7be0.js";import{u as w}from"./useTheme-97d4d32e.js";import{B as _}from"./Box-19d18924.js";import{M as Y}from"./Button-fed29223.js";import{D as I}from"./DatePicker-baf5ddb9.js";import{D as E}from"./DateRangePicker-150d3c2c.js";const R=t.forwardRef((r,c)=>{const{focused:n,error:p,disabled:s,locale:m,isRange:f=!1,value:e,onClick:x,sx:y}=r;f&&h.isDayjs(e)&&console.error("Design system DateSelect props error: range = true 일 땐, value의 타입이 { startDay: Dayjs; endDay: Dayjs } 이어야 합니다.");const l=w(),D=n||p?"color/gray/800":"color/gray/400",o=m==="ko"?"YYYY-MM-DD":"MM-DD-YYYY",g=(()=>{var i,d;return f?j(_,{sx:{display:"flex",alignItems:"center",gap:"8px"},children:[a(k,{variant:"typography/body/medium/regular",children:((i=e==null?void 0:e.startDay)==null?void 0:i.format(o))??o}),a(_,{sx:{width:"8px",height:"1px",backgroundColor:l.palette["color/gray/300"]}}),a(k,{variant:"typography/body/medium/regular",children:((d=e==null?void 0:e.endDay)==null?void 0:d.format(o))??o})]}):a(k,{variant:"typography/body/medium/regular",children:(e==null?void 0:e.format(o))??o})})(),b={padding:"16px 8px",height:"56px","& .MuiTypography-root":{color:D},"& .MuiButton-endIcon":{marginLeft:"8px"},"&:hover":{borderColor:l.palette["color/gray/600"],backgroundColor:"unset"},...n&&{borderColor:l.palette["color/primary/600"]},...p&&{borderColor:l.palette["color/state/error"]},...y};return a(Y,{ref:c,variant:"outlined",color:"default",size:"L",endIcon:a(T,{}),onClick:x,sx:b,disabled:s,children:g})});try{R.displayName="DateSelect",R.__docgenInfo={description:"",displayName:"DateSelect",props:{focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"ko"'},{value:'"en"'}]}},isRange:{defaultValue:null,description:"",name:"isRange",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Dayjs | { startDay?: Dayjs; endDay?: Dayjs; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}function v(r){const{isRange:c,locale:n,focused:p}=r,s=t.useRef(null),[m,f]=t.useState(h()),[e,x]=t.useState(h()),[y,l]=t.useState(h()),[D,o]=t.useState(!1),[g,b]=t.useState(!1);function i(){o(S=>!S)}function d(){b(S=>!S)}function P(){c?d():i()}return j(_,{sx:{position:"relative",height:"450px"},children:[a(R,{ref:s,...r,value:c?{startDay:e,endDay:y}:m,onClick:P,focused:p||D||g}),D&&a(I,{value:m,setValue:f,locale:n,anchorRef:s,onClose:i,sx:{position:"absolute"}}),g&&a(E,{startDay:e,setStartDay:x,endDay:y,setEndDay:l,locale:n,onClose:d,anchorRef:s,sx:{position:"absolute"}})]})}try{v.displayName="ExampleDateSelect",v.__docgenInfo={description:"",displayName:"ExampleDateSelect",props:{focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"ko"'},{value:'"en"'}]}},isRange:{defaultValue:null,description:"",name:"isRange",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Dayjs | { startDay?: Dayjs; endDay?: Dayjs; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const B={title:"Component/DateSelect",component:v,decorators:[r=>a(M,{children:a(r,{})})]},u={args:{locale:"ko",isRange:!1,focused:!1,error:!1,disabled:!1}};var C,V,q;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    locale: 'ko',
    isRange: false,
    focused: false,
    error: false,
    disabled: false
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const N=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:N,default:B},Symbol.toStringTag,{value:"Module"}));export{W as D,u as a};
