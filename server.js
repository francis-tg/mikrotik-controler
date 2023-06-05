const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/router", require("./routes/router"));
app.use("/router/interface", require("./routes/interface"));
app.use("/router/bridge", require("./routes/bridge"));
http.createServer(app).listen(8000, () => {
  console.log("server run on port 8000");
});
