/* 배열 : let 배열이름 = new Array(배열길이) */
/* 배열타입 : 아이템타입[] */
let numA : number[]=[1,2,3]
let strA : string[]=['a','b']
type person = {name:string,age?:number}
let personA = person[]=[{name:'dfsdf'},{name:'dfgdfgdfg',age:22}]

/* 
    문자열과 배열 간 변화 
    - 문자열 배열로 전환할 때 string 클래스의 split 메서드 사용
    - split : 문자열을 문자로 쪼개는 기준인 구분자를 입력받아 문자열을 string[]배열로 만들어 줌
    split(구문자:string):string[]
*/