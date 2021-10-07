const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },    
    age: { type: String },    
    email: { type: String },    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);