/* 전개 연산자 ... : 점 3개를 나란히 찍는 것 */
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
    - string[] 탕비의 배열을 다시 string탕비으로 변환하려면 array클래스의 join메서드를 사용 
      join(구문자:string):string
*/

/* 배열에 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때 인덱스 연산자[index] 사용 */

/*  
    배열의 비구조화 할당 객체와 달리 배열에서는 []기호 사용
    let array: number[] = [1,2,3,4,5]
    let [a.b,c, ...rest] = array
    console.log(a, b, c, rest) // 1,2,3,[4,5]
 */

/* 
    제네릭 방식 타입
    number[]같은 타입이 고정된 함수를 만들기 보다는 T[] 형태로 배열의 아이템 타입을 한꺼번에 취급하는 것
    const arrayL = (array:T[]):number => array.length
    제네릭 형태로 구현된 함수는 원칙적으로 함수이름 <타입변수>(매개변수)형태로 명시해 줘야 함
    제네릭 함수의 함수 시그니처
    const a = <T>(cb:(arg:T,i?:number)=> number):void=>{}
*/

/*
    range 함수 구현 배열에서는 재귀함수 스타일로 작동하며 R.range처럼 from에서 to까지 수로 구성된 배열을 생성해줌
    export const range = (from:number,to:number):number[]=>
    from<to ? [from, ...range(from + 1, to)]:[]
*/