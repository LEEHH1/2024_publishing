const users = [
  { id: 1, name: "alice", age: 25 },
  { id: 2, name: "bob", age: 30 },
  { id: 3, name: "charlie", age: 35 },
];

const kim = { name: "김민재", age: 27, position: "center back" };
const { name: koreaName, position: soccerPosition } = kim;
console.log(koreaName, soccerPosition);

// const koreaDefender = {
//   koreaName: koreaName,
//   soccerPosition: soccerPosition,
// };
const koreaDefender = {
  koreaName,
  soccerPosition,
};

// 1. renaming
const reNameUser = users.map(
  ({ id: userId, name: userName, age: userAge }) => ({
    userId,
    userName,
    userAge,
  })
);
console.log(reNameUser);
