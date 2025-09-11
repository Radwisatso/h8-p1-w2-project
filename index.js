const express = require("express");
const route = require("./routes");
const app = express();
const port = 3000;

app.use(route)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
