require("dotenv").config();
require("./config/db.connection.js");

// imports
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// require routes
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const likedRouter = require("./routes/liked.js")
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routers
app.use("/auth", authRouter);
app.use("/user", userRouter);


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
