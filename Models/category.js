const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Category = sequelize.define(
  "Category",
  {
    // Model attributes are defined here
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Category;
