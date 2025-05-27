const Category = require("../Models/category");

var addCategory = async (req, res) => {
  var postData = req.body;
  if (postData.length > 1) {
    var data = await Category.bulkCreate(postData);
  } else {
    var data = await Category.create(postData);
  }

  res.status(200).json({ data: data });
};

var getCatogories = async (req, res) => {
  const data = await Category.findAll({});
  res.status(200).json(data);
};

var getCatogry = async (req, res) => {
  const data = await Category.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};
module.exports = {
  addCategory,
  getCatogories,
  getCatogry,
};
