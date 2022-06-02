import aboutModule from "../models/about.js";
import mongoose from "mongoose";
export const getAbouts = async (req, res) => {
    try {
        const abouts = await aboutModule.find();
        res.status(200).json(abouts);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const createAbout = async (req, res) => {

    const { Atitle, Amessage, AselectedFile } = req.body;
    const newAbout = new aboutModule({ Atitle, Amessage, AselectedFile });
    try {
        await newAbout.save();
        res.status(201).json(newAbout);
    } catch (error) {
        res.status(409).json(error);
    }
}
export const deleteAbout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await aboutModule.findByIdAndRemove(id);
    res.json({ message: 'Delete' })
}
export const updateAbout = async (req, res) => {
    const { id } = req.params;
    const { Atitle, Amessage, AselectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No About with id: ${id}`);

    const updatedAbout = { Atitle, Amessage, AselectedFile, _id: id };

    await aboutModule.findByIdAndUpdate(id, updatedAbout, { new: true });

    res.json(updatedAbout);
}