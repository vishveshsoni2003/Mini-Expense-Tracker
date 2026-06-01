const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./config/db")

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get("/", (req,res) =>{
    res.send("Expense Tracker API running");
});
connectDB(process.env.MONGO_URI);
app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})