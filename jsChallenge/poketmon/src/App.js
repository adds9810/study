//COMPONENTS
import PokemonList from "./components/PokemonList.js";

//APIS
import { getPokemonList } from "./modules/api.js";

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  this.state = {
    type: "",
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.pokemonList,
    // 코드 작성
    //아이템을 클릭하면 "/detail/id" 로 이동할 수 있도록 아래의 함수를 완성하세요.
    handleItemClick: async (id) => {
      history.pushState(null, null, `/detail/${id}`);
      this.setState({
        ...this.state,
        currentPage: `/detail/${id}`,
      });
    },

    //타입을 클릭하면, 클리한 타입에 해당하는 포켓몬만 띄워지고,
    // "/type" 으로 이동할 수 있도록 아래의 함수를 완성하세요.
    handleTypeClick: async (type) => {
      history.pushState(null, null, `/${type}`);
      const pokemonList = await getPokemonList(type);
      this.setState({
        ...this.state,
        pokemonList: pokemonList,
        searchWord: getSearchWord(),
        type: type,
        currentPage: `/${type}`,
      });
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    // 코드 작성
    pokemonList.setState(this.state.pokemonList);
  };

  const init = async () => {
    // 코드 작성
    try {
      const initialPokemonList = await getPokemonList();
      this.setState({
        ...this.state,
        pokemonList: initialPokemonList,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
