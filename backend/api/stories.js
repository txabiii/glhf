const express = require("express");
const router = express.Router();

let Story = require('../models/story.model');

router.get("/", async (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router