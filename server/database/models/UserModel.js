import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    nickname: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    resetPassLink: {type: String, default: ''},
    role: [{type: String, ref: 'role'}]
})

export default mongoose.model('User', UserSchema)