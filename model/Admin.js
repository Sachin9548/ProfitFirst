const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    metaAccessToken: {
        type: String,
        required: true,
    },
    tokenCreatedAt: {
        type: Date,
        default: Date.now, // by default set current date/time
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
