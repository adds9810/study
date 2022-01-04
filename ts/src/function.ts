/* 
    타입스크립트 함수와 메서드 
    
    타입스크립트 함수 기본
    function 함수이름(매개변수1:타입,매개변수:타입2[,...]):반환값타입{
        함수 입력
    } 
*/

function plus(a: number, b: number): number {
  return a * b;
}
let result = plus(3, 5);

/* void타입 : 함수반환 타입으로만 사용가능, 값을 반환하지 않는 함수 */

/* 
    함수 시그니처 - 함수의 타입
    (매개변수 타입1,매개변수 타입2[,...] )=> 반환값타입
*/

/* 타입 별칭
    type 새로운 타입 = 기존타입
*/

type test = (string, number) => void;
let c: test = function (a:  , b: number): void {};

/* nudefined - 타입스크립트에서 최하위  */

/* 선택적 매개변수
     - 매개변수 이름뒤에 ? 붙여 함수 호출을 모두 가능하게 하고 싶을때 사용
        function fn{매개변수:타입,매개변수?:타입}{함수}
     - 함수의 시그니처 다음에는 타입뒤에 물음표를 붙임
        type fn2 = (string,number?) => void
 */

/* 매개변수 기본값 지정
    (매개변수:타입=매개변수 기본값)

*/