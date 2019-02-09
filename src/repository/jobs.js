const Job = require('../model/job');

function findAll() {
  return Job.find({});
}

module.exports = { findAll };