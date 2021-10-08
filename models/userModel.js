const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    about: {
        type: String,
        default: "",
        maxlength: 300
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);