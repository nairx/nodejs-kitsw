import express from "express";
const app = express();
app.listen(8080);
app.get("/", (req, res) => {
  const user = {
    name: "John",
    age: 21,
  };
  res.json(user)
});
