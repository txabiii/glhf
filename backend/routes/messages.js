const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const emailAddress = req.body.emailAddress;
  const message = req.body.message;

  const newMessage = new Message({name, emailAddress, message});

  newMessage.save()
    .then(() => res.json({status: 'success', message: 'Message successfully sent!'}))
    .catch((err) => res.status(400).json({status: 'fail', message: err}));
})

module.exports = router;