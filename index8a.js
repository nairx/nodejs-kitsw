import express from "express";
const app = express();
app.listen(8080);
app.use(express.json());
let products = [
  { id: 1, name: "Laptop", price: "80k" },
  { id: 2, name: "Workstation", price: "100k" },
  { id: 3, name: "Printer", price: "50k" },
];
app.get("/", (req, res) => {
  res.json(products);
});
app.post("/", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(products);
});
app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((product) => product.id != id);
  res.json(products);
});
