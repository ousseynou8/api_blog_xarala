const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// GET ALL POST
module.exports.getAllPost = async(req, res) => {
    const post = await Post.find().limit(2);
    res.status(200).json(post);
};
module.exports.getPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }

};
//CREATE POST
module.exports.createPost = async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save(newPost);
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
};

// UPDATE POST

module.exports.putPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id, { $set: req.body }, { new: true }
                );
                res.status(200).json(updatePost);
            } catch (error) { res.status(500).json(error); }
        } else {
            res.status(401).json("You can  update only our post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};



//DELETE POST 

module.exports.deletePost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Post has been delete");
            } catch (error) { res.status(500).json(error); }
        } else {
            res.status(401).json("You can  delete only our post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};