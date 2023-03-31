const app = require("../app");
const route = require("../routes/stories");

app.use("/api/", route);

module.exports = app;