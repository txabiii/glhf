const stories = require('express').Router();
let Story = require('../models/story.model');

stories.get("/stories", async function (req, res) {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = stories;