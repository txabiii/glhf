const mongoose = require('mongoose');
const routes = require("./routes/routes");
const app = require("./app");

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Mongoose database connection established succesfully!");
})

// const storiesRouter = require('./routes/stories');
// const messagesRouter = require('./routes/messages')

// app.use('/stories', storiesRouter);
// app.use('/messages', messagesRouter);

app.use("/", routes);

app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});