const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  h3: String,
  h4: String,
  p: String,
  h6: String,
  triumph: String,
  img: String
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;