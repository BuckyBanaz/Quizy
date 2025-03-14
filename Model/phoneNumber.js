const mongoose = require("mongoose");

const phoneNumberSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    otpExpiration: { type: Date, required: true },
    referralCode: { type: String, unique: true },
    referredBy: {
        userId: mongoose.Schema.Types.ObjectId,
        fullname: String,
    }
});

// Export Model
module.exports = mongoose.model("PhoneNumber", phoneNumberSchema);
