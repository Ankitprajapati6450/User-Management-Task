require("dotenv").config();
const express = require('express');
const connectToDB =  require("./src/config/db");
const userRoutes = require("./src/routes/userroutes");
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

connectToDB()

app.use("/api/users", userRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})