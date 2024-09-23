const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/user/index.html"));
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`User docs server running on http://localhost:${PORT}`);
});
