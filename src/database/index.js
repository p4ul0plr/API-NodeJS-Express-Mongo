require("dotenv").config();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/noderest", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;