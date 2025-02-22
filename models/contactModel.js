const mongoose = require("mongoose");

const constSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact", constSchema);