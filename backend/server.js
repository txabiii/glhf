const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Mongoose database connection established succesfully!");
})

const storiesRouter = require('./routes/stories');
const messagesRouter = require('./routes/messages')

app.use('/stories', storiesRouter);
app.use('/messages', messagesRouter);

app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});