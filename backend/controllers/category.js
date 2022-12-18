const Category = require("../models/category");

class Controller {
  static getCategories = async (req, res, next) => {
    try {
      const data = await Category.find();
      res.status(200).json(data);
    } catch (error) {}
  };

  static addCategory = async (req, res, next) => {
    try {
      const { name, color } = req.body;
      await Category.create({ name, color });
      res.status(201).json("Success");
    } catch (error) {}
  };

  static deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.body;
      await Category.findByIdAndDelete(id);
      res.status(200).json("Success");
    } catch (error) {}
  };
}

module.exports = Controller;
