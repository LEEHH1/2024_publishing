type coffee = {
  [key: string]: number;
};

const test: coffee = {
  kcal: 5,
  sugar: 4,
};

type Person = {
  name: string;
  age: number;
  nation?: string;
};

const kim: Person = {
  name: "김씨",
  age: 22,
  nation: "한국",
};

type Unit = {
  [key: string]: string | number | null | undefined;
  hp: number;
  name: string;
  pet?: string;
};
