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
    fullname: { type: String,  },
    email: { type: String, required: true, unique: true },
    password: { type: String,  },
    referralCode: { type: String, unique: true }, // Unique referral code
    referredBy: { 
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "CombineData", default: null },
        fullname: { type: String, default: null }
    },
    pushToken: { type: String, default: null } 
});


module.exports = mongoose.model("PhoneNumber", phoneNumberSchema);
