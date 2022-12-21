const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
}, {
    timestamps: true
})


const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin;