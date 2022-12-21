const mongoose = require('mongoose');


const tractorSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone_no:{
        type: Number,
        required: true
    },
    nametractor:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    tractor_count:{
        type: String,
        required: true
    },
    date_time:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
}, {
    timestamps: true
})


const Tractor = mongoose.model('Tractor', tractorSchema)

module.exports = Tractor;