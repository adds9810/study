// 컴포넌트 js 파일들을 인스턴스화 해서 관리하는 js
// 웹 애플리케이션이 복잡성을 줄이기 위해 여기서 상태관리
import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
// api 호출
import { request } from "./components/api.js";

export default function App($app) {
  // 상태관리
  this.state = {
    // window.location.pathname popstate 이벤트가 발생할 때 URL의 뒤에 작성된 문자열을 보여줌
    currentTab: window.location.pathname.replace("/", "") || "all", // 선택된 탭 상태
    photos: [], // 사진 데이터 저장된 곳
  };

  //tab
  const tab = new TabBar({
    $app,
    initialState: this.state.currentTab, // 초기값
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name);
      this.updateContent(name);
    },
  });

  //content
  const content = new Content({ $app, initialState: [] });

  // state 상태 업데이트
  // newState 업데이트 할 값
  this.setState = (newState) => {
    this.state = newState;
    tab.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    const currentTab = tabName === "all" ? "" : tabName;
    const photos = await request(currentTab);
    this.setState({
      ...this.state,
      currentTab: tabName,
      photos: photos,
    });
  };

  // popstate - 뒤로가기 앞으로가기 시 발생하는 이벤트
  window.addEventListener("popstate", () => {
    this.updateContent(window.location.pathname.replace("/", "") || "all");
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
