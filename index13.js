import express from "express";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())
app.listen(8080,()=>console.log("Sever Started"));
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