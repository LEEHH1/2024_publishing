// generic: 입구컷

type Fruit1 = {
  name: string;
  kcal: number;
};

function getSomething<T>(something: T) {
  console.log(`${something} 을 얻었습니다.`);
}
getSomething<string>("과일");
getSomething<number>(10);
getSomething<boolean>(true);

// arrow function
// const getSomething = <T>(something: T) => {
//   console.log(`${something} 을 얻었습니다.`);
// };

const getSomethingNumber = (something: number) => {
  console.log(`${something} 을 얻었습니다.`);
};

const getSomethingString = (something: string) => {
  console.log(`${something} 을 얻었습니다.`);
};
const getSomethingBoolean = (something: Boolean) => {
  console.log(`${something} 을 얻었습니다.`);
};
