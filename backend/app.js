"use strict"
require('dotenv').config();

const app = express();

const express = require("express");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Mongoose database connection established succesfully!");
})

module.exports = app;