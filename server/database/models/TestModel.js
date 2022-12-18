import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: {type: String},
}, {timestamps: true})

export default mongoose.model('Test', TestSchema)