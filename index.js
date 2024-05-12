const express = require("express");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz-lts");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { store_id, store_passwd } = process.env;
const is_live = false; //true for live, false for sandbox

app.get("/init", (req, res) => {
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123", // use unique tran_id for each api call
    success_url: "http://localhost:5000/success",
    fail_url: "http://localhost:5000/fail",
    cancel_url: "http://localhost:5000/cancel",
    ipn_url: "http://localhost:5000/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((response) => {
    // Redirect the user to payment gateway
    const GatewayPageURL = response.GatewayPageURL;
    res.send(GatewayPageURL);
  });
});

app.listen(port, () => {
  console.log("App listening on port:", port);
});

app.get("/", (req, res) => {
  res.send("Server is active.");
});
