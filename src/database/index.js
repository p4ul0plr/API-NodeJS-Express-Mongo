const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/noderest", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb://deploy:deploy@cluster0-shard-00-00-ndyqi.gcp.mongodb.net:27017,cluster0-shard-00-01-ndyqi.gcp.mongodb.net:27017,cluster0-shard-00-02-ndyqi.gcp.mongodb.net:27017/noderest?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;