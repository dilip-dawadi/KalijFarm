import galleryModel from "../models/galleryModel.js";
import mongoose from "mongoose";
export const getGallerys = async (req, res) => {
    try {
        const gallerys = await galleryModel.find();
        res.status(200).json(gallerys);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const createaGallery = async (req, res) => {

    const { title, selectedFile } = req.body;
    const newGallery = new galleryModel({ title, selectedFile });
    try {
        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        res.status(409).json(error);
    }
}
export const deleteaGallery = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await galleryModel.findByIdAndRemove(id);
    res.json({ message: 'Delete' })
}
export const updateaGallery = async (req, res) => {
    const { id } = req.params;
    const { title, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No About with id: ${id}`);

    const updateGallery = { title, selectedFile, _id: id };

    await galleryModel.findByIdAndUpdate(id, updateGallery, { new: true });

    res.json(updateGallery);
}