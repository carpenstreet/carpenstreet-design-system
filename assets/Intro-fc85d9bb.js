import{j as n,a as t,F as i}from"./jsx-runtime-29545a09.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const a=""+new URL("Storybook_Banner-9e734446.png",import.meta.url).href;function s(r){const e=Object.assign({h1:"h1",p:"p",a:"a",hr:"hr",strong:"strong",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),r.components);return t(i,{children:[n("img",{src:a,alt:"Banner image for stroybook",style:{marginBottom:"24px"}}),`
`,n(e.h1,{id:"carpenstreet-design-system",children:"Carpenstreet Design System"}),`
`,t(e.p,{children:[n(e.a,{href:"https://github.com/carpenstreet/carpenstreet-design-system",target:"_blank",rel:"nofollow noopener noreferrer",children:"Github Repo"})," / ",n(e.a,{href:"https://www.figma.com/file/qfL0NXrfMVNIlBszjy8T8z/ACON-Design-System-(%EA%B3%B5%EC%82%AC%EC%A4%91)?type=design&node-id=3094-7458&mode=design&t=FsttCytOZBrFjhU4-0",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma UI"})," / ",n(e.a,{href:"https://www.notion.so/acon3d/ed8845021291449684fa47da8c711fa1?pvs=4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Notion for Devs"})]}),`
`,n(e.hr,{}),`
`,t(e.p,{children:[n(e.strong,{children:"카펜스트리트 디자인 시스템"})," 스토리북에 오신 것을 환영합니다!"]}),`
`,n(e.p,{children:"스토리북에서는 디자인 시스템에 어떤 컴포넌트가 존재하고, 어떻게 동작하는지 직접 제어하며 확인해볼 수 있습니다."}),`
`,n(e.p,{children:"현재 카펜스트리트의 디자인 시스템은 Product Designer와 Frontend Engineer가 서로 긴밀하게 협업하며 구현 중입니다!"}),`
`,n(e.p,{children:"디자인 시스템은 MUI를 기반으로 Customize하여 디자인/구현되었으니, 기능 및 디자인에 어려움을 겪으신다면 MUI를 참고해주세요!"}),`
`,n(e.h2,{id:"getting-started---for-devs",children:"Getting Started - for Devs"}),`
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
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:`/// <reference path="[node_modules 상대 경로]/carpenstreet-designsystem/dist/src/shared/settings/theme.d.ts" />
`})}),`
`,n(e.p,{children:"DesignSystem을 사용하고자 하는 컴포넌트 상위에 Provider를 추가해주세요"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { DesignSystemProvider } from 'carpenstreet-designsystem';

...
  <DesignSystemProvider>
    <Something />
  </DesignSystemProvider>
...
`})}),`
`,t(e.p,{children:["theme 객체를 사용하실 땐 ",n(e.code,{children:"useDesignSystemTheme()"})," hook을 사용해주세요"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useDesignSystemTheme } from 'carpenstreet-designsystem';

...
  const theme = useDesignSystemTheme();
  const color = theme.palette['color/primary/600'];
...
`})})]})}function m(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}export{m as default};
