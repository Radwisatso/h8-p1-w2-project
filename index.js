const express = require("express");
const route = require("./routes");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // views
app.use(express.urlencoded({ extended: false })); // body parser (middleware)

app.use(route); // (middleware)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
