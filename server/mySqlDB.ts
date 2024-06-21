const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r",
  database: "leehh",
});

connection.connect();

connection.query(
  `INSERT INTO COFFEE(id,name,price,calories) VALUES(5,"밀크티",5000,500);`
);
connection.end;
