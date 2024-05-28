const person = {
  name: "john",
  age: 21,
  major: "computer",
};

// const { name, major } = person; 빼기
// const { name: realName, major: superMajor } = person; 빼면서 별명붙히기

const person1 = {
  name: "jenny",
  address: {
    city: "bupyeong",
    zipCode: 1004,
  },
};

const { address } = person1;

// const {
//   address: { zipCode },
// } = person1;

const { zipCode } = person1.address;

console.log({ zipCode });

const user = {
  username: "alice",
  email: "alice@example.com",
  details: {
    firstName: "Alice",
    lastName: " doe",
  },
};

const { lastName: familyName } = user.details;
console.log(familyName);
