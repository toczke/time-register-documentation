const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/maintainer/index.html"));
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Maintainer docs server running on http://localhost:${PORT}`);
});
