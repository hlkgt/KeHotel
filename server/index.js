const express = require("express");
const RouterList = require("./src/route/server.route");
const app = express();
const port = process.env.PORT || 4800;

app.use(express.json());
app.use((req, res, next) => {
  const path = req.path;
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(`Request ${path}`);
  next();
});
app.use("/api/server", RouterList);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
