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


const   phoneNumberSchema= new mongoose.Schema({
    fullname: { type: String, required: true },
    phoneNumber: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    referralCode: { type: String, unique: true, default: function () { return Math.random().toString(36).substr(2, 8).toUpperCase(); } }
});




// Export Model
module.exports = mongoose.model("PhoneNumber", phoneNumberSchema);
