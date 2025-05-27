const express = require("express");
const app = express();
var bodyparse = require("body-parser");
const Category = require("./Models/category");
const User = require("./Models/user");
const Product = require("./Models/product");
const Order = require("./Models/order");
const OrderItem = require("./Models/orderItems");
const sequelize = require("./Models/connection");
const cors = require("cors");
require("./Models/connection");



var categoryRoute = require("./Controllers/CategoryController");
var productRoute = require("./Controllers/ProductController");
var orderRoute = require("./Controllers/OrderController");
var orderItemRoute = require("./Controllers/OrderItemController");

app.use(bodyparse.json());
app.use(cors());



app.get("/", function (req, res) {
  res.send("E Commerce API");
});

//-----Catgory
app.post("/addCategory", categoryRoute.addCategory);
app.get("/getCatogories", categoryRoute.getCatogories);
app.get("/getCatogry/:id", categoryRoute.getCatogry);

//---Product

app.post("/addProduct", productRoute.addProduct);
app.patch("/updateProduct/:id", productRoute.updateProduct);
app.get("/Product/:id", productRoute.getProduct);
app.get("/deleteProduct/:id", productRoute.deleteProduct);
app.get("/products", productRoute.getProducts);
app.get("/products/category/:id", productRoute.getProductForSameCategory);

//---Order

app.post("/addOrder", orderRoute.addOrder);
app.patch("/updateOrder/:id", orderRoute.updateOrder);
app.get("/getOrder/:id", orderRoute.getOrder);
app.get("/deleteOrder/:id", orderRoute.deleteOrder);
app.get("/getOrders", orderRoute.getOrders);
app.post("/placeOrder", orderRoute.placeOrder);

//---orderItemRoute

app.post("/addOrderItem", orderItemRoute.addOrderItem);
app.patch("/updateOrderItem/:id", orderItemRoute.updateOrderItem);
app.get("/getOrderItem/:id", orderItemRoute.getOrderItem);
app.get("/deleteOrderItem/:id", orderItemRoute.deleteOrderItem);
app.get("/getOrderItems", orderItemRoute.getOrderItems);

// User.sync({alter:true})
// Category.sync({alter:true})
// Product.sync({alter:true})
// Order.sync({alter:true})
// OrderItem.sync({alter:true})

sequelize.sync({ alter: true });

app.listen(3000, () => {
  console.log("App Will run on localhost:3000");
});
