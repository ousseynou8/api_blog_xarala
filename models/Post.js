const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique: true
    },
    resume: { type: String, required: true },
    contenu: { type: String, required: false },
    photos: { type: String, required: false },
    username: { type: String, required: true },
    category: { type: Array, required: false }
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);