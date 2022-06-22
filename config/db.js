const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" +
        process.env.DB_USER_PASS +
        "@cluster0.zhdhw.mongodb.net/blog-xarala", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("Connected to mongodb"))
    .catch((err) => console.log("Failed to connect to mongoDB", err));