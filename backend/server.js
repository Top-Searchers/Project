require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;
const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}
);

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
}
);
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));






