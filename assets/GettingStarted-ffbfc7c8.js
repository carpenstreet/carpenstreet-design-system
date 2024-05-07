import{j as n,a as r,F as o}from"./jsx-runtime-29545a09.js";import{M as a}from"./index-d205e857.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-6cf1ca51.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function s(t){const e=Object.assign({h1:"h1",hr:"hr",h3:"h3",p:"p",pre:"pre",code:"code"},i(),t.components);return r(o,{children:[n(a,{title:"Developer/Getting Started"}),`
`,n(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n(e.hr,{}),`
`,n(e.h3,{id:"스토리북-레포-설치-및-실행",children:"스토리북 레포 설치 및 실행"}),`
`,n(e.p,{children:"우선, git repo를 clone해주세요"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# install dependency
yarn install
`})}),`
`,n(e.p,{children:"그리고 아래 명령어로 스토리북을 실행해주세요"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# run development mode
yarn dev
`})}),`
`,n(e.h3,{id:"프로젝트에-디자인-시스템-패키지-설치-및-적용",children:"프로젝트에 디자인 시스템 패키지 설치 및 적용"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`# install package
yarn add carpenstreet-designsystem
`})}),`
`,n(e.p,{children:"theme.d.ts 파일을 생성하여 아래와 같이 작성해주세요"}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:`import 'carpenstreet-designsystem/dist/designSystemTheme';
`})}),`
`,n(e.p,{children:"DesignSystem을 사용하고자 하는 컴포넌트 상위에 Provider를 추가해주세요"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { DesignSystemProvider } from 'carpenstreet-designsystem';

...
  <DesignSystemProvider>
    <Something />
  </DesignSystemProvider>
...
`})}),`
`,r(e.p,{children:["theme 객체를 사용하실 땐 ",n(e.code,{children:"useDesignSystemTheme()"})," hook을 사용해주세요"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useDesignSystemTheme } from 'carpenstreet-designsystem';

...
  const theme = useDesignSystemTheme();
  const color = theme.palette['color/primary/600'];
...
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?n(e,Object.assign({},t,{children:n(s,t)})):s(t)}export{j as default};
