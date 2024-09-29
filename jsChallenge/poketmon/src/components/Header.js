//코드 작성
export default function Header({
  $app,
  initialState,
  handleClick,
  handleSearch,
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "header";

  $app.appendChild(this.$target);
  this.handleClick = handleClick;
  this.handleSearch = handleSearch;

  this.template = () => {
    const { currentPage, searchWord } = this.state;
    // html 코드는 아래와 같이 제공드립니다.
    // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.
    let temp = `<div class='header-content' id="title">
        <img src='/src/img/ball.webp' width=40px height=40px></img>
        포켓몬 도감</div>`;

    //main 페이지일 경우에만 '검색' 바가 나타나도록 코드를 작성하세요.
    if (!currentPage.includes("/detail")) {
      //decodeURIComponent는 한글이 깨지는 현상을 방지하기 위한 메서드입니다. () 안에 알맞은 값을 넣어주시면 됩니다.
      temp += `<div class="search">
            <input type="text" placeholder="포켓몬을 검색하세요!" id="search" autocomplete="off" value=${decodeURIComponent(
              searchWord
            )}></input>
            <button id="search-button"><img src="src/img/search.png"></img></button>
        </div>`;
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const $title = document.getElementById("title");
    $title.addEventListener("click", () => {
      this.handleClick();
    });

    //detail 페이지가 아닐 경우
    if (!this.state.currentPage.includes("/detail")) {
      const $searchInput = document.getElementById("search");

      const $searchButton = document.getElementById("search-button");
      $searchButton.addEventListener("click", () => {
        this.handleSearch($searchInput.value);
      });
    }
  };

  this.setState = (newState) => {
    this.state = newState;
  };

  this.render();
}
