const routes = require("express").Router();

const messages = require("./messages");
const stories = require("./stories");

routes.get("/", async function (req, res) { 
  res.send(`<h1>This is an express.js backend server.</h1>`); 
});

routes.use("/", messages);
routes.use("/", stories);

module.exports = routes;