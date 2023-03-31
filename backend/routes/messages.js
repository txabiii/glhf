const message = require('express').Router();
let Message = require('../models/message.model');

message.post("/messages/add", async function (req, res) {
  const name = req.body.name;
  const emailAddress = req.body.emailAddress;
  const message = req.body.message;

  const newMessage = new Message({name, emailAddress, message});

  newMessage.save()
    .then(() => res.json({status: 'success', message: 'Message successfully sent!'}))
    .catch((err) => res.status(400).json({status: 'fail', message: err}));
})

message.get("/messages", async function (req, res) {
  res.send([
    { name: "Ben", emailAddress: "ben@mail.com", message: "ben's message" },
    { name: "Tim", emailAddress: "tim@mail.com", message: "ben's message" },
    { name: "Eula", emailAddress: "eula@mail.com", message: "ben's message" },
  ]);
})

module.exports = message;