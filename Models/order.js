const { DataTypes } = require("sequelize");
const sequelize = require("./connection");
const User = require("./user");

const Order = sequelize.define("Order", {
  totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "pending" },
  userId: { type: DataTypes.INTEGER, defaultValue: 0 }, // FK to Category
});

// Order.belongsTo(User, { foreignKey: 'id' });
//User.hasMany(Order);

module.exports = Order;
