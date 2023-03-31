const mongoose = require('mongoose');
const routes = require("./routes/routes");
const app = require("./app");

const port = process.env.PORT || 5000;

app.use("/", routes);

app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});