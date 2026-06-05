# TLJ

> HTML, CSS, JavaScript 기초를 바탕으로 제작한 뚜레쥬르 메인 페이지 클론 프로젝트

<br>

## 프로젝트 소개

| 항목     | 내용                                                        |
| ------ | --------------------------------------------------------- |
| 프로젝트명  | TLJ                                                       |
| 한 줄 소개 | 뚜레쥬르 메인 페이지를 참고하여 구현한 정적 웹사이트 클론                          |
| 제작 목적  | HTML, CSS 기초 학습 이후 실제 브랜드 메인 페이지 구조와 레이아웃을 직접 구현해보기 위해 제작 |
| 구현 방식  | HTML, CSS, JavaScript만 사용한 정적 웹페이지                        |

<br>

## 제작 기간

2026.05.19 – 2026.05.21

<br>

## 사용 기술

```txt
HTML5 / CSS3 / JavaScript
```

<br>

## 주요 기능
<img width="1920" height="140" alt="Image" src="https://github.com/user-attachments/assets/1adf8ba6-4047-4b3f-9ccc-bb1c486abb62" />

* 공통 헤더 구현
<img width="331" height="96" alt="Image" src="https://github.com/user-attachments/assets/271fcd20-bf73-47b8-9f9d-c6927933a8ee" />

  * SNS 아이콘
  * 검색창 열기/닫기
  * 로고 중앙 정렬
  * 유틸 메뉴 및 창업안내 이미지 버튼

* GNB 메뉴 구현
<img width="1237" height="274" alt="Image" src="https://github.com/user-attachments/assets/0370d9dd-86ce-4720-8461-54ec26e083b6" />

  * 5개 주요 메뉴 구성
  * 마우스 hover 시 하위 메뉴 표시
  * `z-index`를 활용한 드롭다운 메뉴 겹침 처리

* 메인 비주얼 영역 구현
<img width="1920" height="650" alt="Image" src="https://github.com/user-attachments/assets/87141fd8-dfc5-4e13-9069-e89ec39fea65" />

  * 풀 와이드 이미지 배너
  * 이미지 비율 유지를 위한 `object-fit` 적용

* 이벤트 배너 슬라이더 구현
<img width="343" height="344" alt="Image" src="https://github.com/user-attachments/assets/1f2719a6-34b8-4a68-8d6c-c4381d7741c3" />

  * 4개 이벤트 이미지 자동 전환
  * 하단 dot 버튼 클릭 이동
  * 재생/멈춤 버튼 구현

* 추천제품 영역 구현
  
<img width="544" height="362" alt="Image" src="https://github.com/user-attachments/assets/4e869b4b-13d3-4265-8b64-b8b14b3f5372" />

  * 큰 제품 이미지와 작은 제품 이미지 2개 배치
  * 좌우 버튼 클릭 시 추천제품 페이지 이동
  * hover 시 제품 설명과 MORE 버튼 표시

* 메인 콘텐츠 영역 구현
  
<img width="967" height="572" alt="Image" src="https://github.com/user-attachments/assets/cc3ffd51-1ed0-4abe-b0b5-f157ddf345a9" />

  * 쇼핑몰 & 케이크배달 배너
  * 매장찾기 검색 박스
  * 제휴 할인 혜택 배너
  * 창업안내 / 기사 채용안내 / News & Notice 영역

* 푸터 구현
  
<img width="1076" height="273" alt="Image" src="https://github.com/user-attachments/assets/c482860c-1133-41e3-a54f-8638d0e08a75" />

  * 제휴 브랜드 로고 영역
  * 약관 및 정책 링크
  * 사업자 정보 및 copyright

* Go To Top 버튼 구현
  
<img width="1909" height="939" alt="Image" src="https://github.com/user-attachments/assets/99bb8e95-70fb-4949-a7a4-1cbfc1d44e20" />

  * 클릭 시 페이지 상단으로 부드럽게 이동

<br>

## 폴더 구조

```txt
tlj/
├── index.html
├── css/
│   ├── reset.css       # 브라우저 기본 스타일 초기화
│   ├── common.css      # 공통 변수 및 기본 스타일
│   └── main.css        # 메인 페이지 스타일
├── js/
│   └── script.js       # 슬라이더, 검색창, go top 등 인터랙션
└── image/
    ├── t_logo.png
    ├── common.png
    ├── menu_point.png
    ├── section_banner.jpg
    ├── store_find.jpg
    ├── notice_news.png
    ├── img_banner1.jpg
    ├── img_banner2.jpg
    └── imgi_*.jpg / .png
```

<br>

## 구현 중 해결한 문제

### 1. 이미지 비율이 깨지는 문제

**문제**
메인 비주얼 이미지나 이벤트 이미지가 박스 크기에 맞춰 강제로 늘어나면서 비율이 깨지는 문제가 있었다.

**원인**
이미지에 `width: 100%`, `height: 100%`만 적용하고, 비율 유지 속성을 제대로 적용하지 않았다.

**해결**
이미지 성격에 따라 `object-fit`을 다르게 적용했다.

```css
.visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-slide img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
```

<br>

### 2. GNB 하위 메뉴가 아래 콘텐츠를 밀어내는 문제

**문제**
GNB에 마우스를 올렸을 때 하위 메뉴가 펼쳐지면서 아래 콘텐츠가 밀리는 문제가 있었다.

**원인**
메뉴 영역 자체의 높이를 늘리는 방식으로 구현하면 문서 흐름에 영향을 주기 때문이다.

**해결**
하위 메뉴를 `position: absolute`로 배치하고, `z-index`를 이용해 아래 콘텐츠 위에 겹쳐 보이도록 처리했다.

```css
.gnb {
  position: relative;
  z-index: 999;
  overflow: visible;
}

.gnb ul li .sub-menu {
  position: absolute;
  top: 40px;
  opacity: 0;
  visibility: hidden;
}

.gnb:hover ul li .sub-menu {
  opacity: 1;
  visibility: visible;
}
```

<br>

### 3. 추천제품과 이벤트 영역의 너비가 어긋나는 문제

**문제**
이벤트 배너, 추천제품, 쇼핑몰 배너, 매장찾기 영역의 오른쪽 끝선이 서로 맞지 않는 문제가 있었다.

**원인**
일부 영역은 `grid`, 일부 영역은 `flex`, 일부 요소는 고정 `width`를 사용해서 기준이 달라졌다.

**해결**
같은 부모 `.inner` 안에서 `width: 100%`를 기준으로 잡고, 자식 요소는 `flex` 비율로 배치했다.

```css
.top-row {
  display: flex;
  gap: 10px;
}

.event-card {
  flex: 0 0 38%;
}

.product-card {
  flex: 1;
}
```

<br>

### 4. 푸터 배경이 화면 전체로 깔리지 않는 문제

**문제**
푸터의 어두운 배경이 화면 전체가 아니라 가운데 콘텐츠 폭만큼만 보이는 문제가 있었다.

**원인**
`.footer-inner`가 푸터 전체를 감싸고 있어서 배경색도 inner 폭 안에서만 적용되었다.

**해결**
배경을 담당하는 `.footer-bottom`을 바깥에 두고, 그 안에 `.footer-inner`를 넣는 구조로 변경했다.

```html
<footer class="footer">
  <section class="footer-partners">
    <div class="footer-inner"></div>
  </section>

  <section class="footer-bottom">
    <div class="footer-inner"></div>
  </section>
</footer>
```

<br>

### 5. GitHub Pages 배포 시 이미지 경로 오류

**문제**
로컬에서는 보이던 이미지가 배포 환경에서 깨질 수 있는 문제가 있었다.

**원인**
`/image/...`처럼 루트 기준 경로를 사용하면 GitHub Pages의 프로젝트 경로에서 이미지가 제대로 연결되지 않을 수 있다.

**해결**
이미지 경로를 상대경로 기준으로 작성하도록 정리했다.

```html
<img src="image/t_logo.png" alt="TOUS les JOURS">
```

<br>

## 아쉬운 점

* 반응형 웹까지는 구현하지 못하고 PC 고정 레이아웃 기준으로 제작했다.
* CSS 코드가 길어지면서 같은 선택자가 여러 번 중복되는 문제가 있었다.
* 처음에는 `position`, `z-index`, `flex`, `grid`의 기준을 정확히 이해하지 못해 레이아웃 수정에 시간이 오래 걸렸다.
* JavaScript 기능을 한 파일 안에 작성해서 코드 분리가 부족했다.

<br>

## 회고

이번 프로젝트는 HTML, CSS, JavaScript 기초를 배운 뒤 처음으로 실제 브랜드 메인 페이지를 참고하여 제작한 클론 코딩 프로젝트다.

처음에는 단순히 이미지를 배치하고 메뉴를 만드는 정도라고 생각했지만, 실제로 구현해보니 레이아웃 기준을 잡는 일이 가장 어려웠다. 특히 `position`, `z-index`, `flex`, `grid`, `object-fit`은 이론으로 배울 때보다 실제 화면에서 훨씬 복잡하게 느껴졌다.

이벤트 슬라이더, 추천제품 이동, 검색창 열기/닫기, Go To Top 버튼처럼 JavaScript를 활용한 인터랙션도 직접 구현해보면서 HTML 구조와 CSS 배치가 JavaScript 동작에도 영향을 준다는 점을 알게 되었다.

다음 프로젝트에서는 처음부터 공통 레이아웃, 섹션별 CSS, JavaScript 기능을 더 명확하게 나누고, 반응형까지 고려한 구조로 제작해보고 싶다.
