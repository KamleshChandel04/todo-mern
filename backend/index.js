const express = require("express");
const mongoose = require("mongoose");
const app = express();
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", todoRouters);
app.use("/", userRoutes);

//connect to Mogno DB
mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        app.listen(process.env.PORT, () => {
            console.log(`Sever Running On Port : ${process.env.PORT}`);
        })
    )
    .catch((err) => console.log(`Server Not Responding : ${err}`));
