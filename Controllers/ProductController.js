const Product = require("../Models/product");

var addProduct = async (req, res) => {
  try {
    var postData = req.body;
    if (postData.length > 1) {
      var data = await Product.bulkCreate(postData);
    } else {
      var data = await Product.create(postData);
    }

    res.status(200).json({ data: data });
  } catch (error) {
    console.error("🔥 Sequelize Error:", error);
    if (error.original) {
      console.error("🧨 SQL Message:", error.original.sqlMessage); // MySQL-specific
      console.error("🧠 SQL:", error.original.sql); // The SQL query attempted
    }
    res.status(500).json({ message: "Insert failed", error: error.message });
  }
};
var updateProduct = async (req, res) => {
  var postData = req.body;
  const data = await Product.update(postData, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var deleteProduct = async (req, res) => {
  const data = await Product.distroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var getProducts = async (req, res) => {
  const data = await Product.findAll({});
  res.status(200).json(data);
};

var getProduct = async (req, res) => {
  const data = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(data);
};

var getProductForSameCategory = async (req, res) => {
  const data = await Product.findAll({
    where: {
      CategoryId: req.params.id,
    },
  });
  res.status(200).json(data);
};
module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductForSameCategory,
};
