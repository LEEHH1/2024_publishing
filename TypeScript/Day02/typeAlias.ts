// 별칭(닉)

// 리터럴 타입
type Grade = "12세" | "15세" | "전체 이용가";
type Genre = "키덜트" | "공포" | "멜로" | "액션" | "코믹";
type Movie = {
  name: string;
  gerne: Genre[];
  grade: Grade;
};

const cgv: Movie[] = [
  { name: "범죄도시4", gerne: ["액션", "키덜트"], grade: "15세" },
  { name: "인사이드아웃2", gerne: ["키덜트", "코믹"], grade: "전체 이용가" },
  { name: "인터레스트오브아웃", gerne: ["공포", "액션"], grade: "15세" },
];
// 함수 movie[] 매개 변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의
// const makeGenreStr = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     const result = v.gerne.reduce((a, c) => a + c);
//     console.log(result);
//   });
// };

// type Category = "icecream" | "cake" | "cookie";
// type IcecreamProductInfo = {
//   category: Category[];
//   name: string;
//   engName: string;
//   description: string;
//   icon: Icon[];
// };
// type Allergies = "우유" | "대두" | "밀" | "복숭아";
// type NutritionInfo = {
//   servings: number;
//   kcal: number;
//   sugar: number;
//   proteins: number;
//   transfats: number;
//   salts: number;
//   allergy: Allergies[];
// };
// type PhotoURL = { url: string };
// type Icon = { name: string } & PhotoURL;

// //  결합 (무조건 다 있어야함)
// type icecream = IcecreamProductInfo & NutritionInfo & PhotoURL;

// // 포함 ()
// type icecreamComposition = {
//   IcecreamProductInfo: IcecreamProductInfo;
//   NutritionInfo: NutritionInfo;
//   PhotoURL: PhotoURL;
// };

// cgv.map((v) => {
//   v.gerne.forEach((v) => console.log(v));
// });

//hp,skill,name,공격함수
// type Unit = {
//   hp: number;
//   skill: string[];
//   name: string;
//   attack: () => void;
// };

// const game: Unit = {
//   hp: 80,
//   skill: ["q", "w", "e", "r"],
//   name: "엄준식",
//   attack: () => {
//     console.log("공격했습니다");
//   },
// };

// console.log(game);

const makeMsgAlign = (msg: string, align: "center" | "start" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};

makeMsgAlign("점메추", "center");

type Bread = {
  name: string;
  price: number;
};

type abc = keyof Bread; // 'name' | 'price'
const apple: abc = "price";
