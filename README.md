### `yarn start`

프로젝트 clone 후

- yarn 패키지 설치
- yarn start

### 타입스크립트로 리액트 Hooks

- useState를 사용 할 때에는 useState<string> 과 같이 Generics 를 사용합니다.
- useState의 Generics 는 상황에 따라 생략 할 수도 있는데, 상태가 null 인 상황이 발생 할 수 있거나, 배열 또는 까다로운 객체를 다루는 경우 Generics 를 명시해야 합니다.
- useReducer를 사용 할 때에는 액션에 대한 타입스크립트 타입들을 모두 준비해서 | 문자를 사용하여 결합시켜야합니다.
- 타입스크립트 환경에서 useReducer 를 쓰면 자동완성이 잘되고 타입체킹도 잘 됩니다.
- useRef를 사용 할 땐 Generics 로 타입을 정합니다.
- useRef를 사용하여 DOM에 대한 정보를 담을 땐, 초깃값을 null 로 설정해야 하고 값을 사용하기 위해서 null 체킹도 해주어야 합니다.
