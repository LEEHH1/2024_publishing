type Juice = {
  name: string;
  kcal: number;
};

type Carbonated = {
  gas: number;
  color: string;
};
type sofrDrink = Juice & Carbonated;
//하이브리드 타입
// const coke : sofrDrink={  }

interface Fruit {
  name: string;
  kcal: number;
}
interface Tropical {
  tempaerature: number;
}
interface TropicalFruit extends Fruit, Tropical {
  sugarLevel: number;
}

const Mango: TropicalFruit = {
  name: "망고",
  kcal: 100,
  sugarLevel: 5,
  tempaerature: 50,
};
