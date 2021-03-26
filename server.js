"use strict";

// require express and bodyParser
const express = require("express");

// Import DB Connection
require("./config/db");

// create express app
const app = express();
const bodyParser = require("body-parser");

// define port to run express app
const port = process.env.PORT || 3000;

// Add endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen to server
module.exports = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// 注意: JWT 認證程式碼要在處理請求資料之前
// import jsonwebtoken
const jwt = require("jsonwebtoken");

// Token Verification
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "RESTfulAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});


// 注意: Parser 要再load route之前，否則無法解析data的內容，取不到參數值造成error
// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import API route
//var routes = require("./api/routes/userRoutes"); //importing route
var routes = require("./api/routes/todoRoutes"); // Testing : importing route
routes(app);


