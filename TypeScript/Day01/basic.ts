const b: string = "hello world";
const b1: number = 100;
// boolean,null,undefined

const boo: boolean = !!123;
const nu: null = null;
const un: undefined = undefined;

const b5: object = {
  name: "아아",
  price: 2500,
};
const b6: {} = {
  name: "라떼",
  price: 3000,
};

// 타입추론
const b7: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 최후의 보루
const b8: any = "아무거나(모든 타입)";
