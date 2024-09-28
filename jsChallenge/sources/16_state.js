// 상태관리
// 웹 페이지에서 데이터의 흐름을 보다 편리하게 관리하고, 상태를 효율적으로 변경할 수 있게 도와줌
// 상태 관리를 사용하면 웹 페이지의 불필요한 리렌더링을 발생시키지 않기 때문에 사용자에게 좋은 경험을 제공

this.state = {
  // 초기 상태 값들
};

this.setState = (nextState) => {
  this.state = nextState;
  // 상태 업데이트 후 렌더링
  this.render();
};

this.render = () => {
  // UI 렌더링 로직
};
