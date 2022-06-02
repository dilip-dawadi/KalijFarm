import mongoose from "mongoose";
import roomBook from "../models/roomBooking.js";
import User from '../models/user.js';
import { paymentSuccessByUser, RoomUnbookedOfUser } from '../utils/sendEmail.js';
export const getroomBySearch = async (req, res) => {
    const { book, pe, ps, tags } = req.query;
    try {
        if (!pe && !ps && !book && !tags) {
            const roomSearch = await roomBook.find();
            return res.json({ roomData: roomSearch, message: 'All Room' });
        }
        else if (!book && !tags) {
            const roomSearch = await roomBook.find({
                price: { $gte: ps, $lte: pe }
            });
            res.json({ roomData: roomSearch, message: 'Rooms with price only' });
        } else if (!pe && !ps && !tags) {
            const roomSearch = await roomBook.find({
                booked: { $eq: book }
            });
            return res.json({ roomData: roomSearch, message: 'Rooms with Avaliable or unAvaliable status Only' });
        } else if (!pe && !ps && !book) {
            const roomSearch = await roomBook.find({ tags: { $in: tags.split(',') } });
            return res.json({ roomData: roomSearch, message: 'Rooms with Other Features Only' });
        }
        else if (!tags) {
            const roomSearch = await roomBook.find({
                price: { $gte: ps, $lte: pe },
                booked: { $eq: book }
            });
            return res.json({ roomData: roomSearch, message: 'Rooms with price, Avaliable or unAvaliable status' });
        }
        else if (!book) {
            const roomSearch = await roomBook.find({
                price: { $gte: ps, $lte: pe },
                tags: { $in: tags.split(',') },
            });
            return res.json({ roomData: roomSearch, message: 'Rooms with price and Other Features' });
        }
        else if (!pe || !ps) {
            const roomSearch = await roomBook.find({
                booked: { $eq: book },
                tags: { $in: tags.split(',') },
            });
            return res.json({ roomData: roomSearch, message: 'Rooms with Avaliable or unAvaliable status and Other Features' });
        }
        else {
            const roomSearch = await roomBook.find({
                tags: { $in: tags.split(',') },
                price: { $gte: ps, $lte: pe },
                booked: { $eq: book }
            });
            return res.json({ roomData: roomSearch, message: 'Rooms with price, Other Features and Avaliable or unAvaliable status' });
        }

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getRooms = async (req, res) => {
    const { rp } = req.query;
    try {
        const LIMIT = 6;
        const startIndex = (Number(rp) - 1) * LIMIT; // get the starting index of every page
        const total = await roomBook.countDocuments({});
        const allRoom = await roomBook.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        res.json({ Roomdata: allRoom, currentPage: Number(rp), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const getaRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const aRoomGet = await roomBook.findById(id);
        res.status(200).json(aRoomGet);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const createaRoom = async (req, res) => {
    const { title, selectedFile, message, name, tags, price, booked } = req.body;
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
    const newRoom = new roomBook({ title, message, name: req.userId, tags, price, selectedFile, booked, createdAt: new Date().toISOString() });
    try {
        await newRoom.save();
        res.json({ data: newRoom, message: "Room Created Successfully " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateaRoom = async (req, res) => {
    const { id } = req.params;
    const { title, selectedFile, message, name, tags, price, booked } = req.body;
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
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Room with id: ${id}`);

    const roomUpdated = { title, name, message, tags, selectedFile, _id: id, price, booked };
    try {
        await roomBook.findByIdAndUpdate(id, roomUpdated, { new: true });
        res.json({ data: roomUpdated, message: "Room Updated Successfully " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.json({ message: error });
    }

}

export const deleteaRoom = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await roomBook.findByIdAndRemove(id);
    res.json({ message: 'Delete ' + Math.floor((Math.random() * 10) + 1) })
}

export const getRoomBooked = async (req, res) => {
    const { booked, id, userEmail, sender } = req.body;
    try {
        const CheckisAdmin = await User.findOne({ email: sender });
        const checkUser = await User.findOne({ email: userEmail });
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: `No Room with id: ${id} ` + Math.floor((Math.random() * 10) + 1) });
        }
        const yeslaiBookVayoVandya = await roomBook.findOne({ _id: id });
        if (checkUser === null) return res.status(409).json({ message: "User Not Found " + Math.floor((Math.random() * 10) + 1) });
        if (yeslaiBookVayoVandya.booked === booked) return res.status(409).json({ message: `Room is already ${booked} ` + Math.floor((Math.random() * 10) + 1) });
        if (CheckisAdmin.role === 1) {
            await roomBook.updateOne({ _id: yeslaiBookVayoVandya._id }, { booked: booked });
            if (booked === 'true') {
                await paymentSuccessByUser(process.env.USER, "Your Room Booked", `${checkUser.name} your room is ${yeslaiBookVayoVandya.title}`);
                res.json({ message: "Room Booked " + Math.floor((Math.random() * 10) + 1) });
            } else {
                await RoomUnbookedOfUser(process.env.USER, "Your Room UnBooked", checkUser.name);
                res.json({ message: "Room UnBooked " + Math.floor((Math.random() * 10) + 1) });
            }

        } else {
            res.json({ message: "You are not Admin " + Math.floor((Math.random() * 10) + 1) });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const likeRoom = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const UserLike = await roomBook.findById(id);

    const index = UserLike.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        UserLike.likes.push(req.userId);
        const updatedUserLike = await roomBook.findByIdAndUpdate(id, UserLike, { new: true });
        res.status(200).json({ roomLike: updatedUserLike, message: "Like Successfully " + Math.floor((Math.random() * 10) + 1) });
    } else {
        UserLike.likes = UserLike.likes.filter((id) => id !== String(req.userId));
        const updatedUserLike = await roomBook.findByIdAndUpdate(id, UserLike, { new: true });
        res.status(200).json({ roomLike: updatedUserLike, message: "UnLike Successfully " + Math.floor((Math.random() * 10) + 1) });
    }
}