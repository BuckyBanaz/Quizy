const mongoose = require("mongoose");

// const phoneNumberSchema = new mongoose.Schema({
//     phoneNumber: { type: String, required: true },
//     otp: { type: String, required: true },
//     otpExpiration: { type: Date, required: true },
//     referralCode: { type: String, unique: true },
//     referredBy: {
//         userId: mongoose.Schema.Types.ObjectId,
//         fullname: String,
//     }
// });



const phoneNumberSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pushToken: { type: String, default: null } // Add pushToken field
});


// Export Model
module.exports = mongoose.model("PhoneNumber", phoneNumberSchema);
