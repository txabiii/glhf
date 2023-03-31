const app = require("../app");
const route = require("../routes/messages");

app.use("/api/", route);

module.exports = app;