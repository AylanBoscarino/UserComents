const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  imgSrc: String,
  imgDesc: String,
  contentLink: String,
  contentLabel: String,
  shareLink: String,
  shareLabel: String
});

module.exports = mongoose.model('Job', JobSchema);
