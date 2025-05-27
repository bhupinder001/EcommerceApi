const Order = require("../Models/order");
const OrderItem = require("../Models/orderItems");
const User = require("../Models/user");

var addOrder = async (req, res) => {
  var postData = req.body;
  const data = await Order.create(postData);
  res.status(200).json({ data: data });
};
var updateOrder = async (req, res) => {
  var postData = req.body;
  const data = await Order.update(postData, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var deleteOrder = async (req, res) => {
  const data = await Order.distroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var getOrders = async (req, res) => {
  const data = await Order.findAll({});
  res.status(200).json({ data: data });
};

var getOrder = async (req, res) => {
  const data = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var placeOrder = async (req, res) => {
  const { user, cart } = req.body;

  const userBuild = User.build({
    name: user.firstName + " " + user.lastName,
    email: user.email,
    password: "Password@123",
    address: user.address,
  });

  const userResponse = await userBuild.save();
  let subtotal = 0;
  cart.map((item) => {
    subtotal += item.price * item.qty;
  });

  const orderBuild = Order.build({
    totalAmount: subtotal,
    status: "Order Place",
    userId: userResponse.id,
  });

  const orderResponse = await orderBuild.save();

  cart.map((item) => {
    const orderItemBuild = OrderItem.build({
      quantity: item.qty,
      price: item.price,
      productId: item.id,
      orderId: orderResponse.id,
    });

    const orderItemResponse = orderItemBuild.save();
  });

  // Save to database or send to payment processor
  console.log("Received order:", user, cart);

  res.json({ success: true, message: "Order received" });
};
module.exports = {
  addOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  placeOrder,
};
