import express from "express";
const app = express();
app.listen(8080);
const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Mike", email: "mike@gmail.com" },
  { id: 3, name: "Cathy", email: "cathy@gmail.com" },
];
app.get("/", (req, res) => {
  res.json(users);
});
