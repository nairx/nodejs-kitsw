//database > mydb27
//collection > users (name,email)
//localhost:8080/users
//POST Method  {name:"Mike",email:"mike@gmail.com"}
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json())
app.listen(8080);
mongoose.connect("mongodb://localhost:27017/mydb27");
const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
});
const userModel = mongoose.model("users", userSchema);
app.post("/users", async (req, res) => {
  const body = req.body;
  const response = await userModel.create(body)
  res.json(response)
});
app.get("/users", async (req,res)=>{
    const response = await userModel.find()
    res.json(response)
})