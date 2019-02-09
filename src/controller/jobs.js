const { findAll } = require('../repository/jobs');

const index = async (req, res, next) => {
  try {
    const jobs = await findAll();
    return res.json(jobs);
  } catch (error) {
    return next(error);
  }
}

module.exports = { index };