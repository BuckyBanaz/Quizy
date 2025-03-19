const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true },
  fullname: { type: String, required: true },
  score: { type: Number, default: 0 },
  joinCount: { type: Number, default: 1 },
  joinTime: [{ type: Date }],
});

const contestSchema = new mongoose.Schema({
  combineId: [participantSchema],  
  maxParticipants: { type: Number, required: true }, 
  amount: { type: Number, required: true }, 
  winningAmount: { type: Number, required: true },
  description: { type: String, default: "Monthly contest" },
  isFull: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  startTime: { type: Date,  }, 
  endTime: { type: Date,},
  time: [{ type: Date }],
  winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('monthlyContest', contestSchema);
