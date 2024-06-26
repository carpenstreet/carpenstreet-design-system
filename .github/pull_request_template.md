# Issue ticket ID

_해당 PR이 연결된 이슈 티켓의 ID를 적어주세요. (ex. PRDT-1399)_  
_이슈 URL을 복사해 붙여넣어도 괜찮습니다._

PRDT-?

# CheckList

***Reviewr는 아래 체크리스트를 확인해주세요***

(PR 작성자는 체크리스트를 수정하지 마세요)

- [ ] `ooo.stories.ts` 파일에 `title`이 제대로 설정되어 있는가?
- [ ] `ooo.tsx` 파일이 `export default function`을 사용하고 있는가?
- [ ] `ooo.types.ts` 파일에서 MUI type을 적당한 곳에서 잘 import해오고 있는가?
- [ ] `ooo.mdx` 파일에서 `<Controls />`의 `include` prop이 잘 설정되어 있는가?
- [ ] 변경사항 전반적으로 import문을 `index.ts`가 아닌 정확한 파일에서 import하고 있는가?
- [ ] 작업된 컴포넌트를 `src/index.ts`, `src/components/index.ts` 파일에서 export하고 있는가?

# Description

## 요약

_이번 PR의 요약을 적어주세요. 3줄 이내 작성을 권장합니다._

여기에 작성.

## 무엇을 변경했습니까?

_아래 예시와 같이 작성해주세요._

>  _ex-1. CardImg.tsx의 Wrapper에 media-query로 기본 height를 설정했음._

> _ex-2. /event/upselling 페이지 컴포넌트와 하위 컴포넌트들을 새롭게 제작하였음._

여기에 작성.

## 왜 변경했습니까?

_아래 예시와 같이 작성해주세요._ 새 피쳐의 경우 생략할 수 있습니다.

> _ex. 기본 height가 설정되지 않아 CLS가 발생하고 있어서 이를 해결하고자 함._

여기에 작성.

# To Reviewers

## 중점적으로 리뷰해주었으면 하는 부분

_아래 예시와 같이 작성해주세요._

> _ex. 기존의 useSomething 훅이 맡고 있는 기능이 너무 많아서 이번에 useAnything과 useNothing으로 분리했습니다. 각 hook의 역할이 알맞게 분배되었는지 중점적으로 체크 부탁드립니다._

여기에 작성.

## 상의가 필요한 부분

_아래 예시와 같이 작성해주세요._

> _ex. 이번에 새롭게 추가되는 기능에 RESTful API를 쓰고자 하는데, react-query를 효과적으로 사용하려면 어떤 구조로 코드를 짜야할 지 아직 잘 모르겠어요. 피드백 바랍니다._

여기에 작성.

# Reference

_참고문서, 참고링크 등을 적어주세요._
