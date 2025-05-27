const { DataTypes } = require("sequelize");
const sequelize = require("./connection");
const Category = require("./category");

const Product = sequelize.define("Product", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  image: { type: DataTypes.STRING },
  CategoryId: { type: DataTypes.INTEGER, defaultValue: 0 }, // FK to Category
});

// Fix the associations
//Product.belongsTo(Category, { foreignKey: 'CategoryId' });
//Category.hasMany(Product, { foreignKey: 'CategoryId' });

module.exports = Product;
