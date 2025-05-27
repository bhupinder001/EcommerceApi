const { DataTypes } = require("sequelize");
const sequelize = require("./connection");
const Product = require("./product");
const Order = require("./order");

const OrderItem = sequelize.define("OrderItem", {
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  productId: { type: DataTypes.INTEGER, defaultValue: 0 },
  orderId: { type: DataTypes.INTEGER, defaultValue: 0 },
});

//Order.belongsToMany(Product, { through: OrderItem });
//Product.belongsToMany(Order, { through: OrderItem });

module.exports = OrderItem;
