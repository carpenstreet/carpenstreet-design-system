import{j as t,a as i,F as d}from"./jsx-runtime-29545a09.js";import{M as a,C as e,b as p,g as s,f as r}from"./index-acad7465.js";import{M as h,D as m,B as u,a as g,b as y,c as f,d as M,e as D}from"./Modal.stories-e548b24b.js";import{u as c}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-297ad79b.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./ThemeMui-50822afc.js";import"./color-d4584655.js";import"./Dialog-1ac04652.js";import"./generateUtilityClasses-9f81b694.js";import"./styled-97de0f75.js";import"./useTheme-58e114d6.js";import"./Modal-a80e62cc.js";import"./composeClasses-b42b2e69.js";import"./utils-2b48831b.js";import"./TransitionGroupContext-e86cc34f.js";import"./useForkRef-2c2f4318.js";import"./useSlotProps-327354a0.js";import"./mergeSlotProps-29e15ca9.js";import"./ownerWindow-c31b3819.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-11686d2d.js";import"./Paper-05c85a7a.js";import"./useId-a47493a3.js";import"./Box-eb1ef63e.js";import"./Button-3fbc9999.js";import"./Typography-2a94c1f9.js";import"./Typography-f1960a52.js";import"./ButtonBase-a032ddd9.js";import"./useIsFocusVisible-309dad28.js";import"./Stack-fac3240c.js";function l(o){const n=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",strong:"strong"},c(),o.components);return i(d,{children:[t(a,{of:h}),`
`,t(n.h1,{id:"modal",children:"Modal"}),`
`,t(n.p,{children:"주로 버튼 또는 텍스트 등 특정 요소의 상호작용을 통해 표시되며, 화면 중앙에 위치해 컨텐츠를 노출합니다."}),`
`,t(n.h3,{id:"props",children:"Props"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[t(n.code,{children:"size"}),": 컴포넌트의 너비를 결정합니다. ",t(n.code,{children:"M"})," 과 ",t(n.code,{children:"S"})," 옵션이 존재합니다."]}),`
`,i(n.li,{children:[t(n.code,{children:"renderTitle"}),": 제목을 표시하는 영역을 렌더링하는 함수입니다. ",t(n.strong,{children:"빈 값일경우 제목 영역이 표시되지 않습니다."})]}),`
`,i(n.li,{children:[t(n.code,{children:"renderContent"}),": 콘텐츠를 표시하는 영역을 렌더링하는 함수입니다. ",t(n.strong,{children:"빈 값일경우 콘텐츠 영역이 표시되지 않습니다."})]}),`
`,i(n.li,{children:[t(n.code,{children:"renderActions"}),": 액션 버튼을 표시하는 영역을 렌더링하는 함수입니다. ",t(n.strong,{children:"빈 값일경우 액션 버튼 영역이 표시되지 않습니다."})]}),`
`]}),`
`,t(n.h3,{id:"css-classes",children:"CSS Classes"}),`
`,t(n.p,{children:"Modal 컴포넌트는 아래와 같은 Class를 제공하며, 해당 클래스들을 사용하여 커스텀 스타일을 적용할 수 있습니다."}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[t(n.code,{children:".modal-title"}),": 제목 요소를 감싸고 있는 영역입니다."]}),`
`,i(n.li,{children:[t(n.code,{children:".modal-content"}),": 콘텐츠 요소를 감싸고 있는 영역입니다."]}),`
`,i(n.li,{children:[t(n.code,{children:".modal-title-content-wrapper"}),": 제목과 콘텐츠 요소를 감싸고 있는 영역입니다."]}),`
`,i(n.li,{children:[t(n.code,{children:".modal-actions"}),": 액션 버튼 요소를 감싸고 있는 영역입니다."]}),`
`]}),`
`,t(e,{of:m,sourceState:"hidden"}),`
`,t(p,{include:["size","renderTitle","renderContent","renderActions","sx"]}),`
`,i(n.p,{children:[t(n.code,{children:"Title"})," + ",t(n.code,{children:"Description"}),"이 적용된 버튼은 아래 코드와 같이 구성됩니다."]}),`
`,t(s,{dark:!0,code:`
  <Modal
    size={'M'}
    renderTitle={(
      <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>
    )}
    renderContent={(
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>
    )}
    renderActions={(
      <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          취소
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          확인
        </Button>
      </Stack>
    )}
  />
`}),`
`,t(n.h3,{id:"button-vertical",children:"Button Vertical"}),`
`,t(n.p,{children:"좌측 버튼은 Title + Description이 적용되었으며 우측 버튼은 Description만 적용되었습니다."}),`
`,i(e,{children:[t(r,{of:u}),t(r,{of:g})]}),`
`,t(n.h3,{id:"button-horizontal",children:"Button Horizontal"}),`
`,t(n.p,{children:"좌측 버튼은 Title + Description이 적용되었으며 우측 버튼은 Description만 적용되었습니다."}),`
`,i(e,{children:[t(r,{of:y}),t(r,{of:f})]}),`
`,t(n.h3,{id:"button-single",children:"Button Single"}),`
`,t(n.p,{children:"좌측 버튼은 Title + Description이 적용되었으며 우측 버튼은 Description만 적용되었습니다."}),`
`,i(e,{children:[t(r,{of:M}),t(r,{of:D})]})]})}function cn(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?t(n,Object.assign({},o,{children:t(l,o)})):l(o)}export{cn as default};