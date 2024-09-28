//COMPONENTS
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";
//API
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    startIdx: 0,
    sortBy: "",
    searchWord: "",
    region: "", // 선택한 지역
    cities: "", // 도시 데이터
  };

  const header = new Header();
  const regionList = new RegionList();
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
    handleLoadMore: async () => {
      const newStartIdx = this.state.startIdx + 40;
      const newCities = await request(
        newStartIdx,
        this.state.region,
        this.state.sortBy
      );
      this.setState({
        ...this.state,
        startIdx: newStartIdx,
        cities: {
          ...this.state.cities,
          cities: [...this.state.cities.cities, ...newCities.cities],
          isEnd: newCities.isEnd, // 데이터 출력이 완료 되었는지 아닌지 알 수 있는 부분 true가 되야 끝
        },
      });
    },
  });
  const cityDetail = new CityDetail();

  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
  };

  const init = async () => {
    const cities = await request(
      this.state.startIdx,
      this.state.region,
      this.state.sortBy,
      this.state.searchWord
    );
    this.setState({
      ...this.state,
      cities: cities,
    });
  };

  init();
}
