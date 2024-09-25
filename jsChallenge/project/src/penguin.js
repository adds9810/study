const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let template = [];

//API
const getData = async (name) => {
  // 겁색단어 추가
  let res = await fetch(`${API_URL}${name}`);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template += `<img src="${elm.url}"></img>`;
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

// 검색하고자 하는 값을 삽입
getData("penguin");
