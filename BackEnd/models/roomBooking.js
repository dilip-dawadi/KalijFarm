import mongoose from "mongoose";

const roomBooking = mongoose.Schema({
    title: {
        type: String, required: true,
    },
    message: {
        type: String, required: true,
    },
    name: String,
    tags: [String],
    selectedFile: { type: String, required: true },
    price: {
        type: String, required: true,
    },
    likes: { type: [String], default: [] },
    booked: { type: String },
    createdAt: { type: Date, default: new Date() },
})

var roomBook = mongoose.model('roomBook', roomBooking);

export default roomBook;