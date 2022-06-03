const mongoose = require('mongoose');

const Data = new mongoose.Schema(
  {
    login: { type: String, required: true, default: 'guest' },
    successExam: { type: Number, required: true, default: 0 },
    unsuccessExam: { type: Number, required: true, default: 0 },
    questions: [],
  },
  { collection: `data-otest` }
);

module.exports = mongoose.model(`Data`, Data);
