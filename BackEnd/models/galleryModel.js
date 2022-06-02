import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    title: {
        type: String, required: true,
    },
    selectedFile: { type: String, required: true },
})

var galleryMod = mongoose.model('galleryMod', gallerySchema);

export default galleryMod;