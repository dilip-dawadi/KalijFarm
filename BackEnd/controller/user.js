import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import User from '../models/user.js';
import Verify from '../models/verifyUser.js';
import crypto from 'crypto';
import { sendEmail, paymentEmail, paymentEmailToAdmin } from '../utils/sendEmail.js';
import schedule from 'node-schedule';

export const deleteUsers = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await User.findByIdAndRemove(id);
    res.json({ msg: 'Users Deleted' })
}
export const getUsers = async (req, res) => {
    const { Users } = req.query;
    try {
        const LIMIT = 10;
        const StartIndex = (Number(Users) - 1) * LIMIT; // get the starting index of every page
        const Total = await User.countDocuments({});
        const userList = await User.find().sort({ _id: -1 }).limit(LIMIT).skip(StartIndex);
        res.json({ Users: userList, CurrentPage: Number(Users), NumberOfPages: Math.ceil(Total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
export const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { email, password, firstName, number, lastName, role, selectedFile } = req.body;
    const { error } = validator(req.body);
    if (error) return res.status(404).json({ message: error.details[0].message });
    if (password !== confirmPassword) return res.status(404).json({ message: 'Password dont match' })
    const hashPassword = await bcrypt.hash(password, 12)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Kalij with id: ${id}`);

    const updatedUser = { email, password: hashPassword, name: `${firstName} ${lastName}`, role, selectedFile, number };
    try {
        await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.json({ updatedUser, msg: 'User Updated' });
    } catch (error) {
        res.json({ message: error });
    }

}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // finding exisiting old user
        const existingUser = await User.findOne({ email });

        if (!existingUser)
            return res.status(404).json({ message: 'User not found ' + Math.floor((Math.random() * 10) + 1) });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(404).json({ message: 'Password Incorrect ' + Math.floor((Math.random() * 10) + 1) });
        // if verifiedUser is false
        if (!existingUser.verifiedUser) {
            let token = await Verify.findOne({ userId: existingUser._id });
            if (!token) {
                token = await new Verify({
                    userId: existingUser._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `${process.env.BASE_URL}users/${existingUser._id}/verify/${token.token}`;
                await sendEmail(existingUser.email, "Verify Email", url);
            }
            return res
                .status(400)
                .send({ message: "An Email sent to your account please verify " + Math.floor((Math.random() * 10) + 1) });
        }
        // if the user is already in database and password is correct then got that user jwt data and sent to frontend
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT, { expiresIn: '1d' });
        // sending result to the frontend
        res.status(200).json({ result: existingUser, token, msg: "Signin Successful" });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const signup = async (req, res) => {
    // adding user to the database
    const { email, password, firstName, number, lastName, role, selectedFile, confirmPassword } = req.body;
    try {
        let existingUser = await User.findOne({ email });
        // if user is already exist
        if (existingUser) return res.status(404).json({ message: 'User already exist ' + Math.floor((Math.random() * 10) + 1) });
        if (firstName.length < 3 || firstName.length > 10) return res.status(404).json({ message: 'Firstname must be between 3 and 10 characters ' + Math.floor((Math.random() * 10) + 1) });
        if (lastName.length < 3 || lastName.length > 10) return res.status(404).json({ message: 'Lastname must be between 3 and 10 characters ' + Math.floor((Math.random() * 10) + 1) });
        // must be between 8 to 10 characters and a number and a special character
        if (password.length < 8 || password.length > 15 || !password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/)) return res.status(404).json({ message: 'Password must be between 8 to 15 char with a number and a special char' + Math.floor((Math.random() * 10) + 1) });
        // if password dont match
        if (password !== confirmPassword) return res.status(404).json({ message: 'Password dont match ' + Math.floor((Math.random() * 10) + 1) })

        // hashing the password
        const hashPassword = await bcrypt.hash(password, 12)
        // creating the user
        const result = await User.create({ email, password: hashPassword, number, name: `${firstName} ${lastName}`, role, selectedFile, number });

        // if the user is create in database then got that user jwt and sent to frontend
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT, { expiresIn: '1d' });
        // sending data to the email
        const Verified = await new Verify({
            userId: result._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${result._id}/verify/${Verified.token}`;
        await sendEmail(result.email, "Verify Email", url);
        // sending result to the frontend
        res.status(200).json({ result, token, message: "An Email sent to your account please verify " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
};

export const getVerified = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link" });
        const Verified = await Verify.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!Verified) return res.status(400).send({ message: "Invalid link" });

        await User.updateOne({ _id: user._id }, { verifiedUser: true });
        await Verified.remove();

        res.status(200).send({ message: "Email verified" });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

export const getMessage = async (req, res) => {
    const { email, bill, author } = req.body;
    try {
        const dilip = await User.findOne({ email: author });
        const user = await User.findOne({ email });
        if (!user) return res.status(409).send({ message: "Invalid Crediantal " + Math.floor((Math.random() * 10) + 1) });
        if (dilip?.author === false) return res.status(409).send({ message: "You are not Author " + Math.floor((Math.random() * 10) + 1) });
        await User.updateOne({ _id: user._id }, { bill: bill });
        {
            (dilip.author === true) && schedule.scheduleJob('0 0 0 1 */1 *', async () => {

                await User.updateOne({ _id: user._id }, { bill: false });
                await paymentEmail(process.env.USER, "Payment alert", `Dilip, ${user.email} account will be expires within a days`);
                await paymentEmailToAdmin(user.email, "Payment alert", user.name);

            });
        }
        res.json({ message: "Updated Success " + Math.floor((Math.random() * 10) + 1) });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}