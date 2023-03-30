const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storySchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    minlength: 3  
  },
  title: { type: String, require: true },
  preview: { type: String, require: true },
  place: { type: String, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  date: { type: String, require: true },
  md: { type: String, require: true },
  locationImg: { type: String, require: true },
  storyImg: { type: String, require: true },
}, {
  timestamps: true,
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;