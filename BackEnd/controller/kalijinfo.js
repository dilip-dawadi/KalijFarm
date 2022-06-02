import mongoose from "mongoose";
import kalijsInfo from "../models/kalijsInfo.js";
export const getKalsBySearch = async (req, res) => {
    const { searchKals, tags } = req.query;
    try {
        const title = new RegExp(searchKals, 'i');
        const KalSearch = await kalijsInfo.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });
        res.json({ data: KalSearch, 'success': true });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getKalijs = async (req, res) => {
    const { up } = req.query;
    try {
        const LIMIT = 4;
        const adminStartIndex = (Number(up) - 1) * LIMIT; // get the starting index of every page
        const adminTotal = await kalijsInfo.countDocuments({});
        const Kalijs = await kalijsInfo.find().sort({ _id: -1 }).limit(LIMIT).skip(adminStartIndex);
        res.json({ 'success': true, adminData: Kalijs, adminCurrentPage: Number(up), adminNumberOfPages: Math.ceil(adminTotal / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const getKal = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
        const total = await kalijsInfo.countDocuments({});
        const kal = await kalijsInfo.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        res.json({ data: kal, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const getKalij = async (req, res) => {
    const { id } = req.params;
    try {
        const kalijsInfos = await kalijsInfo.findById(id);
        res.status(200).json(kalijsInfos);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const createKalij = async (req, res) => {
    const { title, selectedFile, message, name, tags, price } = req.body;
    if (!title || !message || !tags || !price) {
        return res.status(409).json({ message: "Please fill in all fields " + Math.floor((Math.random() * 10) + 1) });
    }
    if (!selectedFile) {
        return res.status(422).json({ message: "Image is Required " + Math.floor((Math.random() * 10) + 1) });
    }
    if (title.length < 5) {
        return res.status(409).json({ message: "Title is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (message.length < 30) {
        return res.status(409).json({ message: "Message is to small atleast 30 character Required " + Math.floor((Math.random() * 10) + 1) });
    }
    if (price.length < 2) {
        return res.status(409).json({ message: "Price is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (tags.join(',').length < 5) {
        return res.status(409).json({ message: "Tags is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (title.length > 30 || message.length > 1500 || price.length > 7) {
        return res.status(409).json({ message: "Fields are too long " + Math.floor((Math.random() * 10) + 1) });
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(title)) {
        return res.status(409).json({ message: "Titles must be letters and numbers " + Math.floor((Math.random() * 10) + 1) });
    }
    const newKalij = new kalijsInfo({ title, message, name, tags, price, selectedFile, createdAt: new Date().toISOString() });
    try {
        await newKalij.save();
        res.json({ data: newKalij, message: "Product Created Successfully " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateKalij = async (req, res) => {
    const { id } = req.params;
    const { title, selectedFile, message, name, tags, price } = req.body;
    if (!title || !message || !tags || !price) {
        return res.status(409).json({ message: "Please fill in all fields " + Math.floor((Math.random() * 10) + 1) });
    }
    if (!selectedFile) {
        return res.status(422).json({ message: "Image is Required " + Math.floor((Math.random() * 10) + 1) });
    }
    if (title.length < 5) {
        return res.status(409).json({ message: "Title is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (message.length < 30) {
        return res.status(409).json({ message: "Message is to small atleast 30 character Required " + Math.floor((Math.random() * 10) + 1) });
    }
    if (price.length < 2) {
        return res.status(409).json({ message: "Price is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (tags.join(',').length < 5) {
        return res.status(409).json({ message: "Tags is to small " + Math.floor((Math.random() * 10) + 1) });
    }
    if (title.length > 30 || message.length > 1500 || price.length > 7) {
        return res.status(409).json({ message: "Fields are too long " + Math.floor((Math.random() * 10) + 1) });
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(title)) {
        return res.status(409).json({ message: "Titles must be letters and numbers " + Math.floor((Math.random() * 10) + 1) });
    }
    // const selectedFile = (req.file) ? req.file.path : '';
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Kalij with id: ${id}`);

    const updatedKalij = { title, name, message, tags, selectedFile, _id: id, price };
    try {
        await kalijsInfo.findByIdAndUpdate(id, updatedKalij, { new: true });
        res.json({ data: updatedKalij, message: "Product Updated Successfully " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.json({ message: error });
    }

}

export const deleteKalij = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await kalijsInfo.findByIdAndRemove(id);
    res.json({ message: 'Delete ' + Math.floor((Math.random() * 10) + 1) })
}

export const likeFood = async (req, res) => {
    const { id } = req.params;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const UserLike = await kalijsInfo.findById(id);
    if (!UserLike) return res.status(404).send(`No post with id: ${id}`);
    const index = UserLike.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        UserLike?.likes?.push(req.userId);
        const updatedUserLike = await kalijsInfo.findByIdAndUpdate(id, UserLike, { new: true });
        res.status(200).json({ foodLike: updatedUserLike, message: "Like Successfully " + Math.floor((Math.random() * 10) + 1) });
    } else {
        UserLike.likes = UserLike.likes.filter((id) => id !== String(req.userId));
        const updatedUserLike = await kalijsInfo.findByIdAndUpdate(id, UserLike, { new: true });
        res.status(200).json({ foodLike: updatedUserLike, message: "UnLike Successfully " + Math.floor((Math.random() * 10) + 1) });
    }
}

export const commentFood = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;
    const food = await kalijsInfo.findById(id);
    food.comments.push(value);

    const updatedCommentFood = await kalijsInfo.findByIdAndUpdate(id, food, { new: true });

    res.json({ updatedCommentFood, message: "Comment Successfully " + Math.floor((Math.random() * 10) + 1) });
};