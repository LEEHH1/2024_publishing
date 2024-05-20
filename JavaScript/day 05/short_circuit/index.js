//단축 평가[short_circuit]

// true || "dog" //true
// false || "dog" // dog
// true && "dog" // dog
// false && "dog" // false

const userName = prompt("유저입력");
const name = userName || "Guest";
console.log(`${name} 환영합니다`);

const isLoggedIn = true; //로그인 로직 아직 안배움

isLoggedIn && console.log("로그인 성공");
