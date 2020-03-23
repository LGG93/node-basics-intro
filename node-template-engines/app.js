// Import necessary packages and set up global variables
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Routes import
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Use routes
app.use("/", homeRouter);
app.use("/contact", contactRouter);

// Start Server
app.listen(port, () => console.log(`We're live on port: ${port}`));
