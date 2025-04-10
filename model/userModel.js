const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    step: {
        type: Number,
        default: 1,
    },
    onboarding:{
        step1: {
            fullName: {
                type: String,
                default: "",
            },
            email: {
                type: String,
                default: "",
            },
            phone: {
                type: String,
                default: "",
            },
            whatsapp: {
                type: String,
                default: "",
            },
            industry: {
                type: String,
                default: "",
            },
            referral: {
                type: String,
                default: null,
            },
        },
        step2: {
            storeUrl: {
                type: String,
                default: "",
            },
            apiKey: {
                type: String,
                default: "",
            },
            apiSecret: {
                type: String,
                default: "",
            },
            accessToken: {
                type: String,
                default: "",
            },
            platform: {
                type: String,
                default: "Shopify",
            },
        },
        step3: {
            adAccountId: {
                type: String,
                default: "",
            },
            AdaccessToken: {
                type: String,
                default: "",

            },
            platform: {
                type: String,
                default: "Meta",
            },
        },

    },
    }, { timestamps: true });
const User = mongoose.model('User', UserSchema);
module.exports = User;

