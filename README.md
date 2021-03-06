# :bathtub: lush_clone_frontend
![image](https://user-images.githubusercontent.com/85853145/148224080-c7dedc7f-3962-4b7e-964b-cc7477306f0a.png)

## Summary / 요약
- __프로젝트 기간__ : 2021.09.08 - 2021.12.22 (계속해서 부분 업데이트 중)
- __프론트엔드 구성__ : [정지희](https://github.com/Insa14), [권다은](https://github.com/kaydan95)
- __메인 개발 환경__ : Vue.js (version 3)

## 🛠 Tech / 개발환경
- ![Vue JS](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white) : 메인 개발 환경
- ![element-plus](https://img.shields.io/badge/-element--plus-409EFF?style=flat-square) : 라이브러리
- ![axios](https://img.shields.io/badge/-axios-167C80?style=flat-square) : 백엔드 연동

## Features / 특징

- Vue-Router를 이용한 component 전환
- 제품군 중 "배쓰밤" 구현
- 제품군 중 "바디스프레이"는 구현 완료 (상품 테이블)   
- 로그인 후 회원가입 대신 마이페이지가 표시되도록 상태 변경
- "배쓰밤" 상세페이지 page navigation 기능   
  -> template 부분 
  ```vue
  <div class="pd_navbar">
      <span @click.prevent="goThere('first')">상품상세정보</span>
      <span @click.prevent="goThere('second')">상품후기</span>
      <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
  </div>
  ```
  
  -> script 부분
  ```vue.js
  goThere(val){
      var element = this.$refs[val];
      var location = element.offsetTop;
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  ```

## :eyes: Comparison / 비교

| 비교 항목 | 기존 LUSH | Clone LUSH |
| ------ | ------ | ------ |
| 상품 가격 표시 | ₩ | '원' |
| 상품 상세설명 | 후기 및 사용방법 | 제품성분 |
| 검색 | 검색창 및 검색어 추천 | 검색어 추천 제외 |
| 구현 제품군 |  | 배쓰밤 |
| 마이페이지 이동경로 | 고객센터 및 마이페이지 | 로그인시 생기는 마이페이지 생성 |

## Project setup / 준비
```
npm install
npm install element-plus --save
npm install @element-plus/icons
npm install vue-star-rating@next
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
