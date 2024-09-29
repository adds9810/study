// 알맞은 속성의 값과 색상을 적용할 수 있는 모듈입니다.
// modules 폴더 내부의 typeTag.js 코드를 확인하고, 알맞게 활용해보세요!
import { setPokemonType } from "../modules/typeTag.js";

export default function PokemonList({
  $app,
  initialState,
  handleItemClick,
  handleTypeClick,
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);
  this.handleItemClick = handleItemClick;
  this.handleTypeClick = handleTypeClick;

  this.template = () => {
    // html 코드는 아래와 같이 제공드립니다.
    // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.
    let temp = [];
    if (this.state) {
      this.state.forEach((elm, idx) => {
        temp += `<div class="pokemon-wrapper">
                    <div class="img-wrapper" id="${elm.id}">
                        <img src="${elm.img}" alt="${elm.name}"></img>
                    </div>
                    <div class="pokemon-info">
                        <div class="index">No.${elm.id}</div>
                        <div class="name">${elm.name}</div>
                        <div class="type">${setPokemonType(elm.type)}</div> 
                    </div>
                </div>`;
      });
    }
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    this.$target.querySelectorAll("div.img-wrapper").forEach((elm) => {
      elm.addEventListener("click", () => {
        this.handleItemClick(elm.id);
      });
    });

    this.$target.querySelectorAll("div.type-tag").forEach((elm) => {
      elm.addEventListener("click", () => {
        this.handleTypeClick(elm.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
