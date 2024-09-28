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
