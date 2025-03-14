const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
    deviceId: { type: String, required: true, unique: true },
    referralCode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Referral", ReferralSchema);
