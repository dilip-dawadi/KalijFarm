import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
    Atitle: { type: String, required: true },
    Amessage: { type: String, required: true },
    AselectedFile: { type: String, required: true },
})

var aboutMessage = mongoose.model('AboutMessage', aboutSchema);

export default aboutMessage;