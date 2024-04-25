import express from "express";

const app = express();

app.use((req, res) => {
  res.json({ message: ["hola"] });
});

app.listen(3000, () => console.log("server on port 3000"));
