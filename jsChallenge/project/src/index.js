const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
// 이미지를 한번에 넣기 위해 빈 배열 추가
let template = [];

//API
const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        // 빈 배열에 html 태그 삽입
        template += `<img src="${elm.url}">`;
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

getData();
