const express = require("express");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.png");
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload",
    upload.single("file"), (req, res) => {
        res.status(200).json("File has been uploaded")
    })

// routers
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts/", postRoute);
app.use("/api/category", categoryRoute);
app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
});