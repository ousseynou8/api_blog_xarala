const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE USER
module.exports.updateUser = async(req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body
                }, { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else res.status(401).json("you can update only your account!");
};

//GET USER

module.exports.getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
};

//DELETE USER FROM
module.exports.deleteUser = async(req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);

            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(
                    req.params.id
                );
                res.status(200).json("User est bien supprimer...");
            } catch (error) {
                res.status(500).json(error);
            }
        } catch (error) {
            res.status(404).json("User not found!");
        }
    } else {
        res.status(401).json("you can delete only your account!");
    }
};
//GET ALL USERS
module.exports.getAllUsers = async(req, res) => {
    const users = await User.find().select("-password");
    res.status(200).json(users);
};