/* null 병합 연산자 */
/*
  좌항의 피연산자가 null이거나 undifined라면 우항의 결과가 남고(함수면 실행)
  그렇지 않으면 좌항ㅇ이 남는다.
*/

var test = null ?? '기본값';
console.log('test', test); // console.log에 두개의 인수를 주면 중간에 띄어쓰기를 포함해 이어붙여 줌
test.log