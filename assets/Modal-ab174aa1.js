import{j as t,a as i,F as d}from"./jsx-runtime-29545a09.js";import{M as a,C as e,b as p,g as s,f as r}from"./index-83affbf3.js";import{M as h,D as m,B as u,a as g,b as y,c as f,d as M,e as D}from"./Modal.stories-632c32c1.js";import{u as c}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-de371b9b.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./ThemeMui-aad13025.js";import"./color-d4584655.js";import"./Stack-b89bbf9b.js";import"./generateUtilityClasses-5c0f82e6.js";import"./styled-1beb74a9.js";import"./useTheme-efc0693e.js";import"./Modal-8bab0e99.js";import"./composeClasses-b42b2e69.js";import"./utils-550ebcf7.js";import"./TransitionGroupContext-e86cc34f.js";import"./useForkRef-2c2f4318.js";import"./useSlotProps-988ca5b8.js";import"./mergeSlotProps-9651d6f8.js";import"./ownerWindow-6762974c.js";import"./Portal-11686d2d.js";import"./Paper-35c5d9d3.js";import"./useId-a47493a3.js";import"./Box-dcab4ca5.js";import"./Button-5c5182c5.js";import"./Typography-11d11ea3.js";import"./ButtonBase-4828c375.js";import"./useIsFocusVisible-309dad28.js";function l(o){const n=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",strong:"strong"},c(),o.components);return i(d,{children:[t(a,{of:h}),`
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
`,i(e,{children:[t(r,{of:M}),t(r,{of:D})]})]})}function rn(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?t(n,Object.assign({},o,{children:t(l,o)})):l(o)}export{rn as default};