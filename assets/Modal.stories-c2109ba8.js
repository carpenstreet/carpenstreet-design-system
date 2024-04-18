import{a as n,j as e}from"./jsx-runtime-29545a09.js";import{a as H}from"./ThemeMui-6ffe4516.js";import{R as f}from"./index-76fb7be0.js";import{M as I,S as o}from"./Stack-f62a1c81.js";import{s as P}from"./styled-05d1fbf3.js";import{B as m}from"./Box-cac00b61.js";import{B as t}from"./Button-e87aeba2.js";import{T as a}from"./Typography-6e6ad3ec.js";const U=P(I)`
  & .MuiPaper-root {
    width: ${r=>r.size==="M"?"400px":"328px"};
    border-radius: 16px;
    padding: 40px 24px 24px 24px;

    & .modal-title-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    & .modal-actions {
      padding: 24px 0 0 0;
    }
  }
`;function h({renderTitle:r,renderContent:i,renderActions:l,...g}){return n(U,{...g,children:[(r||i)&&n(m,{className:"modal-title-content-wrapper",children:[r&&e(m,{className:"modal-title",children:r}),i&&e(m,{className:"modal-content",children:i})]}),l&&e(m,{className:"modal-actions",children:l})]})}try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'}]}},renderTitle:{defaultValue:null,description:"",name:"renderTitle",required:!1,type:{name:"ReactNode"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},renderActions:{defaultValue:null,description:"",name:"renderActions",required:!1,type:{name:"ReactNode"}}}}}catch{}function B(r){const[i,l]=f.useState(!1),g=()=>{l(!0)},F=()=>{l(!1)};return n(f.Fragment,{children:[e(t,{variant:"contained",size:"M",onClick:g,children:"Click Me"}),e(h,{open:i,onClose:F,...r})]})}try{B.displayName="ExampleModal",B.__docgenInfo={description:"",displayName:"ExampleModal",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'}]}},renderTitle:{defaultValue:null,description:"",name:"renderTitle",required:!1,type:{name:"ReactNode"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},renderActions:{defaultValue:null,description:"",name:"renderActions",required:!1,type:{name:"ReactNode"}}}}}catch{}const $={title:"Component/Modal",component:B,decorators:[r=>e(H,{children:e(r,{})})]},u={args:{size:"M",renderTitle:e(o,{justifyContent:"center",flexDirection:"row",children:e(a,{variant:"typography/title/small/bold",children:"title 영역입니다."})}),renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:n(o,{gap:"8px",children:[e(t,{color:"primary",size:"L",variant:"contained",children:"확인"}),e(t,{color:"default",size:"L",variant:"outlined",children:"취소"})]}),sx:{}}},d={args:{size:"M",renderTitle:e(o,{justifyContent:"center",flexDirection:"row",children:e(a,{variant:"typography/title/small/bold",children:"title 영역입니다."})}),renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:n(o,{gap:"8px",children:[e(t,{color:"primary",size:"L",variant:"contained",children:"확인"}),e(t,{color:"default",size:"L",variant:"outlined",children:"취소"})]}),sx:{}}},c={args:{size:"M",renderTitle:null,renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:n(o,{gap:"8px",children:[e(t,{color:"primary",size:"L",variant:"contained",children:"확인"}),e(t,{color:"default",size:"L",variant:"outlined",children:"취소"})]}),sx:{}}},s={args:{size:"M",renderTitle:e(o,{justifyContent:"center",flexDirection:"row",children:e(a,{variant:"typography/title/small/bold",children:"title 영역입니다."})}),renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:n(o,{gap:"8px",direction:"row",children:[e(t,{color:"default",size:"L",variant:"outlined",fullWidth:!0,children:"취소"}),e(t,{color:"primary",size:"L",variant:"contained",fullWidth:!0,children:"확인"})]}),sx:{}}},p={args:{size:"M",renderTitle:null,renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:n(o,{gap:"8px",direction:"row",children:[e(t,{color:"default",size:"L",variant:"outlined",fullWidth:!0,children:"취소"}),e(t,{color:"primary",size:"L",variant:"contained",fullWidth:!0,children:"확인"})]}),sx:{}}},y={args:{size:"M",renderTitle:e(o,{justifyContent:"center",flexDirection:"row",children:e(a,{variant:"typography/title/small/bold",children:"title 영역입니다."})}),renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:e(t,{color:"primary",size:"L",variant:"contained",fullWidth:!0,children:"확인"}),sx:{}}},C={args:{size:"M",renderTitle:null,renderContent:n(a,{variant:"typography/body/medium/regular",display:"block",width:"100%",textAlign:"center",children:["content 영역입니다. ",e("br",{}),"안내 문구를 작성해주세요."]}),renderActions:e(t,{color:"primary",size:"L",variant:"contained",fullWidth:!0,children:"확인"}),sx:{}}};var x,D,v;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          확인
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          취소
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(v=(D=u.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var b,M,z;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          확인
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          취소
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var T,k,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          확인
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          취소
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var S,E,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Stack gap={'8px'} direction={'row'}>
        <Button color={'default'} size={'L'} variant={'outlined'} fullWidth>
          취소
        </Button>
        <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
          확인
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(w=(E=s.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,_,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Stack gap={'8px'} direction={'row'}>
        <Button color={'default'} size={'L'} variant={'outlined'} fullWidth>
          취소
        </Button>
        <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
          확인
        </Button>
      </Stack>,
    sx: {}
  }
}`,...(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var N,j,q;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
        확인
      </Button>,
    sx: {}
  }
}`,...(q=(j=y.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var W,R,O;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>,
    renderActions: <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
        확인
      </Button>,
    sx: {}
  }
}`,...(O=(R=C.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const G=["Default","ButtonVerticalModal","ButtonVerticalModalOnlyDescription","ButtonHorizontalModal","ButtonHorizontalModalOnlyDescription","ButtonSingleModal","ButtonSingleModalOnlyDescription"],te=Object.freeze(Object.defineProperty({__proto__:null,ButtonHorizontalModal:s,ButtonHorizontalModalOnlyDescription:p,ButtonSingleModal:y,ButtonSingleModalOnlyDescription:C,ButtonVerticalModal:d,ButtonVerticalModalOnlyDescription:c,Default:u,__namedExportsOrder:G,default:$},Symbol.toStringTag,{value:"Module"}));export{d as B,u as D,te as M,c as a,s as b,p as c,y as d,C as e};
