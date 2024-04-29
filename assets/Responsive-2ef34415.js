import{j as e,a as p,F as i}from"./jsx-runtime-29545a09.js";import{M as a}from"./index-fddabc16.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a94c85f1.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function t(r){const n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",a:"a",pre:"pre",code:"code"},o(),r.components);return p(i,{children:[e(a,{title:"Developer/Responsive"}),`
`,e(n.h1,{id:"responsive",children:"Responsive"}),`
`,e(n.p,{children:"컴포넌트의 반응형 처리에 대한 가이드라인입니다."}),`
`,e(n.p,{children:"반응형 처리는 아래와 같은 방법으로 통일하고 있으며, 이를 준수하여 개발해주시기 바랍니다."}),`
`,e(n.hr,{}),`
`,e(n.h3,{id:"typography",children:"Typography"}),`
`,e(n.p,{children:"Typography는 지정된 breakpoint에 따라 variant를 지정할 수 있습니다."}),`
`,p(n.p,{children:[e(n.a,{href:"/docs/foundation-typography--docs#responsive",children:"Typography 스토리북 페이지"}),"에서 더 자세하게 확인이 가능합니다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Typography
  sx={{
    typography: {
      desktop: 'typography/headline/h1/black',
      mobile: 'typography/title/small/black'
    }
  }}
  variant="typography/headline/h1/black"
>
  안녕하세요
</Typography>
`})}),`
`,e(n.h3,{id:"typography를-제외한-나머지-컴포넌트",children:"Typography를 제외한 나머지 컴포넌트"}),`
`,e(n.p,{children:"기본으로 노출할 breakpoint(ex: desktop)만 컴포넌트의 prop을 지정합니다."}),`
`,e(n.p,{children:"이외의 breakpoint(ex: tablet | mobile ...)들은 sx prop을 통해 직접 Style을 지정합니다."}),`
`,e(n.p,{children:"다음은 예시 코드입니다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`<Button
  variant={'text'}
  size={'M'}
  sx={{
    '@media (max-width: 1200)': {
      fontSize: '12px',
    },
    '@media (max-width: 600)': {
      fontSize: '10px',
    }
  }}
/>
`})})]})}function M(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}export{M as default};
