const mongoose = require("mongoose");

// Define the form schema
const formSchema = new mongoose.Schema({
    fullname: { type: String, },
    address: { type: String, },
    email: { type: String,  },
    city: { type: String,  },
    state: { type: String,},
    pincode: { type: String, },
    role  : { type:String ,   enum:["student" , "other"]  } ,
    phoneNumber: { type: String},
    dob: { type: String  },
    referralCode: { type: String},
    referredBy: {
        userId: mongoose.Schema.Types.ObjectId,
        fullname: String,
    },
    _id:false
});
// Define the student schema
const studentSchema = new mongoose.Schema({
    selectEducation: { type: String, },
    fullname: { type: String,  },
    address: { type: String, },
    phoneNumber: { type: Number ,},
    schoolName: { type: String, },
    schoolAddress: { type: String,},
    role: { type: String, },
    boardOption: { type: String,},
    classvalue: { type: String, },
    mediumName: { type: String, },
    aadharcard: { type: String,  },
    referralCode: { type: String, },
    referredBy: {
        userId: mongoose.Schema.Types.ObjectId,
        fullname: String,
    },
});

const combineSchema = new mongoose.Schema({
    studentDetails: { type: studentSchema , required : false },
    formDetails: { type: formSchema, required: false  },
    score: { type: Number, default: 0 },
});

// Export the combined model
module.exports = mongoose.model("CombineData", combineSchema);
