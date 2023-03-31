'use strict'

require('dotenv').config();

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const stories = require('./api/stories')
const messages = require('./api/messages')

const allowedOrigins = ['https://glhf-txabiii.vercel.app', 'https://glhf-txabiii.vercel.app']
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send('This is an Express.js server'))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("Mongoose database connection established succesfully!");
})

app.use('/api/stories', stories)
app.use('/api/messages', messages)

const port = process.env.PORT || 3000
app.listen(port, () =>   console.log(`Server is listening on port ${port}.`))