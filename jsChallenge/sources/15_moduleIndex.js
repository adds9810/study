// 내보낸 값을 import로 가져오기
// import { num, add, User } from "./15_moduleTest";
// 한 번에 가져와서 사용하기
import * as testModule from "./15_moduleTest";

console.log(testModule.num);
console.log(testModule.add(10, 20));
console.log(new testModule.User("효빈"));
