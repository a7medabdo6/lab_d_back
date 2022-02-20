const express = require("express");
require("./models");
const cookieParser = require("cookie-parser");
const app = express();
var bodyParser = require("body-parser");

const { Upload } = require("./middleware/upload");
var cors = require("cors");
//Connect Database
//Init Middleware
app.use(express.json());
var whitelist = [
  "http://localhost:3000",
  "https://speedlab-resaults.com",
  "https://qr.speedlab-resaults.com",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static("public"));

app.use("/public/images", express.static(__dirname + "/public/images"));

app.get("/test", (req, res) => {
  res.send("test image uploaded ");
});
app.post("/upload", Upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("single image uploaded ");
});
app.use(cookieParser());
app.use("/users", require("./routes/api/users"));
app.use("/login", require("./routes/api/auth"));

app.use("/profile", require("./routes/api/profile"));
app.use("/visit", require("./routes/api/visit"));
app.use("/contact", require("./routes/api/contactus"));
app.use("/customer", require("./routes/api/customer"));
app.use("/", require("./routes/api/getallusers"));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server started on ports ${PORT} `);
});
