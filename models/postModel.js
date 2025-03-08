const mongoose = require("mongoose");

const constSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    header: {
       type: String,
    },
    details: {
        type: String,
    },
    imageLink: {
        type: String,
    }
    // name: {
    //     type: String,
    //     required: [true, "Please add the contact name"],
    // },
    // email: {
    //     type: String,
    //     required: [true, "Please add the contact email"],
    // },
    // phone: {
    //     type: String,
    //     required: [true, "Please add the contact phone"],
    // }
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact", constSchema);