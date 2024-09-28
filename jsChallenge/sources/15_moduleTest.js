// export로 내보내기
// export const num = 35;

// export function add(num1, num2) {
//   return num1 + num2;
// }

// export function User(name) {
//   this.name = name;
// }

// 간결 버전
const num = 35;

function add(num1, num2) {
  return num1 + num2;
}

function User(name) {
  this.name = name;
}
export { num, add, User };

// 하나만 있을 경우 export default 내보낼 값으로 작성
// const let 등은 사용 불가
// 가져올 때는 import testModule from "./15_moduleTest";로 호출
