const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // should be hashed
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
  address: {
    type: DataTypes.TEXT,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
