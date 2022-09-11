require("dotenv").config({ path: "./config/.env" });
const cors=require("cors")
const port = process.env.PORT || 7000;
const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const userRoute=require("./Routes/userRoute");


app.listen(port, (e) => {
  e
    ? console.log("server failed")
    : console.log(`server is running on port ${port}`);
});
connectDb();
app.use(cors())
//midelware global 
app.use(express.json())
app.use('/api',userRoute)

