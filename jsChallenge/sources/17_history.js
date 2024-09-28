// 라우팅
// 사용자가 다양한 페이지나 뷰로 이동할 수 있게 하면서도 실제로 전체 페이지를 새로 로드하지 않고, 변화가 필요한 요소만을 변경하는 기술
// 바닐라 자바스크립트로 개발한 SPA에서는 자체적으로 제공되는 라우팅 기능이 없기 때문에, 브라우저에서 제공하는 History api를 사용

// history Api
// 브라우저가 관리하는 세션 히스토리 즉, 사용자가 웹 브라우저를 사용해 방문한 페이지들의 목록을 제어할 수 있도록 HTML5가 제공하는 웹 API

const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page}입니다.`;
  // pushState 페이지의 상대 전달 메서드
  // state는 페이지 상태 객체이고, title은 브라우저의 타이틀, 그리고 url은 해당 페이지의 주소 전달
  history.pushState({ page: page }, `Title ${page}`, `?${page}`);
};

window.addEventListener("popstate", (event) => {
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다.`;
  }
});

document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});

document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});

document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

// 뒤로 가기 함수
const goBack = () => {
  history.back();
};

// 앞으로 가기 함수
const goForward = () => {
  history.forward();
};

document.getElementById("goBack").addEventListener("click", goBack);

document.getElementById("goForward").addEventListener("click", goForward);
