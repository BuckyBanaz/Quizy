const mongoose = require("mongoose");

// Student Schema
const studentSchema = new mongoose.Schema({
    fullname: { type: String, },
    phoneNumber: { type: String,  unique: true },
    dob: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    referralCode: { type: String, unique: true, sparse: true }, // ✅ Ensure unique referral codes are not required (to prevent null duplication)
    referredBy: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "CombineData", default: null },
        fullname: { type: String, default: null },
    }
});

// Form Schema
const formSchema = new mongoose.Schema({
    fullname: { type: String, },
    phoneNumber: { type: String,  unique: true },
    dob: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    email: { type: String, required: true, unique: true },
    referralCode: { type: String, unique: true, sparse: true }, // ✅ Avoid duplicate key errors when referralCode is null
    referredBy: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "CombineData", default: null },
        fullname: { type: String, default: null },
    }
});

// Main Combine Schema
const combineSchema = new mongoose.Schema({
    studentDetails: { type: studentSchema, default: null },
    formDetails: { type: formSchema, default: null },
    score: { type: Number, default: 0 },
    pushToken: { type: String, default: null }
});

const CombineDetails = mongoose.model("CombineData", combineSchema);
module.exports = CombineDetails;
