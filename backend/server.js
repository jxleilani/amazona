import express from "express";
import data from "./data.js"; // make sure to include .js

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
