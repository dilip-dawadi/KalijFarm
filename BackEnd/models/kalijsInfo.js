import mongoose from "mongoose";

const kalijSchema = mongoose.Schema({
    title: {
        type: String, required: true,
    },
    message: {
        type: String, required: true,
    },
    name: String,
    tags: [String],
    likes: { type: [String], default: [] },
    comments: {
        type: [String],
        default: [],
    },
    selectedFile: { type: String, required: true },
    price: {
        type: String, required: true,
    },
    createdAt: { type: Date, default: new Date() },
})

var KalijsInfo = mongoose.model('KalijsInfo', kalijSchema);

export default KalijsInfo;