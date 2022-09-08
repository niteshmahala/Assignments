const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name: { type: string },
    phone: { type: Number },
    age: { type: Number },
    gender:{type: string, emum:['M','F']}
},
{timestamps:true})
module.exports = mongoose.model('User', userSchema);