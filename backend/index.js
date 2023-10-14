const express = require("express");
const app = express();
const port = 3002;

// jsonの受け取り
app.use(express.json());

// cors対策
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// postの処理
app.post("/", function (req, res) {
  try {
    res.json(req.body); // jsonで返却
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
