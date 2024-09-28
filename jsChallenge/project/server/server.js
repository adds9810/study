// 간단하게 서버구현 작업을 알고 있으면 좋음
const express = require("express"); // express 모듈 불러오기
const path = require("path"); // path 불러오기
const app = express(); // express 객체생성
const PORT = 3000; // 3000 port로 연결

// 미들웨어란, express.js와 같은 웹 프레임워크에서 요청과 응답
// request와 response 객체를 수정 및 종료하고, request를 보내는 기능을 할 수 있도록 도와주는 함수
// app.use(express.static(__dirname + '/..'));
// path.join 경로를 조금더 쉽게 볼 수 있음
app.use(express.static(path.join(__dirname, "..")));

// console.log(__dirname + '\\..'); // Windows 경로 구분자
// console.log(__dirname + '/..');  // POSIX 경로 구분자 (Unix 계열)

app.get("/*", (req, res) => {
  // sendFile 파일을 보내는 메서드
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// 지정한 3000번 포트에서 request를 들을 수 있도록 하기 위해서는 listen 이라는 메서드를 사용
app.listen(PORT, () => {
  console.log(`START SERVER`);
});
