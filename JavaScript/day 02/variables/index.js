// 인간: (뇌) + 기억(뇌)
// 컴퓨터 : 연산(cpu) + 기억(ram)
// var 절대절대 쓰지말기
// 이유 : 전역 영역(글로벌 호이스팅)

// es6(2015) let & const
let a = 123; // let은 재수정 가능
const button = document.createElement("button"); // const 재수정불가

// 변수명 이름 문법
// 1. 예약어 안됨 ex) const const
// 2. $와 _를 제외한 특수문자 넣으면 안됨
// 3. 변수명 중복이 안됨
// 4. 숫자로 시작이 안됨 ex) const a1(o) const 1a(x)

// 변수명 이름 국룩
// 1. 소문자로 작성
// 2. 의미있는 단어로 작성
//   1) 구체성 button -> skyblueButton
//  2) has, is -> isDarkMode
// 3. 두 단어 이상 합치면
//  -1) camelCase: mintIcecream, backgroundColor
//  -2) sanke_case: mint_icecream
