const OrderItem = require("../Models/orderItems");

var addOrderItem = async (req, res) => {
  var postData = req.body;
  const data = await OrderItem.create(postData);
  res.status(200).json({ data: data });
};
var updateOrderItem = async (req, res) => {
  var postData = req.body;
  const data = await OrderItem.update(postData, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var deleteOrderItem = async (req, res) => {
  const data = await OrderItem.distroy({
    where: {
      OrderId: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var getOrderItems = async (req, res) => {
  const data = await OrderItem.findAll({});
  res.status(200).json({ data: data });
};

var getOrderItem = async (req, res) => {
  const data = await OrderItem.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};
module.exports = {
  addOrderItem,
  getOrderItem,
  getOrderItems,
  updateOrderItem,
  deleteOrderItem,
};
