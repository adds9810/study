//COMPONENTS
import Header from "./components/Header.js";
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

  const header = new Header({
    //코드 작성
    $app,
    initialState: {
      currentPage: this.state.currentPage,
      searchWord: this.state.searchWord,
    },
    //'포켓몬 도감'을 클릭하면 "/" 홈으로 돌아갈 수 있도록 함수를 완성하세요.
    handleClick: async () => {
      history.pushState(null, null, `/`);
      const pokemonList = await getPokemonList();
      this.setState({
        ...this.state,
        pokemonList: pokemonList,
        type: "",
        searchWord: getSearchWord(),
        currentPage: "/",
      });
    },
    //'돋보기 모양'을 누르면 검색 결과를 나타내고, "(기존 url)/?search=searchWord"로 url을 변경하세요.
    handleSearch: async (searchWord) => {
      history.pushState(null, null, `?search=${searchWord}`);
      const searchedPokemonList = await getPokemonList(
        this.state.type,
        searchWord
      );
      this.setState({
        ...this.state,
        searchWord: searchWord,
        pokemonList: searchedPokemonList,
        currentPage: `?search=${searchWord}`,
      });
    },
  });

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
