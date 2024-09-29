//COMPONENTS
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";
//API
import { request, requestCityDetail } from "./components/api.js";

export default function App($app) {
  // 주소에 정려과 검색어가 있을 경우 새로고침을 해도 받아와 업데이트 되도록 구현
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split("sort=")[1].split("&")[0];
    }
    // 없으면 기본값 나오도록
    return "total";
  };
  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    // 없으면 기본값 나오도록
    return "";
  };
  this.state = {
    startIdx: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: window.location.pathname.replace("/", ""), // 선택한 지역
    cities: "", // 도시 데이터
    currentPage: window.location.pathname,
  };

  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        currentPage: this.state.currentPage,
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
      },
      // 페이지 주소 변경
      handleSortChange: async (sortBy) => {
        const pageUrl = `/${this.state.region}?sort=${sortBy}`;
        history.pushState(
          null,
          null,
          this.state.searchWord
            ? pageUrl + `&search=${this.state.searchWord}`
            : pageUrl
        );
        const cities = await request(
          0,
          this.state.region,
          sortBy,
          this.state.searchWord
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: sortBy,
          cities: cities,
        });
      },
      handleSearch: async (searchWord) => {
        history.pushState(
          null,
          null,
          `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`
        );
        const cities = await request(
          0,
          this.state.region,
          this.state.sortBy,
          searchWord
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          cities: cities,
          searchWord: searchWord,
        });
      },
    });
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `/${region}?sort=total`);
        const cities = await request(0, region, "total");
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: "total",
          region: region,
          cities: cities,
          searchWord: "",
          currentPage: `/${region}`,
        });
      },
    });
  };

  const renderCityList = () => {
    new CityList({
      $app,
      initialState: this.state.cities,
      handleItemClick: async (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },
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
  };

  const renderCityDetail = async (cityId) => {
    try {
      const cityDetailData = await requestCityDetail(cityId);
      new CityDetail({ $app, initialState: cityDetailData });
    } catch (error) {
      console.log(error);
    }
  };

  const render = async () => {
    const path = this.state.currentPage;
    // 비어있는 값으로 변경
    $app.innerHTML = "";
    if (path.startsWith("/city/")) {
      // 상세 페이지로 이동
      const cityId = path.split("/city/")[1]; // id값을 상세 페이지에 전달
      renderHeader();
      renderCityDetail(cityId);
    } else {
      // 메인 페이지 이동
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  // 새로고침시 이벤트 실행
  const init = async () => {
    const path = this.state.currentPage;
    // 메인 페이지
    if (!path.startsWith("/city/")) {
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
    } //상세 페이지
    else {
      render();
    }
  };

  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;

    const prevRegion = urlPath.replace("/", "");
    const prevPage = urlPath;
    const prevSortBy = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevStartIdx = 0;
    const prevCities = await request(
      prevStartIdx,
      prevRegion,
      prevSortBy,
      prevSearchWord
    );

    this.setState({
      ...this.state,
      startIdx: prevStartIdx,
      sortBy: prevSortBy,
      region: prevRegion,
      currentPage: prevPage,
      searchWord: prevSearchWord,
      cities: prevCities, // 현재 페이지 값을 저장해두었다가 이전 다음 실행하도록
    });
  });

  init();
}
