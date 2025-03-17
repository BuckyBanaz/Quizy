const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    fullname: { type: String },
    phoneNumber: { type: String },
    dob: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    referralCode: { type: String, unique: true },
    referredBy: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "CombineData" },
        fullname: String,
    }
});

const formSchema = new mongoose.Schema({
    fullname: { type: String },
    phoneNumber: { type: String },
    dob: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    referralCode: { type: String, unique: true },
    referredBy: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "CombineData" },
        fullname: String,
    }
});

const combineSchema = new mongoose.Schema({
    studentDetails: { type: studentSchema, default: null },
    formDetails: { type: formSchema, default: null },
    score: { type: Number, default: 0 }
});

const CombineDetails = mongoose.model("CombineData", combineSchema);
module.exports = CombineDetails;
