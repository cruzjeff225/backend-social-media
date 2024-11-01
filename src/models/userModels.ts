import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname:{
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)