import{j as o,a as t,F as c}from"./jsx-runtime-29545a09.js";import{M as l,C as d,b as h}from"./index-83affbf3.js";import{B as s,D as m}from"./BottomSheet.stories-0d796a27.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-de371b9b.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./ThemeMui-aad13025.js";import"./color-d4584655.js";import"./Button-5c5182c5.js";import"./Typography-11d11ea3.js";import"./generateUtilityClasses-5c0f82e6.js";import"./styled-1beb74a9.js";import"./composeClasses-b42b2e69.js";import"./ButtonBase-4828c375.js";import"./TransitionGroupContext-e86cc34f.js";import"./useForkRef-2c2f4318.js";import"./useIsFocusVisible-309dad28.js";import"./useTheme-efc0693e.js";import"./utils-550ebcf7.js";import"./ownerWindow-6762974c.js";import"./useSlotProps-988ca5b8.js";import"./mergeSlotProps-9651d6f8.js";import"./debounce-517eeb3c.js";import"./Stack-b89bbf9b.js";import"./Modal-8bab0e99.js";import"./Portal-11686d2d.js";import"./Paper-35c5d9d3.js";import"./useId-a47493a3.js";import"./CloseIcon-42216a1d.js";import"./Box-dcab4ca5.js";function r(n){const e=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",strong:"strong"},i(),n.components);return t(c,{children:[o(l,{of:s}),`
`,o(e.h1,{id:"bottomsheet",children:"BottomSheet"}),`
`,o(e.p,{children:"BottomSheet 컴포넌트는 하단에서 슬라이드되어 컨텐츠를 표시하며, 주로 모바일에서 사용됩니다."}),`
`,o(e.h3,{id:"props",children:"Props"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[o(e.code,{children:"height"}),": 컴포넌트 세로 길이를 결정합니다. ",o(e.code,{children:"full"}),"은 현재 화면의 90%까지 채우며, ",o(e.code,{children:"hug"}),"는 콘텐츠의 길이에 맞게 설정합니다."]}),`
`,t(e.li,{children:[o(e.code,{children:"showCloseIcon"}),": BottomSheet 컴포넌트 상단 우측에 닫기 아이콘을 표시할지 여부를 결정합니다. (default ",o(e.code,{children:"true"}),")"]}),`
`,t(e.li,{children:[o(e.code,{children:"renderTitle"}),": 제목을 표시하는 영역을 렌더링하는 함수입니다. ",o(e.strong,{children:"빈 값일경우 제목 영역이 표시되지 않습니다."})]}),`
`,t(e.li,{children:[o(e.code,{children:"renderContent"}),": 콘텐츠를 표시하는 영역을 렌더링하는 함수입니다. ",o(e.strong,{children:"빈 값일경우 콘텐츠 영역이 표시되지 않습니다."})]}),`
`,t(e.li,{children:[o(e.code,{children:"renderActions"}),": 액션 버튼을 표시하는 영역을 렌더링하는 함수입니다. ",o(e.strong,{children:"빈 값일경우 액션 버튼 영역이 표시되지 않습니다."})]}),`
`]}),`
`,o(e.h3,{id:"css-classes",children:"CSS Classes"}),`
`,o(e.p,{children:"BottomSheet 컴포넌트는 아래와 같은 Class를 제공하며, 해당 클래스들을 사용하여 커스텀 스타일을 적용할 수 있습니다."}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[o(e.code,{children:".bottomSheet-header"}),": 닫기 버튼을 포함하고 있는 헤더 영역입니다. ",o(e.code,{children:"showCloseIcon"}),"이 false일 경우에는 헤더 영역이 표시되지 않습니다."]}),`
`,t(e.li,{children:[o(e.code,{children:".bottomSheet-closeIcon"}),": 닫기 아이콘을 감싸고 있는 영역입니다. ",o(e.code,{children:"showCloseIcon"}),"이 false일 경우에는 헤더 영역이 표시되지 않습니다."]}),`
`,t(e.li,{children:[o(e.code,{children:".bottomSheet-title"}),": 제목을 표시하는 영역입니다."]}),`
`,t(e.li,{children:[o(e.code,{children:".bottomSheet-content"}),": 컨텐츠를 표시하는 영역입니다."]}),`
`,t(e.li,{children:[o(e.code,{children:".bottomSheet-actions"}),": 액션 버튼을 표시하는 영역입니다."]}),`
`]}),`
`,o(d,{of:m,sourceState:"hidden"}),`
`,o(h,{include:["height","showCloseIcon","renderTitle","renderContent","renderActions","sx"]})]})}function Y(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?o(e,Object.assign({},n,{children:o(r,n)})):r(n)}export{Y as default};