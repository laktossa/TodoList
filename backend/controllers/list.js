const Category = require("../models/category");
const List = require("../models/list");

class Controller {
  static getList = async (req, res, next) => {
    try {
      const data = await List.find();
      res.status(200).json(data);
    } catch (error) {}
  };

  static addList = async (req, res, next) => {
    try {
      const { task, category } = req.body;
      let data = await Category.find({ name: category });
      List.create({
        task,
        category: data,
        status: false,
      });
      res.status(200).json("Success");
    } catch (error) {}
  };

  static deleteList = async (req, res, next) => {
    try {
      const { id } = req.body;
      await List.findByIdAndDelete(id);
      res.status(200).json("Success");
    } catch (error) {}
  };

  static changeStatus = async (req, res, next) => {
    try {
      const { id, status } = req.body;
      let newStatus = status ? false : true;
      await List.updateOne(
        { id: id },
        { $set: { status: newStatus } },
        (err, dic) => {
          if (err) {
            return err;
          }
          res.status(201).json("Success");
        }
      );
    } catch (error) {}
  };
}
module.exports = Controller;
