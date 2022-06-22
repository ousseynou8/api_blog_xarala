const Category = require("../models/Category");

//CREATE CATEGORY
module.exports.createCategory = async(req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
};

//GET  ALL CATEGORY
module.exports.getAllCategory = async(req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json(error);
    }
};


//GET CATEGORY
module.exports.getCategory = async(req, res) => {
    try {
        const cats = await Category.findById(req.params.id);
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json(error);
    }
};