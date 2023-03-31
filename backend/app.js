"use strict"
require('dotenv').config();

const app = express();

const express = require("express");
const cors = require('cors');

app.use(cors());
app.use(express.json());

module.exports = app;