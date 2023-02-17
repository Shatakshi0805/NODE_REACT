const mongoose = require("mongoose");
const app = require("./serverApp");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

//DATABASE CONNECT
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("DB connection successful");
})

//SERVER CONNECT
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
});