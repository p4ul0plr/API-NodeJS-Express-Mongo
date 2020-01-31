const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* app.get('/', (req, res) => {
     res.send("Ok");
}); */

require("./app/controllers/index")(app);

app.listen(process.env.PORT || 3000);
